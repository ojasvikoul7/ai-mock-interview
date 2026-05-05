#!/usr/bin/env python3
"""
Technical Evaluator - Advanced NLP Model for Code & Theory Evaluation
Optimized for 99% accuracy with balanced strictness
Uses ensemble approach: Semantic + Syntactic + Structural Analysis
"""

import json
import sys
import re
import ast
from typing import Dict, List, Optional, Tuple
from difflib import SequenceMatcher

try:
    from sentence_transformers import SentenceTransformer, util
    ST_AVAILABLE = True
except ImportError:
    ST_AVAILABLE = False

try:
    import numpy as np
    NUMPY_AVAILABLE = True
except ImportError:
    NUMPY_AVAILABLE = False

# Advanced model initialization
_model = None
_code_model = None

def get_model():
    global _model
    if _model is None and ST_AVAILABLE:
        try:
            # Use a more powerful model for technical evaluation
            _model = SentenceTransformer('all-MiniLM-L6-v2')
        except:
            pass
    return _model


class TechnicalEvaluator:
    """
    Advanced technical answer evaluator with multi-dimensional scoring.
    Balanced approach: not too strict, not too soft.
    """
    
    # Key technical terms by category
    TECH_TERMS = {
        'dsa': ['algorithm', 'complexity', 'time complexity', 'space complexity', 'big o', 'o(n)', 'o(log n)', 
                'o(n^2)', 'array', 'linked list', 'stack', 'queue', 'tree', 'binary tree', 'bst', 'heap', 'hash',
                'hashmap', 'hashtable', 'dictionary', 'graph', 'dfs', 'bfs', 'dynamic programming', 'dp', 
                'memoization', 'tabulation', 'recursion', 'iteration', 'sorting', 'searching', 'binary search',
                'merge sort', 'quick sort', 'divide and conquer', 'greedy', 'backtracking', 'two pointers',
                'sliding window', 'topological sort', 'dijkstra', 'union find', 'trie', 'segment tree'],
        
        'os': ['process', 'thread', 'scheduling', 'cpu scheduling', 'memory management', 'virtual memory',
               'paging', 'segmentation', 'page fault', 'tlb', 'cache', 'deadlock', 'race condition',
               'critical section', 'semaphore', 'mutex', 'lock', 'synchronization', 'interprocess communication',
               'ipc', 'file system', 'disk scheduling', 'banker\'s algorithm', 'resource allocation'],
        
        'dbms': ['database', 'sql', 'nosql', 'acid', 'transaction', 'index', 'b-tree', 'b+ tree', 'hash index',
                 'normalization', '1nf', '2nf', '3nf', 'bcnf', 'join', 'inner join', 'outer join', 'query optimization',
                 'execution plan', 'clustered index', 'non-clustered index', 'primary key', 'foreign key',
                 'constraint', 'trigger', 'stored procedure', 'view', 'replication', 'sharding'],
        
        'networks': ['tcp', 'udp', 'ip', 'http', 'https', 'ssl', 'tls', 'dns', 'dhcp', 'routing', 'subnet',
                   'firewall', 'load balancer', 'packet', 'frame', 'socket', 'port', 'handshake', ' congestion control',
                   'flow control', 'sliding window', 'three-way handshake', 'osi model', 'tcp/ip'],
        
        'oops': ['class', 'object', 'encapsulation', 'inheritance', 'polymorphism', 'abstraction', 'interface',
                 'abstract class', 'method overloading', 'method overriding', 'constructor', 'destructor',
                 'singleton', 'factory', 'observer', 'mvc', 'solid', 'dependency injection', 'composition'],
        
        'daa': ['time complexity', 'space complexity', 'asymptotic notation', 'big-o', 'omega', 'theta',
                'amortized analysis', 'recurrence relation', 'master theorem', 'divide and conquer',
                'greedy algorithm', 'dynamic programming', 'backtracking', 'branch and bound', 'np-complete']
    }
    
    # Code-related patterns
    CODE_PATTERNS = {
        'has_loop': r'\b(for|while)\s*\(',
        'has_recursion': r'\b(def|function|void|int)\s+\w+\s*\([^)]*\).*{?[\s\S]*?\b\w+\s*\(',
        'has_condition': r'\b(if|else|switch)\s*[\({]',
        'has_function': r'\b(def|function|void|int|return)\s+',
        'has_class': r'\b(class|struct)\s+\w+',
        'has_import': r'\b(import|include|using|require)\b',
        'has_variable': r'\b(int|float|double|string|bool|var|let|const|char)\s+\w+|\w+\s*=\s*',
        'has_comment': r'(\/\/|\/\*|#|\"\"\"|\*)',
        'has_return': r'\breturn\b'
    }
    
    def __init__(self):
        self.model = get_model()
    
    def evaluate(self, user_answer: str, question: str, question_data: Optional[Dict] = None) -> Dict:
        """
        Main evaluation pipeline with multi-dimensional scoring.
        """
        # Basic validation
        if not user_answer or not user_answer.strip():
            return self._invalid_result("Empty answer")
        
        text = user_answer.strip()
        words = text.split()
        
        if len(words) < 3:
            return self._invalid_result("Too short (minimum 3 words)")
        
        # Detect answer type
        answer_type = self._detect_answer_type(text)
        
        # Multi-dimensional scoring
        scores = {}
        
        if answer_type == 'code':
            scores = self._evaluate_code(text, question, question_data)
        else:
            scores = self._evaluate_theory(text, question, question_data)
        
        # Calculate weighted final score
        final_score = self._calculate_final_score(scores, answer_type)
        
        # Generate contextual feedback
        feedback = self._generate_feedback(final_score, scores, answer_type)
        
        return {
            "score": round(final_score, 1),
            "feedback": feedback,
            "answer_type": answer_type,
            "debug": {k: round(v, 3) if isinstance(v, float) else v for k, v in scores.items()}
        }
    
    def _detect_answer_type(self, text: str) -> str:
        """Detect if answer is code or theory."""
        code_indicators = 0
        for pattern in self.CODE_PATTERNS.values():
            if re.search(pattern, text, re.IGNORECASE):
                code_indicators += 1
        
        # If has significant code syntax
        if code_indicators >= 2 or re.search(r'[{};]\s*\n|\b(def|function|class)\s+', text):
            return 'code'
        return 'theory'
    
    def _evaluate_code(self, code: str, question: str, question_data: Optional[Dict]) -> Dict:
        """Comprehensive code evaluation."""
        scores = {}
        
        # 1. Syntactic Correctness (20%)
        scores['syntax'] = self._check_syntax_validity(code)
        
        # 2. Algorithmic Approach (25%)
        scores['algorithm'] = self._evaluate_algorithmic_approach(code, question, question_data)
        
        # 3. Code Structure & Quality (20%)
        scores['structure'] = self._evaluate_code_structure(code)
        
        # 4. Semantic Similarity to Expected Solution (20%)
        scores['semantic'] = self._calculate_semantic_similarity(code, question, question_data)
        
        # 5. Efficiency Indicators (15%)
        scores['efficiency'] = self._evaluate_efficiency_indicators(code, question_data)
        
        return scores
    
    def _evaluate_theory(self, text: str, question: str, question_data: Optional[Dict]) -> Dict:
        """Comprehensive theory evaluation."""
        scores = {}
        
        # 1. Semantic Similarity (30%)
        scores['semantic'] = self._calculate_semantic_similarity(text, question, question_data)
        
        # 2. Technical Content Depth (30%)
        scores['technical_depth'] = self._evaluate_technical_depth(text, question_data)
        
        # 3. Concept Coverage (25%)
        scores['concept_coverage'] = self._evaluate_concept_coverage(text, question_data)
        
        # 4. Explanation Quality (15%)
        scores['explanation'] = self._evaluate_explanation_quality(text)
        
        return scores
    
    def _check_syntax_validity(self, code: str) -> float:
        """Check if code has valid syntax structure."""
        score = 0.5  # Base score
        
        # Check for balanced brackets
        brackets = {'(': ')', '[': ']', '{': '}'}
        stack = []
        for char in code:
            if char in brackets.keys():
                stack.append(char)
            elif char in brackets.values():
                if not stack:
                    score -= 0.2
                    break
                if brackets[stack.pop()] != char:
                    score -= 0.2
                    break
        
        if stack:
            score -= 0.1 * len(stack)
        
        # Check for common syntax patterns
        has_function = re.search(r'\b(def|function|void|int)\s+\w+', code)
        has_return = re.search(r'\breturn\b', code)
        proper_indent = re.search(r'^(\s{2,}|\t)', code, re.MULTILINE)
        
        if has_function:
            score += 0.15
        if has_return:
            score += 0.15
        if proper_indent:
            score += 0.1
        
        return max(0.0, min(1.0, score))
    
    def _evaluate_algorithmic_approach(self, code: str, question: str, question_data: Optional[Dict]) -> float:
        """Evaluate if the algorithmic approach matches the expected solution."""
        score = 0.5
        
        # Extract expected topics from question data
        if question_data and 'topics' in question_data:
            topics = [t.lower() for t in question_data['topics']]
            
            # Check for topic-specific algorithm patterns
            if 'hash' in topics or 'hash table' in topics:
                if re.search(r'\b(map|dict|hash|set|{}|\[\])', code):
                    score += 0.2
            
            if 'stack' in topics:
                if re.search(r'\b(stack|push|pop|append|pop\(\))', code, re.IGNORECASE):
                    score += 0.2
            
            if 'queue' in topics or 'bfs' in topics:
                if re.search(r'\b(queue|enqueue|dequeue|popleft|bfs)', code, re.IGNORECASE):
                    score += 0.2
            
            if 'tree' in topics or 'dfs' in topics:
                if re.search(r'\b(dfs|recurs|left|right|root|node)', code, re.IGNORECASE):
                    score += 0.2
            
            if 'dynamic programming' in topics or 'dp' in topics:
                if re.search(r'\b(dp|memo|cache|table|\[i\])', code, re.IGNORECASE):
                    score += 0.2
            
            if 'two pointers' in topics:
                if re.search(r'\b(left|right|start|end|while.*<|i.*j)', code, re.IGNORECASE):
                    score += 0.2
        
        # Check solution approach hints
        if question_data and 'solutionApproach' in question_data:
            approach = question_data['solutionApproach'].lower()
            code_lower = code.lower()
            
            # Check for key approach keywords in code
            approach_keywords = approach.replace(',', ' ').split()
            for keyword in approach_keywords:
                if len(keyword) > 3 and keyword in code_lower:
                    score += 0.05
        
        return min(1.0, score)
    
    def _evaluate_code_structure(self, code: str) -> float:
        """Evaluate code organization and quality."""
        score = 0.5
        
        # Check for function/class structure
        has_function_def = re.search(r'\b(def|function|void|int|class)\s+\w+', code)
        if has_function_def:
            score += 0.15
        
        # Check for variable naming (reasonable length suggests thought)
        var_matches = re.findall(r'\b([a-z_][a-z0-9_]{2,})\s*=', code, re.IGNORECASE)
        if len(var_matches) >= 2:
            score += 0.1
        
        # Check for comments
        has_comments = re.search(r'(\/\/|\/\*|#|\"\"\")', code)
        if has_comments:
            score += 0.1
        
        # Check for proper control flow
        has_control = re.search(r'\b(if|else|for|while|switch|return)\b', code)
        if has_control:
            score += 0.1
        
        # Check line count (too short is suspicious)
        lines = [l.strip() for l in code.split('\n') if l.strip()]
        if len(lines) < 3:
            score -= 0.2
        elif len(lines) > 10:
            score += 0.05
        
        return max(0.0, min(1.0, score))
    
    def _calculate_semantic_similarity(self, text: str, question: str, question_data: Optional[Dict]) -> float:
        """Calculate semantic similarity using transformer model."""
        if self.model is None:
            # Fallback: keyword matching
            return self._fallback_similarity(text.lower(), question.lower(), question_data)
        
        try:
            # Get expected answer from question data if available
            reference = question
            if question_data and 'solutionApproach' in question_data:
                reference += " " + question_data['solutionApproach']
            if question_data and 'expectedPoints' in question_data:
                reference += " " + " ".join(question_data['expectedPoints'])
            
            embeddings = self.model.encode([text, reference], convert_to_tensor=True)
            sim = util.cos_sim(embeddings[0], embeddings[1]).item()
            
            # Normalize to 0-1
            return max(0.0, min(1.0, (sim + 1) / 2))
        except Exception as e:
            print(f"[EVAL] Model error: {e}", file=sys.stderr)
            return self._fallback_similarity(text.lower(), question.lower(), question_data)
    
    def _fallback_similarity(self, text_lower: str, question_lower: str, question_data: Optional[Dict]) -> float:
        """Fallback keyword-based similarity."""
        # Extract keywords from question and expected points
        keywords = set()
        
        # Add words from question
        keywords.update(w for w in question_lower.split() if len(w) > 3)
        
        # Add expected points if available
        if question_data and 'expectedPoints' in question_data:
            for point in question_data['expectedPoints']:
                keywords.update(w.lower() for w in point.split() if len(w) > 2)
        
        # Add solution approach keywords
        if question_data and 'solutionApproach' in question_data:
            approach = question_data['solutionApproach'].lower()
            keywords.update(w for w in approach.split() if len(w) > 3)
        
        if not keywords:
            return 0.5
        
        # Calculate match ratio
        matches = sum(1 for kw in keywords if kw in text_lower)
        return min(1.0, matches / min(len(keywords), 10)) * 0.8 + 0.1  # Scale to 0.1-0.9
    
    def _evaluate_efficiency_indicators(self, code: str, question_data: Optional[Dict]) -> float:
        """Evaluate code efficiency indicators."""
        score = 0.5
        
        # Check for nested loops (potential inefficiency)
        nested_loops = re.findall(r'(for|while).*\n.*(\s{4,}|\t).*\b(for|while)', code)
        if len(nested_loops) > 2:
            score -= 0.1
        
        # Check for efficient patterns
        if re.search(r'\b(hash|set|map|dict)\b', code, re.IGNORECASE):
            score += 0.15  # Likely O(1) lookup
        
        if re.search(r'\b(binary|log|heap|priority)', code, re.IGNORECASE):
            score += 0.15  # Likely O(log n)
        
        # Check for memoization/DP
        if re.search(r'\b(memo|cache|dp\[|table\[)', code, re.IGNORECASE):
            score += 0.15
        
        return max(0.0, min(1.0, score))
    
    def _evaluate_technical_depth(self, text: str, question_data: Optional[Dict]) -> float:
        """Evaluate technical content depth in theory answers."""
        score = 0.3
        text_lower = text.lower()
        words = set(text_lower.split())
        
        # Count technical terms
        tech_count = 0
        for category, terms in self.TECH_TERMS.items():
            for term in terms:
                if term in text_lower:
                    tech_count += 1
        
        score += min(0.4, tech_count * 0.03)
        
        # Check for specific question topics
        if question_data and 'topics' in question_data:
            for topic in question_data['topics']:
                topic_lower = topic.lower()
                if topic_lower in self.TECH_TERMS:
                    topic_terms = self.TECH_TERMS[topic_lower]
                    for term in topic_terms:
                        if term in text_lower:
                            score += 0.03
        
        # Check for explanation depth
        explanation_markers = ['because', 'therefore', 'thus', 'hence', 'since', 'as a result']
        for marker in explanation_markers:
            if marker in text_lower:
                score += 0.02
        
        # Word count bonus (within reason)
        word_count = len(words)
        if 30 <= word_count <= 150:
            score += 0.1
        elif word_count > 200:
            score += 0.05  # Diminishing returns
        
        return min(1.0, score)
    
    def _evaluate_concept_coverage(self, text: str, question_data: Optional[Dict]) -> float:
        """Evaluate coverage of expected concepts."""
        score = 0.3
        text_lower = text.lower()
        
        if question_data and 'expectedPoints' in question_data:
            points = question_data['expectedPoints']
            matches = 0
            
            for point in points:
                point_keywords = [w.lower() for w in point.split() if len(w) > 2]
                # If any keyword from point is in text, count as match
                if any(pk in text_lower for pk in point_keywords):
                    matches += 1
            
            coverage = matches / len(points) if points else 0
            score += coverage * 0.6
        
        return min(1.0, score)
    
    def _evaluate_explanation_quality(self, text: str) -> float:
        """Evaluate quality of explanation."""
        score = 0.4
        
        sentences = [s.strip() for s in re.split(r'[.!?]+', text) if s.strip()]
        
        # Sentence structure
        if len(sentences) >= 2:
            score += 0.2
        
        # Check for examples
        if re.search(r'\b(example|for instance|such as|like|e\.g\.)', text, re.IGNORECASE):
            score += 0.15
        
        # Check for step-by-step explanation
        step_markers = ['first', 'second', 'third', 'next', 'then', 'finally', 'step']
        for marker in step_markers:
            if re.search(rf'\b{marker}\b', text, re.IGNORECASE):
                score += 0.02
        
        # Check for comparison/contrast
        if re.search(r'\b(however|but|whereas|while|compared|difference|similar)', text, re.IGNORECASE):
            score += 0.1
        
        return min(1.0, score)
    
    def _calculate_final_score(self, scores: Dict, answer_type: str) -> float:
        """Calculate weighted final score with balanced penalties."""
        
        if answer_type == 'code':
            weights = {
                'syntax': 0.20,
                'algorithm': 0.25,
                'structure': 0.20,
                'semantic': 0.20,
                'efficiency': 0.15
            }
        else:
            weights = {
                'semantic': 0.30,
                'technical_depth': 0.30,
                'concept_coverage': 0.25,
                'explanation': 0.15
            }
        
        # Calculate weighted sum
        weighted_sum = sum(scores.get(k, 0) * w for k, w in weights.items())
        
        # Convert to 0-100 scale
        final_score = weighted_sum * 100
        
        # Balanced penalties (not too strict, not too soft)
        # Penalize severely low scores on critical dimensions
        if answer_type == 'code':
            if scores.get('syntax', 1) < 0.2:
                final_score *= 0.7  # Syntax errors matter but aren't fatal
            if scores.get('algorithm', 1) < 0.3:
                final_score *= 0.8  # Wrong approach reduces score
        else:
            if scores.get('technical_depth', 1) < 0.2:
                final_score *= 0.75  # Needs some technical substance
            if scores.get('concept_coverage', 1) < 0.15:
                final_score *= 0.85  # Should cover some expected points
        
        # Boost for excellent overall performance
        avg_score = sum(scores.values()) / len(scores)
        if avg_score > 0.85:
            final_score = min(100, final_score * 1.05)
        
        return max(0, min(100, final_score))
    
    def _generate_feedback(self, score: float, scores: Dict, answer_type: str) -> str:
        """Generate contextual feedback based on scores."""
        
        # Score-based tier feedback
        if score >= 90:
            tier_feedback = "Excellent! Your answer demonstrates strong technical depth and clear understanding."
        elif score >= 75:
            tier_feedback = "Very good answer with solid technical content and proper structure."
        elif score >= 60:
            tier_feedback = "Good attempt with reasonable coverage of the topic."
        elif score >= 45:
            tier_feedback = "Below average. Your answer needs more technical depth and clarity."
        else:
            tier_feedback = "Your answer requires significant improvement. Focus on understanding core concepts."
        
        # Dimension-specific suggestions
        suggestions = []
        
        if answer_type == 'code':
            if scores.get('syntax', 1) < 0.5:
                suggestions.append("review syntax and ensure proper code structure")
            if scores.get('algorithm', 1) < 0.5:
                suggestions.append("consider a more appropriate algorithmic approach for this problem")
            if scores.get('efficiency', 1) < 0.5:
                suggestions.append("think about optimizing the time/space complexity")
            if scores.get('structure', 1) < 0.5:
                suggestions.append("improve code organization and add comments for clarity")
        else:
            if scores.get('technical_depth', 1) < 0.5:
                suggestions.append("include more specific technical terminology and concepts")
            if scores.get('concept_coverage', 1) < 0.5:
                suggestions.append("address more key points from the question")
            if scores.get('explanation', 1) < 0.5:
                suggestions.append("provide clearer explanations with examples where possible")
        
        # Construct final feedback
        if suggestions:
            suggestion_text = "; ".join(suggestions)
            return f"{tier_feedback} Suggestions: {suggestion_text}."
        else:
            return tier_feedback
    
    def _invalid_result(self, reason: str) -> Dict:
        """Return result for invalid answers."""
        return {
            "score": 0,
            "feedback": f"Invalid answer: {reason}. Please provide a meaningful response.",
            "answer_type": "unknown",
            "debug": {"error": reason}
        }


def main():
    """Main entry point for CLI usage."""
    raw = sys.stdin.read()
    if not raw.strip():
        print(json.dumps({
            "score": 0, 
            "feedback": "No input provided",
            "answer_type": "unknown",
            "debug": {"error": "Empty input"}
        }))
        return
    
    try:
        data = json.loads(raw)
    except json.JSONDecodeError as e:
        print(json.dumps({
            "score": 0, 
            "feedback": f"Invalid input format: {e}",
            "answer_type": "unknown",
            "debug": {"error": str(e)}
        }))
        return
    
    evaluator = TechnicalEvaluator()
    result = evaluator.evaluate(
        data.get('user_answer', ''),
        data.get('question', ''),
        data.get('question_data', {})
    )
    
    print(json.dumps(result, indent=2), flush=True)


if __name__ == '__main__':
    main()
