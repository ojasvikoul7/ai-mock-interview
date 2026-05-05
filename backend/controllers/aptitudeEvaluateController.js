const natural = require('natural');
const { WordTokenizer, TfIdf } = natural;

async function evaluateAptitude(req, res) {
  try {
    const { user_answer, question, expected_answer, question_data, question_type } = req.body;

    if (!user_answer || !question) {
      return res.status(400).json({
        error: 'Missing required fields: user_answer and question'
      });
    }

    const evaluation = await runAptitudeEvaluation(user_answer, expected_answer, question_data);
    
    evaluation.expected_answer = generateExpectedAnswer(expected_answer, question_data);
    
    evaluation.improvement_hints = generateImprovementHints(evaluation);

    res.json(evaluation);
  } catch (error) {
    console.error('Aptitude evaluation error:', error);
    res.status(500).json({
      error: 'Evaluation failed',
      message: error.message,
      score: 0,
      feedback: 'Unable to evaluate answer due to system error.'
    });
  }
}

async function runAptitudeEvaluation(userAnswer, expectedAnswer, questionData) {
  const components = {
    correctness: evaluateCorrectness(userAnswer, expectedAnswer, questionData),
    
    completeness: evaluateCompleteness(userAnswer, expectedAnswer, questionData),
    
    vocabulary: evaluateVocabulary(userAnswer, expectedAnswer),
    
    confidence: evaluateConfidence(userAnswer)
  };

  const totalScore = Math.round(
    components.correctness.score * 0.40 +
    components.completeness.score * 0.25 +
    components.vocabulary.score * 0.20 +
    components.confidence.score * 0.15
  );

  const feedback = generateComponentFeedback(components, totalScore);

  return {
    score: totalScore,
    components: components,
    feedback: feedback,
    is_correct: components.correctness.score >= 80,
    confidence_level: getConfidenceLevel(totalScore),
    breakdown: {
      semantic_match: `${components.correctness.semantic_similarity}%`,
      key_points_matched: `${components.completeness.matched_points}/${components.completeness.total_points}`,
      vocabulary_diversity: `${components.vocabulary.diversity_score}%`,
      confidence_markers: components.confidence.markers_found
    }
  };
}

