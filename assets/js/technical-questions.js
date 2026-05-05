
const technicalQuestions = {
  
  "Software Engineer": [
    {
      id: 1,
      type: "coding",
      difficulty: "easy",
      title: "Find Maximum Element",
      functionName: "findMax",
      question: "Write a function to find the maximum element in an array.\n\nExample:\nInput: [3, 7, 2, 9, 1]\nOutput: 9",
      hint: "Iterate through array, keep track of maximum value seen so far.",
      expectedTime: "5 min",
      topics: ["Arrays", "DSA"],
      testCases: [
        { input: "[3, 7, 2, 9, 1]", output: "9" },
        { input: "[1, 2, 3, 4, 5]", output: "5" },
        { input: "[-5, -2, -10]", output: "-2" }
      ],
      solutionApproach: "Linear scan, O(n) time, O(1) space",
      starterCode: "function findMax(arr) {\n  // Write your code here\n}"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "easy",
      title: "Reverse an Array",
      functionName: "reverseArray",
      question: "Write a function to reverse an array in-place.\n\nExample:\nInput: [1, 2, 3, 4, 5]\nOutput: [5, 4, 3, 2, 1]",
      hint: "Use two pointers, swap elements from start and end moving towards center.",
      expectedTime: "5 min",
      topics: ["Arrays", "Two Pointers", "DSA"],
      testCases: [
        { input: "[1, 2, 3, 4, 5]", output: "[5, 4, 3, 2, 1]" },
        { input: "[1, 2]", output: "[2, 1]" },
        { input: "[1]", output: "[1]" }
      ],
      solutionApproach: "Two pointers swapping, O(n/2) swaps",
      starterCode: "function reverseArray(arr) {\n  // Write your code here\n}"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "easy",
      title: "Check Palindrome",
      functionName: "isPalindrome",
      question: "Write a function to check if a string is a palindrome (reads same forwards and backwards).\n\nExample:\nInput: \"racecar\"\nOutput: true\nInput: \"hello\"\nOutput: false",
      hint: "Compare characters from start and end moving towards center.",
      expectedTime: "5 min",
      topics: ["Strings", "Two Pointers", "DSA"],
      testCases: [
        { input: "\"racecar\"", output: "true" },
        { input: "\"hello\"", output: "false" },
        { input: "\"a\"", output: "true" }
      ],
      solutionApproach: "Two pointers comparison",
      starterCode: "function isPalindrome(str) {\n  // Write your code here\n}"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "easy",
      title: "FizzBuzz",
      functionName: "fizzBuzz",
      question: "Write a program that prints numbers from 1 to n. For multiples of 3, print \"Fizz\" instead. For multiples of 5, print \"Buzz\" instead. For multiples of both, print \"FizzBuzz\".\n\nExample for n=5:\nOutput: [1, 2, \"Fizz\", 4, \"Buzz\"]",
      hint: "Use modulo operator (%) to check divisibility.",
      expectedTime: "5 min",
      topics: ["Loops", "Conditionals", "DSA"],
      testCases: [
        { input: "5", output: "[1,2,\"Fizz\",4,\"Buzz\"]" },
        { input: "3", output: "[1,2,\"Fizz\"]" },
        { input: "15", output: "[1,2,\"Fizz\",4,\"Buzz\",\"Fizz\",7,8,\"Fizz\",\"Buzz\",11,\"Fizz\",13,14,\"FizzBuzz\"]" }
      ],
      solutionApproach: "Simple loop with modulo checks",
      starterCode: "function fizzBuzz(n) {\n  // Write your code here\n}"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "medium",
      title: "Two Sum",
      functionName: "twoSum",
      question: "Given an array of integers nums and an integer target, return indices of the two numbers that add up to target.\n\nExample:\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1] (because nums[0] + nums[1] = 2 + 7 = 9)",
      hint: "Use a hash map to store value -> index. Check if (target - current) exists in map.",
      expectedTime: "10 min",
      topics: ["Arrays", "Hash Map", "DSA"],
      testCases: [
        { input: "[2,7,11,15], target=9", output: "[0,1]" },
        { input: "[3,2,4], target=6", output: "[1,2]" },
        { input: "[3,3], target=6", output: "[0,1]" }
      ],
      solutionApproach: "Hash map for O(n) time",
      starterCode: "function twoSum(nums, target) {\n  // Write your code here\n}"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "medium",
      title: "Valid Parentheses",
      functionName: "isValid",
      question: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n\nExample:\nInput: \"()[]{}\"\nOutput: true\nInput: \"(]\"\nOutput: false",
      hint: "Use a stack. Push opening brackets, pop and check for closing brackets.",
      expectedTime: "10 min",
      topics: ["Stack", "DSA"],
      testCases: [
        { input: "\"()[]{}\"", output: "true" },
        { input: "\"(]\"", output: "false" },
        { input: "\"([)]\"", output: "false" },
        { input: "\"{[]}\"", output: "true" }
      ],
      solutionApproach: "Stack-based matching",
      starterCode: "function isValid(s) {\n  // Write your code here\n}"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "medium",
      title: "Binary Search",
      functionName: "binarySearch",
      question: "Given a sorted array of integers nums and a target, return the index of target. If not found, return -1.\n\nExample:\nInput: nums = [-1,0,3,5,9,12], target = 9\nOutput: 4",
      hint: "Compare target with middle element. If target > middle, search right half. Else search left half.",
      expectedTime: "10 min",
      topics: ["Arrays", "Binary Search", "DAA"],
      testCases: [
        { input: "[-1,0,3,5,9,12], target=9", output: "4" },
        { input: "[-1,0,3,5,9,12], target=2", output: "-1" },
        { input: "[5], target=5", output: "0" }
      ],
      solutionApproach: "Binary search O(log n)",
      starterCode: "function binarySearch(nums, target) {\n  // Write your code here\n}"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "medium",
      title: "First Bad Version",
      functionName: "firstBadVersion",
      question: "You are a product manager. You have n versions [1, 2, ..., n]. You want to find the first bad version that causes all subsequent ones to be bad.\n\nYou have an API bool isBadVersion(version) which returns whether version is bad.\n\nExample:\nInput: n = 5, first bad = 4\nOutput: 4",
      hint: "Binary search. Find first index where isBadVersion returns true.",
      expectedTime: "10 min",
      topics: ["Binary Search", "DAA"],
      testCases: [
        { input: "5, firstBad=4", output: "4" },
        { input: "1, firstBad=1", output: "1" },
        { input: "10, firstBad=7", output: "7" }
      ],
      solutionApproach: "Modified binary search",
      starterCode: "function firstBadVersion(n) {\n  // Write your code here\n  // API: isBadVersion(version) returns boolean\n}"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "medium",
      title: "Factorial Number",
      question: "Write a function to calculate the factorial of a number n (n!).\n\nExample:\nInput: 5\nOutput: 120 (5! = 5×4×3×2×1 = 120)\n\nNote: 0! = 1 and 1! = 1",
      hint: "Use recursion or iterative approach. Multiply n * (n-1) * (n-2) * ... * 1.",
      expectedTime: "5 min",
      topics: ["Math", "Recursion", "DSA"],
      functionName: "factorial",
      testCases: [
        { input: "5", output: "120" },
        { input: "0", output: "1" },
        { input: "3", output: "6" },
        { input: "10", output: "3628800" }
      ],
      solutionApproach: "Iterative or recursive multiplication",
      starterCode: "function factorial(n) {\n  // Write your code here\n}"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "medium",
      title: "Fibonacci Number",
      question: "Write a function to return the nth Fibonacci number.\n\nThe Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13...\n\nExample:\nInput: 6\nOutput: 8 (F(6) = 8)",
      hint: "F(n) = F(n-1) + F(n-2). Base cases: F(0) = 0, F(1) = 1. Consider using iteration for better performance.",
      expectedTime: "7 min",
      topics: ["Math", "Dynamic Programming", "DSA"],
      functionName: "fibonacci",
      testCases: [
        { input: "6", output: "8" },
        { input: "0", output: "0" },
        { input: "1", output: "1" },
        { input: "10", output: "55" },
        { input: "20", output: "6765" }
      ],
      solutionApproach: "Dynamic programming or iterative approach",
      starterCode: "function fibonacci(n) {\n  // Write your code here\n}"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = technicalQuestions;
}
