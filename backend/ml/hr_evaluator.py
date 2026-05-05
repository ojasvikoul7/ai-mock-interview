#!/usr/bin/env python3
"""
HR Evaluator - Behavioral Interview Scoring System
8-Step Implementation for HR/Behavioral Questions ONLY
"""

import json
import sys
import re
import string
from typing import Dict, Optional

# Try imports
try:
    from sentence_transformers import SentenceTransformer, util
    ST_AVAILABLE = True
except ImportError:
    ST_AVAILABLE = False

try:
    from textblob import TextBlob
    TEXTBLOB_AVAILABLE = True
except ImportError:
    TEXTBLOB_AVAILABLE = False

_model = None

def get_model():
    global _model
    if _model is None and ST_AVAILABLE:
        try:
            _model = SentenceTransformer('all-MiniLM-L6-v2')
        except:
            pass
    return _model


class HREvaluator:
    """HR Behavioral Answer Evaluation - Human-like scoring."""
    
    # Common English words for gibberish detection
    COMMON_WORDS = {
        'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i', 'it', 'for',
        'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this', 'but', 'his',
        'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my',
        'one', 'all', 'would', 'there', 'their', 'what', 'so', 'up', 'out', 'if',
        'about', 'who', 'get', 'which', 'go', 'me', 'when', 'make', 'can', 'like',
        'time', 'no', 'just', 'him', 'know', 'take', 'people', 'into', 'year', 'your',
        'good', 'some', 'could', 'them', 'see', 'other', 'than', 'then', 'now', 'look',
        'only', 'come', 'its', 'over', 'think', 'also', 'back', 'after', 'use', 'two',
        'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because',
        'any', 'these', 'give', 'day', 'most', 'us', 'is', 'are', 'was', 'were', 'been',
        'had', 'has', 'did', 'done', 'said', 'each', 'may', 'said', 'she', 'way', 'many',
        'water', 'long', 'little', 'very', 'after', 'called', 'just', 'where', 'most',
        'know', 'get', 'through', 'back', 'much', 'before', 'too', 'also', 'around',
        'another', 'came', 'come', 'work', 'three', 'must', 'asked', 'man', 'own',
        'part', 'year', 'mother', 'father', 'world', 'school', 'still', 'such', 'here'
    }
    
    # Generic phrases that indicate low-quality answers
    GENERIC_PHRASES = [
        'i am hardworking', 'i am passionate', 'i will try my best', 'i am dedicated',
        'i am motivated', 'i love learning', 'i am a team player', 'i am honest',
        'i am punctual', 'i am sincere', 'i work hard', 'i do my best',
        'i am responsible', 'i am reliable', 'i am committed', 'i am positive'
    ]
    
    # Real example indicators (good content)
    EXAMPLE_INDICATORS = [
        'in my project', 'during my internship', 'at my previous', 'when i was',
        'in my last', 'while working', 'for example', 'such as', 'instance',
        'last year', 'previous company', 'my manager', 'my team', 'we faced',
        'i handled', 'i managed', 'i led', 'i coordinated', 'i resolved'
    ]
    
    # High confidence markers
    CONFIDENT_WORDS = [
        'i implemented', 'i handled', 'i led', 'i managed', 'i delivered',
        'i achieved', 'i resolved', 'i coordinated', 'i organized', 'i created',
        'i developed', 'i designed', 'i built', 'i successfully', 'i accomplished',
        'definitely', 'certainly', 'absolutely', 'clearly', 'definitely'
    ]
    
    # Low confidence markers
    UNCERTAIN_WORDS = [
        'i think', 'maybe', 'i guess', 'probably', 'perhaps', 'possibly',
        'i hope', 'i will try', 'i want to', 'not sure', 'i dont know',
        'kind of', 'sort of', 'might', 'could be', 'i suppose'
    ]
    
    # Stopwords for preprocessing
    STOPWORDS = {
        'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'has', 'he',
        'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the', 'to', 'was', 'will', 'with'
    }
    
    def __init__(self):
        self.model = get_model()
    
    def evaluate(self, user_answer: str, question: str, rubric: Optional[Dict] = None) -> Dict:
        """8-Step HR Evaluation Pipeline."""
        
        # STEP 1: INPUT VALIDATION
        if not user_answer or not user_answer.strip():
            return self._invalid_response("Empty answer")
        
        text = user_answer.strip()
        words = text.split()
        
        # Must be at least 6 words
        if len(words) < 6:
            return self._invalid_response("Too short (minimum 6 words required)")
        
        # Gibberish check: at least 60% should be valid English-like words
        text_lower = text.lower()
        valid_count = 0
        for word in words:
            clean = re.sub(r'[^a-zA-Z]', '', word).lower()
            if clean in self.COMMON_WORDS or len(clean) > 4:
                valid_count += 1
        
        valid_ratio = valid_count / len(words)
        if valid_ratio < 0.4:
            return self._invalid_response("Gibberish detected - please provide a meaningful answer")
        
        # STEP 2: NLP PREPROCESSING
        processed_text = self._preprocess(text_lower)
        
        # STEP 3: SEMANTIC SIMILARITY
        similarity_score = self._calculate_similarity(text, question)
        
        # STEP 4: HR-SPECIFIC SCORING COMPONENTS
        content_quality = self._evaluate_content_quality(text, text_lower, processed_text)
        confidence = self._evaluate_confidence(text_lower)
        structure = self._evaluate_structure(text, text_lower)
        sentiment = self._evaluate_sentiment(text_lower)
        
        # STEP 5: GENERIC ANSWER PENALTY
        generic_penalty = self._calculate_generic_penalty(text_lower)
        if generic_penalty > 0:
            content_quality = max(0.1, content_quality - generic_penalty)
        
        # STEP 6: FINAL SCORING FORMULA
        # (similarity * 0.4) + (content_quality * 0.3) + (structure * 0.1) + (confidence * 0.1) + (sentiment * 0.1)
        final_score = (
            similarity_score * 0.40 +
            content_quality * 0.30 +
            structure * 0.10 +
            confidence * 0.10 +
            sentiment * 0.10
        )
        
        # STEP 7: HARD RULES
        # If content_quality < 0.3 → score must be below 40
        if content_quality < 0.3:
            final_score = min(final_score, 0.35)
        
        # If similarity > 0.75 AND good content → score > 75
        if similarity_score > 0.75 and content_quality > 0.6:
            final_score = max(final_score, 0.75)
        
        # If generic answer → max 50
        if generic_penalty > 0.3:
            final_score = min(final_score, 0.50)
        
        # Convert to 0-100 scale
        final_score_100 = round(final_score * 100)
        
        # STEP 8: OUTPUT FORMAT
        return {
            "score": final_score_100,
            "feedback": self._generate_feedback(final_score_100, content_quality, generic_penalty),
            "metrics": {
                "content": round(content_quality * 100),
                "confidence": round(confidence * 100),
                "structure": round(structure * 100),
                "sentiment": round(sentiment * 100)
            },
            "similarity": round(similarity_score * 100),
            "generic_penalty": round(generic_penalty * 100) if generic_penalty > 0 else 0
        }
    
    def _preprocess(self, text: str) -> str:
        """STEP 2: NLP Preprocessing - lowercase, remove stopwords, tokenize."""
        # Remove punctuation
        text = text.translate(str.maketrans('', '', string.punctuation))
        # Tokenize and remove stopwords
        words = [w for w in text.split() if w not in self.STOPWORDS and len(w) > 2]
        return ' '.join(words)
    
    def _calculate_similarity(self, text: str, question: str) -> float:
        """STEP 3: Semantic similarity using sentence-transformers."""
        if self.model is None:
            return self._fallback_similarity(text.lower(), question.lower())
        
        try:
            embeddings = self.model.encode([text, question], convert_to_tensor=True)
            sim = util.cos_sim(embeddings[0], embeddings[1]).item()
            # Normalize cosine (-1 to 1) → (0 to 1)
            return max(0.0, min(1.0, (sim + 1) / 2))
        except Exception as e:
            print(f"[HR-EVAL] Model error: {e}", file=sys.stderr)
            return self._fallback_similarity(text.lower(), question.lower())
    
    def _fallback_similarity(self, text_lower: str, question_lower: str) -> float:
        """Fallback keyword-based similarity."""
        q_words = set(w for w in question_lower.split() if len(w) > 3)
        if not q_words:
            return 0.5
        matches = sum(1 for w in q_words if w in text_lower)
        return min(1.0, matches / len(q_words))
    
    def _evaluate_content_quality(self, text: str, text_lower: str, processed: str) -> float:
        """Component 1: CONTENT QUALITY (MOST IMPORTANT - 30% weight)."""
        score = 0.0
        words = text.split()
        word_count = len(words)
        
        # Length scoring (0-0.25)
        if word_count >= 80:
            score += 0.25
        elif word_count >= 50:
            score += 0.20
        elif word_count >= 30:
            score += 0.15
        elif word_count >= 15:
            score += 0.10
        else:
            score += 0.05
        
        # Real example indicators (0-0.35) - HR answers need specific examples
        example_count = sum(1 for ind in self.EXAMPLE_INDICATORS if ind in text_lower)
        score += min(0.35, example_count * 0.08)
        
        # Specific details - numbers, names, outcomes (0-0.25)
        has_numbers = bool(re.search(r'\d+', text))
        has_outcomes = any(w in text_lower for w in ['result', 'outcome', 'success', 'achieved', 'improved', 'increased', 'decreased'])
        if has_numbers:
            score += 0.15
        if has_outcomes:
            score += 0.10
        
        # Relevance markers (0-0.15)
        if any(w in text_lower for w in ['because', 'therefore', 'so', 'as a result']):
            score += 0.08
        if any(w in text_lower for w in ['team', 'colleague', 'manager', 'leadership']):
            score += 0.07
        
        return min(1.0, score)
    
    def _evaluate_confidence(self, text_lower: str) -> float:
        """Component 2: CONFIDENCE (10% weight)."""
        conf_markers = sum(1 for w in self.CONFIDENT_WORDS if w in text_lower)
        uncert_markers = sum(1 for w in self.UNCERTAIN_WORDS if w in text_lower)
        
        # Base score 0.5, +0.08 per confident, -0.12 per uncertain
        score = 0.5 + (conf_markers * 0.08) - (uncert_markers * 0.12)
        return max(0.2, min(1.0, score))
    
    def _evaluate_structure(self, text: str, text_lower: str) -> float:
        """Component 3: STRUCTURE (10% weight)."""
        sentences = [s.strip() for s in re.split(r'[.!?]+', text) if s.strip()]
        sentence_count = len(sentences)
        
        # Multiple sentences (0-0.5)
        if sentence_count >= 5:
            base_score = 0.50
        elif sentence_count >= 3:
            base_score = 0.40
        elif sentence_count >= 2:
            base_score = 0.30
        else:
            base_score = 0.20
        
        # Clear flow indicators (0-0.3)
        flow_words = ['first', 'then', 'next', 'after', 'finally', 'however', 'therefore', 'additionally']
        flow_count = sum(1 for f in flow_words if f in text_lower)
        bonus = min(0.30, flow_count * 0.06)
        
        # Proper explanation (0-0.2)
        if any(w in text_lower for w in ['this happened', 'the situation', 'the challenge', 'the problem']):
            bonus += 0.10
        if any(w in text_lower for w in ['i learned', 'i realized', 'i understood']):
            bonus += 0.10
        
        return min(1.0, base_score + bonus)
    
    def _evaluate_sentiment(self, text_lower: str) -> float:
        """Component 4: SENTIMENT (10% weight)."""
        if TEXTBLOB_AVAILABLE:
            try:
                blob = TextBlob(text_lower)
                polarity = blob.sentiment.polarity  # -1 to 1
                # Convert to 0-1 scale
                return 0.5 + (polarity * 0.5)
            except:
                pass
        
        # Fallback keyword-based
        positive_words = ['good', 'great', 'excellent', 'positive', 'success', 'achieved', 
                         'improved', 'solved', 'happy', 'pleased', 'confident', 'strong',
                         'effective', 'productive', 'collaborative', 'supportive']
        negative_words = ['bad', 'terrible', 'worst', 'fail', 'mistake', 'problem', 
                         'difficult', 'hard', 'struggle', 'conflict', 'issue', 'negative']
        
        pos_count = sum(1 for p in positive_words if p in text_lower)
        neg_count = sum(1 for n in negative_words if n in text_lower)
        
        score = 0.6 + (pos_count * 0.03) - (neg_count * 0.05)
        return max(0.3, min(1.0, score))
    
    def _calculate_generic_penalty(self, text_lower: str) -> float:
        """STEP 5: Generic answer penalty."""
        generic_count = sum(1 for phrase in self.GENERIC_PHRASES if phrase in text_lower)
        
        # If mostly generic phrases
        words = text_lower.split()
        word_count = len(words)
        
        if generic_count >= 2:
            return min(0.5, generic_count * 0.15)
        
        # Check ratio of generic content
        if word_count > 0:
            generic_ratio = sum(len(phrase.split()) for phrase in self.GENERIC_PHRASES if phrase in text_lower) / word_count
            if generic_ratio > 0.3:
                return 0.3
        
        return 0.0
    
    def _generate_feedback(self, score: int, content: float, generic_penalty: float) -> str:
        """Generate human-like HR feedback."""
        if generic_penalty > 0.2:
            return "Your answer sounds too generic. Use specific examples from your experience instead of general statements like 'I am hardworking'."
        
        if score >= 80:
            return "Excellent behavioral answer! You provided specific examples with clear outcomes and demonstrated strong communication."
        elif score >= 60:
            return "Good answer with solid examples. Consider adding more specific metrics or outcomes to strengthen your response."
        elif score >= 40:
            return "Your answer needs more substance. Focus on specific situations from your experience using the STAR method (Situation, Task, Action, Result)."
        else:
            return "This answer needs significant improvement. Provide concrete examples from your work experience rather than generic statements."
    
    def _invalid_response(self, reason: str) -> Dict:
        """Return invalid response for failed input validation."""
        print(f"[HR-EVAL] INVALID: {reason}", file=sys.stderr, flush=True)
        return {
            "score": 0,
            "feedback": f"Invalid answer: {reason}",
            "metrics": {
                "content": 0,
                "confidence": 0,
                "structure": 0,
                "sentiment": 0
            },
            "similarity": 0,
            "generic_penalty": 0,
            "error": reason
        }


def main():
    """Main entry point."""
    raw = sys.stdin.read()
    if not raw.strip():
        print(json.dumps({
            "score": 0, 
            "feedback": "No input provided",
            "metrics": {"content": 0, "confidence": 0, "structure": 0, "sentiment": 0},
            "similarity": 0
        }))
        return
    
    try:
        data = json.loads(raw)
    except json.JSONDecodeError as e:
        print(json.dumps({
            "score": 0, 
            "feedback": f"Invalid JSON: {e}",
            "metrics": {"content": 0, "confidence": 0, "structure": 0, "sentiment": 0},
            "similarity": 0
        }))
        return
    
    evaluator = HREvaluator()
    result = evaluator.evaluate(
        data.get('user_answer', ''),
        data.get('question', ''),
        data.get('rubric', {})
    )
    
    print(json.dumps(result), flush=True)


if __name__ == '__main__':
    main()