function evaluateCorrectness(userAnswer, expectedAnswer, questionData) {
  const tokenizer = new WordTokenizer();
  
  const userTokens = tokenizer.tokenize(userAnswer.toLowerCase());
  const expectedTokens = expectedAnswer ? 
    tokenizer.tokenize(expectedAnswer.toLowerCase()) : [];
  
  const stopWords = new Set(['the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'shall', 'can', 'need', 'dare', 'ought', 'used', 'to', 'of', 'in', 'for', 'on', 'with', 'at', 'by', 'from', 'as', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'between', 'under', 'and', 'but', 'or', 'yet', 'so', 'if', 'because', 'although', 'though', 'while', 'where', 'when', 'that', 'which', 'who', 'whom', 'whose', 'what', 'this', 'these', 'those', 'i', 'me', 'my', 'myself', 'we', 'our', 'you', 'your', 'he', 'him', 'his', 'she', 'her', 'it', 'its', 'they', 'them', 'their']);
  
  const userFiltered = userTokens.filter(t => !stopWords.has(t) && t.length > 2);
  const expectedFiltered = expectedTokens.filter(t => !stopWords.has(t) && t.length > 2);
  
  const tfidf = new TfIdf();
  tfidf.addDocument(userFiltered.join(' '));
  if (expectedFiltered.length > 0) {
    tfidf.addDocument(expectedFiltered.join(' '));
  }
  
  let similarity = 0;
  if (expectedFiltered.length > 0) {
    const userVector = [];
    const expectedVector = [];
    
    const allTerms = new Set([...userFiltered, ...expectedFiltered]);
    
    allTerms.forEach(term => {
      let userTf = 0, expectedTf = 0;
      
      tfidf.listTerms(0).forEach(item => {
        if (item.term === term) userTf = item.tfidf;
      });
      
      if (expectedFiltered.length > 0) {
        tfidf.listTerms(1).forEach(item => {
          if (item.term === term) expectedTf = item.tfidf;
        });
      }
      
      userVector.push(userTf);
      expectedVector.push(expectedTf);
    });
    
    similarity = cosineSimilarity(userVector, expectedVector);
  }
  
  const userNumbers = extractNumbers(userAnswer);
  const expectedNumbers = expectedAnswer ? extractNumbers(expectedAnswer) : [];
  const numberMatch = expectedNumbers.length > 0 && 
    userNumbers.some(n => expectedNumbers.includes(n));
  
  let score = Math.round(similarity * 100);
  
  if (numberMatch) {
    score = Math.min(100, score + 15);
  }
  
  if (score < 20 && userAnswer.length < 10) {
    score = Math.max(0, score - 10);
  }
  
  return {
    score: score,
    semantic_similarity: Math.round(similarity * 100),
    number_match: numberMatch,
    user_numbers_found: userNumbers,
    expected_numbers: expectedNumbers,
    matched_keywords: findMatchedKeywords(userFiltered, expectedFiltered),
    missing_keywords: findMissingKeywords(userFiltered, expectedFiltered)
  };
}

function evaluateCompleteness(userAnswer, expectedAnswer, questionData) {
  const userLower = userAnswer.toLowerCase();
  
  const expectedPoints = questionData?.expectedPoints || 
                        questionData?.keyPoints || 
                        extractKeyPoints(expectedAnswer) || [];
  
  const totalPoints = expectedPoints.length || 5; // Default to 5 if not specified
  let matchedPoints = 0;
  const matched = [];
  const missing = [];
  
  expectedPoints.forEach(point => {
    const pointLower = point.toLowerCase();
    if (semanticContains(userLower, pointLower)) {
      matchedPoints++;
      matched.push(point);
    } else {
      missing.push(point);
    }
  });
  
  const hasExplanation = userAnswer.length > 50 && 
    (userLower.includes('because') || 
     userLower.includes('therefore') || 
     userLower.includes('so') ||
     userLower.includes('thus') ||
     userLower.includes('hence') ||
     /\d+\s*[=\-]\s*\d+/.test(userLower)); // Has calculation
  
  const score = totalPoints > 0 ? 
    Math.round((matchedPoints / totalPoints) * 100) : 
    Math.min(100, userAnswer.length / 2);
  
  return {
    score: Math.min(100, score + (hasExplanation ? 10 : 0)),
    matched_points: matchedPoints,
    total_points: totalPoints,
    coverage_percentage: Math.round((matchedPoints / totalPoints) * 100),
    matched_keywords: matched.slice(0, 5),
    missing_keywords: missing.slice(0, 5),
    has_calculation: /\d+\s*[+\-*\/\=]\s*\d+/.test(userAnswer),
    has_explanation: hasExplanation
  };
}

function evaluateVocabulary(userAnswer, expectedAnswer) {
  const words = userAnswer.toLowerCase().match(/\b[a-z]+\b/g) || [];
  const uniqueWords = new Set(words);
  
  const diversityScore = words.length > 0 ? 
    Math.round((uniqueWords.size / words.length) * 100) : 0;
  
  const weakWords = ['thing', 'stuff', 'nice', 'good', 'bad', 'very', 'really', 
    'just', 'like', 'something', 'anything', 'maybe', 'probably', 'kinda', 'sorta'];
  const foundWeak = weakWords.filter(w => words.includes(w));
  
  const strongIndicators = ['calculate', 'compute', 'determine', 'derive', 'solve', 
    'formula', 'equation', 'ratio', 'percentage', 'average', 'mean', 'median',
    'probability', 'factor', 'multiple', 'divisible', 'remainder', 'quotient'];
  const foundStrong = strongIndicators.filter(w => words.includes(w));
  
  const precisionWords = ['exactly', 'precisely', 'approximately', 'roughly', 
    'exact', 'precise', 'specific', 'certain'];
  const foundPrecision = precisionWords.filter(w => words.includes(w));
  
  let score = 50; // Base score
  
  if (diversityScore > 60) score += 15;
  else if (diversityScore > 40) score += 10;
  
  score += Math.min(20, foundStrong.length * 5);
  
  score += Math.min(10, foundPrecision.length * 3);
  
  score -= Math.min(15, foundWeak.length * 3);
  
  if (words.length < 5) score -= 20;
  
  return {
    score: Math.max(0, Math.min(100, score)),
    word_count: words.length,
    unique_words: uniqueWords.size,
    diversity_score: diversityScore,
    weak_words_found: foundWeak,
    weak_words_count: foundWeak.length,
    strong_indicators: foundStrong,
    precision_words: foundPrecision,
    suggestions: generateVocabSuggestions(foundWeak, diversityScore, foundStrong)
  };
}

function evaluateConfidence(userAnswer) {
  const lower = userAnswer.toLowerCase();
  
  const confidenceMarkers = [
    'definitely', 'certainly', 'absolutely', 'clearly', 'obviously',
    'the answer is', 'equals', 'results in', 'yields', 'gives'
  ];
  
  const uncertaintyMarkers = [
    'maybe', 'perhaps', 'possibly', 'might', 'could be', 'i think',
    'i guess', 'probably', 'not sure', 'uncertain', 'i believe'
  ];
  
  const showsWork = /\d+\s*[+\-*/]\s*\d+/.test(userAnswer) ||
    /step|first|then|next|finally/.test(lower);
  
  const confidenceCount = confidenceMarkers.filter(m => lower.includes(m)).length;
  const uncertaintyCount = uncertaintyMarkers.filter(m => lower.includes(m)).length;
  
  let score = 50; // Neutral base
  score += confidenceCount * 10;
  score -= uncertaintyCount * 15;
  score += showsWork ? 15 : 0;
  
  if (userAnswer.length > 100) score += 10;
  else if (userAnswer.length > 50) score += 5;
  else if (userAnswer.length < 20) score -= 10;
  
  return {
    score: Math.max(0, Math.min(100, score)),
    markers_found: confidenceCount,
    uncertainty_found: uncertaintyCount,
    shows_work: showsWork,
    answer_length: userAnswer.length,
    confidence_level: score >= 70 ? 'high' : score >= 40 ? 'medium' : 'low'
  };
}

function generateExpectedAnswer(expectedAnswer, questionData) {
  if (!expectedAnswer && !questionData) return null;
  
  const answer = expectedAnswer || questionData?.expectedAnswer || '';
  const points = questionData?.expectedPoints || extractKeyPoints(answer);
  
  return {
    answer: answer,
    key_points: points,
    how_to_answer: generateHowToAnswer(questionData),
    vocabulary_hints: [
      'Use precise mathematical terminology',
      'Show your calculation steps clearly',
      'State the final answer explicitly',
      'Explain the reasoning if possible'
    ]
  };
}

function generateImprovementHints(evaluation) {
  const hints = [];
  const c = evaluation.components;
  
  if (c.correctness.score < 70) {
    hints.push({
      area: 'Correctness',
      issue: 'Your answer doesn\'t match the expected solution closely',
      fix: 'Review the key concepts and formulas for this question type',
      priority: 'high'
    });
  }
  
  if (c.completeness.score < 70) {
    hints.push({
      area: 'Completeness',
      issue: `Missing ${c.completeness.missing_keywords.length} key points`,
      fix: `Include these points: ${c.completeness.missing_keywords.slice(0, 3).join(', ')}`,
      priority: 'high'
    });
  }
  
  if (c.vocabulary.weak_words_count > 0) {
    hints.push({
      area: 'Vocabulary',
      issue: `Using vague words: ${c.vocabulary.weak_words_found.slice(0, 3).join(', ')}`,
      fix: 'Replace with specific mathematical terms',
      priority: 'medium'
    });
  }
  
  if (c.confidence.confidence_level === 'low') {
    hints.push({
      area: 'Confidence',
      issue: 'Answer shows uncertainty',
      fix: 'Use definitive language like "The answer is" instead of "I think"',
      priority: 'medium'
    });
  }
  
  if (!c.completeness.has_calculation) {
    hints.push({
      area: 'Working',
      issue: 'No calculation shown',
      fix: 'Show your step-by-step working for full credit',
      priority: 'high'
    });
  }
  
  return hints;
}

function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  
  if (normA === 0 || normB === 0) return 0;
  
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

function extractNumbers(text) {
  const matches = text.match(/\b\d+(?:\.\d+)?\b/g);
  return matches ? matches.map(Number) : [];
}

function extractKeyPoints(answer) {
  if (!answer) return [];
  
  const points = answer
    .split(/[,;.]|and\b|\bthen\b/)
    .map(s => s.trim())
    .filter(s => s.length > 5 && s.length < 100)
    .slice(0, 8);
  
  return points;
}

function findMatchedKeywords(userTokens, expectedTokens) {
  const userSet = new Set(userTokens);
  return expectedTokens.filter(t => userSet.has(t)).slice(0, 10);
}

function findMissingKeywords(userTokens, expectedTokens) {
  const userSet = new Set(userTokens);
  return expectedTokens.filter(t => !userSet.has(t)).slice(0, 10);
}

function semanticContains(text, substring) {
  if (text.includes(substring)) return true;
  
  const subWords = substring.split(/\s+/);
  const matchCount = subWords.filter(w => text.includes(w)).length;
  
  return matchCount >= subWords.length * 0.7;
}

function generateComponentFeedback(components, totalScore) {
  const feedbacks = [];
  
  if (totalScore >= 90) {
    feedbacks.push('Excellent! Your answer is comprehensive and accurate.');
  } else if (totalScore >= 75) {
    feedbacks.push('Good answer. Minor improvements needed in some areas.');
  } else if (totalScore >= 60) {
    feedbacks.push('Fair attempt. Focus on the highlighted improvement areas.');
  } else if (totalScore >= 40) {
    feedbacks.push('Needs improvement. Review the hints and try again.');
  } else {
    feedbacks.push('Significant gaps detected. Please study the expected answer carefully.');
  }
  
  if (components.correctness.number_match) {
    feedbacks.push('✓ Correct numeric answer identified.');
  }
  
  if (components.completeness.has_calculation) {
    feedbacks.push('✓ Good job showing your working.');
  }
  
  if (components.vocabulary.strong_indicators.length > 2) {
    feedbacks.push('✓ Strong vocabulary usage.');
  }
  
  return feedbacks;
}

function getConfidenceLevel(score) {
  if (score >= 90) return 'Very High';
  if (score >= 75) return 'High';
  if (score >= 60) return 'Moderate';
  if (score >= 40) return 'Low';
  return 'Very Low';
}

function generateVocabSuggestions(weakWords, diversity, strongWords) {
  const suggestions = [];
  
  if (weakWords.length > 0) {
    suggestions.push(`Replace "${weakWords[0]}" with a more specific term`);
  }
  
  if (diversity < 40) {
    suggestions.push('Vary your vocabulary to show deeper understanding');
  }
  
  if (strongWords.length === 0) {
    suggestions.push('Use mathematical terminology (calculate, derive, solve)');
  }
  
  return suggestions;
}

function generateHowToAnswer(questionData) {
  const type = questionData?.category || 'general';
  
  const guides = {
    'percentages': [
      '1. Identify the base value and percentage',
      '2. Set up the equation: part = (percentage/100) × whole',
      '3. Solve for the unknown',
      '4. State the final answer with units'
    ],
    'profit_loss': [
      '1. Identify Cost Price (CP) and Selling Price (SP)',
      '2. Calculate profit/loss: SP - CP',
      '3. Compute percentage: (Profit/Loss)/CP × 100',
      '4. State profit% or loss% clearly'
    ],
    'time_work': [
      '1. Identify individual work rates (1/time)',
      '2. Combine rates if working together',
      '3. Calculate time as reciprocal of combined rate',
      '4. Verify units match the question'
    ],
    'general': [
      '1. Read the question carefully',
      '2. Identify what needs to be found',
      '3. Apply the appropriate formula/method',
      '4. Show step-by-step working',
      '5. State the final answer clearly'
    ]
  };
  
  return guides[type] || guides['general'];
}

module.exports = { evaluateAptitude };
