
const roleQuestions = {
  "Software Engineer": [
    {
      id: 1,
      type: "coding",
      difficulty: "easy",
      title: "Two Sum (Array/Hashing)",
      question: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution.\n\nExample:\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].",
      hint: "Use a hash map to store complement values. Time: O(n), Space: O(n)",
      expectedTime: "10 min",
      topics: ["DSA", "Array", "Hash Table"],
      testCases: [
        { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
        { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
        { input: "nums = [3,3], target = 6", output: "[0,1]" }
      ],
      solutionApproach: "Store complement (target - current) in hash map"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "easy",
      title: "Reverse Linked List",
      question: "Given the head of a singly linked list, reverse the list, and return the reversed list.\n\nExample:\nInput: head = [1,2,3,4,5]\nOutput: [5,4,3,2,1]",
      hint: "Use three pointers: prev, current, next. Time: O(n), Space: O(1)",
      expectedTime: "10 min",
      topics: ["DSA", "Linked List"],
      testCases: [
        { input: "[1,2,3,4,5]", output: "[5,4,3,2,1]" },
        { input: "[1,2]", output: "[2,1]" },
        { input: "[]", output: "[]" }
      ],
      solutionApproach: "Iterative: store next, point current to prev, move all pointers forward"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "medium",
      title: "Valid Parentheses (Stack)",
      question: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
      hint: "Use a stack. Push opening brackets, pop and match for closing brackets.",
      expectedTime: "10 min",
      topics: ["DSA", "Stack", "String"],
      testCases: [
        { input: '"()"', output: "true" },
        { input: '"()[]{}"', output: "true" },
        { input: '"(]"', output: "false" },
        { input: '"([])"', output: "true" }
      ],
      solutionApproach: "Use stack to track opening brackets, pop and verify match for closing"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "medium",
      title: "Binary Tree Level Order Traversal (BFS)",
      question: "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).\n\nExample:\nInput: root = [3,9,20,null,null,15,7]\nOutput: [[3],[9,20],[15,7]]",
      hint: "Use a queue. Enqueue root, then process each level by tracking queue size.",
      expectedTime: "15 min",
      topics: ["DSA", "Tree", "BFS", "Queue"],
      testCases: [
        { input: "[3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" },
        { input: "[1]", output: "[[1]]" },
        { input: "[]", output: "[]" }
      ],
      solutionApproach: "BFS using queue: process all nodes at current level before next"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "medium",
      title: "Number of Islands (DFS/Graph)",
      question: "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
      hint: "Traverse grid, when you find '1', start DFS/BFS to mark entire island as visited.",
      expectedTime: "15 min",
      topics: ["DSA", "Graph", "DFS", "BFS", "Matrix"],
      testCases: [
        { input: "[[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]]", output: "3" },
        { input: "[[1,1,1],[0,1,0],[1,1,1]]", output: "1" },
        { input: "[[0,0,0],[0,0,0]]", output: "0" }
      ],
      solutionApproach: "DFS/BFS from each unvisited land cell, mark visited cells"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "medium",
      title: "Merge Intervals (Sorting)",
      question: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.\n\nExample:\nInput: intervals = [[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1,6],[8,10],[15,18]]",
      hint: "Sort by start time. If current overlaps with last merged, merge them.",
      expectedTime: "15 min",
      topics: ["DSA", "Array", "Sorting", "Greedy"],
      testCases: [
        { input: "[[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" },
        { input: "[[1,4],[4,5]]", output: "[[1,5]]" },
        { input: "[[1,4],[0,4]]", output: "[[0,4]]" }
      ],
      solutionApproach: "Sort by start, then merge overlapping intervals"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "medium",
      title: "LRU Cache (Design)",
      question: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.\n\nImplement the LRUCache class:\n- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.\n- int get(int key) Return the value of the key if the key exists, otherwise return -1.\n- void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.\n\nThe functions get and put must each run in O(1) average time complexity.",
      hint: "Combine HashMap with Doubly Linked List for O(1) get and put.",
      expectedTime: "20 min",
      topics: ["DSA", "Design", "Hash Table", "Linked List"],
      testCases: [
        { input: 'LRUCache(2), put(1,1), put(2,2), get(1), put(3,3), get(2)', output: "1, -1" },
        { input: 'LRUCache(1), put(2,1), get(2), put(3,3), get(2)', output: "1, -1" }
      ],
      solutionApproach: "HashMap for O(1) access + Doubly Linked List for O(1) move/remove"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "hard",
      title: "Longest Increasing Subsequence (DP)",
      question: "Given an integer array nums, return the length of the longest strictly increasing subsequence.\n\nExample:\nInput: nums = [10,9,2,5,3,7,101,18]\nOutput: 4\nExplanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.",
      hint: "Use DP: dp[i] = length of LIS ending at i. Or use binary search for O(n log n).",
      expectedTime: "20 min",
      topics: ["DSA", "Dynamic Programming", "Binary Search"],
      testCases: [
        { input: "[10,9,2,5,3,7,101,18]", output: "4" },
        { input: "[0,1,0,3,2,3]", output: "4" },
        { input: "[7,7,7,7,7,7,7]", output: "1" }
      ],
      solutionApproach: "DP: dp[i] = max(dp[j] + 1) for all j < i where nums[j] < nums[i]"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "hard",
      title: "Word Break (DP/Trie)",
      question: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.\n\nNote that the same word in the dictionary may be reused multiple times in the segmentation.\n\nExample:\nInput: s = \"leetcode\", wordDict = [\"leet\",\"code\"]\nOutput: true\nExplanation: Return true because \"leetcode\" can be segmented as \"leet code\".",
      hint: "DP: dp[i] = true if s[0:i] can be segmented. Check all possible endings.",
      expectedTime: "20 min",
      topics: ["DSA", "Dynamic Programming", "String", "Trie"],
      testCases: [
        { input: 's = "leetcode", wordDict = ["leet","code"]', output: "true" },
        { input: 's = "applepenapple", wordDict = ["apple","pen"]', output: "true" },
        { input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', output: "false" }
      ],
      solutionApproach: "DP: dp[i] = OR(dp[j] && s[j:i] in dict) for all j < i"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "hard",
      title: "Trapping Rain Water (Two Pointers)",
      question: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.\n\nExample:\nInput: height = [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6\nExplanation: The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped.",
      hint: "Use two pointers or precompute left max and right max for each position.",
      expectedTime: "25 min",
      topics: ["DSA", "Array", "Two Pointers", "DP"],
      testCases: [
        { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
        { input: "[4,2,0,3,2,5]", output: "9" },
        { input: "[1,0,2]", output: "1" }
      ],
      solutionApproach: "Two pointers: water at i = min(leftMax, rightMax) - height[i]"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "medium",
      title: "Course Schedule (Topological Sort)",
      question: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.\n\nFor example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.\nReturn true if you can finish all courses. Otherwise, return false.",
      hint: "Detect cycle in directed graph using DFS or Kahn's Algorithm (BFS topological sort).",
      expectedTime: "20 min",
      topics: ["DSA", "Graph", "Topological Sort", "DFS", "BFS"],
      testCases: [
        { input: "numCourses = 2, prerequisites = [[1,0]]", output: "true" },
        { input: "numCourses = 2, prerequisites = [[1,0],[0,1]]", output: "false" },
        { input: "numCourses = 5, prerequisites = [[1,4],[2,4],[3,1],[3,2]]", output: "true" }
      ],
      solutionApproach: "Build graph, detect cycle using DFS with visited states or Kahn's algorithm"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "medium",
      title: "Find Median from Data Stream (Heap)",
      question: "The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.\n\nImplement the MedianFinder class:\n- MedianFinder() initializes the MedianFinder object.\n- void addNum(int num) adds the integer num from the data stream to the data structure.\n- double findMedian() returns the median of all elements so far.",
      hint: "Use two heaps: max heap for lower half, min heap for upper half. Balance them.",
      expectedTime: "20 min",
      topics: ["DSA", "Heap", "Design", "Data Stream"],
      testCases: [
        { input: "addNum(1), addNum(2), findMedian(), addNum(3), findMedian()", output: "1.5, 2.0" },
        { input: "addNum(-1), findMedian(), addNum(-2), findMedian(), addNum(-3), findMedian()", output: "-1.0, -1.5, -2.0" }
      ],
      solutionApproach: "Two heaps: maxHeap (lower half), minHeap (upper half), keep sizes balanced"
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "medium",
      title: "OS: Process Synchronization & Deadlock",
      question: "Explain process synchronization in operating systems. What are critical sections, race conditions, and how do semaphores/mutexes solve these problems? Also explain the four necessary conditions for deadlock and strategies to prevent/deadlock avoidance.",
      hint: "Discuss mutual exclusion, progress, bounded wait. Explain Coffman conditions for deadlock.",
      expectedPoints: ["Critical section", "Race condition", "Mutex/Semaphore", "Deadlock 4 conditions", "Banker's algorithm", "Deadlock prevention strategies"],
      topics: ["OS", "Process Management", "Synchronization"]
    },
    {
      id: 14,
      type: "theoretical",
      difficulty: "medium",
      title: "OS: Memory Management & Paging",
      question: "Explain virtual memory, paging, and segmentation in operating systems. How does the MMU translate virtual addresses to physical addresses? Discuss page faults, TLB, and page replacement algorithms (FIFO, LRU, Optimal).",
      hint: "Cover address translation, page tables, TLB caching, and page fault handling.",
      expectedPoints: ["Virtual memory", "Paging vs Segmentation", "MMU", "Page table", "TLB", "Page fault", "Page replacement algorithms", "Belady's anomaly"],
      topics: ["OS", "Memory Management", "Virtual Memory"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "medium",
      title: "DAA: Divide and Conquer vs Dynamic Programming",
      question: "Compare and contrast Divide and Conquer with Dynamic Programming. Explain when to use each approach with examples. Analyze time complexity of Merge Sort vs Quick Sort, and compare with DP approaches like Fibonacci and Matrix Chain Multiplication.",
      hint: "Discuss overlapping subproblems, optimal substructure, memoization vs tabulation.",
      expectedPoints: ["Divide and Conquer characteristics", "DP characteristics", "Overlapping subproblems", "Optimal substructure", "Merge Sort O(n log n)", "Quick Sort O(n log n) avg", "Fibonacci DP", "Matrix Chain Multiplication DP"],
      topics: ["DAA", "Algorithms", "Time Complexity", "Dynamic Programming"]
    },
    {
      id: 16,
      type: "theoretical",
      difficulty: "medium",
      title: "DBMS: ACID Properties & Normalization",
      question: "Explain ACID properties in database transactions with real-world examples. What are the different normal forms (1NF, 2NF, 3NF, BCNF) and why is normalization important? Discuss the trade-offs between normalization and performance.",
      hint: "Cover all 4 ACID properties and normalization forms with examples of violations.",
      expectedPoints: ["Atomicity", "Consistency", "Isolation", "Durability", "1NF", "2NF", "3NF", "BCNF", "Functional dependencies", "Denormalization trade-offs"],
      topics: ["DBMS", "Transactions", "Normalization"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "hard",
      title: "DBMS: Indexing, B+ Trees & Query Optimization",
      question: "Explain different types of database indexes (B-Tree, B+ Tree, Hash, Bitmap). How does a B+ Tree index work and why is it preferred for database indexing? Discuss query optimization techniques: cost-based optimization, join algorithms (Nested Loop, Hash Join, Merge Join), and execution plans.",
      hint: "Compare B-Tree vs B+ Tree, discuss clustering vs non-clustering indexes.",
      expectedPoints: ["B-Tree vs B+ Tree", "B+ Tree properties", "Clustered index", "Non-clustered index", "Query optimizer", "Join algorithms", "Cost estimation", "Execution plan"],
      topics: ["DBMS", "Indexing", "Query Optimization", "B+ Tree"]
    },
    {
      id: 18,
      type: "theoretical",
      difficulty: "medium",
      title: "Computer Networks: TCP/IP Model & HTTP/HTTPS",
      question: "Explain the TCP/IP protocol stack layers with their functions. How does TCP establish a connection (3-way handshake)? Compare TCP and UDP. Explain how HTTPS works with SSL/TLS handshake.",
      hint: "Cover all 5 layers, port numbers, flow control, congestion control, SSL/TLS handshake steps.",
      expectedPoints: ["TCP/IP 5 layers", "Application layer protocols", "TCP 3-way handshake", "TCP vs UDP", "Flow control", "Congestion control", "SSL/TLS handshake", "HTTPS port 443"],
      topics: ["Networks", "TCP/IP", "HTTP/HTTPS", "Transport Layer"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "hard",
      title: "OOP: SOLID Principles & Design Patterns",
      question: "Explain the SOLID principles of Object-Oriented Design with code examples. Also explain 3 common design patterns (Singleton, Factory, Observer) with use cases and implementation approaches.",
      hint: "Cover all 5 SOLID principles and implement/ explain at least 3 design patterns.",
      expectedPoints: ["Single Responsibility", "Open/Closed", "Liskov Substitution", "Interface Segregation", "Dependency Inversion", "Singleton pattern", "Factory pattern", "Observer pattern", "Pattern use cases"],
      topics: ["OOP", "SOLID", "Design Patterns", "Software Engineering"]
    },
    {
      id: 20,
      type: "coding",
      difficulty: "hard",
      title: "Serialize and Deserialize Binary Tree",
      question: "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.\n\nDesign an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.",
      hint: "Use preorder traversal with null markers, or use BFS level-order.",
      expectedTime: "25 min",
      topics: ["DSA", "Tree", "Design", "Serialization"],
      testCases: [
        { input: "root = [1,2,3,null,null,4,5]", output: "serialized string -> same tree" },
        { input: "root = []", output: "serialized string -> empty tree" },
        { input: "root = [1]", output: "serialized string -> single node tree" }
      ],
      solutionApproach: "Preorder: node,null for empty, recurse left and right. Deserialize using queue."
    }
  ],

  "Frontend Developer": [
    {
      id: 1,
      type: "coding",
      difficulty: "easy",
      title: "Debounce Function Implementation",
      question: "Implement a debounce function that delays invoking 'func' until after 'wait' milliseconds have elapsed since the last time the debounced function was invoked. The function should also support immediate execution on the leading edge if 'immediate' is true.\n\nExample:\nconst debounced = debounce(() => console.log('Hello'), 1000);\ndebounced();\ndebounced();\ndebounced(); // Only this should execute after 1 second",
      hint: "Use setTimeout and clearTimeout. Track the timer ID and cancel previous calls.",
      expectedTime: "10 min",
      topics: ["JavaScript", "Closures", "Async"],
      testCases: [
        { input: "debounce(console.log, 1000) called 3 times rapidly", output: "1 execution after 1s" },
        { input: "debounce(fn, 500, true) immediate mode", output: "executes immediately on first call" }
      ],
      solutionApproach: "Store timeout ID, clear it on each call, set new timeout"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "easy",
      title: "Deep Clone an Object",
      question: "Write a function to create a deep clone of a JavaScript object that handles:\n1. Primitive values\n2. Nested objects\n3. Arrays\n4. Circular references (use WeakMap to track)\n\nExample:\nconst obj = { a: 1, b: { c: 2 }, d: [3, 4] };\nconst clone = deepClone(obj);\nclone.b.c = 5; // Should not affect obj.b.c",
      hint: "Use WeakMap to track visited objects for circular reference handling.",
      expectedTime: "15 min",
      topics: ["JavaScript", "Objects", "Recursion"],
      testCases: [
        { input: "{ a: 1, b: { c: 2 } }", output: "deep copy with no shared references" },
        { input: "{ arr: [1, 2, { x: 3 }] }", output: "nested arrays and objects cloned" },
        { input: "circular reference object", output: "handles without infinite loop" }
      ],
      solutionApproach: "Recursively clone, use WeakMap to detect circular refs"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "medium",
      title: "Promise.all Polyfill",
      question: "Implement Promise.all that takes an array of promises and returns a promise that:\n1. Resolves when all input promises resolve (with array of results)\n2. Rejects immediately if any promise rejects\n3. Handles empty array input\n4. Preserves result order\n\nExample:\nPromise.all([Promise.resolve(1), Promise.resolve(2)])\n  .then(results => console.log(results)); // [1, 2]",
      hint: "Track resolved count and results array. Use Promise constructor.",
      expectedTime: "15 min",
      topics: ["JavaScript", "Promises", "Async"],
      testCases: [
        { input: "[Promise.resolve(1), Promise.resolve(2)]", output: "[1, 2]" },
        { input: "[Promise.resolve(1), Promise.reject('err')]", output: "rejected with 'err'" },
        { input: "[]", output: "[]" }
      ],
      solutionApproach: "Wrap in new Promise, track completions, resolve when all done"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "medium",
      title: "Virtual DOM Diff Algorithm",
      question: "Implement a simplified virtual DOM diffing algorithm that compares two virtual DOM trees (oldVNode and newVNode) and returns a list of patches needed to transform the old tree to the new tree.\n\nEach vnode has: { tag, props, children, text }.\nReturn patches as: [{ type: 'REPLACE'|'REMOVE'|'UPDATE'|'CREATE', node, newNode }].",
      hint: "Compare nodes recursively. Track changes by node type, props, and children.",
      expectedTime: "25 min",
      topics: ["Algorithms", "DOM", "Diffing"],
      testCases: [
        { input: "same tree structure", output: "empty patches or minimal updates" },
        { input: "different tag types", output: "REPLACE patch" },
        { input: "different props only", output: "UPDATE patch for props" }
      ],
      solutionApproach: "Recursive comparison: check tag, then props, then children recursively"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "medium",
      title: "Infinite Scroll with Intersection Observer",
      question: "Implement an infinite scroll component using the Intersection Observer API.\nRequirements:\n1. Load more data when user scrolls near bottom\n2. Show loading indicator while fetching\n3. Handle error states\n4. Support threshold configuration\n\nThe component should accept: loadMore callback, threshold (default 0.8), hasMore boolean.",
      hint: "Use Intersection Observer to detect when sentinel element enters viewport.",
      expectedTime: "20 min",
      topics: ["DOM", "Browser API", "Performance"],
      testCases: [
        { input: "scroll to bottom", output: "loadMore called" },
        { input: "hasMore = false", output: "no loadMore calls" },
        { input: "network error", output: "error state displayed" }
      ],
      solutionApproach: "Create observer, watch sentinel element, trigger load when intersecting"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "medium",
      title: "Event Delegation Implementation",
      question: "Implement event delegation for a dynamic list where items can be added/removed. Create a function that:\n1. Attaches a single event listener to a parent element\n2. Handles events from dynamically added child elements\n3. Supports event type configuration\n4. Provides event.target information to handler\n\nExample:\ndelegateEvents(container, 'click', '.item', (e, target) => {\n  console.log('Clicked:', target);\n});",
      hint: "Check event.target matches selector using matches() or closest().",
      expectedTime: "15 min",
      topics: ["DOM", "Events", "Event Delegation"],
      testCases: [
        { input: "click on child element", output: "handler called with correct target" },
        { input: "click outside target selector", output: "handler not called" },
        { input: "dynamically added element clicked", output: "handler works" }
      ],
      solutionApproach: "Single listener on parent, check e.target.matches(selector), call handler"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "medium",
      title: "Virtual List (Windowing)",
      question: "Implement a virtual list that renders only visible items for a list with 100,000 elements.\nRequirements:\n1. Calculate visible range based on scroll position\n2. Render only items in viewport + buffer\n3. Maintain scroll position\n4. Support variable item heights\n5. Smooth scrolling\n\nProps: itemCount, itemHeight, renderItem callback, overscan (buffer size).",
      hint: "Calculate start/end indices from scrollTop. Use transform for positioning.",
      expectedTime: "30 min",
      topics: ["Performance", "DOM", "Optimization"],
      testCases: [
        { input: "scroll to middle of 100k items", output: "only ~20 items rendered" },
        { input: "fast scroll", output: "maintains correct position" },
        { input: "variable heights", output: "correct positioning" }
      ],
      solutionApproach: "Calculate visible range, slice data, position with transform: translateY"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "hard",
      title: "Drag and Drop Kanban Board",
      question: "Implement a drag-and-drop Kanban board with multiple columns using HTML5 Drag and Drop API.\nRequirements:\n1. Drag items within a column (reorder)\n2. Drag items between columns\n3. Visual feedback during drag\n4. Update state on drop\n5. Handle edge cases (empty columns, invalid drops)\n\nData structure: { columns: [{ id, title, items: [{ id, content }] }] }",
      hint: "Use dragstart, dragover, drop events. Track drag source and target.",
      expectedTime: "35 min",
      topics: ["DOM", "Events", "UX", "HTML5 API"],
      testCases: [
        { input: "drag item to different column", output: "item moved, state updated" },
        { input: "drag item within column", output: "items reordered" },
        { input: "cancel drag", output: "no state change" }
      ],
      solutionApproach: "Track drag source, allow drop zones, update state on drop"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "hard",
      title: "Client-Side Router Implementation",
      question: "Implement a minimal client-side router for a Single Page Application with:\n1. Hash-based or History API routing\n2. Route matching with parameters (/user/:id)\n3. Route guards (beforeEnter hooks)\n4. 404 handling\n5. Programmatic navigation\n\nAPI: router.addRoute(path, component, beforeEnter), router.navigate(path), router.start()",
      hint: "Listen to hashchange/popstate. Match routes with regex or path-to-regexp.",
      expectedTime: "30 min",
      topics: ["JavaScript", "SPA", "Routing", "Browser API"],
      testCases: [
        { input: "navigate('/user/123')", output: "User component rendered with id=123" },
        { input: "route guard returns false", output: "navigation blocked" },
        { input: "unknown route", output: "404 component" }
      ],
      solutionApproach: "Parse URL, match against routes, extract params, render component"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "hard",
      title: "State Management Library (Mini-Redux)",
      question: "Implement a minimal Redux-like state management library with:\n1. createStore(reducer, initialState) - returns { getState, dispatch, subscribe }\n2. combineReducers(reducers) - combine multiple reducers\n3. applyMiddleware(...middlewares) - support middleware chain\n4. Reducers must be pure functions\n\nMiddleware signature: store => next => action => { ... }",
      hint: "Use closure for state. Notify subscribers on every dispatch. Middleware composes left-to-right.",
      expectedTime: "35 min",
      topics: ["JavaScript", "State Management", "Functional Programming"],
      testCases: [
        { input: "dispatch action", output: "state updated, subscribers notified" },
        { input: "multiple reducers", output: "combined state shape correct" },
        { input: "middleware chain", output: "middlewares execute in order" }
      ],
      solutionApproach: "Store holds state + reducer. Dispatch calls reducer, notifies subscribers."
    },
    {
      id: 11,
      type: "coding",
      difficulty: "medium",
      title: "Type-Ahead Search with Caching",
      question: "Build a type-ahead search component with:\n1. Debounced input handling (300ms)\n2. Loading state indication\n3. Result caching to prevent duplicate requests\n4. Keyboard navigation (arrow keys, enter, escape)\n5. Highlight matching text\n\nAPI: fetchSuggestions(query) returns Promise<Array>.",
      hint: "Combine debounce, fetch, and LRU cache. Handle keyboard with tabindex.",
      expectedTime: "25 min",
      topics: ["JavaScript", "UX", "Async", "Caching"],
      testCases: [
        { input: "type 'abc' rapidly", output: "only one API call after debounce" },
        { input: "type 'abc', clear, type 'abc'", output: "cache hit, no API call" },
        { input: "press down arrow", output: "highlight moves to first result" }
      ],
      solutionApproach: "Debounce input, check cache, fetch if needed, handle keyboard nav"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "medium",
      title: "Image Lazy Loading with Blur-Up",
      question: "Implement an image component with lazy loading and blur-up placeholder effect:\n1. Load low-quality placeholder immediately\n2. Intersection Observer to detect when in viewport\n3. Load full image only when near viewport\n4. Fade from blur to clear when loaded\n5. Handle load errors gracefully\n\nProps: src, placeholderSrc, alt, threshold=0.1",
      hint: "Use Intersection Observer. Two images: small blurred placeholder, full image fades in.",
      expectedTime: "20 min",
      topics: ["Performance", "DOM", "Images", "UX"],
      testCases: [
        { input: "image enters viewport", output: "full image starts loading" },
        { input: "full image loads", output: "fade transition from blur to clear" },
        { input: "image fails to load", output: "error state displayed" }
      ],
      solutionApproach: "Observer triggers load, onload event triggers opacity transition"
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "medium",
      title: "JavaScript: Event Loop & Concurrency Model",
      question: "Explain JavaScript's event loop, call stack, task queue, and microtask queue in detail. What is the difference between macrotasks (setTimeout) and microtasks (Promises)? Provide execution order examples. How does async/await work internally?",
      hint: "Cover single-threaded nature, non-blocking I/O, and the event loop phases.",
      expectedPoints: ["Call stack", "Event loop", "Task queue (macrotasks)", "Microtask queue", "setTimeout vs Promise.then", "Execution order examples", "async/await transformation", "setImmediate vs process.nextTick"],
      topics: ["JavaScript", "Event Loop", "Async Programming"]
    },
    {
      id: 14,
      type: "theoretical",
      difficulty: "medium",
      title: "Browser: Rendering Pipeline & Performance",
      question: "Explain the browser rendering pipeline from HTML to pixels on screen. What are DOM, CSSOM, Render Tree, Layout, Paint, and Composite phases? What causes reflow and repaint? How can you optimize for 60fps?",
      hint: "Discuss critical rendering path, layout thrashing, and composite layers.",
      expectedPoints: ["DOM construction", "CSSOM construction", "Render Tree", "Layout (Reflow)", "Paint", "Composite", "Reflow vs Repaint", "will-change property", "requestAnimationFrame", "Performance optimization strategies"],
      topics: ["Browser", "Performance", "Rendering"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "medium",
      title: "CSS: Layout Algorithms & Specificity",
      question: "Explain CSS layout algorithms: Normal Flow, Flexbox, Grid, and Positioning. How does CSS specificity work (inline, IDs, classes, elements)? What is the cascade and inheritance? Explain z-index and stacking context.",
      hint: "Cover all layout modes and the specificity calculation (0,0,0,0 format).",
      expectedPoints: ["Normal Flow", "Flexbox", "Grid", "Positioning (static, relative, absolute, fixed, sticky)", "Specificity calculation", "!important", "Cascade and inheritance", "Stacking context", "z-index", "Containing block"],
      topics: ["CSS", "Layout", "Styling"]
    },
    {
      id: 16,
      type: "theoretical",
      difficulty: "medium",
      title: "Web Security: CORS, XSS, CSRF Protection",
      question: "Explain Cross-Origin Resource Sharing (CORS) - preflight requests, simple requests, headers. How do you prevent XSS (Cross-Site Scripting) attacks? What are CSRF tokens and SameSite cookies? Explain Content Security Policy (CSP).",
      hint: "Cover all security mechanisms with practical implementation examples.",
      expectedPoints: ["CORS headers (Access-Control-Allow-Origin)", "Preflight requests", "Simple vs Preflight", "XSS types (Stored, Reflected, DOM)", "Sanitization", "innerHTML vs textContent", "CSRF tokens", "SameSite cookies", "CSP directives", "HTTPS importance"],
      topics: ["Security", "Web", "CORS", "XSS", "CSRF"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "hard",
      title: "React: Reconciliation, Hooks & Performance",
      question: "Explain React's reconciliation algorithm (diffing, keys, fiber architecture). How do hooks work internally (useState, useEffect, useMemo, useCallback)? What causes unnecessary re-renders and how do you optimize? Explain React.memo, useMemo, useCallback.",
      hint: "Cover virtual DOM diffing, hook rules, closure stale state problem, and optimization patterns.",
      expectedPoints: ["Virtual DOM reconciliation", "Key prop importance", "React Fiber", "Hooks rules", "useState closure", "useEffect dependency array", "Stale closures", "React.memo", "useMemo vs useCallback", "React DevTools profiling"],
      topics: ["React", "Performance", "Hooks", "Architecture"]
    },
    {
      id: 18,
      type: "theoretical",
      difficulty: "medium",
      title: "Web Performance: Metrics & Optimization",
      question: "Explain Core Web Vitals (LCP, FID, CLS) and other performance metrics. What are code splitting, lazy loading, tree shaking? How does browser caching work (Cache-Control, ETag)? Explain critical CSS and resource hints (preload, prefetch).",
      hint: "Cover loading performance, runtime performance, and caching strategies.",
      expectedPoints: ["Core Web Vitals (LCP, FID, CLS)", "TTFB, FCP", "Code splitting", "Lazy loading", "Tree shaking", "Cache-Control headers", "ETag", "Critical CSS", "Preload/Prefetch", "Service Workers caching", "Image optimization"],
      topics: ["Performance", "Web Vitals", "Optimization"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "medium",
      title: "HTTP/Network: Methods, Status Codes & Caching",
      question: "Compare HTTP methods: GET, POST, PUT, PATCH, DELETE. What is idempotency and safety? Explain common status codes (200, 201, 204, 301, 302, 400, 401, 403, 404, 500). How does HTTP/2 differ from HTTP/1.1? Explain REST API design principles.",
      hint: "Cover HTTP semantics, status codes categories, and REST constraints.",
      expectedPoints: ["GET vs POST", "Idempotency", "Safe methods", "Status codes 2xx/3xx/4xx/5xx", "HTTP/2 multiplexing", "REST constraints (Stateless, Cacheable)", "Resource naming", "Status code usage", "Error handling"],
      topics: ["HTTP", "REST", "Networking", "API Design"]
    },
    {
      id: 20,
      type: "theoretical",
      difficulty: "hard",
      title: "Frontend Architecture: Design Systems & Micro-frontends",
      question: "How would you design and maintain a component library/design system? Discuss: design tokens, theming (CSS variables, context), component composition, documentation (Storybook), versioning, and testing. What are micro-frontends and when would you use them?",
      hint: "Cover atomic design, CSS-in-JS vs CSS modules, and module federation.",
      expectedPoints: ["Design tokens", "CSS variables/theming", "Component composition patterns", "Compound components", "Storybook documentation", "Semantic versioning", "Visual regression testing", "Micro-frontends", "Module Federation", "Integration approaches (iframe, web components, module federation)"],
      topics: ["Architecture", "Design Systems", "Frontend Engineering"]
    }
  ],

  "Backend Developer": [
    {
      id: 1,
      type: "coding",
      difficulty: "easy",
      title: "Rate Limiter (Token Bucket)",
      question: "Implement a rate limiter using the token bucket algorithm that allows max N requests per minute per user.\n\nRequirements:\n1. Token bucket with configurable capacity and refill rate\n2. Thread-safe implementation\n3. Methods: allowRequest(userId) returns boolean\n4. Handle memory cleanup for inactive users\n\nExample:\nconst limiter = new RateLimiter(10, 60); // 10 requests per 60 seconds\nlimiter.allowRequest('user1'); // true (first request)\n// ... 10 more requests ...\nlimiter.allowRequest('user1'); // false (bucket empty)",
      hint: "Store tokens and last refill timestamp per user. Use hash map for O(1) access.",
      expectedTime: "15 min",
      topics: ["DSA", "System Design", "Algorithms"],
      testCases: [
        { input: "new RateLimiter(5, 60), 5 requests from user1", output: "[true, true, true, true, true]" },
        { input: "6th request immediately after 5", output: "false" },
        { input: "request after refill period", output: "true" }
      ],
      solutionApproach: "Track tokens and lastRefill per user, calculate elapsed time, refill tokens accordingly"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "easy",
      title: "Two Sum (Array/Hashing)",
      question: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution.\n\nExample:\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].",
      hint: "Use a hash map to store complement values. Time: O(n), Space: O(n)",
      expectedTime: "10 min",
      topics: ["DSA", "Array", "Hash Table"],
      testCases: [
        { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
        { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
        { input: "nums = [3,3], target = 6", output: "[0,1]" }
      ],
      solutionApproach: "Store complement (target - current) in hash map"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "easy",
      title: "Valid Parentheses (Stack)",
      question: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
      hint: "Use a stack. Push opening brackets, pop and match for closing brackets.",
      expectedTime: "10 min",
      topics: ["DSA", "Stack", "String"],
      testCases: [
        { input: '"()"', output: "true" },
        { input: '"()[]{}"', output: "true" },
        { input: '"(]"', output: "false" },
        { input: '"([])"', output: "true" }
      ],
      solutionApproach: "Use stack to track opening brackets, pop and verify match for closing"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "medium",
      title: "Database Connection Pool",
      question: "Design a database connection pool with:\n1. Configurable max connections\n2. Connection timeout handling\n3. Health checks (validate connection before use)\n4. Thread-safe acquire/release\n5. Connection leak detection\n\nAPI: acquireConnection(), releaseConnection(conn), getPoolStats()",
      hint: "Use queue for available connections, Set for in-use. Track timestamps for timeouts.",
      expectedTime: "25 min",
      topics: ["System Design", "Databases", "Concurrency"],
      testCases: [
        { input: "max 3 connections, acquire 3", output: "3 connections acquired" },
        { input: "acquire 4th (timeout 1s)", output: "timeout error" },
        { input: "release and reacquire", output: "same connection reused" }
      ],
      solutionApproach: "Queue for available, track in-use with timestamps, validate before return"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "medium",
      title: "LRU Cache Implementation",
      question: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.\n\nImplement the LRUCache class:\n- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.\n- int get(int key) Return the value of the key if the key exists, otherwise return -1.\n- void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.\n\nThe functions get and put must each run in O(1) average time complexity.",
      hint: "Combine HashMap with Doubly Linked List for O(1) get and put.",
      expectedTime: "20 min",
      topics: ["DSA", "Design", "Hash Table", "Linked List"],
      testCases: [
        { input: 'LRUCache(2), put(1,1), put(2,2), get(1), put(3,3), get(2)', output: "1, -1" },
        { input: 'LRUCache(1), put(2,1), get(2), put(3,3), get(2)', output: "1, -1" }
      ],
      solutionApproach: "HashMap for O(1) access + Doubly Linked List for O(1) move/remove"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "medium",
      title: "URL Shortener Service",
      question: "Design and implement a URL shortening service with:\n1. encode(longUrl) -> shortCode (6 characters, base62)\n2. decode(shortCode) -> longUrl\n3. Collision handling\n4. Expiration support (TTL)\n5. Analytics tracking (click count)\n\nExample:\nconst service = new URLShortener();\nconst short = service.encode('https://example.com/very/long/url'); // 'abc123'\nconst original = service.decode('abc123'); // 'https://example.com/very/long/url'",
      hint: "Use base62 encoding of auto-increment ID or hash. Store mapping in hash map.",
      expectedTime: "20 min",
      topics: ["System Design", "Hashing", "Databases"],
      testCases: [
        { input: "encode('https://example.com')", output: "6-char short code" },
        { input: "decode(shortCode)", output: "original URL" },
        { input: "encode same URL twice", output: "same short code (idempotent)" }
      ],
      solutionApproach: "Base62 encode of counter or hash, store bidirectional mapping"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "medium",
      title: "Circuit Breaker Pattern",
      question: "Implement a circuit breaker pattern with three states:\n1. CLOSED - requests pass through, track failures\n2. OPEN - requests fail fast, no calls to service\n3. HALF_OPEN - allow limited requests to test recovery\n\nConfiguration: failureThreshold, recoveryTimeout, halfOpenMaxCalls\n\nExample:\nconst cb = new CircuitBreaker({ failureThreshold: 5, recoveryTimeout: 30000 });\nconst result = await cb.execute(async () => await fetchData());",
      hint: "Track failure count and timestamp. Transition: CLOSED->OPEN on failures, OPEN->HALF_OPEN after timeout.",
      expectedTime: "25 min",
      topics: ["Design Patterns", "Resilience", "System Design"],
      testCases: [
        { input: "5 failures in a row", output: "circuit opens, fast fail" },
        { input: "call after timeout", output: "half-open, allows test request" },
        { input: "success in half-open", output: "circuit closes" }
      ],
      solutionApproach: "State machine: track failures, timestamps, transition between states"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "hard",
      title: "Distributed Lock with Redis",
      question: "Implement a distributed lock using Redis with:\n1. acquireLock(lockKey, ttl) - returns lock token or null\n2. releaseLock(lockKey, token) - only release if token matches (prevent accidental release)\n3. Automatic expiration (prevent deadlocks)\n4. Support for lock extension (keepalive)\n\nUse Redis commands: SET key value NX EX (atomic set-if-not-exists with expiry)",
      hint: "Use unique token per lock acquisition. SET NX EX for atomic acquire with TTL.",
      expectedTime: "30 min",
      topics: ["Distributed Systems", "Redis", "Concurrency"],
      testCases: [
        { input: "acquireLock('user:123', 10)", output: "token string" },
        { input: "acquireLock same key again", output: "null (already locked)" },
        { input: "release with wrong token", output: "false (not released)" },
        { input: "release with correct token", output: "true" }
      ],
      solutionApproach: "Generate unique token, SET NX EX to acquire, verify token on release"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "hard",
      title: "Consistent Hashing",
      question: "Implement consistent hashing for distributed caching with:\n1. addNode(nodeId) - add server node\n2. removeNode(nodeId) - remove server node\n3. getNode(key) - return responsible node for key\n4. Virtual nodes (replicas) for better distribution\n\nHash ring concept: Map nodes and keys to positions on a circle. Key is assigned to next node clockwise.",
      hint: "Use sorted array/binary search for O(log n) lookup. Multiple virtual nodes per physical node.",
      expectedTime: "35 min",
      topics: ["Distributed Systems", "Algorithms", "Hashing"],
      testCases: [
        { input: "add nodes A,B,C, getNode for keys", output: "consistent node assignment" },
        { input: "remove node B", output: "only B's keys remapped" },
        { input: "add node D", output: "portion of keys move to D" }
      ],
      solutionApproach: "Sorted hash ring, binary search for next node, virtual nodes for distribution"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "hard",
      title: "Pagination with Cursor",
      question: "Implement cursor-based pagination for a large dataset.\n\nRequirements:\n1. encodeCursor(data) - encode last item to opaque cursor\n2. decodeCursor(cursor) - decode to filter parameters\n3. fetchNextPage(cursor, limit) - fetch next page\n4. Stable ordering (handle new inserts during pagination)\n\nAdvantage over offset: O(1) performance regardless of page number, handles new records gracefully.",
      hint: "Encode last seen values (id, timestamp) in base64. Use WHERE clause with these values.",
      expectedTime: "25 min",
      topics: ["Databases", "API Design", "Performance"],
      testCases: [
        { input: "fetch page 1, get cursor", output: "has next page, valid cursor" },
        { input: "fetch page 2 using cursor", output: "correct next items" },
        { input: "new record inserted during pagination", output: "no duplicates, no missing items" }
      ],
      solutionApproach: "Encode last item's sort fields, use in WHERE clause for efficient next page"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "medium",
      title: "Retry with Exponential Backoff",
      question: "Implement a retry mechanism with exponential backoff and jitter for resilient API calls.\n\nConfiguration:\n- maxRetries: maximum number of retry attempts\n- baseDelayMs: initial delay between retries\n- maxDelayMs: maximum delay cap\n- retryableErrors: function to determine if error is retryable\n- onRetry: callback for retry attempts\n\nBackoff formula: delay = min(baseDelay * 2^attempt + randomJitter, maxDelay)",
      hint: "Use exponential backoff to avoid thundering herd. Add jitter to spread retries.",
      expectedTime: "20 min",
      topics: ["Resilience", "Algorithms", "Networking"],
      testCases: [
        { input: "succeeds on first try", output: "no retries, immediate result" },
        { input: "fails 2 times then succeeds", output: "retries with increasing delays" },
        { input: "fails all retries", output: "throws after maxRetries" },
        { input: "non-retryable error", output: "fails immediately" }
      ],
      solutionApproach: "Catch errors, check if retryable, calculate delay with jitter, sleep, retry"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "hard",
      title: "Leaderboard with Redis",
      question: "Design a real-time leaderboard for millions of players using Redis Sorted Sets.\n\nRequirements:\n1. updateScore(playerId, score) - add/update player score\n2. getTopK(k) - get top K players with scores\n3. getPlayerRank(playerId) - get player's current rank\n4. getNearbyPlayers(playerId, range) - get players around given player (for leaderboard UI)\n\nUse Redis ZADD, ZREVRANGE, ZREVRANK, ZRANGEBYSCORE commands.",
      hint: "Redis Sorted Set (ZSET) provides O(log n) insertion and O(log n + k) range queries.",
      expectedTime: "30 min",
      topics: ["System Design", "Redis", "Databases", "Performance"],
      testCases: [
        { input: "updateScore for 1M players", output: "O(log n) per update" },
        { input: "getTopK(10)", output: "top 10 players sorted by score" },
        { input: "getPlayerRank('player123')", output: "rank (1-indexed)" },
        { input: "getNearbyPlayers('player123', 5)", output: "5 players above and below" }
      ],
      solutionApproach: "Use Redis ZSET for O(log n) operations, ZREVRANK for rank, ZREVRANGE for top K"
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "medium",
      title: "Database: ACID, Transactions & Isolation Levels",
      question: "Explain ACID properties in detail with real-world examples. What are the four transaction isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable) and what anomalies can occur at each level (dirty read, non-repeatable read, phantom read)? How do you choose the right isolation level?",
      hint: "Cover all 4 ACID properties, isolation levels, and their trade-offs with examples.",
      expectedPoints: ["Atomicity (all or nothing)", "Consistency (data integrity)", "Isolation (concurrency)", "Durability (persisted)", "Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable", "Dirty read", "Non-repeatable read", "Phantom read", "Lock types (shared, exclusive)"],
      topics: ["DBMS", "Transactions", "ACID"]
    },
    {
      id: 14,
      type: "theoretical",
      difficulty: "hard",
      title: "Database: Indexing, Query Optimization & Execution Plans",
      question: "Explain B-Tree and B+ Tree indexes - how do they work and why is B+ Tree preferred for databases? What types of indexes exist (clustered, non-clustered, covering, composite)? How does the query optimizer work (cost-based optimization)? Explain join algorithms: Nested Loop, Hash Join, Merge Join.",
      hint: "Cover tree structures, index types, and query execution strategies.",
      expectedPoints: ["B-Tree structure", "B+ Tree advantages (leaf linked list)", "Clustered vs Non-clustered", "Covering index", "Composite index (column order matters)", "Cost-based optimizer", "Nested Loop Join", "Hash Join", "Merge Join", "Execution plan analysis"],
      topics: ["DBMS", "Indexing", "Query Optimization"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "medium",
      title: "System Design: Caching Strategies & Patterns",
      question: "Compare caching strategies: Cache-Aside (Lazy Loading), Write-Through, Write-Behind (Write-Back), and Read-Through. What are the trade-offs between consistency and performance? How do you handle cache invalidation? Explain cache eviction policies (LRU, LFU, FIFO, TTL).",
      hint: "Discuss data consistency, latency, and complexity for each pattern.",
      expectedPoints: ["Cache-Aside pattern", "Write-Through pattern", "Write-Behind pattern", "Read-Through pattern", "Cache invalidation strategies", "TTL (Time To Live)", "LRU eviction", "Cache stampede prevention", "Cold start problem", "Cache warming"],
      topics: ["System Design", "Caching", "Performance"]
    },
    {
      id: 16,
      type: "theoretical",
      difficulty: "hard",
      title: "System Design: Message Queues & Event-Driven Architecture",
      question: "Compare message queue systems (Kafka, RabbitMQ, AWS SQS, Redis Streams). What are delivery guarantees (at-most-once, at-least-once, exactly-once)? Explain event-driven architecture patterns: pub/sub, point-to-point, consumer groups, dead letter queues. How do you handle message ordering and idempotency?",
      hint: "Cover message patterns, delivery semantics, and error handling.",
      expectedPoints: ["Kafka (log-based)", "RabbitMQ (exchange-based)", "SQS (managed)", "At-least-once delivery", "Exactly-once semantics", "Pub/Sub pattern", "Consumer groups", "Partitioning for parallelism", "Message ordering guarantees", "Dead Letter Queue (DLQ)", "Idempotent consumers"],
      topics: ["System Design", "Message Queues", "Event-Driven"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "hard",
      title: "Distributed Systems: CAP Theorem & Consistency Models",
      question: "Explain the CAP Theorem and PACELC extension. What trade-offs do different databases make? Explain consistency models: Strong Consistency, Eventual Consistency, Causal Consistency. What are vector clocks and how do they help with conflict resolution?",
      hint: "Cover CAP in distributed systems and various consistency guarantees.",
      expectedPoints: ["CAP Theorem (Consistency, Availability, Partition Tolerance)", "PACELC", "Strong Consistency", "Eventual Consistency", "Causal Consistency", "Read-your-writes", "Monotonic reads", "Vector clocks", "CRDTs", "Conflict resolution strategies", "Gossip protocols"],
      topics: ["Distributed Systems", "CAP Theorem", "Consistency"]
    },
    {
      id: 18,
      type: "theoretical",
      difficulty: "medium",
      title: "Security: Authentication, Authorization & JWT",
      question: "Compare authentication mechanisms: Session-based vs JWT vs OAuth 2.0. How does JWT work (header, payload, signature)? What are refresh tokens and why are they needed? Explain common security vulnerabilities: SQL Injection, XSS, CSRF, and how to prevent them.",
      hint: "Cover auth flows, token security, and common attack prevention.",
      expectedPoints: ["Session-based auth", "JWT structure", "JWT signing algorithms", "Access token vs Refresh token", "OAuth 2.0 flow", "SQL Injection prevention (parameterized queries)", "XSS prevention (sanitization)", "CSRF tokens", "CORS", "HTTPS/TLS", "Password hashing (bcrypt/Argon2)"],
      topics: ["Security", "Authentication", "Web Security"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "hard",
      title: "API Design: REST, GraphQL & gRPC",
      question: "Compare REST, GraphQL, and gRPC. What are the advantages and trade-offs of each? How do you version APIs? Explain REST principles (stateless, cacheable, uniform interface). How does GraphQL handle over-fetching and under-fetching? When would you use gRPC over REST?",
      hint: "Cover API paradigms, versioning strategies, and use cases.",
      expectedPoints: ["REST principles", "HTTP methods (GET, POST, PUT, PATCH, DELETE)", "Status codes", "HATEOAS", "GraphQL (queries, mutations, subscriptions)", "GraphQL schema", "gRPC (Protocol Buffers)", "gRPC streaming", "API versioning strategies (URL, header, content negotiation)", "Idempotency keys", "Rate limiting"],
      topics: ["API Design", "REST", "GraphQL", "gRPC"]
    },
    {
      id: 20,
      type: "theoretical",
      difficulty: "hard",
      title: "System Design: Microservices & Scalability",
      question: "When should you use microservices vs monolith? Explain microservices patterns: API Gateway, Service Discovery, Circuit Breaker, Bulkhead. How do you handle distributed transactions (Saga pattern)? What are the challenges of microservices (data consistency, testing, monitoring)?",
      hint: "Cover service boundaries, communication patterns, and operational considerations.",
      expectedPoints: ["Microservices vs Monolith trade-offs", "API Gateway pattern", "Service Discovery", "Load Balancing", "Circuit Breaker", "Bulkhead pattern", "Saga pattern (orchestration vs choreography)", "Distributed tracing", "Service mesh", "CQRS pattern", "Event sourcing", "Data consistency challenges"],
      topics: ["System Design", "Microservices", "Architecture"]
    }
  ],

  "Full Stack Developer": [
    {
      id: 1,
      type: "coding",
      difficulty: "medium",
      title: "Build REST API with JWT Authentication",
      question: "Create a complete REST API for a task management application with:\n1. User registration/login with JWT authentication\n2. CRUD operations for tasks (title, description, status, priority, dueDate)\n3. Middleware for auth verification and route protection\n4. Input validation and error handling\n5. Pagination and filtering for task list\n\nTech: Node.js/Express or Python/Flask, any database.\nEndpoints: POST /auth/register, POST /auth/login, GET/POST/PUT/DELETE /tasks",
      hint: "Use bcrypt for passwords, jsonwebtoken for JWT, middleware to verify token from Authorization header.",
      expectedTime: "30 min",
      topics: ["Backend", "Authentication", "API Design", "Full Stack"],
      testCases: [
        { input: "POST /auth/register with valid data", output: "201, user created, returns token" },
        { input: "POST /tasks without token", output: "401 Unauthorized" },
        { input: "GET /tasks?page=1&limit=10&status=pending", output: "paginated filtered results" },
        { input: "PUT /tasks/:id (non-owner)", output: "403 Forbidden" }
      ],
      solutionApproach: "Hash passwords, sign JWT on login, verify middleware, validate inputs, handle CRUD"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "medium",
      title: "Two Sum (Array/Hashing)",
      question: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution.\n\nExample:\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].",
      hint: "Use a hash map to store complement values. Time: O(n), Space: O(n)",
      expectedTime: "10 min",
      topics: ["DSA", "Array", "Hash Table"],
      testCases: [
        { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
        { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
        { input: "nums = [3,3], target = 6", output: "[0,1]" }
      ],
      solutionApproach: "Store complement (target - current) in hash map"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "medium",
      title: "Valid Parentheses (Stack)",
      question: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
      hint: "Use a stack. Push opening brackets, pop and match for closing brackets.",
      expectedTime: "10 min",
      topics: ["DSA", "Stack", "String"],
      testCases: [
        { input: '"()"', output: "true" },
        { input: '"()[]{}"', output: "true" },
        { input: '"(]"', output: "false" },
        { input: '"([])"', output: "true" }
      ],
      solutionApproach: "Use stack to track opening brackets, pop and verify match for closing"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "hard",
      title: "Real-Time Chat Application",
      question: "Build a real-time chat application using WebSockets (Socket.io or native ws) with:\n1. Private messaging between users (1-on-1)\n2. Group chat rooms (many-to-many)\n3. Online/offline status indicator\n4. Message persistence (store in database)\n5. Typing indicators (show 'user is typing')\n6. Message read receipts\n\nTech: Node.js + Socket.io + MongoDB/PostgreSQL, or any equivalent stack.",
      hint: "Use Socket.io rooms for channels, Redis for session store if scaling, database for message history.",
      expectedTime: "40 min",
      topics: ["WebSockets", "Real-time", "Full Stack", "Database"],
      testCases: [
        { input: "User A sends message to User B", output: "User B receives in real-time" },
        { input: "User joins room 'general'", output: "receives recent message history" },
        { input: "User typing in chat", output: "other users see typing indicator" },
        { input: "Messages stored in DB", output: "persisted with timestamp, sender" }
      ],
      solutionApproach: "Socket.io rooms for channels, emit events, store messages, broadcast typing status"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "medium",
      title: "E-Commerce Shopping Cart",
      question: "Implement a shopping cart system with:\n1. Frontend: Add/remove items, quantity update, cart total calculation\n2. Backend: Cart API endpoints (GET, POST, PUT, DELETE cart items)\n3. Guest users: Cart stored in localStorage/session\n4. Authenticated users: Cart synced to database\n5. Cart merging when guest logs in (combine local + server carts)\n6. Stock availability check before checkout\n\nTech: React/Vue frontend, Node/Python backend, any database.",
      hint: "Sync local cart to server on login/registration. Handle conflicts by merging quantities.",
      expectedTime: "35 min",
      topics: ["State Management", "Database", "UX", "Full Stack"],
      testCases: [
        { input: "Guest adds items, then registers", output: "cart merged to new user account" },
        { input: "Logged-in user adds item on device A, views on device B", output: "cart synced across devices" },
        { input: "Checkout with item out of stock", output: "error message, item marked unavailable" }
      ],
      solutionApproach: "LocalStorage for guests, DB for auth users, merge on login, check stock API"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "medium",
      title: "LRU Cache (Design)",
      question: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.\n\nImplement the LRUCache class:\n- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.\n- int get(int key) Return the value of the key if the key exists, otherwise return -1.\n- void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.\n\nThe functions get and put must each run in O(1) average time complexity.",
      hint: "Combine HashMap with Doubly Linked List for O(1) get and put.",
      expectedTime: "20 min",
      topics: ["DSA", "Design", "Hash Table", "Linked List"],
      testCases: [
        { input: 'LRUCache(2), put(1,1), put(2,2), get(1), put(3,3), get(2)', output: "1, -1" },
        { input: 'LRUCache(1), put(2,1), get(2), put(3,3), get(2)', output: "1, -1" }
      ],
      solutionApproach: "HashMap for O(1) access + Doubly Linked List for O(1) move/remove"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "medium",
      title: "Form Validation System",
      question: "Create a reusable form validation system that works on both frontend (real-time) and backend (API validation).\n\nRequirements:\n1. Shared validation rules (email format, password strength, required fields)\n2. Frontend: Real-time validation with visual feedback (error messages, field highlighting)\n3. Backend: Same validation rules run on API requests\n4. Custom validators (e.g., unique username check against DB)\n5. Cross-field validation (e.g., password confirmation matching)\n\nTech: JavaScript/TypeScript validation library or Python validators.",
      hint: "Extract validation logic into shared module used by both frontend and backend.",
      expectedTime: "25 min",
      topics: ["Validation", "Reusability", "UX", "Security"],
      testCases: [
        { input: "Email: 'invalid-email'", output: "error: invalid format" },
        { input: "Password: '123'", output: "error: min 8 chars, needs uppercase, number" },
        { input: "Username already exists", output: "error: username taken" },
        { input: "Password != Confirm Password", output: "error: passwords don't match" }
      ],
      solutionApproach: "Shared validation functions, async validators for DB checks, frontend debounce"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "hard",
      title: "File Upload with Cloud Storage",
      question: "Build a file upload system with:\n1. Frontend: Drag-drop zone, file preview (images), progress bar\n2. Backend: Multipart file upload handling\n3. Cloud storage: Upload to AWS S3 / Google Cloud / Azure Blob\n4. File validation: Type (images, docs), size limits\n5. Virus scanning integration (mock or ClamAV)\n6. Generate public/private URLs for uploaded files\n\nTech: React/Vue frontend, Node/Python backend, AWS SDK or similar.",
      hint: "Use presigned URLs for direct browser-to-S3 upload, or stream through backend with validation.",
      expectedTime: "35 min",
      topics: ["File Handling", "Cloud Storage", "Security", "Full Stack"],
      testCases: [
        { input: "Upload 5MB image", output: "success, returns file URL" },
        { input: "Upload 50MB file (limit 10MB)", output: "error: file too large" },
        { input: "Upload .exe file", output: "error: invalid file type" },
        { input: "Upload with progress", output: "progress events during upload" }
      ],
      solutionApproach: "Multer for multipart, S3 SDK for upload, validate mime type and size, scan for viruses"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "medium",
      title: "Binary Tree Level Order Traversal (BFS)",
      question: "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).\n\nExample:\nInput: root = [3,9,20,null,null,15,7]\nOutput: [[3],[9,20],[15,7]]",
      hint: "Use a queue. Enqueue root, then process each level by tracking queue size.",
      expectedTime: "15 min",
      topics: ["DSA", "Tree", "BFS", "Queue"],
      testCases: [
        { input: "[3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" },
        { input: "[1]", output: "[[1]]" },
        { input: "[]", output: "[]" }
      ],
      solutionApproach: "BFS using queue: process all nodes at current level before next"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "hard",
      title: "Full-Text Search with Autocomplete",
      question: "Implement a search feature with:\n1. Backend: Full-text search API (Elasticsearch or database LIKE with indexing)\n2. Frontend: Search input with autocomplete/type-ahead\n3. Filters: Category, price range, date range\n4. Sorting: Relevance, price, date\n5. Pagination: Cursor-based or offset\n6. Debounced search input (300ms)\n\nTech: React/Vue frontend, Node/Python backend, Elasticsearch or PostgreSQL text search.",
      hint: "Use Elasticsearch for production search, or trigram indexes in PostgreSQL. Debounce frontend input.",
      expectedTime: "35 min",
      topics: ["Search", "Database", "Performance", "UX"],
      testCases: [
        { input: "Search 'laptop', filters: price < 1000", output: "filtered results sorted by relevance" },
        { input: "Type 'lap' rapidly", output: "debounced, single API call" },
        { input: "Autocomplete suggestions", output: "top 5 matching terms" }
      ],
      solutionApproach: "Index data in Elasticsearch, query with filters, debounce frontend, cache popular queries"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "medium",
      title: "Dashboard Widget System",
      question: "Create a customizable dashboard with:\n1. Frontend: Grid layout with draggable, resizable widgets\n2. Widgets: Chart (recharts/chartjs), Stats card, Recent activity list, Weather\n3. Backend: API to save/load user dashboard layout\n4. Persist layout: Store widget positions and sizes per user\n5. Real-time updates: WebSocket or polling for live data widgets\n\nTech: React with react-grid-layout, Node/Python backend, WebSocket optional.",
      hint: "Store layout as JSON (widget type, x, y, w, h). Use drag-drop library for frontend.",
      expectedTime: "30 min",
      topics: ["UI/UX", "State Persistence", "Full Stack", "Dashboard"],
      testCases: [
        { input: "User drags widget to new position", output: "layout updated, auto-saved to DB" },
        { input: "User adds new chart widget", output: "widget appears, persisted after refresh" },
        { input: "Load dashboard on new device", output: "same layout restored" }
      ],
      solutionApproach: "Grid layout library, store positions in DB, fetch on login, auto-save on change"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "hard",
      title: "Notification System Multi-Channel",
      question: "Build a notification system supporting:\n1. In-app notifications (stored in DB, shown in UI badge/dropdown)\n2. Email notifications (send via SMTP or SendGrid/AWS SES)\n3. Push notifications (Firebase Cloud Messaging or OneSignal)\n4. Preferences: User chooses which channels per notification type\n5. Read/unread status tracking\n6. Real-time: New notifications appear instantly (WebSocket or polling)\n\nTech: React/Vue frontend, Node/Python backend, message queue (optional for async processing).",
      hint: "Use queue (Bull/BullMQ for Redis) for async email/push sending. Store preferences per user.",
      expectedTime: "40 min",
      topics: ["Real-time", "Queues", "Multi-channel", "Full Stack"],
      testCases: [
        { input: "User has email+push enabled", output: "notification sent to both channels" },
        { input: "User disables email", output: "only push and in-app sent" },
        { input: "Mark notification as read", output: "badge count decreases, persisted" }
      ],
      solutionApproach: "Queue for async processing, check preferences, send via appropriate channels, WebSocket for real-time"
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "medium",
      title: "Full Stack Architecture: MERN/MEAN Stack",
      question: "Explain the MERN (MongoDB, Express, React, Node.js) or MEAN stack architecture. How do the components communicate? What are the data flow patterns? Discuss pros and cons of this architecture vs traditional server-rendered apps.",
      hint: "Cover frontend-backend communication, state management, database design, and deployment.",
      expectedPoints: ["Client-server architecture", "RESTful API communication", "JSON data format", "React state management (Context/Redux)", "MongoDB schema design", "Express middleware pattern", "Node.js event loop", "Deployment considerations", "Pros: JavaScript everywhere, fast development", "Cons: SEO challenges, initial load time"],
      topics: ["Architecture", "Full Stack", "MERN", "MEAN"]
    },
    {
      id: 14,
      type: "theoretical",
      difficulty: "medium",
      title: "Database Design: SQL vs NoSQL & Data Modeling",
      question: "Compare SQL (PostgreSQL, MySQL) vs NoSQL (MongoDB, DynamoDB) databases. When would you use each for different parts of an application? Explain data modeling approaches for both. What are ORMs (Sequelize, Prisma, Mongoose) and when to use them?",
      hint: "Cover ACID vs BASE, schema design, relationships, and ORM trade-offs.",
      expectedPoints: ["ACID vs BASE", "Schema vs Schema-less", "Relational modeling (normalized)", "Document modeling (denormalized)", "Joins vs Embedded documents", "When to use SQL (complex queries, transactions)", "When to use NoSQL (scale, flexibility)", "ORM benefits (type safety, migrations)", "ORM drawbacks (performance overhead)", "Query builders as alternative"],
      topics: ["Databases", "SQL", "NoSQL", "Data Modeling"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "medium",
      title: "Frontend-Backend Communication Patterns",
      question: "Compare different communication patterns: REST, GraphQL, gRPC, WebSocket. What are the advantages and trade-offs of each? When would you use each in a full stack application? Explain data fetching strategies on frontend (SWR, React Query, Apollo Client).",
      hint: "Cover request-response vs real-time, over-fetching vs under-fetching, and caching strategies.",
      expectedPoints: ["REST (resource-based, simple)", "GraphQL (flexible queries, single endpoint)", "gRPC (binary, type-safe, streaming)", "WebSocket (bi-directional, real-time)", "REST over-fetching/under-fetching issues", "GraphQL resolver pattern", "Frontend caching (SWR/React Query)", "Optimistic UI updates", "Request deduplication"],
      topics: ["API Design", "REST", "GraphQL", "WebSocket", "Data Fetching"]
    },
    {
      id: 16,
      type: "theoretical",
      difficulty: "medium",
      title: "Authentication & Security Best Practices",
      question: "Explain complete authentication flows: JWT access tokens, refresh tokens, social login (OAuth 2.0), session management. What are security best practices for full stack apps? Cover XSS, CSRF, SQL Injection prevention and CORS.",
      hint: "Cover token storage, httpOnly cookies, input sanitization, and secure headers.",
      expectedPoints: ["JWT structure (header, payload, signature)", "Access token vs Refresh token", "Token storage (httpOnly cookies vs localStorage)", "OAuth 2.0 flow (authorization code)", "Session management", "XSS prevention (sanitize inputs, CSP)", "CSRF tokens", "SQL Injection (parameterized queries)", "CORS configuration", "HTTPS everywhere", "Password hashing (bcrypt)"],
      topics: ["Security", "Authentication", "Full Stack"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "hard",
      title: "Testing Strategy: Unit, Integration, E2E",
      question: "What testing approach should cover a full stack application? Explain unit tests (Jest, Vitest), integration tests (API testing with Supertest), and E2E tests (Cypress, Playwright). What should each type cover? How do you mock external services?",
      hint: "Cover test pyramid, mocking strategies, and CI/CD integration.",
      expectedPoints: ["Test pyramid (many unit, fewer integration, few E2E)", "Unit testing (Jest, React Testing Library)", "Integration testing (API routes, DB interactions)", "E2E testing (Cypress, Playwright)", "Mocking (MSW for API, Jest mocks)", "Test coverage thresholds", "CI/CD test automation", "Database fixtures/seeding", "Snapshot testing"],
      topics: ["Testing", "Quality Assurance", "Full Stack"]
    },
    {
      id: 18,
      type: "theoretical",
      difficulty: "medium",
      title: "Deployment, CI/CD & DevOps Basics",
      question: "Compare deployment strategies for full stack applications. What is CI/CD (GitHub Actions, GitLab CI)? Explain containerization with Docker, orchestration with Kubernetes basics. What are environment variables, secrets management, and feature flags?",
      hint: "Cover build pipelines, environment management, and cloud platforms.",
      expectedPoints: ["CI/CD pipelines (build, test, deploy)", "Docker containerization", "Docker Compose for local dev", "Kubernetes basics (pods, services)", "Environment variables (.env files)", "Secrets management (AWS Secrets Manager, Vault)", "Feature flags (LaunchDarkly, custom)", "Blue-green deployment", "Rollback strategies", "Monitoring and logging"],
      topics: ["DevOps", "CI/CD", "Deployment", "Docker"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "hard",
      title: "Performance Optimization Strategies",
      question: "How would you optimize a full stack application for performance? Cover frontend (code splitting, lazy loading, caching), backend (database indexing, caching, query optimization), and network (CDN, compression, HTTP/2). What tools measure performance (Lighthouse, Web Vitals)?",
      hint: "Discuss Core Web Vitals, database optimization, and caching layers.",
      expectedPoints: ["Code splitting and lazy loading", "Image optimization (WebP, responsive images)", "CDN for static assets", "Database indexing and query optimization", "Redis/Memcached caching", "API response caching", "Compression (gzip/brotli)", "HTTP/2 and connection reuse", "Core Web Vitals (LCP, FID, CLS)", "Lighthouse scoring", "Bundle size analysis"],
      topics: ["Performance", "Optimization", "Full Stack"]
    },
    {
      id: 20,
      type: "theoretical",
      difficulty: "hard",
      title: "Scalability: From Monolith to Microservices",
      question: "When should a full stack application be split into microservices? Discuss trade-offs: data consistency, testing complexity, deployment overhead. What are patterns for service communication (REST, message queues, gRPC)? How do you handle distributed transactions?",
      hint: "Cover service boundaries, communication patterns, and eventual consistency.",
      expectedPoints: ["Monolith vs Microservices trade-offs", "Service boundaries (DDD)", "Inter-service communication (sync vs async)", "Message queues (RabbitMQ, Kafka)", "API Gateway pattern", "Database per service", "Saga pattern for distributed transactions", "Eventual consistency", "Service discovery", "Distributed tracing"],
      topics: ["System Design", "Microservices", "Scalability", "Architecture"]
    }
  ],

  "Senior Software Engineer": [
    {
      id: 1,
      type: "theoretical",
      difficulty: "hard",
      title: "Technical Decision Making",
      question: "How do you evaluate and choose between competing technologies? Describe your framework for architectural decisions.",
      expectedPoints: ["Requirements analysis", "Trade-off evaluation", "Team expertise", "Long-term maintenance", "Risk assessment"]
    },
    {
      id: 2,
      type: "coding",
      difficulty: "hard",
      title: "Distributed Rate Limiter",
      question: "Design a distributed rate limiter that works across multiple API servers with accurate counting.",
      hint: "Use Redis with sliding window or token bucket",
      expectedTime: "35 min",
      topics: ["Distributed Systems", "Redis", "Algorithms"]
    },
    {
      id: 3,
      type: "theoretical",
      difficulty: "hard",
      title: "Code Review Excellence",
      question: "What makes a great code reviewer? How do you balance thoroughness with velocity?",
      expectedPoints: ["Automated checks", "Constructive feedback", "Knowledge sharing", "Style vs substance", "Mentoring"]
    },
    {
      id: 4,
      type: "coding",
      difficulty: "hard",
      title: "Consensus Algorithm",
      question: "Implement the Raft consensus algorithm for distributed log replication.",
      hint: "Handle leader election, log replication, and safety",
      expectedTime: "50 min",
      topics: ["Distributed Systems", "Consensus", "Algorithms"]
    },
    {
      id: 5,
      type: "theoretical",
      difficulty: "hard",
      title: "Technical Debt Management",
      question: "How do you identify, prioritize, and pay down technical debt? Balance with feature delivery.",
      expectedPoints: ["Debt taxonomy", "Impact assessment", "Incremental refactoring", "Boy scout rule", "Metrics"]
    },
    {
      id: 6,
      type: "coding",
      difficulty: "hard",
      title: "Query Optimizer",
      question: "Build a SQL query optimizer that suggests indexes and rewrites queries for better performance.",
      hint: "Parse query, analyze execution plan, suggest improvements",
      expectedTime: "45 min",
      topics: ["Databases", "Query Optimization", "Parsing"]
    },
    {
      id: 7,
      type: "theoretical",
      difficulty: "medium",
      title: "Mentoring Junior Engineers",
      question: "How do you effectively mentor junior engineers? What techniques accelerate their growth?",
      expectedPoints: ["Pair programming", "Code review mentoring", "Career guidance", "Psychological safety", "Progressive responsibility"]
    },
    {
      id: 8,
      type: "coding",
      difficulty: "hard",
      title: "Hot Partition Handler",
      question: "Design a system that detects and automatically redistributes hot partitions in a distributed database.",
      hint: "Monitor key access patterns, implement split/merge",
      expectedTime: "40 min",
      topics: ["Distributed Systems", "Databases", "Auto-scaling"]
    },
    {
      id: 9,
      type: "theoretical",
      difficulty: "hard",
      title: "Incident Management",
      question: "Describe your approach to handling production incidents. How do you balance speed and safety?",
      expectedPoints: ["Incident response", "Blameless postmortems", "Mitigation vs fix", "Communication", "Prevention"]
    },
    {
      id: 10,
      type: "coding",
      difficulty: "hard",
      title: "Self-Healing System",
      question: "Build a self-healing mechanism that detects service failures and automatically reroutes traffic.",
      hint: "Health checks, circuit breaker, automatic failover",
      expectedTime: "40 min",
      topics: ["Resilience", "Monitoring", "Automation"]
    },
    {
      id: 11,
      type: "theoretical",
      difficulty: "hard",
      title: "System Design Interview",
      question: "Design YouTube. Focus on video upload, storage, transcoding, and streaming at scale.",
      expectedPoints: ["Blob storage", "CDN", "Transcoding pipeline", "Metadata", "Recommendation system"]
    },
    {
      id: 12,
      type: "coding",
      difficulty: "hard",
      title: "Conflict-Free Replicated Data Type",
      question: "Implement a CRDT for collaborative text editing with automatic conflict resolution.",
      hint: "Use operational transformation or CRDT principles",
      expectedTime: "50 min",
      topics: ["Distributed Systems", "CRDTs", "Collaboration"]
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "medium",
      title: "Cross-Team Collaboration",
      question: "How do you influence technical decisions across team boundaries? Handle conflicts?",
      expectedPoints: ["Technical RFCs", "Building consensus", "Data-driven decisions", "Relationships", "Escalation"]
    },
    {
      id: 14,
      type: "coding",
      difficulty: "hard",
      title: "Load Balancer with Consistent Hashing",
      question: "Implement a load balancer that uses consistent hashing to minimize cache misses during scaling.",
      hint: "Hash ring with virtual nodes, handle node add/remove",
      expectedTime: "35 min",
      topics: ["Distributed Systems", "Algorithms", "Load Balancing"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "hard",
      title: "Platform Engineering",
      question: "How would you build an internal developer platform to improve engineering productivity?",
      expectedPoints: ["Self-service infrastructure", "Golden paths", "Developer experience", "Automation", "Metrics"]
    },
    {
      id: 16,
      type: "coding",
      difficulty: "hard",
      title: "Multi-Tenant Database Architecture",
      question: "Design a database schema and access layer for a multi-tenant SaaS with data isolation guarantees.",
      hint: "Consider row-level security, separate schemas, or separate databases",
      expectedTime: "40 min",
      topics: ["Architecture", "Security", "Databases"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "hard",
      title: "Performance Culture",
      question: "How do you build a performance-conscious engineering culture? What metrics matter?",
      expectedPoints: ["Performance budgets", "Continuous monitoring", "Regression testing", "Education", "Tooling"]
    },
    {
      id: 18,
      type: "coding",
      difficulty: "hard",
      title: "Change Data Capture Pipeline",
      question: "Build a CDC pipeline that captures database changes and streams them to data warehouse in real-time.",
      hint: "Use WAL or trigger-based capture, handle ordering",
      expectedTime: "45 min",
      topics: ["Data Engineering", "Streaming", "Databases"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "hard",
      title: "Engineering Metrics",
      question: "What metrics should engineering teams track? How do you avoid metric gaming?",
      expectedPoints: ["DORA metrics", "Leading vs lagging", "Contextual interpretation", "Balanced scorecard", "Quality gates"]
    },
    {
      id: 20,
      type: "coding",
      difficulty: "hard",
      title: "Zero-Downtime Migration",
      question: "Implement a strategy for zero-downtime database schema migration with rollback capability.",
      hint: "Expand-contract pattern, dual writes, feature flags",
      expectedTime: "40 min",
      topics: ["DevOps", "Databases", "Migration"]
    }
  ],

  "Data Scientist": [
    {
      id: 1,
      type: "coding",
      difficulty: "medium",
      title: "Data Preprocessing Pipeline",
      question: "Build a comprehensive data preprocessing pipeline in Python:\n1. Handle missing values (imputation strategies: mean, median, mode, forward fill)\n2. Detect and handle outliers (IQR method, Z-score, isolation forest)\n3. Encode categorical variables (one-hot, label encoding, ordinal)\n4. Feature scaling (StandardScaler, MinMaxScaler, RobustScaler)\n5. Handle imbalanced data (SMOTE, class weights)\n6. Create reusable sklearn Pipeline with ColumnTransformer\n7. Include feature selection (correlation, mutual information)\n\nUse pandas, numpy, sklearn. Return transformed X_train, X_test, y_train, y_test.",
      hint: "Use sklearn's Pipeline and ColumnTransformer for clean, reproducible preprocessing.",
      expectedTime: "35 min",
      topics: ["Python", "Pandas", "Scikit-learn", "Data Preprocessing"],
      testCases: [
        { input: "Data with 20% missing values", output: "imputed without data leakage" },
        { input: "Mixed numeric and categorical columns", output: "properly encoded and scaled" },
        { input: "Highly imbalanced dataset", output: "balanced using SMOTE or weights" },
        { input: "New test data", output: "transformed using fitted pipeline" }
      ],
      solutionApproach: "Pipeline with imputer, encoder, scaler steps. Fit on train, transform both."
    },
    {
      id: 2,
      type: "coding",
      difficulty: "medium",
      title: "Exploratory Data Analysis (EDA) Report",
      question: "Perform comprehensive EDA on a dataset and generate insights:\n1. Load and validate data (check dtypes, missing values, duplicates)\n2. Univariate analysis: distributions, summary statistics\n3. Bivariate analysis: correlations, scatter plots, groupby analysis\n4. Multivariate analysis: PCA visualization, pair plots\n5. Statistical tests: normality tests, ANOVA, chi-square\n6. Create automated EDA report with visualizations\n7. Identify data quality issues and recommendations\n\nTools: pandas, matplotlib, seaborn, scipy. Dataset: customer churn or sales data.",
      hint: "Use pandas-profiling or manual EDA with visualization. Focus on actionable insights.",
      expectedTime: "30 min",
      topics: ["EDA", "Statistics", "Visualization", "Python"],
      testCases: [
        { input: "Raw dataset", output: "summary stats, distribution plots" },
        { input: "Correlation analysis", output: "heatmap with significance stars" },
        { input: "Missing data pattern", output: "missingness visualization (matrix/bar)" },
        { input: "Outlier detection", output: "box plots, outlier count per column" }
      ],
      solutionApproach: "Profile data, visualize distributions, test correlations, document insights"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "hard",
      title: "A/B Testing Framework",
      question: "Implement a complete A/B testing framework:\n1. Calculate required sample size given power (0.8), significance (0.05), MDE\n2. Check for proper randomization and sample ratio mismatch\n3. Calculate confidence intervals for conversion rates\n4. Perform statistical tests (t-test for continuous, chi-square for categorical, Mann-Whitney for non-normal)\n5. Handle multiple testing correction (Bonferroni, FDR)\n6. Segmented analysis (check results by device, country, user segment)\n7. Early stopping detection (peeking problem)\n8. Generate results report with visualizations\n\nInput: two arrays (control conversions, treatment conversions).",
      hint: "Use scipy.stats for tests, statsmodels for proportions. Check assumptions (normality, equal variance).",
      expectedTime: "45 min",
      topics: ["Statistics", "A/B Testing", "Hypothesis Testing", "Python"],
      testCases: [
        { input: "control=[0,1,0,1], treatment=[0,1,1,1]", output: " uplift, p-value, CI calculated" },
        { input: "Sample size too small", output: "warning: underpowered test" },
        { input: "Non-normal distribution", output: "uses non-parametric test" },
        { input: "10 segments analyzed", output: "Bonferroni correction applied" }
      ],
      solutionApproach: "Power analysis, randomization check, appropriate test selection, multiple comparison correction"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "medium",
      title: "SQL Analytics: Cohort Analysis",
      question: "Write complex SQL queries for user behavior analysis:\n1. Calculate retention cohorts (users who signed up in month X, what % active in month Y)\n2. Customer Lifetime Value (CLV) calculation\n3. RFM segmentation (Recency, Frequency, Monetary)\n4. Funnel analysis (conversion rates between steps)\n5. Moving averages and running totals\n6. Sessionization (group events into sessions with 30-min timeout)\n7. Year-over-Year and Month-over-Month growth\n\nTables: users, orders, events. Use window functions, CTEs, self-joins.",
      hint: "Use ROW_NUMBER(), LAG(), LEAD() window functions. Self-join for cohort retention.",
      expectedTime: "40 min",
      topics: ["SQL", "Analytics", "Cohort Analysis", "Window Functions"],
      testCases: [
        { input: "Cohort retention query", output: "pivot table: signup month vs active month" },
        { input: "CLV calculation", output: "avg revenue per customer over 12 months" },
        { input: "RFM scores", output: "customers ranked 1-5 on each dimension" },
        { input: "Funnel query", output: "conversion % at each step" }
      ],
      solutionApproach: "CTEs for intermediate results, window functions for rankings, self-joins for cohorts"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "medium",
      title: "Time Series Forecasting",
      question: "Build a time series forecasting model:\n1. Decompose time series (trend, seasonality, residual)\n2. Check stationarity (ADF test, KPSS test) and make stationary if needed\n3. Handle missing timestamps and interpolate\n4. Feature engineering: lag features, rolling statistics, date features\n5. Build models: ARIMA/SARIMA, Prophet, or XGBoost with time series CV\n6. Cross-validation with expanding window or sliding window\n7. Evaluate: MAE, RMSE, MAPE, forecast bias\n8. Generate forecast with confidence intervals\n\nData: daily sales or website traffic data.",
      hint: "Use statsmodels for ARIMA, fbprophet, or sklearn with TimeSeriesSplit.",
      expectedTime: "40 min",
      topics: ["Time Series", "Forecasting", "ARIMA", "Python"],
      testCases: [
        { input: "Non-stationary series", output: "differenced until stationary" },
        { input: "Seasonal data", output: "SARIMA captures weekly pattern" },
        { input: "Forecast 30 days", output: "point forecast + 95% CI" },
        { input: "Cross-validation", output: "rolling window MAPE calculated" }
      ],
      solutionApproach: "Decomposition, stationarity check, feature engineering, time-series aware CV, forecasting"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "hard",
      title: "Recommendation Engine",
      question: "Build a recommendation system:\n1. Collaborative filtering: user-item matrix, similarity calculation (cosine, Pearson)\n2. Matrix factorization using SVD or ALS\n3. Content-based filtering using item features\n4. Hybrid approach combining both\n5. Handle cold start (new users/items)\n6. Evaluation: precision@k, recall@k, NDCG, MAP\n7. Scalability consideration for large catalogs\n8. A/B testing framework for recommendations\n\nData: MovieLens or similar (user_id, item_id, rating, timestamp).",
      hint: "Use surprise library or implement SVD manually. Handle sparsity with truncated SVD.",
      expectedTime: "50 min",
      topics: ["Machine Learning", "Recommender Systems", "Collaborative Filtering", "Python"],
      testCases: [
        { input: "User rates 5 movies", output: "top 10 recommendations for user" },
        { input: "New user (cold start)", output: "popular items recommended" },
        { input: "New movie (cold start)", output: "content-based similarity used" },
        { input: "k=10 evaluation", output: "precision@10, recall@10 calculated" }
      ],
      solutionApproach: "Build user-item matrix, SVD factorization, similarity computation, hybrid scoring, evaluation"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "medium",
      title: "Classification Model Pipeline",
      question: "Build an end-to-end classification pipeline:\n1. Handle class imbalance (SMOTE, class weights, threshold tuning)\n2. Feature engineering: polynomial features, interactions, binning\n3. Train multiple models: Logistic Regression, Random Forest, XGBoost\n4. Hyperparameter tuning with GridSearchCV or Optuna\n5. Cross-validation with stratification\n6. Model evaluation: ROC-AUC, PR-AUC, F1, confusion matrix\n7. Feature importance analysis (SHAP, permutation importance)\n8. Threshold optimization for business metric\n9. Model persistence and prediction API\n\nDataset: credit scoring, fraud detection, or churn prediction.",
      hint: "Use sklearn pipeline, XGBoost or LightGBM, SHAP for interpretability.",
      expectedTime: "45 min",
      topics: ["Machine Learning", "Classification", "XGBoost", "Python"],
      testCases: [
        { input: "Imbalanced data (5% positive)", output: "SMOTE + class weights applied" },
        { input: "5-fold CV", output: "mean AUC with std across folds" },
        { input: "Hyperparameter search", output: "best params found, CV score improved" },
        { input: "SHAP analysis", output: "top features affecting predictions" }
      ],
      solutionApproach: "Preprocessing pipeline, model comparison, hyperparameter tuning, evaluation, interpretability"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "medium",
      title: "Anomaly Detection System",
      question: "Implement an anomaly detection system for real-time data:\n1. Statistical methods: Z-score, IQR, modified Z-score\n2. Isolation Forest for multivariate anomalies\n3. One-Class SVM for novelty detection\n4. Autoencoder for deep learning approach\n5. Time-series specific: seasonal decomposition, STL\n6. Handle concept drift (adaptive thresholds)\n7. Alert system with severity levels\n8. Evaluation: precision/recall at different contamination rates\n\nData: server metrics, credit card transactions, or IoT sensor data.",
      hint: "Use sklearn.ensemble.IsolationForest, pyod library, or keras for autoencoder.",
      expectedTime: "40 min",
      topics: ["Anomaly Detection", "Machine Learning", "Python"],
      testCases: [
        { input: "Normal data point", output: "score near 0, not flagged" },
        { input: "Anomaly data point", output: "high anomaly score, alert triggered" },
        { input: "5% contamination rate", output: "top 5% flagged as anomalies" },
        { input: "Concept drift detected", output: "threshold auto-adjusted" }
      ],
      solutionApproach: "Multiple methods ensemble, threshold tuning, concept drift handling, severity scoring"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "hard",
      title: "NLP Text Classification Pipeline",
      question: "Build a text classification system:\n1. Text preprocessing: tokenization, normalization, stopword removal\n2. Feature extraction: TF-IDF, word embeddings (Word2Vec/GloVe), BERT embeddings\n3. Model training: Naive Bayes, SVM, Logistic Regression, or fine-tuned BERT\n4. Handle class imbalance in text data\n5. Cross-validation with stratification\n6. Evaluation: accuracy, F1, confusion matrix, per-class metrics\n7. Error analysis: analyze misclassified examples\n8. Model interpretability with LIME\n9. Deployment-ready prediction function\n\nDataset: sentiment analysis, spam detection, or topic classification.",
      hint: "Use sklearn for TF-IDF, gensim for Word2Vec, transformers for BERT.",
      expectedTime: "45 min",
      topics: ["NLP", "Text Classification", "Machine Learning", "Python"],
      testCases: [
        { input: "Text: 'This product is great!'", output: "positive sentiment, high confidence" },
        { input: "TF-IDF features", output: "sparse matrix with important words weighted" },
        { input: "BERT embeddings", output: "768-dim vector per sentence" },
        { input: "LIME explanation", output: "words contributing to prediction" }
      ],
      solutionApproach: "Preprocessing, feature extraction (TF-IDF or embeddings), model training, evaluation, LIME interpretability"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "medium",
      title: "Clustering Analysis",
      question: "Perform customer segmentation using clustering:\n1. Data preprocessing: scaling, handling outliers\n2. Dimensionality reduction: PCA, t-SNE for visualization\n3. Determine optimal k: elbow method, silhouette score, gap statistic\n4. Clustering algorithms: K-Means, Hierarchical, DBSCAN, GMM\n5. Cluster profiling: describe characteristics of each segment\n6. Actionable insights: business recommendations per segment\n7. Stability analysis: cluster assignment consistency\n8. Visualization: cluster plots, radar charts\n\nData: customer demographics, purchase behavior, or website engagement.",
      hint: "Use sklearn.cluster, scipy.cluster.hierarchy. Interpret clusters for business value.",
      expectedTime: "35 min",
      topics: ["Clustering", "Unsupervised Learning", "Segmentation", "Python"],
      testCases: [
        { input: "Elbow method plot", output: "optimal k=4 identified" },
        { input: "K-Means clustering", output: "4 clusters with centroids" },
        { input: "Silhouette analysis", output: "avg silhouette score > 0.5" },
        { input: "Cluster profiles", output: "Segment A: high-value frequent buyers" }
      ],
      solutionApproach: "Preprocessing, k selection, clustering, profiling, visualization, business interpretation"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "medium",
      title: "Data Visualization Dashboard",
      question: "Create an interactive data visualization dashboard:\n1. Multiple chart types: line, bar, scatter, heatmap, box plots\n2. Time series visualization with zoom/pan\n3. Interactive filtering and drill-down\n4. Statistical annotations: mean lines, confidence intervals\n5. Correlation matrix with annotations\n6. Geographic visualizations (choropleth maps)\n7. Export to HTML or image formats\n8. Responsive design principles\n\nTools: matplotlib, seaborn, plotly, or bokeh. Dataset of choice.",
      hint: "Use plotly for interactivity. Focus on storytelling with data.",
      expectedTime: "30 min",
      topics: ["Data Visualization", "Python", "Plotly", "Communication"],
      testCases: [
        { input: "Time series data", output: "interactive line chart with tooltips" },
        { input: "Multi-dimensional data", output: "scatter matrix or pair plot" },
        { input: "Categorical comparison", output: "grouped bar chart with error bars" },
        { input: "Correlation data", output: "annotated heatmap" }
      ],
      solutionApproach: "Load data, create subplots, add interactivity, annotations, export"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "hard",
      title: "MLOps: Model Monitoring & Drift Detection",
      question: "Build a model monitoring system:\n1. Track model performance metrics over time (accuracy, latency, throughput)\n2. Data drift detection: PSI (Population Stability Index), KS test, Chi-square\n3. Concept drift detection: performance degradation alerts\n4. Feature drift monitoring: distribution changes, correlation drift\n5. Alert system when drift exceeds threshold\n6. Automated model retraining trigger\n7. Dashboard showing metrics evolution\n8. Model versioning and comparison\n\nSimulate model serving and detect when data distribution changes.",
      hint: "Use evidently, great expectations, or custom drift detection. Compare reference vs current distributions.",
      expectedTime: "45 min",
      topics: ["MLOps", "Model Monitoring", "Drift Detection", "Python"],
      testCases: [
        { input: "Baseline vs new data (same dist)", output: "PSI < 0.1, no drift detected" },
        { input: "Data distribution shifts", output: "PSI > 0.2, drift alert triggered" },
        { input: "Model accuracy drops", output: "performance alert sent" },
        { input: "Weekly report", output: "dashboard with all drift metrics" }
      ],
      solutionApproach: "Reference dataset, statistical tests for drift, threshold monitoring, alerting, retraining trigger"
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "medium",
      title: "Statistics: Distributions, Hypothesis Testing & Confidence Intervals",
      question: "Explain fundamental statistical concepts: probability distributions (normal, binomial, Poisson), Central Limit Theorem, hypothesis testing framework, p-values, confidence intervals, Type I vs Type II errors, and statistical power. When would you use parametric vs non-parametric tests?",
      hint: "Cover practical applications and common misconceptions (p-value interpretation).",
      expectedPoints: ["Normal distribution properties", "Central Limit Theorem", "Null and alternative hypotheses", "p-value interpretation (not probability hypothesis is true)", "Confidence interval interpretation", "Type I error (false positive)", "Type II error (false negative)", "Statistical power", "Parametric vs non-parametric tests", "t-test, ANOVA, chi-square use cases"],
      topics: ["Statistics", "Hypothesis Testing", "Probability"]
    },
    {
      id: 14,
      type: "theoretical",
      difficulty: "hard",
      title: "Machine Learning Algorithms: Theory & Selection",
      question: "Explain the theoretical foundations of common ML algorithms: Linear Regression, Logistic Regression, Decision Trees, Random Forest, Gradient Boosting, SVM, K-Means, PCA. When would you use each? What are their assumptions, strengths, and weaknesses?",
      hint: "Cover bias-variance tradeoff and how it relates to algorithm selection.",
      expectedPoints: ["Linear Regression assumptions", "Logistic Regression and log-odds", "Decision Trees (splitting criteria)", "Random Forest (bagging)", "Gradient Boosting (sequential correction)", "SVM and kernel trick", "K-Means algorithm steps", "PCA (eigenvalue decomposition)", "Bias-variance tradeoff", "Overfitting vs underfitting", "Algorithm selection criteria"],
      topics: ["Machine Learning", "Algorithms", "Theory"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "medium",
      title: "Feature Engineering & Selection",
      question: "What makes good features? Discuss techniques for creating, transforming, and selecting features. Cover: missing value imputation strategies, encoding categorical variables, scaling/normalization, feature interactions, polynomial features, binning, dimensionality reduction, and feature selection methods (filter, wrapper, embedded).",
      hint: "Discuss domain knowledge importance and the curse of dimensionality.",
      expectedPoints: ["Domain knowledge importance", "Missing value strategies", "Categorical encoding (one-hot, target)", "Feature scaling", "Polynomial features", "Binning strategies", "Feature selection: filter methods", "Feature selection: wrapper methods", "Feature selection: embedded (L1)", "PCA for dimensionality reduction", "Curse of dimensionality", "Multicollinearity handling"],
      topics: ["Feature Engineering", "Feature Selection", "Preprocessing"]
    },
    {
      id: 16,
      type: "theoretical",
      difficulty: "hard",
      title: "Model Evaluation & Validation",
      question: "How do you properly evaluate ML models? Discuss cross-validation strategies (k-fold, stratified, time series), evaluation metrics for classification (accuracy, precision, recall, F1, ROC-AUC, PR-AUC) and regression (MAE, RMSE, R²), handling imbalanced data, and confidence intervals for metrics.",
      hint: "Cover why accuracy alone is insufficient and when to use each metric.",
      expectedPoints: ["Train/validation/test split", "K-fold cross-validation", "Stratified sampling", "Time-series CV (no leakage)", "Accuracy limitations", "Precision and recall tradeoff", "F1 score harmonic mean", "ROC-AUC interpretation", "PR-AUC for imbalanced", "RMSE vs MAE", "R² and adjusted R²", "Confidence intervals", "Bootstrap sampling"],
      topics: ["Model Evaluation", "Validation", "Metrics"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "hard",
      title: "Causal Inference vs Correlation",
      question: "Explain the difference between correlation and causation. How do you establish causality in observational data? Describe methods: randomized controlled trials, natural experiments, difference-in-differences, regression discontinuity, instrumental variables, propensity score matching.",
      hint: "Cover confounding variables and the do-calculus intuition.",
      expectedPoints: ["Correlation vs causation", "Confounding variables", "Randomized controlled trials (gold standard)", "Natural experiments", "Difference-in-differences", "Regression discontinuity", "Instrumental variables", "Propensity score matching", "Directed Acyclic Graphs (DAGs)", "Counterfactuals", "Average Treatment Effect (ATE)"],
      topics: ["Causal Inference", "Statistics", "Experiment Design"]
    },
    {
      id: 18,
      type: "theoretical",
      difficulty: "medium",
      title: "A/B Testing Design & Pitfalls",
      question: "How do you design a robust A/B test? Cover: randomization, sample size calculation (power analysis), multiple testing problem, peeking problem, novelty effects, network effects, and winner's curse. How do you analyze and interpret results?",
      hint: "Discuss practical considerations and common mistakes in experimentation.",
      expectedPoints: ["Proper randomization", "Sample size calculation (power, MDE)", "Minimum Detectable Effect", "Multiple testing correction", "Peeking problem (early stopping)", "Novelty effects", "Network effects (interference)", "Winner's curse", "Intention-to-treat analysis", "Segmented analysis dangers", "Business significance vs statistical"],
      topics: ["A/B Testing", "Experiment Design", "Statistics"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "hard",
      title: "Deep Learning Fundamentals",
      question: "Explain neural network fundamentals: perceptron, activation functions, backpropagation, gradient descent variants, regularization techniques (dropout, batch norm), CNNs for images, RNNs/LSTMs for sequences, Transformer architecture (attention mechanism). When to use deep learning vs traditional ML?",
      hint: "Cover practical considerations like data requirements and computational cost.",
      expectedPoints: ["Perceptron and activation functions", "Backpropagation chain rule", "SGD, Adam, RMSprop optimizers", "Vanishing/exploding gradients", "Dropout regularization", "Batch normalization", "CNN (convolution, pooling)", "RNN and LSTM (vanishing gradients)", "Transformer architecture", "Attention mechanism", "Transfer learning", "When to use DL (big data, unstructured)"],
      topics: ["Deep Learning", "Neural Networks", "AI"]
    },
    {
      id: 20,
      type: "theoretical",
      difficulty: "hard",
      title: "Data Ethics, Privacy & Responsible AI",
      question: "Discuss ethical considerations in data science: algorithmic bias, fairness metrics (demographic parity, equalized odds), privacy (GDPR, CCPA, differential privacy), transparency and explainability, and responsible AI principles. How do you detect and mitigate bias?",
      hint: "Cover real-world examples of AI bias and regulatory requirements.",
      expectedPoints: ["Algorithmic bias sources", "Fairness metrics", "Demographic parity", "Equalized odds", "GDPR requirements", "CCPA requirements", "Differential privacy", "Model explainability (XAI)", "SHAP and LIME", "Responsible AI principles", "Human-in-the-loop", "Adversarial debiasing"],
      topics: ["Data Ethics", "Responsible AI", "Privacy", "Fairness"]
    }
  ],

  "Machine Learning Engineer": [
    {
      id: 1,
      type: "coding",
      difficulty: "hard",
      title: "Model Serving API with Batching & Caching",
      question: "Build a high-performance ML model serving API:\n1. FastAPI/Flask async endpoint for model inference\n2. Request validation (Pydantic models, input schema)\n3. Dynamic batching: accumulate requests for 10ms or 32 items\n4. Response caching with Redis (cache predictions for identical inputs)\n5. Model versioning support (v1, v2 endpoints)\n6. Load balancing health checks\n7. Prometheus metrics (latency, throughput, cache hit rate)\n8. Rate limiting and authentication\n\nUse ONNX Runtime or TorchServe for optimized inference. Include Dockerfile.",
      hint: "Use asyncio for concurrent handling, implement batch queue with timeout, Redis for caching.",
      expectedTime: "50 min",
      topics: ["Backend", "ML Serving", "Performance", "FastAPI"],
      testCases: [
        { input: "Single inference request", output: "prediction in < 100ms" },
        { input: "100 concurrent requests", output: "batched efficiently, throughput > 1000 rps" },
        { input: "Same input twice", output: "second served from cache" },
        { input: "Invalid input schema", output: "422 validation error" }
      ],
      solutionApproach: "Async FastAPI, batch queue with asyncio, Redis cache, ONNX Runtime inference"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "medium",
      title: "Feature Engineering Pipeline",
      question: "Build a production-grade feature engineering pipeline:\n1. Extract features from raw data (time-based, aggregation, text)\n2. Handle categorical encoding with cardinality reduction\n3. Feature scaling and normalization\n4. Feature selection (correlation filter, mutual information)\n5. Store features in Feature Store (Feast-style or custom)\n6. Online feature retrieval (low latency < 10ms)\n7. Offline feature computation (batch processing)\n8. Feature versioning and lineage tracking\n9. Data validation (Great Expectations-style checks)\n\nTech: pandas, sklearn, Redis/PostgreSQL for feature store.",
      hint: "Use sklearn Pipeline, store features in key-value store, implement point-in-time correctness.",
      expectedTime: "45 min",
      topics: ["Feature Engineering", "Feature Store", "MLOps", "Python"],
      testCases: [
        { input: "Raw user events", output: "30+ engineered features" },
        { input: "High cardinality categorical", output: "target encoding applied" },
        { input: "Online request for user:123", output: "features retrieved in < 10ms" },
        { input: "Data drift detected", output: "validation error raised" }
      ],
      solutionApproach: "Pipeline with transformers, feature store with Redis, online/offline split, validation"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "hard",
      title: "Distributed Training with PyTorch DDP",
      question: "Implement distributed training for large model:\n1. PyTorch DistributedDataParallel (DDP) setup\n2. Data loading with DistributedSampler\n3. Gradient synchronization across GPUs/nodes\n4. Mixed precision training (FP16/BF16 with AMP)\n5. Checkpoint saving/loading (every N steps, best model)\n6. Fault tolerance (resume from last checkpoint)\n7. Gradient accumulation for large batch sizes\n8. Learning rate scheduling with warmup\n9. Logging to TensorBoard/Weights & Biases\n\nSupport multi-GPU on single node and multi-node.",
      hint: "Use torch.distributed, initialize process group, all-reduce gradients, save checkpoints to shared storage.",
      expectedTime: "50 min",
      topics: ["Deep Learning", "Distributed Training", "PyTorch", "GPU"],
      testCases: [
        { input: "4 GPUs, batch size 64", output: "effective batch 256, linear speedup" },
        { input: "Node failure during epoch 3", output: "resumes from checkpoint" },
        { input: "Mixed precision enabled", output: "memory reduced, speed increased" },
        { input: "8 nodes x 4 GPUs", output: "scales to 32 GPUs" }
      ],
      solutionApproach: "DDP setup, distributed sampler, gradient sync, checkpointing, mixed precision"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "hard",
      title: "Model Compression: Quantization & Pruning",
      question: "Implement model compression pipeline:\n1. Post-training quantization (INT8) with calibration\n2. Quantization-aware training (QAT)\n3. Magnitude-based pruning (unstructured)\n4. Structured pruning (channel/filter removal)\n5. Knowledge distillation (teacher-student training)\n6. Model evaluation before/after compression (accuracy, latency)\n7. ONNX export and runtime optimization (TensorRT, OpenVINO)\n8. Size comparison and deployment package\n\nCompress ResNet/BERT-like model for edge deployment.",
      hint: "Use PyTorch quantization, torch.nn.utils.prune, implement distillation loss.",
      expectedTime: "45 min",
      topics: ["Model Optimization", "Quantization", "Pruning", "Edge ML"],
      testCases: [
        { input: "FP32 model 100MB", output: "INT8 model 25MB" },
        { input: "Prune 50% weights", output: "< 2% accuracy drop" },
        { input: "Knowledge distillation", output: "small model reaches 95% of teacher" },
        { input: "TensorRT optimization", output: "10x inference speedup" }
      ],
      solutionApproach: "Calibration dataset, quantization, iterative pruning, distillation, benchmark"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "hard",
      title: "MLOps Pipeline: Train to Deploy",
      question: "Build end-to-end MLOps pipeline:\n1. Data versioning with DVC (Data Version Control)\n2. Experiment tracking with MLflow (params, metrics, artifacts)\n3. Automated hyperparameter tuning (Optuna integration)\n4. Model training with early stopping\n5. Model validation and testing\n6. Model registration (staging -> production)\n7. Docker containerization of training environment\n8. CI/CD for ML (GitHub Actions trigger on code push)\n9. Model deployment automation\n10. Performance monitoring integration\n\nInclude MLflow and DVC configuration files.",
      hint: "Use MLflow tracking, DVC for data versioning, GitHub Actions for CI/CD.",
      expectedTime: "55 min",
      topics: ["MLOps", "MLflow", "DVC", "CI/CD", "Automation"],
      testCases: [
        { input: "git push to main", output: "CI pipeline triggered" },
        { input: "Training completes", output: "metrics logged to MLflow" },
        { input: "Model beats threshold", output: "auto-promoted to staging" },
        { input: "Data changes (DVC)", output: "pipeline retrained on new version" }
      ],
      solutionApproach: "DVC config, MLflow tracking, Optuna HPO, CI/CD pipeline, model promotion"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "medium",
      title: "Real-Time Feature Computation",
      question: "Build real-time feature computation system:\n1. Stream processing with Kafka or Kinesis\n2. Windowed aggregations (tumbling, sliding windows)\n3. Session-based features (user session tracking)\n4. Join streaming data with reference data (enrichment)\n5. Feature computation with low latency (< 100ms)\n6. Store computed features in online store (Redis)\n7. Exactly-once processing semantics\n8. Backfill capability for historical data\n\nTech: Kafka Streams, Apache Flink, or Spark Structured Streaming.",
      hint: "Use streaming join patterns, manage stateful computations, handle late-arriving data.",
      expectedTime: "45 min",
      topics: ["Streaming", "Feature Engineering", "Real-Time", "Kafka"],
      testCases: [
        { input: "User click events stream", output: "5-min window aggregations" },
        { input: "Session gap > 30 min", output: "new session started" },
        { input: "Enrich with user profile", output: "joined data in < 100ms" },
        { input: "Node failure", output: "resumes from checkpoint, exactly-once" }
      ],
      solutionApproach: "Stream processing, windowed operations, state management, checkpointing"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "medium",
      title: "Hyperparameter Tuning System",
      question: "Implement distributed hyperparameter tuning:\n1. Define search space (categorical, continuous, log-uniform)\n2. Bayesian optimization (TPE, Gaussian Process)\n3. Early stopping (median pruner, hyperband)\n4. Parallel trial execution (distributed workers)\n5. Result logging and visualization\n6. Best model selection and checkpointing\n7. Integration with Optuna or Ray Tune\n8. Resume interrupted studies\n\nTune XGBoost or neural network hyperparameters.",
      hint: "Use Optuna with RDB storage for distributed optimization, implement custom pruner.",
      expectedTime: "40 min",
      topics: ["Optimization", "AutoML", "Distributed Computing", "Python"],
      testCases: [
        { input: "100 trials, 4 workers", output: "best params found, linear speedup" },
        { input: "Poor trial detected", output: "early stopped, resources saved" },
        { input: "Study interrupted", output: "resumed from last trial" },
        { input: "Convergence plot", output: "objective value vs trials" }
      ],
      solutionApproach: "Search space definition, Bayesian opt, pruner, parallel execution, result tracking"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "hard",
      title: "Model Drift Detection System",
      question: "Build production model drift detection:\n1. Data drift: PSI (Population Stability Index), KS test, Wasserstein distance\n2. Concept drift: model performance degradation alerts\n3. Feature drift: distribution comparison per feature\n4. Reference dataset management (baseline)\n5. Statistical significance testing\n6. Configurable thresholds and alerting\n7. Drift visualization dashboard\n8. Automated retraining trigger\n9. Data quality checks (schema, range, nulls)\n\nCompare production data distributions vs training data.",
      hint: "Use scipy.stats for tests, evidently.ai patterns, implement PSI calculation.",
      expectedTime: "45 min",
      topics: ["MLOps", "Monitoring", "Drift Detection", "Python"],
      testCases: [
        { input: "Same distribution", output: "PSI < 0.1, no alert" },
        { input: "Shifted distribution", output: "PSI > 0.25, drift alert" },
        { input: "Accuracy drops 5%", output: "performance alert triggered" },
        { input: "Schema change detected", output: "data quality alert" }
      ],
      solutionApproach: "Reference dataset, statistical tests, threshold monitoring, alerting, dashboard"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "medium",
      title: "Transfer Learning & Fine-tuning",
      question: "Implement transfer learning pipeline:\n1. Load pre-trained model (ResNet, BERT, etc.)\n2. Freeze base layers, train classification head\n3. Progressive unfreezing strategy\n4. Learning rate scheduling (discriminative fine-tuning)\n5. Data augmentation for target domain\n6. Handle class imbalance in target dataset\n7. Evaluate on target domain test set\n8. Compare with training from scratch\n9. Export fine-tuned model\n\nFine-tune for custom classification task with limited data.",
      hint: "Use Hugging Face transformers or torchvision, implement gradual unfreezing.",
      expectedTime: "40 min",
      topics: ["Transfer Learning", "Deep Learning", "Fine-tuning", "PyTorch"],
      testCases: [
        { input: "100 target samples", output: "85% accuracy with transfer learning" },
        { input: "Train from scratch", output: "60% accuracy (lower)" },
        { input: "Progressive unfreezing", output: "better convergence" },
        { input: "Export model", output: "saved in Hugging Face format" }
      ],
      solutionApproach: "Pretrained model, freeze/unfreeze strategy, discriminative LR, augmentation, evaluation"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "hard",
      title: "Model Explainability: SHAP & LIME",
      question: "Implement model explainability system:\n1. SHAP values calculation (TreeSHAP, KernelSHAP)\n2. LIME for local explanations\n3. Global feature importance (summary plots)\n4. Individual prediction explanations (force plots)\n5. Explanation API endpoint (return explanation with prediction)\n6. Caching explanations for repeated queries\n7. Visualization generation (waterfall, dependence plots)\n8. Performance optimization for real-time explanations\n9. Export explanations to JSON/HTML\n\nExplain XGBoost or neural network predictions.",
      hint: "Use shap library, implement background dataset sampling, cache explanations.",
      expectedTime: "45 min",
      topics: ["XAI", "Explainability", "SHAP", "LIME", "Python"],
      testCases: [
        { input: "Predict single sample", output: "SHAP values + prediction" },
        { input: "Global importance", output: "feature ranking with SHAP summary" },
        { input: "LIME explanation", output: "local linear approximation" },
        { input: "100 explanations", output: "cached responses, fast retrieval" }
      ],
      solutionApproach: "SHAP computation, LIME for text, visualization, caching, API endpoint"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "medium",
      title: "GPU Resource Scheduler",
      question: "Build GPU resource scheduler for ML training:\n1. Queue management for training jobs\n2. GPU allocation (single GPU, multi-GPU, distributed)\n3. Priority-based scheduling (FIFO, priority queue)\n4. Resource limits enforcement (memory, time)\n5. Job preemption (lower priority for urgent jobs)\n6. Node/GPU health checks\n7. Metrics collection (GPU utilization, queue wait time)\n8. REST API for job submission and monitoring\n9. Integration with Kubernetes GPU operator (optional)\n\nSchedule TensorFlow/PyTorch jobs on GPU cluster.",
      hint: "Use Redis for queue, track GPU availability, implement fair scheduling policy.",
      expectedTime: "40 min",
      topics: ["Infrastructure", "GPU", "Scheduling", "Resource Management"],
      testCases: [
        { input: "Submit 10 jobs, 4 GPUs", output: "efficient scheduling, no conflicts" },
        { input: "High priority job arrives", output: "preempts low priority if needed" },
        { input: "GPU memory exceeded", output: "job rejected, resources insufficient" },
        { input: "Job completes", output: "GPU freed, next job scheduled" }
      ],
      solutionApproach: "Job queue, resource tracking, scheduling algorithm, preemption, monitoring API"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "hard",
      title: "Federated Learning Implementation",
      question: "Implement federated learning system:\n1. Central server coordinating training\n2. Client-side training on local data (differential privacy optional)\n3. Model aggregation (FedAvg algorithm)\n4. Secure aggregation (homomorphic encryption or secure multi-party)\n5. Non-IID data handling\n6. Client selection strategies\n7. Communication compression (gradient quantization)\n8. Evaluation on global test set\n9. Convergence monitoring\n\nSimulate 10 clients with local datasets.",
      hint: "Use PySyft or implement custom FedAvg, handle heterogeneous client data.",
      expectedTime: "50 min",
      topics: ["Federated Learning", "Privacy", "Distributed ML", "Python"],
      testCases: [
        { input: "10 clients, 5 rounds", output: "global model converges" },
        { input: "Non-IID data", output: "handles data heterogeneity" },
        { input: "Secure aggregation", output: "individual gradients not exposed" },
        { input: "Client drops out", output: "training continues with remaining" }
      ],
      solutionApproach: "Client-server architecture, FedAvg aggregation, privacy techniques, non-IID handling"
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "hard",
      title: "ML System Design: Recommendation at Scale",
      question: "Design a ML system for real-time recommendations at billion-user scale. Cover: feature computation (batch vs real-time), model architecture (two-tower, deep learning), serving infrastructure (latency < 50ms), candidate generation vs ranking, A/B testing, and feedback loops.",
      hint: "Discuss retrieval + ranking architecture, feature freshness, and online evaluation.",
      expectedPoints: ["Two-tower architecture (query and item towers)", "Candidate generation (approximate nearest neighbor)", "Ranking model (deep neural network)", "Feature computation (batch + streaming)", "Feature store for real-time features", "Model serving (TensorFlow Serving, TorchServe)", "Latency optimization (caching, batching)", "A/B testing framework for recommendations", "Feedback loops (click, purchase, dwell time)", "Cold start handling", "Exploration vs exploitation"],
      topics: ["System Design", "Recommendations", "Large Scale", "Architecture"]
    },
    {
      id: 14,
      type: "theoretical",
      difficulty: "hard",
      title: "Model Optimization Techniques",
      question: "Compare model optimization techniques: quantization (INT8, FP16), pruning (magnitude, structured), knowledge distillation, and compilation (TensorRT, ONNX Runtime). When to use each? What are the trade-offs between model size, latency, and accuracy?",
      hint: "Discuss hardware-specific optimizations and edge deployment considerations.",
      expectedPoints: ["Post-training quantization", "Quantization-aware training (QAT)", "Dynamic vs static quantization", "Unstructured vs structured pruning", "Iterative pruning strategy", "Knowledge distillation (teacher-student)", "Soft targets and temperature", "ONNX Runtime optimization", "TensorRT optimization", "Mobile deployment (Core ML, TFLite)", "Accuracy vs latency tradeoff"],
      topics: ["Model Optimization", "Quantization", "Pruning", "Edge ML"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "hard",
      title: "MLOps: CI/CD for Machine Learning",
      question: "Explain MLOps practices: How do you implement CI/CD for ML? Cover: data versioning (DVC), model versioning (MLflow), automated testing (unit, integration, model validation), continuous training (CT), continuous delivery (CD), and monitoring. What distinguishes ML CI/CD from traditional software CI/CD?",
      hint: "Discuss reproducibility, data dependencies, and model performance testing.",
      expectedPoints: ["Data versioning with DVC", "Model versioning and registry", "Experiment tracking", "Automated retraining triggers", "Model testing (performance, fairness, bias)", "A/B testing in production", "Shadow deployment", "Canary releases", "Rollback strategies", "Monitoring and alerting", "Reproducibility requirements"],
      topics: ["MLOps", "CI/CD", "Automation", "Best Practices"]
    },
    {
      id: 16,
      type: "theoretical",
      difficulty: "hard",
      title: "Distributed Training Architectures",
      question: "Compare distributed training strategies: data parallelism, model parallelism, pipeline parallelism, and hybrid parallelism. When to use each? What are the communication patterns (all-reduce, parameter server)? Discuss ZeRO optimizer and activation checkpointing.",
      hint: "Cover memory optimization and scaling efficiency considerations.",
      expectedPoints: ["Data parallelism (DDP)", "Model parallelism (split layers)", "Pipeline parallelism (GPipe)", "Hybrid parallelism (Megatron, DeepSpeed)", "All-reduce communication", "Parameter server architecture", "Ring all-reduce", "ZeRO optimizer stages", "Activation checkpointing (gradient checkpointing)", "Mixed precision training", "Scaling efficiency (weak vs strong scaling)"],
      topics: ["Distributed Training", "Deep Learning", "Scalability"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "medium",
      title: "Deep Learning Architectures: Transformers & Beyond",
      question: "Explain modern deep learning architectures: Transformer (self-attention, multi-head attention), BERT/GPT architecture, Vision Transformer (ViT), and recent innovations (EfficientNet, Swin Transformer, Mamba). When to use each?",
      hint: "Discuss inductive biases and computational efficiency trade-offs.",
      expectedPoints: ["Self-attention mechanism", "Multi-head attention", "Positional encoding", "BERT (encoder-only)", "GPT (decoder-only)", "Vision Transformer (ViT)", "Inductive biases (CNN locality)", "Efficient architectures (MobileNet, EfficientNet)", "Swin Transformer (hierarchical)", "State space models (Mamba)", "Long context handling", "Computational complexity comparisons"],
      topics: ["Deep Learning", "Transformers", "Neural Networks", "Architecture"]
    },
    {
      id: 18,
      type: "theoretical",
      difficulty: "hard",
      title: "Feature Store Architecture",
      question: "What is a feature store and why is it important? Discuss: online vs offline stores, point-in-time correctness, feature versioning, feature discovery, and consistency between training and serving. Compare Feast, Tecton, and custom implementations.",
      hint: "Cover the challenges of training-serving skew and feature freshness.",
      expectedPoints: ["Feature store definition", "Online store (low latency)", "Offline store (batch processing)", "Point-in-time correctness", "Training-serving skew", "Feature versioning", "Feature lineage", "Feature discovery and catalog", "Real-time feature computation", "Batch feature backfill", "Feast architecture", "Tecton architecture", "Consistency guarantees"],
      topics: ["Feature Store", "Feature Engineering", "MLOps", "Data Infrastructure"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "medium",
      title: "Model Governance & Responsible AI",
      question: "How do you ensure ML models are fair, explainable, and compliant? Discuss: model cards, data sheets, bias detection (demographic parity, equalized odds), explainability tools (SHAP, LIME), audit trails, and regulatory compliance (GDPR, AI Act).",
      hint: "Cover practical implementation of responsible AI practices.",
      expectedPoints: ["Model cards documentation", "Datasheets for datasets", "Fairness metrics", "Demographic parity", "Equalized odds", "Bias detection in training data", "Explainability requirements", "SHAP for tabular", "LIME for text", "Audit trails", "Model lineage", "GDPR right to explanation", "AI Act compliance"],
      topics: ["Responsible AI", "Governance", "Fairness", "Explainability"]
    },
    {
      id: 20,
      type: "theoretical",
      difficulty: "hard",
      title: "ML Infrastructure & Platform Design",
      question: "Design an ML platform that serves multiple teams. Cover: compute resources (on-prem vs cloud), storage (data lake, feature store), experiment tracking, model registry, serving infrastructure, monitoring, and cost optimization. How do you balance standardization with team autonomy?",
      hint: "Discuss platform engineering principles for ML infrastructure.",
      expectedPoints: ["ML platform components", "Compute layer (Kubernetes, GPU clusters)", "Storage layer (S3, data lake)", "Feature store integration", "Experiment tracking service", "Model registry", "Serving infrastructure (TF Serving, KServe)", "Monitoring and observability", "Multi-tenancy", "Resource isolation", "Cost tracking and chargeback", "Self-service vs centralized", "Golden paths for ML"],
      topics: ["ML Platform", "Infrastructure", "Platform Engineering", "Architecture"]
    }
  ],

  "Security Engineer": [
    {
      id: 1,
      type: "coding",
      difficulty: "medium",
      title: "Secure Authentication System with MFA",
      question: "Build a secure authentication system:\n1. User registration with password validation (min 8 chars, uppercase, number, special char)\n2. bcrypt/Argon2 password hashing (never store plaintext)\n3. JWT access tokens (short-lived, 15 min) and refresh tokens (long-lived, 7 days)\n4. TOTP-based MFA (Time-based One-Time Password) using speakeasy/pyotp\n5. Rate limiting (5 attempts per 15 min, progressive delays)\n6. Account lockout after 10 failed attempts\n7. Secure session management (httpOnly cookies, CSRF protection)\n8. Audit logging for all auth events\n9. Password reset with secure tokens (expire in 1 hour)\n\nTech: Node.js/Python backend, JWT library, TOTP library.",
      hint: "Use bcrypt with salt rounds 12+, JWT with RS256, store refresh tokens hashed in DB.",
      expectedTime: "45 min",
      topics: ["Authentication", "Security", "MFA", "Backend"],
      testCases: [
        { input: "Valid login + correct MFA", output: "access_token + refresh_token returned" },
        { input: "Weak password '123456'", output: "validation error, rejected" },
        { input: "5 failed login attempts", output: "rate limit error, wait 15 min" },
        { input: "Valid refresh token", output: "new access_token issued" }
      ],
      solutionApproach: "bcrypt hashing, JWT with refresh, TOTP verification, rate limiter, secure cookies"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "hard",
      title: "OWASP Top 10 Vulnerability Scanner",
      question: "Build automated vulnerability scanner for web apps:\n1. SQL Injection detection (error-based, time-based, union-based patterns)\n2. XSS detection (reflected, stored, DOM-based payloads)\n3. CSRF token validation checks\n4. Insecure direct object references (IDOR)\n5. Security header analysis (HSTS, CSP, X-Frame-Options)\n6. SSL/TLS configuration scan (cipher suites, certificate validity)\n7. Information disclosure detection (stack traces, server banners)\n8. Generate vulnerability report with severity (CVSS scoring)\n9. Export to SARIF or JSON format\n\nInput: target URL, crawl depth. Output: vulnerability report.",
      hint: "Use payload dictionaries, analyze responses for error patterns, check response headers.",
      expectedTime: "50 min",
      topics: ["Security", "Penetration Testing", "Automation", "Python"],
      testCases: [
        { input: "Test on site with SQLi vuln", output: "SQL Injection detected (High severity)" },
        { input: "Missing CSP header", output: "CSP not implemented (Medium severity)" },
        { input: "SSL cert expired", output: "Certificate expired (Critical severity)" },
        { input: "XSS payload in form", output: "Reflected XSS detected (High severity)" }
      ],
      solutionApproach: "Payload injection, response analysis, header inspection, CVSS scoring, report generation"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "hard",
      title: "Web Application Firewall (WAF) Rules Engine",
      question: "Implement WAF rule engine:\n1. Request parsing (URL, headers, body, cookies)\n2. Signature-based detection (SQLi, XSS, LFI patterns using regex/rules)\n3. Rate limiting per IP (token bucket algorithm)\n4. IP reputation check (blocklist/allowlist)\n5. Behavioral analysis (detect scrapers, bots)\n6. Geo-blocking (country-based restrictions)\n7. Custom rule support (YAML/JSON rule definitions)\n8. Action execution: block, allow, challenge (CAPTCHA), log\n9. Log all blocked requests with details\n\nIntegrate as middleware (Express/FastAPI) or reverse proxy.",
      hint: "Use regex for pattern matching, implement efficient rate limiting with Redis, parse rules from config.",
      expectedTime: "45 min",
      topics: ["Security", "WAF", "Middleware", "Reverse Proxy"],
      testCases: [
        { input: "Request with 'UNION SELECT' in query", output: "blocked, SQLi rule matched" },
        { input: "1000 requests in 1 min from IP", output: "rate limited, 429 returned" },
        { input: "Request from blocked country", output: "403 forbidden by geo rule" },
        { input: "Normal legitimate request", output: "allowed through" }
      ],
      solutionApproach: "Request parser, rule engine with regex, rate limiter, IP check, logging middleware"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "medium",
      title: "Security Log Analyzer & SIEM",
      question: "Build security log analysis system:\n1. Parse multiple log formats (syslog, JSON, Apache/Nginx access logs)\n2. Pattern detection (brute force, port scanning, malware indicators)\n3. Correlation rules (multiple failed logins from same IP)\n4. Anomaly detection (baseline behavior, detect deviations)\n5. IOC (Indicator of Compromise) matching (IP, domain, hash)\n6. Real-time alerting (Slack/Email/PagerDuty integration)\n7. Dashboard with threat timeline\n8. Log retention and archival policies\n9. Search and filter capabilities\n\nSimulate with sample security logs.",
      hint: "Use regex for log parsing, implement rule engine for correlation, statistical analysis for anomalies.",
      expectedTime: "40 min",
      topics: ["Security", "SIEM", "Log Analysis", "Monitoring"],
      testCases: [
        { input: "100 failed SSH attempts", output: "brute force alert triggered" },
        { input: "Known malicious IP hits", output: "IOC match alert (High severity)" },
        { input: "Unusual outbound traffic", output: "anomaly detected, possible exfiltration" },
        { input: "Log search 'error 500'", output: "filtered results with timestamps" }
      ],
      solutionApproach: "Log parser, correlation engine, anomaly detection, IOC matching, alerting, dashboard"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "medium",
      title: "Secrets Management System",
      question: "Implement secrets management like Vault:\n1. Encrypted storage of secrets (AES-256-GCM envelope encryption)\n2. Role-based access control (RBAC with policies)\n3. Dynamic secrets (database credentials with TTL/auto-rotation)\n4. Secret versioning (keep history, rollback capability)\n5. Audit logging (who accessed what, when)\n6. Transit encryption (encryption-as-a-service)\n7. Token-based authentication (AppRole/JWT)\n8. Secret leasing and renewal\n9. CLI and API interfaces\n\nStore secrets in encrypted backend (PostgreSQL/S3).",
      hint: "Use envelope encryption with master key, implement policy engine, use HSM if available.",
      expectedTime: "45 min",
      topics: ["Security", "Secrets Management", "Encryption", "Backend"],
      testCases: [
        { input: "Store secret 'api_key=abc123'", output: "encrypted and stored with version" },
        { input: "Read secret with valid token", output: "decrypted value returned" },
        { input: "Read without permission", output: "403 access denied" },
        { input: "Dynamic DB credentials", output: "temporary creds with 1h TTL" }
      ],
      solutionApproach: "Envelope encryption, RBAC engine, dynamic secret generation, audit logging, API"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "hard",
      title: "API Security Gateway",
      question: "Build API security gateway:\n1. JWT/OAuth2 token validation (signature, expiry, issuer)\n2. Scope/permission checking (RBAC/ABAC)\n3. Request signing verification (HMAC/AWS Signature v4)\n4. Input validation and sanitization (prevent injection)\n5. Rate limiting per client (different tiers)\n6. Request/response logging (PII masking)\n7. CORS policy enforcement\n8. Content Security Policy header injection\n9. API key management (validation, rotation alerts)\n10. Circuit breaker for backend protection\n\nForward validated requests to backend APIs.",
      hint: "Use middleware pattern, implement proper JWT validation, cache public keys.",
      expectedTime: "45 min",
      topics: ["API Security", "Gateway", "Authentication", "Backend"],
      testCases: [
        { input: "Valid JWT with 'read:users' scope", output: "forwarded to backend" },
        { input: "Expired JWT", output: "401 unauthorized" },
        { input: "SQL injection in body", output: "blocked, 400 bad request" },
        { input: "Rate limit exceeded", output: "429 too many requests" }
      ],
      solutionApproach: "JWT middleware, scope checker, input sanitizer, rate limiter, logging, proxy"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "hard",
      title: "DDoS Protection & Rate Limiting",
      question: "Implement DDoS protection system:\n1. Multi-layer rate limiting: IP, user, endpoint (token bucket/sliding window)\n2. Challenge-response for suspicious requests (CAPTCHA/honeypot)\n3. IP reputation scoring (behavioral analysis)\n4. Geo-fencing (block high-risk countries during attacks)\n5. Slowloris attack detection (incomplete HTTP requests)\n6. SYN flood detection (TCP connection analysis)\n7. Application-layer DDoS detection (expensive endpoint abuse)\n8. Automatic escalation (notify on-call, enable stricter rules)\n9. Traffic scrubbing simulation\n10. Integration with CDN/WAF (CloudFlare-style)\n\nImplement as reverse proxy or middleware.",
      hint: "Use Redis for distributed rate limiting, implement progressive penalties, track behavioral patterns.",
      expectedTime: "50 min",
      topics: ["Security", "DDoS", "Rate Limiting", "Infrastructure"],
      testCases: [
        { input: "1000 req/sec from single IP", output: "rate limited, challenge issued" },
        { input: "Slow HTTP headers", output: "connection closed, slowloris detected" },
        { input: "Abnormal traffic spike", output: "alert triggered, scrubbing enabled" },
        { input: "Legitimate user behavior", output: "allowed, no false positive" }
      ],
      solutionApproach: "Multi-layer rate limiting, behavioral scoring, challenge system, anomaly detection"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "hard",
      title: "Penetration Testing Automation Framework",
      question: "Build automated pentest framework:\n1. Reconnaissance: subdomain enumeration, port scanning (nmap-like)\n2. Service detection and version fingerprinting\n3. Vulnerability scanning with Nuclei-like templates\n4. Web crawling and form discovery\n5. Exploit suggestion based on CVE matches\n6. Report generation with evidence (screenshots, request/response)\n7. Risk scoring and prioritization\n8. False positive reduction (verify exploits)\n9. Scheduled scanning and continuous monitoring\n10. CI/CD integration for DevSecOps\n\nModular plugin architecture for extensibility.",
      hint: "Use asyncio for concurrent scanning, implement plugin system, integrate with vulnerability databases.",
      expectedTime: "55 min",
      topics: ["Security", "Penetration Testing", "Automation", "DevSecOps"],
      testCases: [
        { input: "Scan vulnerable web app", output: "SQLi, XSS, CSRF findings with POC" },
        { input: "Port scan 1000 ports", output: "open ports with service versions" },
        { input: "Known CVE match", output: "CVE-2021-44228 detected with exploit link" },
        { input: "Generate report", output: "PDF report with risk matrix" }
      ],
      solutionApproach: "Async scanner, plugin engine, CVE database, evidence collector, report generator"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "medium",
      title: "Malware Detection Sandbox",
      question: "Build malware analysis sandbox:\n1. File static analysis (hash, strings, PE/ELF structure)\n2. YARA rule matching for known signatures\n3. Dynamic analysis (API call monitoring, registry/file changes)\n4. Network traffic capture (DNS, HTTP, C2 detection)\n5. Behavioral scoring (ransomware patterns, keylogging)\n6. IOC extraction (IPs, domains, dropped files)\n7. Report generation with MITRE ATT&CK mapping\n8. Safe detonation environment (container/vm isolation)\n9. Integration with VirusTotal API for multi-scanner\n10. PDF/Office document macro analysis\n\nAnalyze suspicious files safely.",
      hint: "Use YARA for signatures, implement behavioral hooks, containerize for isolation.",
      expectedTime: "45 min",
      topics: ["Security", "Malware Analysis", "Sandbox", "Forensics"],
      testCases: [
        { input: "Ransomware sample", output: "high risk, encryption behavior detected" },
        { input: "Known trojan hash", output: "matches YARA rule, C2 identified" },
        { input: "Clean file", output: "low risk, no suspicious behavior" },
        { input: "VirusTotal scan", output: "15/70 engines flagged" }
      ],
      solutionApproach: "Static analyzer, YARA engine, dynamic hooks, network capture, behavioral scoring"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "hard",
      title: "Zero-Day Detection with Anomaly Detection",
      question: "Build zero-day/exploit detection system:\n1. Network traffic analysis (packet capture, flow analysis)\n2. Behavioral baseline (normal traffic patterns)\n3. Anomaly detection: statistical methods (Z-score, IQR), ML (isolation forest)\n4. Exploit pattern detection (heap spray, ROP chains, shellcode)\n5. Memory forensics (injection detection, hollow processes)\n6. File integrity monitoring (critical system files)\n7. Process behavior monitoring (unexpected network connections)\n8. Threat intelligence feed integration (MISP, TAXII)\n9. Alert correlation (reduce false positives)\n10. Incident response automation (isolate affected hosts)\n\nDetect unknown threats via behavior.",
      hint: "Use statistical anomaly detection, implement memory analysis, integrate threat intel feeds.",
      expectedTime: "50 min",
      topics: ["Security", "Zero-Day", "Anomaly Detection", "EDR"],
      testCases: [
        { input: "Unknown exploit payload", output: "anomaly detected, behavior matches exploit" },
        { input: "Process injects into lsass.exe", output: "credential dumping detected" },
        { input: "Outbound connection to rare IP", output: "C2 communication suspected" },
        { input: "System file modified", output: "integrity violation alert" }
      ],
      solutionApproach: "Traffic analysis, behavioral baseline, anomaly detection, exploit patterns, EDR integration"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "medium",
      title: "Cryptographic Toolkit",
      question: "Implement cryptographic utilities:\n1. Symmetric encryption: AES-256-GCM with authenticated encryption\n2. Asymmetric encryption: RSA-4096/OAEP, ECC (secp256r1)\n3. Digital signatures: RSA-PSS, ECDSA\n4. Hash functions: SHA-256, SHA-3, with HMAC\n5. Key derivation: PBKDF2, Argon2id, scrypt\n6. Random number generation (CSPRNG)\n7. Certificate validation (X.509 chain verification)\n8. TLS configuration scanner (cipher suite evaluation)\n9. Secure comparison (constant-time comparison to prevent timing attacks)\n10. Envelope encryption (data key + master key)\n\nProvide CLI and library interfaces.",
      hint: "Use cryptography library, never implement crypto from scratch, follow best practices.",
      expectedTime: "40 min",
      topics: ["Cryptography", "Encryption", "Security", "Python"],
      testCases: [
        { input: "Encrypt with AES-256-GCM", output: "ciphertext + auth tag + nonce" },
        { input: "Sign message with RSA", output: "valid signature, verified" },
        { input: "Derive key with Argon2", output: "secure key from password" },
        { input: "Weak TLS config scan", output: "SSLv3 enabled (vulnerability)" }
      ],
      solutionApproach: "AES-GCM implementation, RSA/ECC operations, KDF, certificate validation, constant-time ops"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "hard",
      title: "Cloud Security Scanner",
      question: "Build multi-cloud security scanner:\n1. AWS: IAM policy analysis (overly permissive), S3 bucket permissions, security groups\n2. Azure: RBAC assignments, storage account security, NSG rules\n3. GCP: IAM bindings, GCS permissions, firewall rules\n4. Compliance checks (CIS benchmarks)\n5. Resource tagging and inventory\n6. Encryption validation (at-rest, in-transit)\n7. Public exposure detection (public IPs, open databases)\n8. Secrets scanning (hardcoded in configs, Lambda env vars)\n9. Report generation with remediation steps\n10. Continuous compliance monitoring\n\nUse cloud SDKs (boto3, azure-sdk, google-cloud).",
      hint: "Use cloud APIs for resource enumeration, implement CIS benchmark checks, generate remediation code.",
      expectedTime: "50 min",
      topics: ["Cloud Security", "AWS", "Azure", "GCP", "Compliance"],
      testCases: [
        { input: "S3 bucket public read", output: "Critical: Public S3 bucket detected" },
        { input: "IAM user with *:* policy", output: "High: Overly permissive IAM" },
        { input: "Unencrypted RDS instance", output: "Medium: Encryption not enabled" },
        { input: "CIS benchmark scan", output: "15 passed, 5 failed, 3 manual" }
      ],
      solutionApproach: "Cloud SDK integration, resource enumerator, CIS checks, secret scanner, report generator"
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "hard",
      title: "Threat Modeling & STRIDE",
      question: "Explain threat modeling methodologies: STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation of Privilege), PASTA, and VAST. How do you conduct a threat modeling session? What are the outputs (threats, mitigations, risk acceptance)?",
      hint: "Cover the full threat modeling lifecycle from architecture review to mitigation implementation.",
      expectedPoints: ["STRIDE categories explained", "Threat modeling process", "Data flow diagrams (DFD)", "Attack surface analysis", "Threat categorization", "Risk scoring (DREAD)", "Mitigation strategies", "Threat model documentation", "Review cadence", "Tools (Microsoft Threat Modeling Tool, OWASP Threat Dragon)", "Developer integration"],
      topics: ["Threat Modeling", "STRIDE", "Security Architecture"]
    },
    {
      id: 14,
      type: "theoretical",
      difficulty: "hard",
      title: "Zero Trust Security Architecture",
      question: "Design a Zero Trust security model. How does it differ from traditional perimeter-based security? Explain: identity verification, least privilege access, micro-segmentation, continuous monitoring, and device trust. What are implementation challenges?",
      hint: "Cover the 'never trust, always verify' principle and practical implementation patterns.",
      expectedPoints: ["Perimeter vs Zero Trust", "Identity as perimeter", "Least privilege (just-in-time)", "Micro-segmentation", "Device posture assessment", "Continuous verification", "Conditional access policies", "Software-defined perimeter", "BeyondCorp model", "Implementation roadmap", "Challenges and tradeoffs"],
      topics: ["Zero Trust", "Network Security", "Architecture"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "hard",
      title: "Cryptography: Theory & Best Practices",
      question: "Explain cryptographic primitives: symmetric encryption (AES, ChaCha20), asymmetric (RSA, ECC), hashing (SHA-256, SHA-3), and key exchange (Diffie-Hellman). What are common implementation mistakes? Cover authenticated encryption, key management, and forward secrecy.",
      hint: "Discuss practical attacks and how to prevent them.",
      expectedPoints: ["Symmetric vs asymmetric", "Block cipher modes (GCM vs CBC)", "Authenticated encryption", "RSA vs ECC", "Forward secrecy (DHE, ECDHE)", "Hash properties", "HMAC usage", "Common mistakes (ECB mode, hardcoded keys)", "Key management lifecycle", "RNG importance", "Post-quantum cryptography preparation"],
      topics: ["Cryptography", "Encryption", "Security Fundamentals"]
    },
    {
      id: 16,
      type: "theoretical",
      difficulty: "medium",
      title: "Secure SDLC & DevSecOps",
      question: "How do you integrate security into SDLC? Explain: security requirements, threat modeling, SAST (static analysis), DAST (dynamic analysis), dependency scanning, container scanning, secret detection, and security gates in CI/CD. What tools support each phase?",
      hint: "Cover shift-left security and automation.",
      expectedPoints: ["Secure SDLC phases", "SAST tools (SonarQube, Semgrep)", "DAST tools (OWASP ZAP, Burp)", "SCA/dependency scanning (Snyk, Dependabot)", "Container scanning (Trivy, Clair)", "Secret scanning (TruffleHog, GitLeaks)", "IaC scanning (Checkov, tfsec)", "Security gates", "Bug bounty integration", "Security metrics", "Developer security training"],
      topics: ["DevSecOps", "SDLC", "Security Automation"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "hard",
      title: "Incident Response & Forensics",
      question: "Design an incident response plan. Cover: preparation, detection, containment, eradication, recovery, and lessons learned. What forensics techniques preserve evidence? How do you handle data breaches legally and with customers?",
      hint: "Cover the NIST incident response framework and legal considerations.",
      expectedPoints: ["NIST incident response lifecycle", "IR team roles", "Detection methods", "Containment strategies", "Forensic preservation", "Chain of custody", "Eradication steps", "Recovery procedures", "Communication plan", "Legal notification requirements", "Post-incident review", "Runbook development"],
      topics: ["Incident Response", "Forensics", "Crisis Management"]
    },
    {
      id: 18,
      type: "theoretical",
      difficulty: "hard",
      title: "Supply Chain Security",
      question: "How do you secure the software supply chain? Cover: SBOM (Software Bill of Materials), dependency risks (log4j-style), signed artifacts, reproducible builds, immutable infrastructure, and vendor risk management. What is SLSA (Supply Chain Levels for Software Artifacts)?",
      hint: "Discuss recent supply chain attacks and prevention strategies.",
      expectedPoints: ["Supply chain attack vectors", "SBOM generation and usage", "Dependency scanning", "Vulnerability disclosure", "Signed commits and artifacts", "Reproducible builds", "Immutable infrastructure", "Vendor security assessment", "SLSA levels", "Sigstore/Cosign", "Package manager security", "Third-party risk management"],
      topics: ["Supply Chain Security", "DevSecOps", "Risk Management"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "medium",
      title: "Security Compliance Frameworks",
      question: "Compare security frameworks: SOC 2, ISO 27001, PCI DSS, GDPR, HIPAA, NIST CSF. What are the key requirements of each? How do you map controls across frameworks? What is continuous compliance monitoring?",
      hint: "Cover audit processes and evidence collection.",
      expectedPoints: ["SOC 2 (Trust Services Criteria)", "ISO 27001 (ISMS)", "PCI DSS (card data)", "GDPR (privacy)", "HIPAA (healthcare)", "NIST CSF", "Common controls across frameworks", "Audit evidence", "Continuous compliance", "Gap analysis", "Third-party audits", "Certification maintenance"],
      topics: ["Compliance", "Governance", "Risk Management"]
    },
    {
      id: 20,
      type: "theoretical",
      difficulty: "hard",
      title: "Insider Threats & Data Loss Prevention",
      question: "How do you detect and prevent insider threats? Cover: UEBA (User and Entity Behavior Analytics), DLP (Data Loss Prevention), access controls, separation of duties, and psychological/organizational measures. What are indicators of insider threat?",
      hint: "Balance security with privacy and employee trust.",
      expectedPoints: ["Insider threat types", "UEBA behavioral baselines", "Anomaly detection", "DLP strategies", "Data classification", "Access logging and monitoring", "Privilege reviews", "Separation of duties", "Exit procedures", "Psychological indicators", "Reporting mechanisms", "Privacy considerations"],
      topics: ["Insider Threats", "DLP", "Security Monitoring"]
    }
  ],

  "DevOps Engineer": [
    {
      id: 1,
      type: "coding",
      difficulty: "medium",
      title: "CI/CD Pipeline Configuration (GitHub Actions/GitLab CI)",
      question: "Create a complete CI/CD pipeline configuration file (.github/workflows/ci.yml or .gitlab-ci.yml) with:\n1. Build stage: Install dependencies, run tests, generate coverage report\n2. Security scan: Run SAST (Semgrep), dependency vulnerability check (Snyk/npm audit)\n3. Build and push Docker image to registry\n4. Deploy to staging on every PR, production on main branch merge\n5. Notifications on Slack/Teams for failures\n\nInclude proper caching, parallel jobs, and environment variables management.",
      hint: "Use matrix builds for multiple Node versions, cache npm dependencies, use secrets for tokens.",
      expectedTime: "30 min",
      topics: ["CI/CD", "GitHub Actions", "GitLab CI", "DevOps"],
      testCases: [
        { input: "Push to feature branch", output: "build + test + security scan runs" },
        { input: "All tests pass", output: "Docker image built and pushed" },
        { input: "Security vulnerability found", output: "pipeline fails, notification sent" },
        { input: "Merge to main", output: "deploys to production after approval" }
      ],
      solutionApproach: "Define stages, use actions/checkout, setup-node, cache, docker/build-push-action"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "medium",
      title: "Dockerfile Optimization",
      question: "Write an optimized multi-stage Dockerfile for a Node.js/React application with:\n1. Build stage: Install all dependencies, build the app\n2. Production stage: Only runtime dependencies, minimal image size\n3. Security: Run as non-root user, use distroless or alpine base\n4. Layer caching: Copy package.json first for better cache hits\n5. Health check endpoint configured\n6. Image size under 100MB\n\nTarget: Production-ready, secure, small image.",
      hint: "Use multi-stage builds, COPY package*.json first, npm ci --only=production, USER instruction.",
      expectedTime: "20 min",
      topics: ["Docker", "Containerization", "Optimization", "Security"],
      testCases: [
        { input: "docker build", output: "successful build, image < 100MB" },
        { input: "docker run", output: "app starts, health check passes" },
        { input: "docker exec whoami", output: "non-root user" },
        { input: "Change source code, rebuild", output: "npm install uses cache" }
      ],
      solutionApproach: "Multi-stage: build with all deps, copy only dist/node_modules to prod stage"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "hard",
      title: "Terraform Infrastructure Module",
      question: "Write Terraform code to deploy a highly available web application infrastructure on AWS with:\n1. VPC with public and private subnets across 2 AZs\n2. Auto Scaling Group with min 2, max 10 EC2 instances\n3. Application Load Balancer (ALB) with health checks\n4. RDS PostgreSQL database in private subnet with Multi-AZ\n5. S3 bucket for static assets with CloudFront CDN\n6. Security groups with least privilege access\n7. Remote state backend configuration\n\nUse modules for reusability.",
      hint: "Use AWS VPC module, separate web/db tiers, use data sources for AMI, configure remote state in S3.",
      expectedTime: "40 min",
      topics: ["Terraform", "IaC", "AWS", "Infrastructure"],
      testCases: [
        { input: "terraform plan", output: "shows all resources to create" },
        { input: "terraform apply", output: "creates infra, outputs ALB DNS" },
        { input: "Simulate AZ failure", output: "ASG launches new instance in healthy AZ" },
        { input: "High CPU on instances", output: "ASG scales out automatically" }
      ],
      solutionApproach: "Modularize VPC, ASG, ALB, RDS. Use variables for environment. Output endpoints."
    },
    {
      id: 4,
      type: "coding",
      difficulty: "medium",
      title: "Kubernetes Deployment & Service",
      question: "Create Kubernetes manifests for a microservices application:\n1. Deployment: 3 replicas, resource limits (CPU: 500m, Memory: 512Mi), rolling update strategy\n2. Service: ClusterIP for internal services, NodePort/LoadBalancer for external\n3. ConfigMap for non-sensitive configuration\n4. Secret for database credentials\n5. HorizontalPodAutoscaler: scale at 70% CPU\n6. Liveness and Readiness probes\n7. PodDisruptionBudget for availability during node maintenance\n\nFiles: deployment.yaml, service.yaml, hpa.yaml, pdb.yaml",
      hint: "Set proper labels for selectors. Use readiness probe before liveness. Configure resource requests/limits.",
      expectedTime: "30 min",
      topics: ["Kubernetes", "K8s", "Orchestration", "DevOps"],
      testCases: [
        { input: "kubectl apply -f manifests/", output: "all resources created" },
        { input: "kubectl get pods", output: "3/3 running, all Ready" },
        { input: "Load test to 80% CPU", output: "HPA scales to 5 replicas" },
        { input: "Drain a node", output: "PDB ensures min 2 pods available" }
      ],
      solutionApproach: "Define Deployment with probes, Service for routing, HPA for autoscaling, PDB for disruption budget"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "hard",
      title: "Log Aggregation & Monitoring Setup",
      question: "Set up centralized logging and monitoring stack using:\n1. Fluentd or Fluent Bit as log collector/forwarder\n2. Elasticsearch for log storage and indexing\n3. Kibana for log visualization and dashboards\n4. Prometheus for metrics collection\n5. Grafana for metrics dashboards and alerts\n6. AlertManager for critical alert routing (PagerDuty/Slack)\n7. Configure structured logging (JSON format)\n\nInclude config files and architecture diagram description.",
      hint: "Use DaemonSet for Fluentd on each node. Configure log parsing rules. Set up retention policies.",
      expectedTime: "35 min",
      topics: ["Observability", "Logging", "Monitoring", "DevOps"],
      testCases: [
        { input: "Application logs in JSON", output: "logs appear in Kibana with parsed fields" },
        { input: "High memory alert rule triggered", output: "AlertManager sends Slack notification" },
        { input: "Query logs in Kibana", output: "searchable by service, level, message" },
        { input: "30 days pass", output: "old logs purged per retention policy" }
      ],
      solutionApproach: "Fluentd config for log collection, ES indices, Kibana dashboards, Prometheus rules, Alertmanager routing"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "medium",
      title: "Ansible Playbook for Server Configuration",
      question: "Write an Ansible playbook that configures a web server with:\n1. Install and configure Nginx with SSL (Let's Encrypt)\n2. Deploy application code from Git repository\n3. Set up firewall rules (allow 80, 443, deny others)\n4. Create system user for app with proper permissions\n5. Configure log rotation\n6. Enable and start services\n7. Idempotent - safe to run multiple times\n\nInclude inventory file and variable files for different environments.",
      hint: "Use handlers to restart services only when config changes. Use templates for config files.",
      expectedTime: "25 min",
      topics: ["Configuration Management", "Ansible", "Automation", "DevOps"],
      testCases: [
        { input: "ansible-playbook site.yml", output: "nginx installed, app deployed" },
        { input: "Run again without changes", output: "ok=0 changed=0 (idempotent)" },
        { input: "Change nginx config", output: "config updated, nginx reloaded" },
        { input: "curl https://server", output: "SSL certificate valid" }
      ],
      solutionApproach: "Roles for nginx, app, firewall. Templates for configs. Handlers for restarts. Vault for secrets."
    },
    {
      id: 7,
      type: "coding",
      difficulty: "hard",
      title: "HashiCorp Vault Integration",
      question: "Implement secure secrets management with HashiCorp Vault:\n1. Configure Vault server with Dev or Prod mode\n2. Enable KV secrets engine v2\n3. Create policy for app to read specific secrets\n4. Implement AppRole authentication for apps\n5. Write script to fetch secrets at runtime (init container or sidecar)\n6. Enable database secrets engine for dynamic DB credentials\n7. Set up automatic secret rotation\n\nProvide Vault policy HCL and integration code (Python/Node.js/Shell).",
      hint: "Use Vault agent for automatic token renewal. Store token securely. Use response wrapping.",
      expectedTime: "35 min",
      topics: ["Security", "Vault", "Secrets Management", "DevOps"],
      testCases: [
        { input: "vault policy read app-policy", output: "shows correct capabilities" },
        { input: "App requests database credentials", output: "returns temporary creds with TTL" },
        { input: "TTL expires", output: "credentials automatically revoked" },
        { input: "vault token renew", output: "token lease extended" }
      ],
      solutionApproach: "Enable KV and database engines, create policies, configure AppRole, use sidecar pattern"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "medium",
      title: "Bash Script for System Administration",
      question: "Write a comprehensive bash script for system maintenance:\n1. Check disk usage - alert if > 80% on any partition\n2. Check memory usage - alert if > 90%\n3. Check running services (nginx, mysql) - restart if not running\n4. Clean up old log files (> 7 days)\n5. Backup critical directories to S3 with timestamp\n6. Send email/Slack notification with status report\n7. Log all actions to syslog\n8. Include error handling and set -euo pipefail\n\nMake it cron-friendly.",
      hint: "Use df, free, systemctl, find, aws s3 sync. Trap errors. Use functions for modularity.",
      expectedTime: "25 min",
      topics: ["Scripting", "Bash", "System Administration", "Automation"],
      testCases: [
        { input: "Disk at 85%", output: "WARNING email sent, logged to syslog" },
        { input: "nginx not running", output: "attempts restart, reports status" },
        { input: "Backup execution", output: "files uploaded to S3 with timestamp" },
        { input: "Script error occurs", output: "error handled gracefully, cleanup runs" }
      ],
      solutionApproach: "Check commands with if/fi, use awscli for S3, curl for Slack, logger for syslog"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "hard",
      title: "Helm Chart for Microservices",
      question: "Create a Helm chart for deploying a microservices application to Kubernetes:\n1. Template for Deployments (replicas, image tag configurable per service)\n2. Template for Services (ClusterIP/LoadBalancer)\n3. Template for Ingress with TLS\n4. ConfigMap for environment-specific config\n5. Values.yaml with environment overrides (dev/staging/prod)\n6. Helper templates for common labels\n7. Chart dependencies (Redis, PostgreSQL from Bitnami)\n8. NOTES.txt with post-install instructions\n\nSupport 3 services: api, worker, frontend.",
      hint: "Use _helpers.tpl for common templates. Define values schema. Use range for iterating services.",
      expectedTime: "35 min",
      topics: ["Kubernetes", "Helm", "Templating", "DevOps"],
      testCases: [
        { input: "helm template . -f values.yaml", output: "renders all K8s manifests" },
        { input: "helm install myapp . --set api.replicas=5", output: "deploys with 5 api replicas" },
        { input: "helm upgrade myapp .", output: "rolling update of changed components" },
        { input: "helm uninstall myapp", output: "cleans up all resources" }
      ],
      solutionApproach: "Define templates in templates/, values in values.yaml, use range for services, dependencies in Chart.yaml"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "medium",
      title: "AWS Lambda + API Gateway Deployment",
      question: "Deploy a serverless application using AWS Lambda and API Gateway:\n1. Lambda function code (Node.js/Python) - CRUD API for items\n2. SAM or Serverless Framework template\n3. API Gateway with custom domain and SSL\n4. DynamoDB table for data persistence\n5. IAM roles with least privilege permissions\n6. CloudWatch logs and X-Ray tracing\n7. Environment variables and secrets management\n8. Local testing with sam local invoke\n\nInclude deployment script and testing commands.",
      hint: "Define resources in template.yaml. Use DynamoDB SDK. Configure API Gateway routes.",
      expectedTime: "30 min",
      topics: ["Serverless", "AWS Lambda", "Cloud", "DevOps"],
      testCases: [
        { input: "sam build && sam deploy", output: "stack created, API endpoint returned" },
        { input: "GET /items", output: "returns items from DynamoDB" },
        { input: "POST /items", output: "creates item, returns 201" },
        { input: "Check CloudWatch", output: "logs available, X-Ray traces present" }
      ],
      solutionApproach: "SAM template with Lambda, API Gateway, DynamoDB. IAM roles scoped. Environment variables."
    },
    {
      id: 11,
      type: "coding",
      difficulty: "hard",
      title: "Blue-Green Deployment Automation",
      question: "Implement a blue-green deployment strategy using Kubernetes:\n1. Two identical environments (blue: current, green: new version)\n2. Deploy new version to green environment\n3. Run smoke tests against green environment\n4. Switch traffic from blue to green using Service selector\n5. Support instant rollback by switching back\n6. Include database migration strategy (expand-contract pattern)\n7. Zero-downtime guarantee\n8. Health checks before traffic switch\n\nProvide shell script or kubectl commands.",
      hint: "Use Kubernetes Service selector to switch traffic. Keep both deployments running during switch.",
      expectedTime: "35 min",
      topics: ["Deployment Strategies", "Kubernetes", "Zero-Downtime", "DevOps"],
      testCases: [
        { input: "./deploy.sh v2.0.0", output: "green deployed, smoke tests pass" },
        { input: "Smoke tests fail", output: "green marked failed, blue continues serving" },
        { input: "Switch traffic command", output: "100% traffic to green, zero downtime" },
        { input: "Rollback command", output: "traffic switched back to blue instantly" }
      ],
      solutionApproach: "Separate deployments with labels, Service selects active color, script orchestrates switch"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "hard",
      title: "Network Policy for Kubernetes Security",
      question: "Implement Kubernetes Network Policies for a multi-tier application:\n1. Default deny all ingress/egress traffic\n2. Frontend pods: allow ingress on 80/443 from ingress controller only\n3. Backend API pods: allow ingress on 8080 from frontend only\n4. Database pods: allow ingress on 5432 from backend only\n5. Allow DNS resolution (UDP 53)\n6. Allow egress to external APIs (HTTPS only)\n7. Namespace isolation - dev cannot talk to prod\n\nProvide NetworkPolicy manifests for each tier.",
      hint: "Use namespaceSelector and podSelector. Deny-all policy first, then allow specific.",
      expectedTime: "30 min",
      topics: ["Kubernetes", "Network Security", "Zero Trust", "DevOps"],
      testCases: [
        { input: "kubectl apply -f network-policies/", output: "policies created" },
        { input: "Frontend pod tries to access DB directly", output: "connection blocked by policy" },
        { input: "External pod tries to access backend", output: "connection blocked" },
        { input: "Backend calls external API over HTTPS", output: "connection allowed" }
      ],
      solutionApproach: "Deny-all default, explicit allow policies per tier, test with kubectl exec curl"
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "medium",
      title: "Container Security Best Practices",
      question: "What are container security best practices? Cover image scanning, runtime security, network policies, and secrets management. Explain how to implement defense in depth for containerized applications.",
      hint: "Discuss image vulnerabilities, runtime privileges, network segmentation, and secrets.",
      expectedPoints: ["Minimal base images (distroless/alpine)", "Image scanning (Trivy, Clair)", "Non-root containers", "Read-only filesystems", "Drop capabilities", "Seccomp/AppArmor profiles", "Network policies", "Secrets management (not in env vars)", "Runtime security (Falco)", "Pod Security Standards"],
      topics: ["Security", "Containers", "DevSecOps"]
    },
    {
      id: 14,
      type: "theoretical",
      difficulty: "hard",
      title: "GitOps & Continuous Deployment",
      question: "Explain GitOps principles and how it differs from traditional CI/CD. What tools implement GitOps (ArgoCD, Flux)? How does it provide audit trails and rollback capabilities? Discuss the App of Apps pattern and multi-tenancy.",
      hint: "Cover declarative infrastructure, automated sync, drift detection, and benefits.",
      expectedPoints: ["Git as single source of truth", "Declarative configuration", "Automated synchronization", "Drift detection and correction", "ArgoCD architecture", "Flux architecture", "App of Apps pattern", "Multi-source support", "Rollback via Git revert", "Audit trail from Git history", "Separation of CI and CD"],
      topics: ["GitOps", "ArgoCD", "Flux", "CD"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "hard",
      title: "High Availability & Disaster Recovery",
      question: "Design for 99.99% uptime (four nines). What patterns ensure resilience? Explain RTO (Recovery Time Objective) and RPO (Recovery Point Objective). How do you implement multi-region failover, data replication, and backup strategies?",
      hint: "Cover redundancy, failover automation, data consistency, and chaos engineering.",
      expectedPoints: ["Redundancy patterns", "Active-active vs active-passive", "Load balancing", "Health checks", "Auto-failover", "Data replication strategies", "RTO and RPO definitions", "Backup strategies (full, incremental)", "Point-in-time recovery", "Chaos engineering", "Multi-region deployment", "Global load balancing"],
      topics: ["High Availability", "Disaster Recovery", "SRE", "Resilience"]
    },
    {
      id: 16,
      type: "theoretical",
      difficulty: "medium",
      title: "Infrastructure Cost Optimization",
      question: "How do you optimize cloud infrastructure costs without sacrificing reliability? Cover compute (reserved instances, spot instances), storage (lifecycle policies, storage classes), and networking (CDN, data transfer optimization).",
      hint: "Discuss pricing models, right-sizing, and FinOps practices.",
      expectedPoints: ["Right-sizing instances", "Reserved Instances / Savings Plans", "Spot/Preemptible instances", "Auto-scaling policies", "Storage lifecycle (S3 Glacier)", "Compute savings (Graviton/ARM)", "CDN for bandwidth savings", "Resource tagging", "Cost allocation and chargeback", "Idle resource cleanup", "FinOps practices"],
      topics: ["Cost Optimization", "Cloud Economics", "FinOps"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "hard",
      title: "Service Mesh: Istio/Linkerd",
      question: "When and why would you use a service mesh? Compare Istio and Linkerd. What problems does it solve (mTLS, traffic management, observability)? Discuss the data plane and control plane architecture, and the sidecar pattern.",
      hint: "Cover features, overhead, complexity trade-offs, and use cases.",
      expectedPoints: ["Service mesh definition", "mTLS encryption", "Traffic splitting (canary)", "Circuit breaking", "Observability (metrics, traces)", "Istio architecture", "Linkerd architecture", "Sidecar pattern", "Ambient mesh (sidecar-less)", "Performance overhead", "Complexity considerations", "Gradual adoption"],
      topics: ["Service Mesh", "Istio", "Linkerd", "Microservices"]
    },
    {
      id: 18,
      type: "theoretical",
      difficulty: "medium",
      title: "Configuration Management Tools Comparison",
      question: "Compare Ansible, Chef, Puppet, and SaltStack. When would you use each? Cover push vs pull models, agent vs agentless, idempotency, and learning curves.",
      hint: "Discuss architecture differences and use case fit.",
      expectedPoints: ["Ansible (agentless, push, YAML)", "Chef (agent, pull, Ruby)", "Puppet (agent, pull, declarative)", "SaltStack (agent, push/pull, Python)", "Push vs Pull models", "Agent vs Agentless", "Idempotency concept", "State management", "Ease of learning", "Community and ecosystem", "Use case recommendations"],
      topics: ["Configuration Management", "Automation", "Tools"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "hard",
      title: "SRE Principles: SLIs, SLOs, Error Budgets",
      question: "Explain Site Reliability Engineering (SRE) principles. What are SLIs (Service Level Indicators), SLOs (Service Level Objectives), and SLAs (Service Level Agreements)? How do error budgets work? How do you implement them in practice?",
      hint: "Cover reliability measurement, balancing feature velocity with stability.",
      expectedPoints: ["SRE definition", "SLI examples (latency, availability)", "SLO targets", "SLA contracts", "Error budget calculation", "Error budget policy", "Toil reduction", "Monitoring and alerting", "Postmortems (blameless)", "Capacity planning", "Automation focus"],
      topics: ["SRE", "Reliability", "SLI", "SLO", "SLA"]
    },
    {
      id: 20,
      type: "theoretical",
      difficulty: "hard",
      title: "Cloud Native Architecture Patterns",
      question: "Explain cloud native architecture principles and patterns. What are 12-factor app methodology, microservices, containers, and dynamic management? Discuss patterns: Circuit Breaker, Bulkhead, Sidecar, Ambassador, and Adapter.",
      hint: "Cover modern application design for cloud environments.",
      expectedPoints: ["12-factor app methodology", "Microservices characteristics", "Containers and orchestration", "API-first design", "Circuit Breaker pattern", "Bulkhead pattern", "Sidecar pattern", "Ambassador pattern", "Adapter pattern", "Config externalization", "Statelessness", "Disposability", "Concurrency", "Observability"],
      topics: ["Cloud Native", "Architecture", "12-Factor", "Design Patterns"]
    }
  ],

  "Mobile App Developer": [
    {
      id: 1,
      type: "coding",
      difficulty: "medium",
      title: "To-Do List App with Local Storage",
      question: "Build a complete to-do list mobile app with:\n1. Add, edit, delete, and mark tasks as complete\n2. Local data persistence (AsyncStorage/Room/CoreData/UserDefaults)\n3. Categories/tags for tasks\n4. Due dates with reminders\n5. Search and filter functionality\n6. Swipe to delete gesture\n7. Pull-to-refresh\n\nTech: React Native (AsyncStorage), Flutter (Hive/SharedPreferences), or native iOS/Android.",
      hint: "Use local storage library, implement CRUD operations, handle state management",
      expectedTime: "35 min",
      topics: ["Mobile Development", "Local Storage", "UI/UX", "State Management"],
      testCases: [
        { input: "Add 5 tasks, close app, reopen", output: "all tasks persist" },
        { input: "Mark task complete", output: "UI updates, stored as complete" },
        { input: "Search 'work'", output: "only work-related tasks shown" },
        { input: "Swipe to delete", output: "task removed with animation" }
      ],
      solutionApproach: "Use AsyncStorage/SharedPreferences, implement FlatList with swipe gestures, state management"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "medium",
      title: "REST API Integration with Caching",
      question: "Implement API integration for a news/weather/e-commerce app:\n1. Fetch data from REST API with proper error handling\n2. Implement offline-first strategy with local caching\n3. Pull-to-refresh for manual sync\n4. Image loading and caching (lazy loading)\n5. Loading states and skeleton screens\n6. Retry mechanism for failed requests\n7. Pagination for infinite scroll lists\n\nTech: Any mobile framework with HTTP client (axios, retrofit, URLSession).",
      hint: "Use interceptors for auth tokens, implement cache layer, handle network states",
      expectedTime: "30 min",
      topics: ["API Integration", "Caching", "Offline-First", "Networking"],
      testCases: [
        { input: "App opens with network", output: "fetches and displays data" },
        { input: "Turn off network, reopen app", output: "shows cached data" },
        { input: "Pull-to-refresh", output: "refreshes data from API" },
        { input: "Scroll to bottom of list", output: "loads next page automatically" }
      ],
      solutionApproach: "HTTP client with interceptors, local DB cache, connectivity awareness, pagination"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "hard",
      title: "Real-Time Chat with Push Notifications",
      question: "Build a real-time chat feature with:\n1. WebSocket integration for real-time messaging\n2. Push notifications when app is in background/closed\n3. Message persistence (SQLite/CoreData/Realm)\n4. Typing indicators\n5. Message status (sent, delivered, read)\n6. Image sharing with compression\n7. End-to-end encryption (optional advanced)\n\nTech: Firebase Cloud Messaging for push, Socket.io for real-time, any local DB.",
      hint: "Handle app lifecycle states, request push permissions, manage WebSocket connection lifecycle",
      expectedTime: "45 min",
      topics: ["Real-Time", "Push Notifications", "WebSockets", "Mobile"],
      testCases: [
        { input: "Send message while app open", output: "appears in real-time" },
        { input: "App in background, receive message", output: "push notification displayed" },
        { input: "Open chat history", output: "messages loaded from local DB" },
        { input: "Send image", output: "compressed, uploaded, displayed" }
      ],
      solutionApproach: "WebSocket service, FCM/APNs integration, local DB for history, background message handling"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "medium",
      title: "User Authentication System",
      question: "Implement complete authentication flow:\n1. Login with email/password (JWT tokens)\n2. Biometric authentication (Face ID/Touch ID/Fingerprint)\n3. Token refresh mechanism\n4. Secure storage of credentials (Keychain/Keystore)\n5. Auto-login on app launch\n6. Logout and clear all data\n7. Password reset flow via email\n\nTech: Any mobile framework with biometric APIs and secure storage.",
      hint: "Use platform secure storage, refresh tokens before expiry, handle biometric errors gracefully",
      expectedTime: "30 min",
      topics: ["Authentication", "Security", "Biometrics", "Mobile"],
      testCases: [
        { input: "Login with valid credentials", output: "token stored, navigates to home" },
        { input: "Enable biometric, reopen app", output: "prompts for Face ID, auto-login" },
        { input: "Token expires", output: "silently refreshes in background" },
        { input: "Logout", output: "clears tokens, shows login screen" }
      ],
      solutionApproach: "Secure token storage, biometric API integration, auth interceptor, token refresh logic"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "hard",
      title: "Offline-First Note Taking App",
      question: "Build an offline-first note taking app with sync:\n1. Create, edit, delete notes (works offline)\n2. Rich text editing (bold, italic, bullet lists)\n3. Sync with cloud when online (conflict resolution)\n4. Attach images to notes\n5. Search notes (full-text search)\n6. Organize in folders/tags\n7. Export notes to PDF/share\n\nTech: SQLite/Room/CoreData with sync to Firebase/Custom API.",
      hint: "Implement sync queue, handle conflicts (last-write-wins or merge), use background sync",
      expectedTime: "45 min",
      topics: ["Offline-First", "Sync", "Local Database", "Mobile"],
      testCases: [
        { input: "Create note offline", output: "saved locally, shows pending sync" },
        { input: "Come online", output: "syncs to cloud automatically" },
        { input: "Edit same note on 2 devices", output: "conflict resolved gracefully" },
        { input: "Search 'meeting'", output: "shows notes containing word" }
      ],
      solutionApproach: "Local DB with sync queue, background sync service, conflict resolution strategy"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "medium",
      title: "Map Integration with Location Services",
      question: "Implement maps and location features:\n1. Display interactive map (Google Maps/Mapbox/Apple Maps)\n2. Show user's current location with permission handling\n3. Add custom markers/pins on map\n4. Get directions between two points\n5. Geofencing - detect when entering/leaving area\n6. Background location tracking (with battery optimization)\n7. Search places and autocomplete\n\nTech: react-native-maps, flutter_map, or native MapKit/Google Maps SDK.",
      hint: "Request location permissions, handle iOS/Android differences, optimize for battery",
      expectedTime: "35 min",
      topics: ["Maps", "Location Services", "Geofencing", "Mobile"],
      testCases: [
        { input: "Grant location permission", output: "shows blue dot at current location" },
        { input: "Search 'coffee shop'", output: "shows nearby results as markers" },
        { input: "Enter geofenced area", output: "triggers local notification" },
        { input: "Get directions", output: "shows route on map" }
      ],
      solutionApproach: "Map SDK integration, location manager, geofencing APIs, places autocomplete"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "hard",
      title: "E-Commerce App with Cart & Checkout",
      question: "Build mobile e-commerce features:\n1. Product catalog with categories and filters\n2. Product detail with image gallery, reviews\n3. Shopping cart (add, update quantity, remove)\n4. Checkout flow with payment integration (Stripe/Razorpay)\n5. Order history and tracking\n6. Wishlist/Favorites\n7. Push notifications for order updates\n\nTech: Any mobile framework with payment SDK integration.",
      hint: "Implement cart state management, handle payment callbacks, secure payment token handling",
      expectedTime: "50 min",
      topics: ["E-Commerce", "Payments", "Mobile", "State Management"],
      testCases: [
        { input: "Add items to cart", output: "cart badge updates, persists" },
        { input: "Checkout with valid card", output: "payment processed, order created" },
        { input: "Payment fails", output: "shows error, cart preserved" },
        { input: "Order ships", output: "receives push notification" }
      ],
      solutionApproach: "Cart context/redux, payment SDK integration, order API, push notification handling"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "medium",
      title: "Camera & Media Gallery Integration",
      question: "Implement camera and media features:\n1. Take photos using device camera\n2. Pick images/videos from gallery\n3. Display photos in grid gallery\n4. Image editing (crop, rotate, filters)\n5. Video recording with quality settings\n6. Save media to device or cloud\n7. Request camera and storage permissions\n\nTech: react-native-image-picker, image_cropper, or native camera APIs.",
      hint: "Handle permissions properly, compress images for upload, cache thumbnails",
      expectedTime: "30 min",
      topics: ["Camera", "Media", "Permissions", "Mobile"],
      testCases: [
        { input: "Tap camera button", output: "camera opens, can take photo" },
        { input: "Select from gallery", output: "shows picker, returns selected image" },
        { input: "Edit image", output: "crop/rotate applied, saved" },
        { input: "Deny camera permission", output: "shows explanation, can open settings" }
      ],
      solutionApproach: "Camera/gallery permissions, image picker library, editing SDK, upload handling"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "hard",
      title: "Social Media Feed with Performance",
      question: "Build a high-performance social media feed:\n1. Infinite scroll list (FlatList/RecyclerView/ListView)\n2. Image/video lazy loading and caching\n3. Like, comment, share functionality\n4. Pull-to-refresh and load more\n5. Optimized re-renders (React.memo/PureComponent)\n6. Image placeholder and progressive loading\n7. Video autoplay when visible\n8. Offline support for viewed content\n\nTech: Optimized list components, image caching libraries.",
      hint: "Use getItemLayout for fixed size items, implement shouldComponentUpdate/React.memo, windowSize prop",
      expectedTime: "40 min",
      topics: ["Performance", "Lists", "Optimization", "Mobile"],
      testCases: [
        { input: "Scroll through 1000 items", output: "smooth 60fps scrolling" },
        { input: "Images load", output: "blur placeholder then clear image" },
        { input: "Like a post", output: "optimistic UI update, API call in background" },
        { input: "Lose connection while scrolling", output: "cached content still visible" }
      ],
      solutionApproach: "Virtualized list, image lazy loading, memoization, pagination, cache layer"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "medium",
      title: "Background Task & Sync Scheduler",
      question: "Implement background processing:\n1. Sync data when app is in background\n2. Schedule periodic tasks (daily cleanup, data sync)\n3. Download large files in background (with progress)\n4. Handle app termination and restart\n5. Battery-aware scheduling (defer when low battery)\n6. iOS Background Fetch / Android WorkManager\n7. Local notifications from background tasks\n\nTech: react-native-background-fetch, WorkManager, or native background APIs.",
      hint: "Register background tasks, handle app lifecycle, respect OS limitations on background execution",
      expectedTime: "30 min",
      topics: ["Background Tasks", "Scheduling", "Battery Optimization", "Mobile"],
      testCases: [
        { input: "App goes to background", output: "sync task registered" },
        { input: "Periodic sync runs", output: "data synced, no UI required" },
        { input: "Battery low", output: "task deferred until charging" },
        { input: "Download in background", output: "continues even if app closed" }
      ],
      solutionApproach: "Background fetch API, WorkManager tasks, battery state monitoring, download manager"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "medium",
      title: "Deep Linking & Universal Links",
      question: "Implement deep linking throughout the app:\n1. Handle deep links from push notifications\n2. Universal Links / App Links for web-to-app\n3. Navigate to specific screens from URLs\n4. Pass parameters in deep links\n5. QR code scanning to open app screens\n6. Fallback to app store if app not installed\n7. Analytics tracking for deep link opens\n\nTech: react-navigation deep linking, native URL schemes, universal links.",
      hint: "Configure URL schemes in manifest/plist, handle initialURL and linking events",
      expectedTime: "25 min",
      topics: ["Deep Linking", "Navigation", "User Acquisition", "Mobile"],
      testCases: [
        { input: "Tap notification with deep link", output: "opens specific product screen" },
        { input: "Open https://app.com/product/123 in browser", output: "app opens to product" },
        { input: "Scan QR code", output: "parses URL, navigates accordingly" },
        { input: "App not installed", output: "redirects to Play/App Store" }
      ],
      solutionApproach: "URL scheme configuration, linking listener, navigation handling, QR scanner"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "hard",
      title: "Custom Animated UI Components",
      question: "Build custom animated UI components:\n1. Custom charts (bar, line, pie) with animations\n2. Swipeable cards (like Tinder)\n3. Expandable/collapsible sections\n4. Skeleton loading screens\n5. Lottie animation integration\n6. Shared element transitions\n7. Pull-to-refresh with custom animation\n8. Parallax scrolling effect\n\nTech: Reanimated 2, Flutter animations, or native Core Animation.",
      hint: "Use Animated API with native driver, gesture handlers, interpolation",
      expectedTime: "40 min",
      topics: ["Animations", "UI/UX", "Gestures", "Mobile"],
      testCases: [
        { input: "Chart data updates", output: "bars animate to new heights" },
        { input: "Swipe card right", output: "card rotates, fades, next card appears" },
        { input: "Tap section header", output: "section expands with smooth animation" },
        { input: "Scroll through feed", output: "parallax effect on images" }
      ],
      solutionApproach: "Animated API, gesture handlers, layout animations, Lottie integration"
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "medium",
      title: "Mobile App Architecture Patterns",
      question: "Compare mobile app architectures: MVC, MVP, MVVM, MVI, Clean Architecture. What are the pros/cons of each? When to use which? Explain unidirectional data flow and state management solutions (Redux, BLoC, Riverpod, Provider).",
      hint: "Discuss separation of concerns, testability, and scalability of each pattern.",
      expectedPoints: ["MVC limitations", "MVP with interfaces", "MVVM with data binding", "MVI with intents", "Clean Architecture layers", "Unidirectional data flow", "Redux/Thunk pattern", "BLoC pattern", "Provider vs Riverpod", "State immutability"],
      topics: ["Architecture", "Design Patterns", "Mobile"]
    },
    {
      id: 14,
      type: "theoretical",
      difficulty: "hard",
      title: "React Native vs Flutter vs Native Development",
      question: "Compare React Native, Flutter, and native iOS/Android development. What are the trade-offs in terms of performance, developer productivity, ecosystem, and maintainability? When would you choose each approach?",
      hint: "Discuss performance characteristics, bridge overhead, native modules, and team expertise.",
      expectedPoints: ["React Native (JS bridge, native components)", "Flutter (Dart, Skia engine)", "Native (Swift/Kotlin, platform APIs)", "Performance comparison", "Hot reload capability", "Native module integration", "Ecosystem maturity", "Team skill requirements", "Maintenance considerations", "Use case recommendations"],
      topics: ["Cross-Platform", "React Native", "Flutter", "Native Development"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "medium",
      title: "Mobile Performance Optimization",
      question: "How do you optimize mobile app performance? Cover startup time, runtime performance, memory management, and battery usage. What tools help identify performance issues (Flipper, DevTools, Instruments, Android Profiler)?",
      hint: "Discuss profiling tools, memory leaks, bundle size, and rendering optimization.",
      expectedPoints: ["Startup time optimization", "Code splitting/lazy loading", "Memory leak detection", "List virtualization", "Image optimization", "Network request batching", "Background task optimization", "Battery usage reduction", "Profiling tools (Flipper, Systrace)", "Hermes/ JSC engine comparison"],
      topics: ["Performance", "Optimization", "Mobile"]
    },
    {
      id: 16,
      type: "theoretical",
      difficulty: "hard",
      title: "Mobile Security Best Practices",
      question: "Explain mobile app security: secure storage (Keychain/Keystore), certificate pinning, root/jailbreak detection, code obfuscation, and anti-tampering. How do you protect API keys and sensitive data?",
      hint: "Discuss defense in depth, OWASP Mobile Top 10, and runtime application self-protection.",
      expectedPoints: ["Keychain/Keystore usage", "Keychain sharing groups", "Certificate pinning", "Root/jailbreak detection", "Code obfuscation (ProGuard/R8)", "Anti-tampering", "Secure enclave", "Biometric authentication", "OWASP Mobile Top 10", "RASP tools", "Secure coding practices"],
      topics: ["Security", "Mobile", "Best Practices"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "medium",
      title: "App Store & Play Store Deployment",
      question: "Explain the app store submission process for iOS (App Store) and Android (Play Store). What are the requirements, review guidelines, and best practices? How do you handle app signing, versioning, and staged rollouts?",
      hint: "Cover certificates, provisioning profiles, app bundles, and release management.",
      expectedPoints: ["iOS signing certificates", "Provisioning profiles", "App Store Connect", "Play Console", "App review guidelines", "Metadata and screenshots", "Staged rollouts", "A/B testing on stores", "App bundles (Android)", "IPA generation", "Over-the-air updates (CodePush)", "App rejection common reasons"],
      topics: ["Deployment", "App Store", "Play Store", "Release Management"]
    },
    {
      id: 18,
      type: "theoretical",
      difficulty: "medium",
      title: "Mobile App Lifecycle & State Management",
      question: "Explain the mobile app lifecycle (active, background, suspended, terminated). How do you handle state preservation and restoration? What are the differences between iOS and Android lifecycles?",
      hint: "Discuss lifecycle hooks, background execution limits, and state restoration.",
      expectedPoints: ["iOS app lifecycle states", "Android activity lifecycle", "Scene delegate (iOS 13+)", "State preservation", "Background execution limits", "App termination handling", "Memory pressure handling", "State restoration APIs", "URL handling in lifecycle", "Push notification lifecycle"],
      topics: ["Lifecycle", "State Management", "iOS", "Android"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "hard",
      title: "Mobile Testing Strategies",
      question: "What testing approaches should cover a mobile app? Explain unit tests, widget/component tests, integration tests, and E2E tests (Detox, Appium, Maestro). What about device farms and CI/CD for mobile?",
      hint: "Discuss test pyramid, mocking native modules, and device fragmentation.",
      expectedPoints: ["Unit testing (Jest)", "Component testing", "Integration testing", "E2E testing (Detox/Appium)", "Mocking native modules", "Snapshot testing", "Device fragmentation", "Firebase Test Lab", "AWS Device Farm", "CI/CD for mobile", "Beta distribution (TestFlight/Internal Testing)", "Automated screenshot testing"],
      topics: ["Testing", "QA", "Mobile", "Automation"]
    },
    {
      id: 20,
      type: "theoretical",
      difficulty: "hard",
      title: "Mobile Database & Storage Solutions",
      question: "Compare mobile database options: SQLite, Room, CoreData, Realm, Hive, WatermelonDB. When to use each? Discuss data synchronization strategies, offline-first architecture, and conflict resolution.",
      hint: "Cover local storage types, ORMs, and sync patterns.",
      expectedPoints: ["SQLite basics", "Room (Android) with LiveData", "CoreData (iOS)", "Realm Database", "SharedPreferences/UserDefaults", "Keychain/Keystore", "Offline-first architecture", "Sync patterns", "Conflict resolution strategies", "Data migration", "Encryption at rest"],
      topics: ["Database", "Storage", "Offline-First", "Mobile"]
    }
  ],

  "Cloud Architect": [
    {
      id: 1,
      type: "coding",
      difficulty: "hard",
      title: "Multi-Cloud Infrastructure as Code",
      question: "Design and implement multi-cloud infrastructure using Terraform/Pulumi:\n1. AWS: VPC with multi-AZ deployment, Auto Scaling Groups, RDS Multi-AZ, S3 with cross-region replication\n2. Azure: Virtual Network, VM Scale Sets, Azure SQL with geo-replication, Blob storage with GRS\n3. GCP: VPC with subnets, Managed Instance Groups, Cloud SQL with HA, Cloud Storage with multi-region\n4. Cross-cloud networking (VPN/Direct Connect/ExpressRoute/Cloud Interconnect)\n5. Unified monitoring across clouds (CloudWatch + Azure Monitor + Cloud Monitoring)\n6. Disaster recovery across regions and clouds\n7. Cost allocation tags per cloud\n8. Security policies applied consistently (IAM roles, security groups, NSGs, firewall rules)\n\nProvide modular Terraform code with workspace separation.",
      hint: "Use Terraform workspaces for environment separation, modules for reusability, remote state backends per cloud.",
      expectedTime: "60 min",
      topics: ["Multi-Cloud", "Terraform", "IaC", "AWS", "Azure", "GCP"],
      testCases: [
        { input: "terraform plan -var-file=aws.tfvars", output: "AWS resources planned correctly" },
        { input: "terraform plan -var-file=azure.tfvars", output: "Azure resources planned correctly" },
        { input: "Cross-cloud VPN", output: "private connectivity established" },
        { input: "Failover test", output: "traffic routes to secondary cloud" }
      ],
      solutionApproach: "Modular design, workspace-based environments, provider aliases, unified tagging strategy"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "hard",
      title: "Serverless Event-Driven Architecture",
      question: "Build serverless event-driven system across AWS/Azure/GCP:\n1. Event ingestion: API Gateway (AWS) / API Management (Azure) / Cloud Endpoints (GCP)\n2. Event processing: Lambda (AWS) / Functions (Azure) / Cloud Functions (GCP)\n3. Event routing: EventBridge (AWS) / Event Grid (Azure) / Pub/Sub (GCP)\n4. Event storage: DynamoDB (AWS) / Cosmos DB (Azure) / Firestore (GCP)\n5. Dead letter queues for failed events\n6. Event replay capability\n7. Cross-cloud event synchronization\n8. Observability (distributed tracing, CloudWatch/X-Ray/Application Insights/Cloud Trace)\n\nProcess 10K events/sec with fan-out pattern.",
      hint: "Use event sourcing pattern, idempotent consumers, proper error handling with DLQs.",
      expectedTime: "50 min",
      topics: ["Serverless", "Event-Driven", "AWS", "Azure", "GCP", "Architecture"],
      testCases: [
        { input: "10000 events ingested", output: "all processed within SLA" },
        { input: "Consumer failure", output: "event moved to DLQ" },
        { input: "Cross-cloud sync", output: "events replicated across clouds" },
        { input: "Event replay request", output: "historical events reprocessed" }
      ],
      solutionApproach: "EventBridge/Event Grid/PubSub integration, Lambda/Functions/Cloud Functions, DLQ handling, observability"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "hard",
      title: "Cloud-Native Microservices Platform",
      question: "Design cloud-native microservices platform:\n1. Container orchestration: EKS (AWS) / AKS (Azure) / GKE (GCP) with node autoscaling\n2. Service mesh: Istio/AWS App Mesh/Consul for mTLS and traffic management\n3. API Gateway: Kong/AWS API Gateway/Azure APIM with rate limiting\n4. Service discovery: Consul/CoreDNS with health checks\n5. Configuration management: ConfigMap + Secret management (Vault/AWS Secrets Manager)\n6. Observability: Prometheus/Grafana + ELK stack + Jaeger/Tempo for tracing\n7. GitOps deployment: ArgoCD/Flux for continuous delivery\n8. Multi-environment support (dev/staging/prod) with namespaces\n9. Pod security policies and network policies\n\nSupport 100+ microservices with auto-scaling.",
      hint: "Use Helm charts for deployments, implement progressive delivery with canary/blue-green.",
      expectedTime: "55 min",
      topics: ["Microservices", "Kubernetes", "Service Mesh", "Cloud Native"],
      testCases: [
        { input: "Deploy new service", output: "automatically registered, traffic routed" },
        { input: "High traffic spike", output: "HPA scales pods, cluster autoscaler adds nodes" },
        { input: "Service failure", output: "circuit breaker opens, traffic routed to healthy" },
        { input: "Canary deployment", output: "10% traffic to new version, metrics validated" }
      ],
      solutionApproach: "EKS/AKS/GKE setup, Istio/App Mesh, API Gateway, monitoring stack, ArgoCD GitOps"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "medium",
      title: "Cloud Cost Optimization Framework",
      question: "Implement automated cost optimization system:\n1. Resource utilization monitoring (CPU, memory, disk, network)\n2. Right-sizing recommendations (underutilized instances, oversized volumes)\n3. Reserved capacity planning (Reserved Instances, Savings Plans, Committed Use Discounts)\n4. Spot/Preemptible instance integration for fault-tolerant workloads\n5. Storage lifecycle policies (S3 Intelligent-Tiering, Azure Blob lifecycle, GCS Nearline)\n6. Idle resource detection (unattached volumes, unused IPs, stopped instances)\n7. Cost allocation and tagging governance\n8. Budget alerts and anomaly detection\n9. Automated optimization actions (with approval workflow)\n10. Multi-cloud cost comparison and recommendations\n\nReduce cloud spend by 30%+.",
      hint: "Use cloud APIs (AWS Cost Explorer, Azure Cost Management, GCP Billing), implement automated actions with safeguards.",
      expectedTime: "45 min",
      topics: ["Cost Optimization", "FinOps", "Cloud Economics", "Automation"],
      testCases: [
        { input: "Underutilized EC2 detected", output: "recommend downsize from m5.xlarge to m5.large" },
        { input: "Spot price spike", output: "workload migrated to on-demand temporarily" },
        { input: "Unattached EBS found", output: "alert sent, snapshot and delete scheduled" },
        { input: "Budget threshold crossed", output: "notification to finance team" }
      ],
      solutionApproach: "Usage analysis, right-sizing engine, spot integration, storage lifecycle, automated actions"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "hard",
      title: "Hybrid Cloud Data Architecture",
      question: "Design hybrid cloud data architecture connecting on-premise to cloud:\n1. Data lake architecture: S3 (AWS) / ADLS (Azure) / GCS (GCP) as central store\n2. Data ingestion: AWS DMS / Azure Data Factory / Cloud Data Fusion for migration\n3. Real-time streaming: Kafka (on-prem) to Kinesis/Event Hubs/PubSub (cloud)\n4. Data processing: EMR/Databricks/BigQuery for analytics\n5. Data governance: Glue Data Catalog / Azure Purview / Data Catalog\n6. Security: encryption at rest (KMS/Key Vault) and in transit (TLS/VPN)\n7. Network connectivity: Direct Connect / ExpressRoute / Cloud Interconnect\n8. Data residency and compliance (GDPR, data sovereignty)\n9. Disaster recovery with cross-region replication\n10. Cost-effective archival to Glacier/Azure Archive/Coldline\n\nMigrate 100TB with minimal downtime.",
      hint: "Use CDC for ongoing sync, implement data validation, plan rollback strategy.",
      expectedTime: "55 min",
      topics: ["Hybrid Cloud", "Data Architecture", "Data Lake", "Migration"],
      testCases: [
        { input: "Initial 100TB migration", output: "completed with < 1 hour downtime" },
        { input: "CDC replication lag", output: "< 5 seconds replication lag" },
        { input: "Query performance", output: "BigQuery/Databricks queries < 10 seconds" },
        { input: "DR failover test", output: "RPO < 1 hour, RTO < 4 hours" }
      ],
      solutionApproach: "Data lake setup, migration tools, streaming integration, governance, security, DR"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "hard",
      title: "Global Load Balancing & Traffic Management",
      question: "Implement global traffic management across multi-region:\n1. DNS-based load balancing: Route53 (AWS) / Traffic Manager (Azure) / Cloud DNS (GCP)\n2. Geo-routing: route users to nearest healthy region\n3. Health checks: endpoint monitoring with automatic failover\n4. Latency-based routing: measure and route to lowest latency region\n5. Weighted routing for canary deployments across regions\n6. Failover routing: primary/secondary region setup\n7. SSL/TLS termination at edge with certificate management\n8. DDoS protection integration (Shield/AWS WAF/DDoS Protection Service)\n9. Traffic analytics and reporting\n10. API-driven traffic management for automated responses\n\n99.99% availability across 5 regions.",
      hint: "Use health check endpoints, implement proper TTL values, monitor with synthetic tests.",
      expectedTime: "45 min",
      topics: ["Global Infrastructure", "Load Balancing", "DNS", "High Availability"],
      testCases: [
        { input: "User from Europe", output: "routed to eu-west-1 region" },
        { input: "Region failure (us-east-1)", output: "traffic automatically to us-west-2" },
        { input: "Latency spike in asia", output: "route to secondary asia region" },
        { input: "Canary release", output: "10% traffic to new version in one region" }
      ],
      solutionApproach: "Route53/Traffic Manager/Cloud DNS, health checks, geo/latency routing, weighted distribution"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "medium",
      title: "Cloud Security Posture Management",
      question: "Build cloud security posture management (CSPM) system:\n1. Multi-cloud asset inventory (AWS Config/Azure Resource Graph/GCP Asset Inventory)\n2. CIS Benchmark compliance scanning across clouds\n3. IAM policy analysis (overly permissive roles, unused permissions)\n4. Network security assessment (security groups, NACLs, firewall rules)\n5. Data protection validation (encryption status, key rotation)\n6. Compliance mapping (SOC2, ISO27001, PCI-DSS, GDPR)\n7. Risk scoring and prioritization\n8. Automated remediation (with approval workflow)\n9. Executive dashboard with compliance posture\n10. Integration with SIEM (Splunk/Elastic/CloudWatch)\n\nAchieve 95%+ compliance score.",
      hint: "Use cloud-native tools (AWS Security Hub, Azure Security Center, GCP Security Command Center) with custom rules.",
      expectedTime: "50 min",
      topics: ["Cloud Security", "CSPM", "Compliance", "Governance"],
      testCases: [
        { input: "S3 bucket public access", output: "Critical finding, auto-remediation triggered" },
        { input: "Unencrypted RDS instance", output: "High severity, remediation scheduled" },
        { input: "IAM user with admin access unused 90 days", output: "recommendation to disable" },
        { input: "CIS benchmark scan", output: "85% compliant, 15 violations with remediation steps" }
      ],
      solutionApproach: "Asset inventory, CIS scanning, IAM analysis, network assessment, auto-remediation, dashboard"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "hard",
      title: "Disaster Recovery Automation",
      question: "Build automated disaster recovery system:\n1. RPO/RTO definitions per application tier (critical, standard, low)\n2. Cross-region replication setup (RDS Aurora Global, Cosmos DB, Spanner)\n3. S3/ADLS/GCS cross-region replication for data\n4. Automated backup validation (restore tests)\n5. Infrastructure as Code for DR environments (Terraform)\n6. Runbook automation (Lambda/Azure Functions/Cloud Functions)\n7. Health checks and automated failover triggers\n8. DNS failover automation (Route53/Traffic Manager)\n9. Data consistency validation post-failover\n10. Cost-optimized DR (pilot light, warm standby, hot standby patterns)\n11. Chaos engineering tests (simulate failures)\n\nRTO < 4 hours, RPO < 1 hour for critical systems.",
      hint: "Implement pilot light pattern for cost efficiency, automate runbooks, test regularly with chaos engineering.",
      expectedTime: "55 min",
      topics: ["Disaster Recovery", "High Availability", "Automation", "Resilience"],
      testCases: [
        { input: "Primary region failure", output: "automated failover initiated within 5 min" },
        { input: "Database failover", output: "read replica promoted, app reconnects" },
        { input: "Backup restore test", output: "data integrity validated" },
        { input: "Chaos test", output: "system resilient, no data loss" }
      ],
      solutionApproach: "RPO/RTO planning, cross-region replication, IaC for DR, runbook automation, chaos engineering"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "medium",
      title: "Cloud Landing Zone Setup",
      question: "Design cloud landing zone for enterprise:\n1. Multi-account strategy (workloads, shared services, security, logging)\n2. AWS Organizations/Azure Management Groups/GCP Folder structure\n3. Centralized logging (CloudWatch/Log Analytics/Cloud Logging to SIEM)\n4. Centralized security (GuardDuty/Defender for Cloud/Security Command Center)\n5. Service control policies / Azure Policy / Organization Policy\n6. Network architecture (transit gateway, hub-spoke, shared VPC)\n7. Identity federation (SSO/SAML/OIDC with IdP integration)\n8. Cost management (consolidated billing, budgets, tagging policy)\n9. Automated account provisioning (Account Factory/Control Tower/Landing Zone)\n10. Compliance baselines (CIS, NIST, custom frameworks)\n\nSupport 100+ application teams.",
      hint: "Use AWS Control Tower/Azure Landing Zones/GCP Landing Zone blueprints, implement guardrails.",
      expectedTime: "50 min",
      topics: ["Landing Zone", "Cloud Governance", "Multi-Account", "Enterprise"],
      testCases: [
        { input: "New team onboarding", output: "account provisioned with security baseline" },
        { input: "SCP policy violation", output: "action denied, security team notified" },
        { input: "Central logging", output: "all account logs to security account" },
        { input: "Cost center tagging", output: "all resources tagged, chargeback reports" }
      ],
      solutionApproach: "Multi-account structure, SCPs/guardrails, centralized logging/security, network hub-spoke, automated provisioning"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "hard",
      title: "Zero Downtime Migration Strategy",
      question: "Implement zero-downtime migration framework:\n1. Database migration: AWS DMS/Azure DMS/Cloud SQL replication with minimal downtime\n2. Blue-green deployment for application migration\n3. DNS cutover strategy with TTL management\n4. Data synchronization (CDC for ongoing sync)\n5. Rollback capability at each stage\n6. Traffic shifting patterns (canary, weighted, all-at-once)\n7. Data validation and consistency checks\n8. Application compatibility testing in target cloud\n9. Performance benchmarking before/after migration\n10. Cost comparison and optimization post-migration\n11. Documentation and runbook creation\n\nMigrate production workload without downtime.",
      hint: "Use CDC for databases, implement blue-green for apps, plan rollback at every step, validate data.",
      expectedTime: "55 min",
      topics: ["Migration", "Zero Downtime", "Database Migration", "Strategy"],
      testCases: [
        { input: "Database migration", output: "CDC replication, cutover with < 1 min downtime" },
        { input: "App blue-green", output: "traffic switched, old env kept for rollback" },
        { input: "Data validation", output: "row counts match, checksums verified" },
        { input: "Rollback test", output: "successful rollback to source in 5 minutes" }
      ],
      solutionApproach: "CDC setup, blue-green deployment, DNS strategy, validation, rollback planning"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "medium",
      title: "Cloud Networking Design",
      question: "Design enterprise cloud network:\n1. VPC/VNet/Shared VPC architecture (multi-region, multi-account)\n2. Subnet design (public, private, database tiers with proper sizing)\n3. Transit Gateway/Virtual WAN/Cloud Interconnect for hub-spoke\n4. VPN and Direct Connect/ExpressRoute for hybrid connectivity\n5. Private connectivity to SaaS and PaaS (PrivateLink/Private Endpoint/Private Service Connect)\n6. DNS architecture (Route53 Resolver/Azure DNS/Cloud DNS with on-prem integration)\n7. Network segmentation and micro-segmentation\n8. Flow logs and network monitoring (VPC Flow Logs/NSG Flow Logs)\n9. DDoS protection at network edge\n10. IPv6 dual-stack implementation\n\nSupport 10K+ VMs/containers across 5 regions.",
      hint: "Plan for growth, use private subnets for sensitive workloads, implement defense in depth.",
      expectedTime: "45 min",
      topics: ["Cloud Networking", "VPC", "Hybrid Cloud", "Network Architecture"],
      testCases: [
        { input: "VM in spoke VPC", output: "connects to shared services via TGW" },
        { input: "On-prem to cloud", output: "private connectivity via Direct Connect" },
        { input: "SaaS private access", output: "PrivateLink endpoint works, no public internet" },
        { input: "DNS resolution", output: "hybrid DNS resolves both on-prem and cloud" }
      ],
      solutionApproach: "VPC/VNet design, TGW/Virtual WAN hub-spoke, hybrid connectivity, private endpoints, DNS"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "hard",
      title: "Kubernetes Cluster Design & Optimization",
      question: "Design production-grade Kubernetes clusters:\n1. Cluster architecture: control plane high availability (multi-master)\n2. Node pools: spot instances, GPU nodes, memory-optimized, burstable\n3. Autoscaling: HPA, VPA, cluster autoscaler, KEDA for event-driven\n4. Networking: CNI choice (Calico/Cilium), service mesh integration\n5. Storage: CSI drivers, storage classes, volume snapshots\n6. Security: Pod Security Standards, network policies, RBAC, OPA/Gatekeeper\n7. Observability: metrics, logs, traces, APM integration\n8. Multi-tenancy: namespaces, resource quotas, limits\n9. GitOps: ArgoCD/Flux setup with app of apps pattern\n10. Backup: Velero for cluster state and workloads\n11. Upgrades: zero-downtime control plane and node upgrades\n\nSupport 1000+ node clusters.",
      hint: "Choose managed Kubernetes (EKS/AKS/GKE) vs self-managed, plan for scale and security.",
      expectedTime: "50 min",
      topics: ["Kubernetes", "EKS", "AKS", "GKE", "Container Orchestration"],
      testCases: [
        { input: "High traffic spike", output: "HPA scales pods, cluster autoscaler adds nodes" },
        { input: "Spot instance termination", output: "workload gracefully migrated to on-demand" },
        { input: "Pod without security context", output: "OPA policy blocks deployment" },
        { input: "Cluster upgrade", output: "zero-downtime rolling upgrade completed" }
      ],
      solutionApproach: "HA control plane, node pools, autoscaling, CNI, storage, security policies, GitOps, backup"
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "hard",
      title: "Multi-Cloud Strategy & Architecture",
      question: "When and why would you adopt multi-cloud? Compare strategies: best-of-breed (using best service from each), avoid vendor lock-in, disaster recovery, data sovereignty. What are the challenges: complexity, cost, security, networking, skills? How do you manage multi-cloud governance?",
      hint: "Discuss real-world trade-offs and when multi-cloud makes sense vs single cloud.",
      expectedPoints: ["Multi-cloud drivers (avoid lock-in, best services, DR)", "Best-of-breed approach", "Cloud-agnostic vs cloud-native", "Multi-cloud networking challenges", "Unified governance", "Cost management across clouds", "Security consistency", "Skills and training requirements", "Tooling for multi-cloud (Terraform, Crossplane)", "Migration between clouds", "Exit strategy planning"],
      topics: ["Multi-Cloud", "Strategy", "Architecture", "Governance"]
    },
    {
      id: 14,
      type: "theoretical",
      difficulty: "hard",
      title: "Cloud-Native Design Patterns",
      question: "Explain cloud-native design patterns: Circuit Breaker, Bulkhead, Sidecar, Ambassador, Adapter, CQRS, Event Sourcing, Saga, Strangler Fig. When to use each? How do they improve resilience, scalability, and maintainability?",
      hint: "Connect patterns to real cloud services and implementation strategies.",
      expectedPoints: ["Circuit Breaker (fault tolerance)", "Bulkhead (resource isolation)", "Sidecar (auxiliary functionality)", "Ambassador (smart proxy)", "Adapter (interface normalization)", "CQRS (command query separation)", "Event Sourcing (audit trail)", "Saga (distributed transactions)", "Strangler Fig (gradual migration)", "Anti-corruption layer", "Backends for frontends (BFF)"],
      topics: ["Cloud Native", "Design Patterns", "Microservices"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "hard",
      title: "High Availability & Fault Tolerance",
      question: "Design for 99.999% uptime (five nines). Explain: redundancy patterns (active-active, active-passive), automatic failover, graceful degradation, blast radius containment. How do you test resilience with chaos engineering?",
      hint: "Cover the math of availability and practical implementation strategies.",
      expectedPoints: ["Availability calculations", "Nines of availability", "Active-active vs active-passive", "Automatic failover mechanisms", "Health check design", "Graceful degradation", "Circuit breakers", "Bulkhead pattern", "Blast radius containment", "Chaos engineering principles", "Game days", "Failure injection testing"],
      topics: ["High Availability", "Fault Tolerance", "Resilience", "SRE"]
    },
    {
      id: 16,
      type: "theoretical",
      difficulty: "hard",
      title: "Cloud Cost Management & FinOps",
      question: "Explain FinOps practices for cloud cost management: cost visibility, allocation, optimization, and governance. Cover: tagging strategy, reserved capacity planning, spot instances, storage tiering, and showback/chargeback models.",
      hint: "Discuss the cultural and organizational aspects of FinOps, not just technical.",
      expectedPoints: ["FinOps foundation principles", "Cost visibility ( dashboards, tagging)", "Cost allocation (showback/chargeback)", "Optimization practices", "Tagging governance", "Reserved capacity planning", "Spot instance strategy", "Storage lifecycle management", "Anomaly detection", "Budget management", "Unit economics", "Cross-functional teams"],
      topics: ["FinOps", "Cost Management", "Cloud Economics"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "medium",
      title: "Cloud Security Architecture",
      question: "Design defense-in-depth for cloud workloads. Explain: identity perimeter, zero trust, data protection (encryption at rest/in transit), network security, workload protection, and security monitoring. What are cloud-native security services vs third-party?",
      hint: "Cover the shared responsibility model and practical security controls.",
      expectedPoints: ["Shared responsibility model", "Identity as perimeter", "Zero Trust architecture", "Encryption at rest (KMS, CMK)", "Encryption in transit (TLS, VPN)", "Network security (security groups, NACLs)", "Web Application Firewall", "DDoS protection", "Workload protection (EDR, runtime security)", "Cloud-native security services", "CASB (Cloud Access Security Broker)", "CSPM (Cloud Security Posture Management)"],
      topics: ["Cloud Security", "Architecture", "Defense in Depth"]
    },
    {
      id: 18,
      type: "theoretical",
      difficulty: "hard",
      title: "Hybrid Cloud & Edge Computing",
      question: "When to use hybrid cloud vs full cloud? How do you connect on-premise to cloud securely? What is edge computing and when is it appropriate? Cover: AWS Outposts, Azure Stack, Google Distributed Cloud, and container orchestration at edge.",
      hint: "Discuss latency, data sovereignty, and regulatory requirements driving edge.",
      expectedPoints: ["Hybrid cloud drivers", "Connectivity options (VPN, Direct Connect)", "Data synchronization strategies", "Edge computing use cases", "AWS Outposts/Azure Stack/GDC", "Kubernetes at edge (K3s, microK8s)", "Latency requirements", "Data sovereignty", "Offline operation capabilities", "Edge security challenges", "Management complexity"],
      topics: ["Hybrid Cloud", "Edge Computing", "Architecture"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "hard",
      title: "Cloud Data Architecture",
      question: "Design modern data architecture in cloud: data lake vs data warehouse vs lakehouse. Cover: data ingestion patterns, storage formats (Parquet, ORC, Delta Lake), processing frameworks (Spark, BigQuery, Snowflake), and serving layers (data marts, APIs).",
      hint: "Discuss the evolution from traditional data warehouses to modern lakehouse architecture.",
      expectedPoints: ["Data lake vs data warehouse", "Lakehouse architecture", "Data ingestion patterns (batch, streaming)", "Storage formats (Parquet, Delta Lake)", "Processing frameworks comparison", "ETL vs ELT", "Data governance", "Data lineage", "Metadata management", "Data quality", "Serving layers", "Reverse ETL"],
      topics: ["Data Architecture", "Data Lake", "Data Warehouse", "Cloud Data"]
    },
    {
      id: 20,
      type: "theoretical",
      difficulty: "hard",
      title: "Cloud Migration Strategies (7 Rs)",
      question: "Explain the 7 Rs of cloud migration: Retire, Retain, Rehost (lift and shift), Relocate, Replatform (lift and reshape), Repurchase, Refactor/Re-architect. When to use each? What is the timeline and risk profile of each approach?",
      hint: "Provide decision criteria for choosing the right strategy for different workloads.",
      expectedPoints: ["Retire (decommission)", "Retain (keep on-prem)", "Rehost (lift and shift)", "Relocate (VM to cloud VM)", "Replatform (managed services)", "Repurchase (SaaS replacement)", "Refactor/Re-architect (cloud-native)", "Decision matrix", "Risk assessment", "Timeline comparison", "Cost implications", "Skills required"],
      topics: ["Migration", "Strategy", "Cloud Transformation"]
    }
  ],

  "Embedded Systems Engineer": [
    {
      id: 1,
      type: "coding",
      difficulty: "medium",
      title: "Bare Metal LED Blink with Timers",
      question: "Write bare metal embedded C code for STM32/AVR to blink LED without using HAL/Arduino:\n1. Configure GPIO registers directly (MODER, ODR, RCC clock enable)\n2. Use hardware timer (SysTick or TIM) for precise delays\n3. Implement non-blocking delay (no _delay_ms)\n4. Handle interrupts properly (vector table, NVIC)\n5. Support different blink patterns (SOS morse code)\n6. Power efficient (sleep mode between blinks)\n7. No floating-point operations\n8. Memory footprint < 1KB\n\nProvide register-level initialization and main loop.",
      hint: "Use CMSIS headers, configure RCC for clock, set GPIO MODER to output, use TIM2 for timing.",
      expectedTime: "35 min",
      topics: ["Embedded C", "STM32", "Bare Metal", "GPIO", "Timers"],
      testCases: [
        { input: "Power on", output: "LED blinks at 1Hz" },
        { input: "Button pressed", output: "SOS pattern blinks" },
        { input: "Timer interrupt", output: "precise 500ms toggle" },
        { input: "Sleep mode", output: "current < 10mA" }
      ],
      solutionApproach: "RCC config, GPIO init, TIM setup with interrupts, sleep mode entry"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "hard",
      title: "UART Communication Protocol",
      question: "Implement robust UART driver for STM32:\n1. Configure UART registers (baud rate 115200, 8N1)\n2. Ring buffer for RX/TX (circular buffer, no malloc)\n3. Interrupt-driven receive (no polling)\n4. DMA for bulk transmission\n5. Frame parsing (SLIP protocol or custom framing)\n6. Error handling (frame error, parity error, noise detection)\n7. Flow control (RTS/CTS hardware flow)\n8. Non-blocking API (send returns immediately, callback on complete)\n9. Support multiple UART instances\n10. Debug output (printf redirected to UART)\n\nWrite driver and example application.",
      hint: "Use circular buffer with head/tail pointers, enable RXNE interrupt, handle half-full DMA.",
      expectedTime: "50 min",
      topics: ["UART", "DMA", "Interrupts", "STM32", "Communication"],
      testCases: [
        { input: "Send 1000 bytes", output: "DMA completes, callback fires" },
        { input: "Receive frame", output: "parsed correctly, checksum valid" },
        { input: "Buffer overflow", output: "old data discarded, flag set" },
        { input: "Noise on line", output: "error detected, frame rejected" }
      ],
      solutionApproach: "UART init, ring buffer, ISR handling, DMA setup, protocol parser"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "medium",
      title: "I2C Sensor Driver (Temperature/Humidity)",
      question: "Write I2C driver for BME280/DHT12 sensor:\n1. I2C bus initialization (clock, GPIO open-drain)\n2. Start/Stop/ACK/NACK generation\n3. Register read/write operations\n4. Sensor configuration (oversampling, filter, mode)\n5. Temperature/humidity/pressure reading\n6. Data compensation using calibration values\n7. Error handling (NACK, bus error, arbitration lost)\n8. Timeout mechanism (no infinite loops)\n9. Power management (sleep mode between reads)\n10. Thread-safe (if used with RTOS)\n\nProvide calibration data parsing.",
      hint: "Use state machine for I2C, read calibration from NVM, apply compensation formula.",
      expectedTime: "45 min",
      topics: ["I2C", "Sensors", "STM32", "Hardware Interface"],
      testCases: [
        { input: "Read temperature", output: "23.45°C (compensated)" },
        { input: "Sensor not connected", output: "timeout error, NACK detected" },
        { input: "Calibration read", output: "dig_T1=27504, dig_T2=26435" },
        { input: "Burst read all", output: "temp, humidity, pressure in one transaction" }
      ],
      solutionApproach: "I2C init, start/stop generation, register access, calibration read, compensation"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "hard",
      title: "SPI Flash Memory Driver",
      question: "Implement SPI flash (W25Q128) driver with wear leveling:\n1. SPI initialization (CPOL/CPHA, clock divider)\n2. JEDEC ID reading and verification\n3. Page program (256 bytes)\n4. Sector erase (4KB) and chip erase\n5. Read data (fast read with dummy cycles)\n6. Status register polling (BUSY, WEL bits)\n7. Wear leveling (track erase cycles per sector)\n8. Bad block management\n9. Power-loss protection (write with verification)\n10. File system layer (FAT-like on top of raw flash)\n\nHandle SPI duplex communication.",
      hint: "Use page-aligned writes, implement erase-before-write, verify with read-back.",
      expectedTime: "55 min",
      topics: ["SPI", "Flash Memory", "Storage", "Wear Leveling"],
      testCases: [
        { input: "Write 256 bytes", output: "programmed and verified" },
        { input: "Read JEDEC ID", output: "0xEF4018 (Winbond 128Mbit)" },
        { input: "Wear level check", output: "even distribution across sectors" },
        { input: "Power during write", output: "data intact after recovery" }
      ],
      solutionApproach: "SPI init, command set implementation, wear leveling algo, filesystem layer"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "hard",
      title: "Real-Time Operating System (RTOS) Implementation",
      question: "Implement minimal RTOS kernel for ARM Cortex-M:\n1. Task creation (TCB with stack, priority, state)\n2. Context switching (PendSV handler, save/restore registers)\n3. Scheduler (priority-based preemptive)\n4. Task synchronization (mutex with priority inheritance, semaphore)\n5. Inter-task communication (queue with timeout)\n6. Tick timer (SysTick for time slicing)\n7. Sleep and wake (WFE/WFI with event flags)\n8. Stack overflow detection\n9. Idle task (lowest priority, power saving)\n10. Debug features (task list, stack usage stats)\n\nNo external libraries (CMSIS only).",
      hint: "Use PendSV for context switch, maintain ready queue, handle SVC for system calls.",
      expectedTime: "60 min",
      topics: ["RTOS", "Kernel", "ARM Cortex-M", "Scheduling"],
      testCases: [
        { input: "Create 3 tasks", output: "all in ready queue, highest priority runs" },
        { input: "Preemption test", output: "high priority task interrupts low" },
        { input: "Mutex contention", output: "priority inheritance prevents inversion" },
        { input: "Queue send/receive", output: "data passed, timeout handled" }
      ],
      solutionApproach: "TCB design, PendSV handler, scheduler, sync primitives, queue implementation"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "medium",
      title: "ADC with DMA and Filtering",
      question: "Implement multi-channel ADC acquisition:\n1. ADC initialization (resolution, sampling time, scan mode)\n2. DMA configuration (circular mode for continuous)\n3. Timer-triggered conversions (precise timing)\n4. Multi-channel scanning (8 channels with sequencing)\n5. Digital filtering (moving average, IIR low-pass)\n6. Calibration (offset and gain error compensation)\n7. Threshold detection (interrupt on limit crossing)\n8. Double buffering (process one while DMA fills other)\n9. Power optimization (ADC sleep between conversions)\n10. Data export (streaming to PC via USB/UART)\n\nSample at 1kHz per channel.",
      hint: "Use DMA circular mode with half-transfer interrupt, implement double buffer.",
      expectedTime: "45 min",
      topics: ["ADC", "DMA", "Signal Processing", "STM32"],
      testCases: [
        { input: "8 channels sampling", output: "all channels at 1kHz" },
        { input: "Signal with noise", output: "filtered output smooth" },
        { input: "Threshold exceeded", output: "interrupt fired" },
        { input: "DMA half-complete", output: "processing without data loss" }
      ],
      solutionApproach: "ADC+DMA+TIM setup, double buffering, digital filter, threshold detection"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "medium",
      title: "PWM Motor Control with PID",
      question: "Implement DC motor speed control with PID:\n1. Timer PWM generation (20kHz to avoid audible noise)\n2. H-bridge driver control (direction, brake, coast)\n3. Encoder interface (quadrature decoding, direction detection)\n4. Speed calculation (pulses per time period)\n5. PID controller (position form, anti-windup, D-filter)\n6. Current limiting (ADC sensing with overcurrent protection)\n7. Smooth start/stop (ramp profile, soft braking)\n8. Emergency stop (hardware interrupt)\n9. Serial command interface (set speed, get status)\n10. Tuning assistance (step response, Ziegler-Nichols)\n\nControl motor at 100 RPM precision.",
      hint: "Use encoder interrupts, calculate speed every 10ms, update PID at same rate.",
      expectedTime: "50 min",
      topics: ["Motor Control", "PID", "PWM", "Encoder", "STM32"],
      testCases: [
        { input: "Set 1000 RPM", output: "reaches and maintains 1000±10 RPM" },
        { input: "Load disturbance", output: "recovers within 1 second" },
        { input: "Overcurrent event", output: "motor stops, fault flagged" },
        { input: "Direction change", output: "smooth transition via brake/coast" }
      ],
      solutionApproach: "PWM init, encoder interface, speed calc, PID implementation, protection"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "hard",
      title: "CAN Bus Communication Stack",
      question: "Implement CAN 2.0B protocol stack:\n1. CAN peripheral initialization (bit timing 250kbps/500kbps)\n2. Filter configuration (acceptance mask and code)\n3. Message transmission (with priority and abort)\n4. Message reception (FIFO with interrupt)\n5. Error handling (bus-off recovery, error counting)\n6. J1939 or CANopen protocol layer (optional)\n7. Bus load calculation (percentage utilization)\n8. Remote frame handling (RTR)\n9. Extended ID support (29-bit identifiers)\n10. Debug interface (CAN bus analyzer output)\n\nCommunicate with 4+ nodes on bus.",
      hint: "Configure BTR for bit timing, use mailboxes for TX/RX, handle bus-off state.",
      expectedTime: "55 min",
      topics: ["CAN Bus", "Communication", "Automotive", "STM32"],
      testCases: [
        { input: "Send standard frame", output: "transmitted, ACK received" },
        { input: "Extended ID message", output: "29-bit ID handled" },
        { input: "Filter test", output: "only matching IDs accepted" },
        { input: "Bus-off recovery", output: "auto-recovery after 128×11 recessive" }
      ],
      solutionApproach: "CAN init, bit timing, filter setup, TX/RX mailboxes, error handling"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "hard",
      title: "Ethernet + TCP/IP Stack (lwIP Integration)",
      question: "Integrate lwIP TCP/IP stack on STM32 with Ethernet:\n1. PHY initialization (RMII/MII interface, auto-negotiation)\n2. MAC DMA descriptor configuration\n3. lwIP integration (no OS, raw API or netconn API)\n4. DHCP client (automatic IP configuration)\n5. TCP server (echo server, multiple connections)\n6. HTTP server (static pages, REST API)\n7. MQTT client (publish sensor data to broker)\n8. WebSocket implementation (for real-time data)\n9. TLS/SSL integration (mbedtls for HTTPS)\n10. Connection keepalive and reconnection\n\nAchieve 10Mbps throughput.",
      hint: "Configure ETH DMA descriptors, handle RX/TX in ETH_IRQHandler, use lwIP raw API.",
      expectedTime: "60 min",
      topics: ["Ethernet", "TCP/IP", "lwIP", "Networking", "STM32"],
      testCases: [
        { input: "DHCP request", output: "IP 192.168.1.100 assigned" },
        { input: "HTTP GET /", output: "200 OK, HTML page served" },
        { input: "TCP echo test", output: "data echoed back correctly" },
        { input: "MQTT publish", output: "sensor data received by broker" }
      ],
      solutionApproach: "ETH MAC+PHY init, lwIP setup, TCP/HTTP/MQTT implementation, TLS optional"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "hard",
      title: "Embedded Linux Device Driver",
      question: "Write Linux kernel module for custom hardware:\n1. Character device registration (alloc_chrdev_region)\n2. File operations (open, read, write, ioctl, mmap)\n3. Platform driver (device tree matching)\n4. Interrupt handling (request_irq, threaded IRQs)\n5. Memory-mapped I/O (ioremap, readb/writeb)\n6. DMA buffer allocation (dma_alloc_coherent)\n7. Sysfs interface (attributes for configuration)\n8. Power management (suspend/resume callbacks)\n9. Kernel debugging (printk, dynamic debug, ftrace)\n10. Device tree overlay (for Raspberry Pi/BeagleBone)\n\nDriver for custom FPGA or sensor.",
      hint: "Use platform_driver_register, handle probe/remove, use managed resources (devm_*).",
      expectedTime: "55 min",
      topics: ["Linux Kernel", "Device Driver", "Embedded Linux", "Kernel Module"],
      testCases: [
        { input: "insmod driver.ko", output: "device registered at /dev/mydevice" },
        { input: "echo data > /dev/mydevice", output: "written to hardware" },
        { input: "cat /dev/mydevice", output: "data read from hardware" },
        { input: "Interrupt fires", output: "ISR runs, wakes user thread" }
      ],
      solutionApproach: "Platform driver, chardev, file ops, IRQ handling, sysfs, power mgmt"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "medium",
      title: "Bootloader with Firmware Update (OTA)",
      question: "Implement bootloader with OTA firmware update:\n1. Bootloader architecture (minimal, fits in sector 0)\n2. Firmware validation (CRC32/SHA256 signature)\n3. Dual bank update (A/B partition scheme)\n4. Communication interface (UART/USB for update)\n5. Flash write protection (unlock/lock sectors)\n6. Rollback mechanism (fallback to previous on failure)\n7. Update protocol (YMODEM, custom, or DFU)\n8. Version checking (reject older/downgrade)\n9. Power-safe update (marker flags, resume capability)\n10. Jump to application (SP and PC setup)\n\nUpdate 128KB firmware safely.",
      hint: "Keep bootloader < 16KB, verify checksum before jump, use flag in flash for bank selection.",
      expectedTime: "50 min",
      topics: ["Bootloader", "OTA", "Firmware Update", "Flash"],
      testCases: [
        { input: "Valid firmware received", output: "programmed, verified, marked active" },
        { input: "Corrupted download", output: "CRC fails, rollback to previous" },
        { input: "Power during update", output: "resume or rollback on reboot" },
        { input: "Boot to app", output: "SP and PC loaded, application runs" }
      ],
      solutionApproach: "Bootloader init, protocol handler, flash programming, verification, bank switch, jump"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "medium",
      title: "Low Power Design & Battery Management",
      question: "Implement power management for battery-operated device:\n1. Sleep modes (Sleep, Stop, Standby on STM32)\n2. Clock gating (disable unused peripheral clocks)\n3. Dynamic voltage scaling (run at lower voltage when slow)\n4. Peripheral power control (enable only when needed)\n5. Battery monitoring (ADC for voltage, current estimation)\n6. Power budget calculation (per-component consumption)\n7. Wake sources (RTC, GPIO, UART, timer)\n8. Power profiling (measure actual consumption)\n9. Energy harvesting interface (solar, piezo)\n10. Predictive battery life (based on usage pattern)\n\nAchieve 1-year battery life on 1000mAh.",
      hint: "Use STOP mode for uA consumption, wake on interrupt, batch operations.",
      expectedTime: "45 min",
      topics: ["Low Power", "Battery", "Power Management", "STM32"],
      testCases: [
        { input: "Idle state", output: "< 100uA consumption" },
        { input: "Sensor read", output: "burst activity, quick return to sleep" },
        { input: "Battery at 3.3V", output: "20% remaining, 2 weeks life" },
        { input: "Wake on motion", output: "accelerometer IRQ wakes MCU" }
      ],
      solutionApproach: "Clock gating, sleep mode entry, wake source config, battery monitoring, profiling"
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "hard",
      title: "ARM Cortex-M Architecture",
      question: "Explain ARM Cortex-M architecture (M0/M3/M4/M7): memory map, bus matrix, NVIC, SysTick, FPU (in M4/M7), MPU, debug interface (SWD, JTAG). How do you select the right MCU for a project?",
      hint: "Cover differences between M series processors and when to use each.",
      expectedPoints: ["Harvard vs von Neumann", "Memory map (Flash, SRAM, peripherals)", "Bus matrix (ICode, DCode, System)", "NVIC (nested vectored interrupt controller)", "Exception handling", "SysTick timer", "FPU (single vs double precision)", "MPU (memory protection unit)", "Bit-banding", "Debug (SWD, ITM, DWT)", "Power profiles", "Selection criteria"],
      topics: ["ARM", "Cortex-M", "Architecture", "Microcontrollers"]
    },
    {
      id: 14,
      type: "theoretical",
      difficulty: "hard",
      title: "Memory Management in Embedded Systems",
      question: "Discuss memory management in embedded systems: stack vs heap, memory pools, fragmentation, static allocation strategies. How do you avoid stack overflow and detect heap corruption?",
      hint: "Cover real-time constraints and why dynamic allocation is often avoided.",
      expectedPoints: ["Static vs dynamic allocation", "Stack overflow detection", "Heap fragmentation", "Memory pools (fixed-size allocators)", "Stack canaries", "MPU for stack protection", "Linker script (scatter file)", "Memory layout (text, data, bss, heap, stack)", "Garbage collection (not typical in embedded)", "Placement new", "Section attributes", "Best practices"],
      topics: ["Memory Management", "Embedded Systems", "C/C++"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "medium",
      title: "Real-Time Systems & Scheduling",
      question: "Explain real-time concepts: hard vs soft real-time, deterministic behavior, latency, jitter, rate monotonic scheduling, earliest deadline first, priority inversion. How do you design for real-time constraints?",
      hint: "Discuss WCET (worst case execution time) analysis and priority management.",
      expectedPoints: ["Hard vs soft real-time", "Determinism", "Latency and jitter", "Rate monotonic scheduling", "Earliest deadline first", "Priority inheritance", "Priority ceiling", "WCET analysis", "Interrupt latency", "Context switch time", "Task synchronization", "Scheduling algorithms comparison"],
      topics: ["Real-Time Systems", "Scheduling", "RTOS"]
    },
    {
      id: 16,
      type: "theoretical",
      difficulty: "hard",
      title: "Hardware-Software Interface",
      question: "How does software interface with hardware? Explain: memory-mapped I/O, port-mapped I/O, device registers, bit manipulation, volatile keyword, read-modify-write hazards, atomic operations. What are common pitfalls?",
      hint: "Cover actual hardware register access patterns and compiler optimizations.",
      expectedPoints: ["Memory-mapped I/O", "Device registers", "Volatile keyword purpose", "Bit manipulation", "Read-modify-write hazards", "Bit-banding (ARM)", "Atomic operations", "Memory barriers", "Compiler optimization issues", "Register caching problems", "Hardware abstraction layers", "CMSIS standard"],
      topics: ["Hardware Interface", "Low Level", "Embedded C"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "medium",
      title: "Communication Protocols Comparison",
      question: "Compare embedded communication protocols: UART, SPI, I2C, CAN, USB, Ethernet. When to use each? What are the trade-offs in terms of speed, distance, complexity, and number of devices?",
      hint: "Discuss electrical characteristics and protocol overhead.",
      expectedPoints: ["UART (async, point-to-point)", "SPI (sync, master-slave, fast)", "I2C (multi-master, addressing)", "CAN (automotive, prioritized)", "USB (enumeration, host/device)", "Ethernet (TCP/IP, high speed)", "Speed comparison", "Distance limitations", "Number of devices", "Electrical characteristics", "Protocol overhead", "Use case recommendations"],
      topics: ["Communication", "Protocols", "Hardware"]
    },
    {
      id: 18,
      type: "theoretical",
      difficulty: "hard",
      title: "Debugging & Testing Embedded Systems",
      question: "How do you debug embedded systems? Cover: JTAG/SWD debugging, printf debugging (semi-hosting, ITM), logic analyzers, oscilloscopes, unit testing on host (mock hardware), integration testing, CI/CD for embedded.",
      hint: "Discuss hardware vs software debugging trade-offs.",
      expectedPoints: ["JTAG/SWD interface", "In-circuit debugging", "ITM/SWO trace", "Logic analyzers", "Oscilloscopes", "Printf debugging (semi-hosting)", "Unit testing with mocks", "Hardware-in-the-loop", "CI/CD for embedded", "Static analysis", "Code coverage", "Fault injection"],
      topics: ["Debugging", "Testing", "Embedded Development"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "medium",
      title: "Safety-Critical & Functional Safety",
      question: "Explain functional safety standards: IEC 61508, ISO 26262, DO-178C. What is ASIL? How do you design for safety (redundancy, watchdog, safe states, FMEA)? What is deterministic execution?",
      hint: "Cover the mindset difference between general embedded and safety-critical.",
      expectedPoints: ["IEC 61508 (industrial)", "ISO 26262 (automotive)", "DO-178C (avionics)", "ASIL levels", "HARA (hazard analysis)", "Redundancy patterns", "Watchdog timers", "Safe states", "FMEA (failure modes)", "Deterministic execution", "Code coverage requirements", "Tool qualification"],
      topics: ["Functional Safety", "Safety Critical", "Standards"]
    },
    {
      id: 20,
      type: "theoretical",
      difficulty: "hard",
      title: "Embedded Linux vs Bare Metal",
      question: "When to use Embedded Linux vs bare metal? Compare: complexity, development speed, resource requirements, real-time capabilities, security, maintenance. What is Buildroot/Yocto? What are device trees?",
      hint: "Discuss decision factors for choosing between RTOS, Linux, or bare metal.",
      expectedPoints: ["Bare metal characteristics", "RTOS characteristics", "Embedded Linux characteristics", "Resource requirements (RAM, Flash, CPU)", "Real-time capabilities", "Development speed", "Security considerations", "Buildroot vs Yocto", "Device tree (DTB)", "Kernel configuration", "Root filesystem", "Boot time optimization"],
      topics: ["Embedded Linux", "Bare Metal", "RTOS", "Architecture"]
    }
  ],

  "Blockchain Developer": [
    {
      id: 1,
      type: "coding",
      difficulty: "medium",
      title: "ERC-20 Token Contract",
      question: "Implement ERC-20 token smart contract in Solidity:\n1. Standard ERC-20 interface (transfer, approve, transferFrom, balanceOf, totalSupply)\n2. SafeMath for arithmetic (or Solidity 0.8+ built-in overflow checks)\n3. Minting and burning functions (with access control)\n4. Pausable functionality (emergency stop)\n5. Permit function (gasless approvals via signatures)\n6. Events for all state changes\n7. Zero-address checks and validation\n8. Transfer fee mechanism (if applicable)\n9. Blacklist functionality (optional compliance)\n10. Upgradeability pattern (proxy pattern if needed)\n\nDeploy on testnet and verify.",
      hint: "Use OpenZeppelin libraries, implement proper access control, follow checks-effects-interactions pattern.",
      expectedTime: "40 min",
      topics: ["Solidity", "ERC-20", "Smart Contracts", "Ethereum"],
      testCases: [
        { input: "Transfer 100 tokens", output: "balances updated, Transfer event emitted" },
        { input: "Approve spender", output: "allowance set, Approval event" },
        { input: "TransferFrom with allowance", output: "tokens moved, allowance reduced" },
        { input: "Mint by owner", output: "totalSupply increased, new tokens created" }
      ],
      solutionApproach: "OpenZeppelin ERC20 base, custom mint/burn, access control, pausable, permit"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "hard",
      title: "ERC-721 NFT Contract with Metadata",
      question: "Implement ERC-721 NFT smart contract with advanced features:\n1. Standard NFT functionality (mint, transfer, ownerOf, tokenURI)\n2. Enumerable extension (totalSupply, tokenByIndex)\n3. Metadata storage (IPFS or on-chain JSON)\n4. Minting with whitelist and presale (Merkle tree)\n5. Royalty support (EIP-2981 standard)\n6. Reveal mechanism (delayed metadata reveal)\n7. Batch minting (gas optimization)\n8. Withdrawal pattern (pull over push)\n9. Pausable and Ownable\n10. ContractURI for OpenSea/Blur collection metadata\n\nInclude hardhat tests.",
      hint: "Use Merkle proofs for whitelist, store baseURI on IPFS, implement lazy minting for gas savings.",
      expectedTime: "55 min",
      topics: ["Solidity", "ERC-721", "NFT", "Smart Contracts"],
      testCases: [
        { input: "Mint to whitelist address", output: "NFT minted at discounted price" },
        { input: "Public sale mint", output: "NFT minted at full price" },
        { input: "Secondary sale", output: "royalty sent to original creator" },
        { input: "Batch mint 5 NFTs", output: "5 NFTs minted, single transaction" }
      ],
      solutionApproach: "ERC721Enumerable, Merkle whitelist, EIP-2981 royalties, batch mint, reveal mechanism"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "hard",
      title: "DeFi Lending Protocol (Simple Aave)",
      question: "Build simplified DeFi lending protocol:\n1. Deposit/withdraw ETH and ERC-20 tokens (receipt tokens)\n2. Borrow against collateral (over-collateralization ratio 150%)\n3. Interest rate model (utilization-based)\n4. Liquidation mechanism (bonus for liquidators)\n5. Price oracle integration (Chainlink)\n6. Flash loans (single transaction borrow+repay)\n7. Protocol fees (treasury collection)\n8. Governance token rewards for lenders\n9. Reentrancy guards (checks-effects-interactions)\n10. Emergency shutdown\n\nUse Hardhat for testing.",
      hint: "Use compound interest formula, track utilization ratio, implement price feeds, protect against reentrancy.",
      expectedTime: "60 min",
      topics: ["DeFi", "Solidity", "Lending", "Smart Contracts"],
      testCases: [
        { input: "Deposit 1 ETH", output: "receipt tokens minted, deposit recorded" },
        { input: "Borrow 0.5 ETH", output: "loan issued, collateral locked" },
        { input: "Price drops, health factor < 1", output: "position liquidatable" },
        { input: "Flash loan borrow+repay", output: "executed in single tx, fee paid" }
      ],
      solutionApproach: "Receipt tokens, collateral tracking, interest model, Chainlink oracle, liquidation logic"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "hard",
      title: "Automated Market Maker (AMM) DEX",
      question: "Implement constant product AMM (like Uniswap V2):\n1. x*y=k constant product formula\n2. Add/remove liquidity (LP tokens)\n3. Swap functionality with 0.3% fee\n4. Price impact calculation\n5. Slippage protection (min amount out)\n6. Flash swaps (borrow+rebalance in one tx)\n7. Multiple token pairs support\n8. Protocol fee (0.05% to treasury)\n9. Emergency pause\n10. Permit2 integration for gasless approvals\n\nWrite contract and test swaps.",
      hint: "Use balanceOf for reserves, implement k-constant checks, handle fee accumulation, protect against reentrancy.",
      expectedTime: "60 min",
      topics: ["DeFi", "AMM", "DEX", "Solidity"],
      testCases: [
        { input: "Add liquidity 1 ETH + 2000 USDC", output: "LP tokens minted" },
        { input: "Swap 0.1 ETH for USDC", output: "correct amount calculated with fee" },
        { input: "Price manipulation attempt", output: "k-constant violated, tx reverted" },
        { input: "Remove liquidity", output: "tokens returned, LP burned" }
      ],
      solutionApproach: "x*y=k math, liquidity minting, swap logic with fees, slippage protection"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "medium",
      title: "Multi-Sig Wallet Contract",
      question: "Implement Gnosis Safe style multi-signature wallet:\n1. Multiple owner management (add/remove owners)\n2. Required confirmations (m-of-n signatures)\n3. Transaction submission and confirmation flow\n4. Execution after threshold reached\n5. Transaction expiration (timelock)\n6. Ether and ERC-20 token handling\n7. Daily spending limits per owner\n8. Emergency recovery mechanism\n9. Transaction batching (multi-call)\n10. Meta-transactions (gasless execution)\n\nSupport 5 owners, 3-of-5 required.",
      hint: "Use mapping for confirmations, track nonce to prevent replay, validate signatures properly.",
      expectedTime: "50 min",
      topics: ["Solidity", "Multi-Sig", "Wallet", "Security"],
      testCases: [
        { input: "Submit ETH transfer", output: "transaction queued, 0 confirmations" },
        { input: "3 owners confirm", output: "threshold reached, ready for execution" },
        { input: "Execute transaction", output: "ETH transferred, marked executed" },
        { input: "Replay attempt", output: "nonce mismatch, transaction rejected" }
      ],
      solutionApproach: "Owner management, confirmation tracking, threshold logic, execution, nonce protection"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "hard",
      title: "DAO Governance Contract",
      question: "Build DAO governance system with voting:\n1. Proposal creation (description, call data, voting period)\n2. Token-weighted voting (snapshot of balances)\n3. Vote delegation (liquid democracy)\n4. Quorum and threshold requirements\n5. Proposal execution (timelock delay)\n6. Cancelation mechanism\n7. Emergency actions (multisig override)\n8. Vote with reason (string explanation)\n9. Upgradeable governance logic\n10. Integration with Governor Bravo/Compound\n\nSupport quadratic voting optional.",
      hint: "Use snapshot for vote power, implement proposal queue, timelock for safety, delegate mapping.",
      expectedTime: "55 min",
      topics: ["DAO", "Governance", "Solidity", "Voting"],
      testCases: [
        { input: "Create proposal", output: "proposal active, voting starts" },
        { input: "Cast vote", output: "vote recorded, power calculated" },
        { input: "Voting period ends, quorum met", output: "proposal succeeded" },
        { input: "Execute after timelock", output: "proposal executed, call data run" }
      ],
      solutionApproach: "Proposal struct, voting power snapshot, delegation, quorum checks, timelock execution"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "hard",
      title: "Cross-Chain Bridge Contract",
      question: "Implement token bridge for cross-chain transfers:\n1. Lock/mint mechanism (lock on source, mint on target)\n2. Burn/unlock mechanism (burn on target, unlock on source)\n3. Validator set management (multi-sig or proof-of-stake)\n4. Transaction verification (Merkle proofs or signatures)\n5. Nonce tracking (prevent double-spending)\n6. Daily limits (rate limiting)\n7. Emergency pause and recovery\n8. Fee mechanism (bridge fees)\n9. Support multiple target chains\n10. Event emissions for relayers\n\nBridge between Ethereum and Polygon.",
      hint: "Use mapping for processed nonces, require validator signatures, implement lock-and-mint pattern.",
      expectedTime: "60 min",
      topics: ["Cross-Chain", "Bridge", "Solidity", "Interoperability"],
      testCases: [
        { input: "Lock 100 tokens on Ethereum", output: "tokens locked, event emitted" },
        { input: "Validator confirms", output: "proof validated, mint authorized" },
        { input: "Mint on Polygon", output: "wrapped tokens minted to user" },
        { input: "Double spend attempt", output: "nonce already used, rejected" }
      ],
      solutionApproach: "Lock contract, validator verification, mint authorization, nonce tracking, fee collection"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "medium",
      title: "Staking and Rewards Contract",
      question: "Build staking contract with reward distribution:\n1. Stake tokens (lock for duration)\n2. Reward accrual (per block or timestamp)\n3. Multiple staking pools with different APY\n4. Unstaking with cooldown period\n5. Emergency unstake (with penalty)\n6. Compound rewards (auto-reinvest)\n7. Admin functions (add rewards, adjust rates)\n8. Harvest rewards (claim without unstaking)\n9. Referral bonuses (on stake)\n10. Staking NFT (representation of stake)\n\nUse Solidity and OpenZeppelin.",
      hint: "Track reward per token, update on every stake/unstake, handle precision with 1e18.",
      expectedTime: "45 min",
      topics: ["Staking", "DeFi", "Rewards", "Solidity"],
      testCases: [
        { input: "Stake 1000 tokens", output: "stake recorded, NFT minted" },
        { input: "After 30 days", output: "rewards calculated correctly" },
        { input: "Harvest rewards", output: "rewards transferred, stake continues" },
        { input: "Unstake early", output: "penalty applied, remaining returned" }
      ],
      solutionApproach: "Reward per token tracking, stake struct, cooldown logic, referral system, NFT representation"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "hard",
      title: "Zero-Knowledge Proof Integration",
      question: "Integrate ZK proofs for privacy-preserving transactions:\n1. Merkle tree for commitment storage\n2. Nullifier tracking (prevent double-spends)\n3. ZK-SNARK verification on-chain (Groth16)\n4. Deposit and withdraw with proof\n5. Relayer support (gasless transactions)\n6. Anonymity set management\n7. Tornado Cash style mixer logic\n8. Frontend proof generation (snarkjs)\n9. Verifier contract deployment\n10. Emergency withdrawal (without proof, with delay)\n\nBuild privacy layer for token transfers.",
      hint: "Use circom for circuit design, verify proof on-chain, track nullifiers, use Pedersen hashes.",
      expectedTime: "65 min",
      topics: ["ZK", "Privacy", "Solidity", "Circom", "Cryptography"],
      testCases: [
        { input: "Deposit 1 ETH", output: "commitment added to Merkle tree" },
        { input: "Generate proof", output: "valid ZK proof generated" },
        { input: "Verify on-chain", output: "proof valid, nullifier not used" },
        { input: "Withdraw", output: "ETH sent to recipient, nullifier recorded" }
      ],
      solutionApproach: "Merkle tree, commitment scheme, proof verification, nullifier tracking, relayer support"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "hard",
      title: "Oracle Price Feed Aggregator",
      question: "Build decentralized price oracle:\n1. Multiple data source integration (Chainlink, Band, API3)\n2. Price aggregation (median, TWAP)\n3. Deviation threshold (update only on significant change)\n4. Heartbeat mechanism (forced update interval)\n5. Oracle rotation (decentralized set)\n6. Staking and slashing (punish bad oracles)\n7. Emergency price freeze\n8. Multi-asset support (ETH, BTC, stablecoins)\n9. Gas-optimized updates (batching)\n10. Historical price storage\n\nProvide price data to DeFi protocols.",
      hint: "Use Chainlink feeds as primary, implement fallback, track deviation, use signed updates.",
      expectedTime: "50 min",
      topics: ["Oracle", "Price Feed", "Solidity", "DeFi"],
      testCases: [
        { input: "ETH price from 3 sources", output: "median calculated, deviation checked" },
        { input: "Price moves > 1%", output: "on-chain price updated" },
        { input: "Heartbeat expires", output: "forced update executed" },
        { input: "Bad oracle submits", output: "detected and slashed" }
      ],
      solutionApproach: "Multi-source aggregation, deviation logic, heartbeat, oracle management, staking/slashing"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "medium",
      title: "ENS Domain Resolver",
      question: "Build ENS (Ethereum Name Service) resolver contract:\n1. Domain registration (with payment)\n2. Resolver configuration (address, text records)\n3. Subdomain management\n4. Name ownership transfer\n5. Expiration and renewal\n6. Reverse resolution (address to name)\n7. Multi-coin address resolution\n8. Content hash (IPFS/Swarm)\n9. Public resolver interface compliance\n10. Domain auction (optional for premium)\n\nImplement .eth name system.",
      hint: "Follow ENS standards, use namehash for ID, implement resolver interface, handle expiration.",
      expectedTime: "45 min",
      topics: ["ENS", "DNS", "Solidity", "Identity"],
      testCases: [
        { input: "Register 'alice.eth'", output: "name registered, owner set" },
        { input: "Set resolver address", output: "alice.eth resolves to 0x123..." },
        { input: "Create subdomain", output: "sub.alice.eth created" },
        { input: "Name expires", output: "name available for re-registration" }
      ],
      solutionApproach: "ENS registry, namehash, resolver contract, expiration logic, subdomain management"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "hard",
      title: "Smart Contract Upgrade Pattern",
      question: "Implement upgradeable smart contract system:\n1. Proxy pattern (Transparent Proxy or UUPS)\n2. Implementation contract separation\n3. Storage layout preservation (EIP-1967 slots)\n4. Upgrade authorization (multisig or governance)\n5. Implementation initialization\n6. Storage migration (if needed)\n7. Pause during upgrade\n8. Upgrade event emission\n9. Rollback capability (emergency)\n10. Testing strategy for upgrades\n\nDeploy upgradeable ERC-20 token.",
      hint: "Use OpenZeppelin upgrades plugin, ensure storage compatibility, test extensively.",
      expectedTime: "50 min",
      topics: ["Upgradeability", "Proxy Pattern", "Solidity", "Best Practices"],
      testCases: [
        { input: "Deploy proxy", output: "proxy deployed, points to implementation" },
        { input: "Upgrade to V2", output: "new logic active, storage preserved" },
        { input: "Storage corruption check", output: "all user data intact" },
        { input: "Unauthorized upgrade attempt", output: "rejected by access control" }
      ],
      solutionApproach: "Proxy contract, implementation logic, storage slots, upgrade authorization, testing"
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "hard",
      title: "Consensus Mechanisms Comparison",
      question: "Compare consensus mechanisms: Proof of Work (PoW), Proof of Stake (PoS), Delegated PoS (DPoS), Proof of Authority (PoA), Practical Byzantine Fault Tolerance (PBFT). What are the trade-offs in security, decentralization, scalability, and energy consumption?",
      hint: "Discuss the blockchain trilemma and how each mechanism addresses it.",
      expectedPoints: ["Proof of Work (mining, energy)", "Proof of Stake (validators, staking)", "Delegated PoS (voting, delegates)", "Proof of Authority (trusted nodes)", "PBFT (voting rounds)", "Security trade-offs", "Decentralization spectrum", "Scalability (TPS)", "Energy consumption", "Finality characteristics", "Attack vectors (51%, nothing-at-stake)", "Use case recommendations"],
      topics: ["Consensus", "Blockchain", "Mechanisms"]
    },
    {
      id: 14,
      type: "theoretical",
      difficulty: "hard",
      title: "Layer 2 Scaling Solutions",
      question: "Explain Layer 2 scaling: State Channels, Rollups (Optimistic and ZK), Plasma, and Validium. How do they improve scalability while inheriting L1 security? Compare Arbitrum, Optimism, zkSync, StarkNet.",
      hint: "Cover data availability and security assumptions for each L2 type.",
      expectedPoints: ["State Channels", "Rollup fundamentals", "Optimistic Rollups (fraud proofs)", "ZK Rollups (validity proofs)", "Plasma (exits, data availability)", "Validium (off-chain DA)", "Data availability problem", "Security inheritance", "Arbitrum vs Optimism", "zkSync vs StarkNet", "EIP-4844 (proto-danksharding)", "L2 interoperability"],
      topics: ["Layer 2", "Scaling", "Rollups", "Ethereum"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "hard",
      title: "Smart Contract Security & Auditing",
      question: "What are common smart contract vulnerabilities? Explain: reentrancy, overflow/underflow, access control, front-running, oracle manipulation, timestamp dependence. What are security best practices and tools (Slither, Mythril, Certora)?",
      hint: "Discuss the DAO hack and other historical exploits as examples.",
      expectedPoints: ["Reentrancy (checks-effects-interactions)", "Integer overflow/underflow", "Access control (ownership)", "Front-running (MEV)", "Oracle manipulation", "Timestamp dependence", "Unchecked external calls", "Denial of service (gas griefing)", "Slither static analysis", "Mythril symbolic execution", "Certora formal verification", "Bug bounty programs", "Audit best practices"],
      topics: ["Security", "Smart Contracts", "Auditing"]
    },
    {
      id: 16,
      type: "theoretical",
      difficulty: "medium",
      title: "MEV (Maximal Extractable Value)",
      question: "What is MEV? How does it affect blockchain users? Explain: sandwich attacks, arbitrage, liquidations. What are mitigation strategies (Flashbots, sealed bid auctions)? What is proposer-builder separation (PBS)?",
      hint: "Cover the ethical and economic implications of MEV.",
      expectedPoints: ["MEV definition", "Sandwich attacks", "Arbitrage MEV", "Liquidation MEV", "Priority gas auctions", "Flashbots (MEV protection)", "Sealed bid auctions", "Proposer-builder separation", "MEV-Boost", "MEV burn", "User protection strategies", "MEV extraction fairness"],
      topics: ["MEV", "DeFi", "Economics", "Ethereum"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "hard",
      title: "Tokenomics Design",
      question: "How do you design tokenomics for a blockchain project? Cover: token distribution (team, investors, community), vesting schedules, utility vs security, inflation/deflation, governance rights, staking incentives, and ecosystem flywheel.",
      hint: "Use real examples like successful and failed tokenomics models.",
      expectedPoints: ["Token distribution models", "Vesting and cliffs", "Utility vs security tokens", "Inflation schedule", "Burn mechanisms", "Staking rewards", "Governance rights", "Liquidity mining", "Ecosystem incentives", "Value accrual", "Game theory", "Sustainability analysis"],
      topics: ["Tokenomics", "Economics", "Design"]
    },
    {
      id: 18,
      type: "theoretical",
      difficulty: "hard",
      title: "Interoperability & Cross-Chain",
      question: "How do blockchains achieve interoperability? Explain: atomic swaps, bridges (trusted vs trustless), relayers, light clients, and interoperability protocols (Cosmos IBC, Polkadot XCM, LayerZero). What are the security risks of bridges?",
      hint: "Discuss major bridge hacks and lessons learned.",
      expectedPoints: ["Atomic swaps (HTLC)", "Trusted bridges (multisig)", "Trustless bridges (light clients)", "Relayer networks", "Cosmos IBC", "Polkadot XCM", "LayerZero", "Wormhole architecture", "Bridge security risks", "Major bridge hacks (Ronin, Wormhole)", "Validation mechanisms", "Cross-chain messaging"],
      topics: ["Interoperability", "Cross-Chain", "Bridges"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "medium",
      title: "Gas Optimization Strategies",
      question: "How do you optimize gas costs in Solidity? Cover: storage vs memory, calldata optimization, packing variables, avoiding loops, using events for data, batching, and compiler optimizations. What are gas golf techniques?",
      hint: "Provide specific gas savings numbers and trade-offs.",
      expectedPoints: ["Storage vs memory vs calldata", "Variable packing", "Mapping vs array", "Avoid storage in loops", "Events for cheap storage", "Short circuiting", "Unchecked blocks", "Custom errors (cheaper than revert)", "Batching operations", "Delegatecall proxy", "Compiler optimization runs", "Gas profiling tools"],
      topics: ["Gas Optimization", "Solidity", "Performance"]
    },
    {
      id: 20,
      type: "theoretical",
      difficulty: "hard",
      title: "Decentralized Identity (DID)",
      question: "Explain decentralized identity: DIDs (Decentralized Identifiers), Verifiable Credentials, Soulbound Tokens (SBTs), and reputation systems. How do they enable self-sovereign identity? Compare with traditional identity systems.",
      hint: "Discuss privacy preservation and selective disclosure.",
      expectedPoints: ["DID specification (W3C)", "Verifiable Credentials", "Soulbound Tokens", "Self-sovereign identity", "Selective disclosure", "ZK proofs for privacy", "Reputation systems", "Sybil resistance", "Identity aggregators", "Web2 vs Web3 identity", "Regulatory compliance (KYC)", "Privacy considerations"],
      topics: ["DID", "Identity", "Privacy", "Web3"]
    }
  ],

  "Game Developer": [
    {
      id: 1,
      type: "coding",
      difficulty: "medium",
      title: "Unity 2D Platformer Controller",
      question: "Implement robust 2D platformer character controller in Unity:\n1. Horizontal movement with acceleration/deceleration\n2. Jump with variable height (hold for higher jump)\n3. Ground detection (raycast-based, not collision)\n4. Coyote time (jump briefly after leaving platform)\n5. Jump buffer (queue jump before landing)\n6. Wall jump and wall slide mechanics\n7. Slope handling (walk up/down slopes smoothly)\n8. One-way platforms (jump through from below)\n9. Knockback on damage with invincibility frames\n10. Double jump power-up system\n\nUse Rigidbody2D with physics.",
      hint: "Use raycasts for ground check, velocity-based movement, Input.GetAxis for smooth input.",
      expectedTime: "45 min",
      topics: ["Unity", "2D", "Platformer", "Physics", "C#"],
      testCases: [
        { input: "Press A/D", output: "character moves with smooth acceleration" },
        { input: "Tap space", output: "short jump" },
        { input: "Hold space", output: "higher jump reached" },
        { input: "Walk off ledge, jump within 100ms", output: "coyote time jump succeeds" }
      ],
      solutionApproach: "Raycast ground detection, velocity control, coyote timer, jump buffer, wall slide logic"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "hard",
      title: "Unity FPS Controller with Physics",
      question: "Build first-person shooter controller:\n1. Smooth mouse look (no jitter, clamp vertical)\n2. WASD movement with sprint and crouch\n3. Head bob and FOV change when sprinting\n4. Jump with realistic gravity curve\n5. Ground friction and air control\n6. Weapon sway and recoil system\n7. Interactive objects (pick up, throw)\n8. Ladder climbing system\n9. Sliding down slopes\n10. Footstep audio with surface detection\n\nUse CharacterController or Rigidbody.",
      hint: "Smooth mouse input with Mathf.SmoothDamp, realistic gravity ~-9.81, use layers for ground detection.",
      expectedTime: "50 min",
      topics: ["Unity", "FPS", "3D", "Character Controller"],
      testCases: [
        { input: "Move mouse", output: "smooth camera rotation" },
        { input: "Press Shift+W", output: "sprint with FOV 90→100" },
        { input: "Fire weapon", output: "recoil animation, muzzle flash" },
        { input: "Pick up object", output: "object follows hand position" }
      ],
      solutionApproach: "Mouse smoothing, CharacterController, gravity physics, weapon system, interaction raycast"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "hard",
      title: "A* Pathfinding with Grid System",
      question: "Implement A* pathfinding for AI units:\n1. Grid-based world representation (walkable/unwalkable)\n2. A* algorithm (f, g, h costs, priority queue)\n3. Path smoothing (string pulling/funnel algorithm)\n4. Dynamic obstacle avoidance (moving units)\n5. Multi-threaded path calculation\n6. Path following with steering behaviors\n7. Hierarchical pathfinding (for large maps)\n8. Flow field for crowd simulation\n9. Debug visualization (gizmos showing open/closed)\n10. Performance optimization (chunked grid)\n\nSupport 1000x1000 grid.",
      hint: "Use priority queue (heap), Manhattan or Euclidean distance heuristic, cache paths.",
      expectedTime: "55 min",
      topics: ["AI", "Pathfinding", "A*", "Algorithms", "Unity"],
      testCases: [
        { input: "Start to goal with clear path", output: "optimal path found" },
        { input: "Obstacle blocking direct path", output: "path goes around obstacle" },
        { input: "No valid path exists", output: "algorithm terminates, no path" },
        { input: "1000 units request path", output: "calculated within 16ms frame" }
      ],
      solutionApproach: "Grid system, A* implementation, priority queue, path smoothing, steering, debug viz"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "medium",
      title: "Unity Inventory System (ScriptableObjects)",
      question: "Build flexible inventory system:\n1. ScriptableObject items (weapons, consumables, resources)\n2. Grid-based inventory UI (drag and drop)\n3. Item stacking (max stack sizes per item type)\n4. Equipment slots (head, body, weapon, etc.)\n5. Item tooltips (hover to show stats)\n6. Crafting system (recipes combining items)\n7. Save/load persistence (JSON/ScriptableObject)\n8. Item rarity and quality modifiers\n9. Weight/capacity system\n10. Hotbar quick access (1-9 keys)\n\nMVC pattern for UI separation.",
      hint: "Use ScriptableObjects for item data, UnityEvents for UI updates, drag with IDragHandler.",
      expectedTime: "45 min",
      topics: ["Unity", "UI", "Inventory", "ScriptableObjects"],
      testCases: [
        { input: "Drag item to slot", output: "item placed, UI updates" },
        { input: "Stack 64 arrows", output: "stack count shows 64" },
        { input: "Craft sword (2 wood + 3 iron)", output: "resources consumed, sword created" },
        { input: "Save game", output: "inventory serialized to JSON" }
      ],
      solutionApproach: "Item ScriptableObjects, grid UI, drag-drop, equipment system, crafting, persistence"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "hard",
      title: "Unity Multiplayer with Netcode",
      question: "Implement networked multiplayer:\n1. Client-server architecture (Unity Netcode/MLAPI/Mirror)\n2. Player spawning and synchronization\n3. RPCs (ServerRpc, ClientRpc) for actions\n4. Network transforms (interpolation, prediction)\n5. Authority management (server authoritative)\n6. Lobby and matchmaking (create/join room)\n7. Player disconnect handling\n8. Networked physics (server simulation)\n9. Latency compensation (client-side prediction)\n10. Bandwidth optimization (delta compression)\n\nSupport 8 players, 60Hz tick rate.",
      hint: "Use Unity Netcode for GameObjects, server authoritative, snapshot interpolation.",
      expectedTime: "60 min",
      topics: ["Unity", "Multiplayer", "Networking", "Netcode"],
      testCases: [
        { input: "Player moves", output: "position synced to all clients" },
        { input: "Player shoots", output: "ServerRpc validates, damage applied" },
        { input: "100ms latency", output: "client prediction feels responsive" },
        { input: "Player disconnects", output: "others notified, player removed" }
      ],
      solutionApproach: "Netcode setup, network objects, RPCs, transform sync, lobby, disconnect handling"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "hard",
      title: "Procedural Dungeon Generator",
      question: "Build procedural dungeon generator:\n1. Room placement (BSP or random walk algorithm)\n2. Corridor connection (minimum spanning tree)\n3. Door placement between rooms\n4. Key-lock puzzle generation\n5. Enemy spawn points (density based on distance)\n6. Loot chest placement (weighted rarity)\n7. Dead end detection and minimization\n8. Critical path guarantee (start to end)\n9. Seed-based generation (reproducible)\n10. Tilemap integration (Unity Tilemap)\n\nGenerate Roguelike dungeons.",
      hint: "Use BSP for room placement, MST for connections, flood fill for critical path, seeded RNG.",
      expectedTime: "55 min",
      topics: ["Procedural Generation", "Algorithms", "Unity", "Level Design"],
      testCases: [
        { input: "Seed: 12345", output: "same dungeon generated" },
        { input: "Generate 10 rooms", output: "all connected, no isolated" },
        { input: "Place enemies", output: "more enemies far from start" },
        { input: "Verify solvable", output: "path from start to exit exists" }
      ],
      solutionApproach: "BSP rooms, corridor MST, connectivity check, enemy/loot placement, tilemap rendering"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "medium",
      title: "Unity Shader Graph - Water Effect",
      question: "Create stylized water shader:\n1. Vertex displacement for waves (sin/cos based)\n2. Normal mapping for surface detail\n3. Refraction and distortion of underwater objects\n4. Foam at shorelines (depth-based)\n5. Specular highlights (Blinn-Phong)\n6. Color gradient (deep blue to turquoise)\n7. Transparency and fresnel effect\n8. Flow map for river currents\n9. Caustics projection on underwater terrain\n10. Performance optimization (mobile-friendly)\n\nUse Shader Graph or HLSL.",
      hint: "Use Time for animation, depth texture for shoreline foam, fresnel for rim lighting.",
      expectedTime: "40 min",
      topics: ["Unity", "Shaders", "VFX", "Graphics"],
      testCases: [
        { input: "Apply to plane", output: "animated wave displacement" },
        { input: "Object underwater", output: "refraction and distortion visible" },
        { input: "Shoreline approach", output: "foam appears at intersection" },
        { input: "Mobile GPU", output: "maintains 60fps" }
      ],
      solutionApproach: "Vertex shader waves, fragment shader colors, depth sampling, normal mapping"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "hard",
      title: "Unity ECS (DOTS) Performance System",
      question: "Implement Entity Component System:\n1. IComponentData structs (position, velocity, health)\n2. ISystemBase with Job System (Burst compiled)\n3. Movement system (parallel job processing)\n4. Collision detection (spatial hash grid)\n5. 10,000+ entities at 60FPS\n6. Entity instantiation/destruction\n7. Component data serialization\n8. Hybrid approach (GameObject + ECS)\n9. Memory optimization (chunk utilization)\n10. Burst compiler and NativeArray usage\n\nCreate simple boid simulation.",
      hint: "Use Unity.Entities, schedule parallel jobs, avoid managed types in components.",
      expectedTime: "50 min",
      topics: ["Unity", "DOTS", "ECS", "Performance"],
      testCases: [
        { input: "Spawn 10000 entities", output: "60FPS maintained" },
        { input: "Movement system", output: "all entities move in parallel" },
        { input: "Collision check", output: "spatial hash reduces checks" },
        { input: "Destroy entity", output: "memory freed, no leaks" }
      ],
      solutionApproach: "ECS setup, component design, job system, spatial hashing, burst compilation"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "medium",
      title: "Game Save System (JSON/Binary)",
      question: "Build robust save system:\n1. Serializable game state (player, inventory, world)\n2. JSON and binary format options\n3. Async save/load (non-blocking)\n4. Save file encryption (AES or obfuscation)\n5. Multiple save slots\n6. Auto-save at checkpoints\n7. Cloud save integration (Steam/PlayFab)\n8. Save versioning (migration on load)\n9. Corruption detection (checksums)\n10. Quicksave/quickload functionality\n\nSupport 100MB+ save files.",
      hint: "Use JsonUtility or Newtonsoft JSON, async/await, file streaming for large saves.",
      expectedTime: "40 min",
      topics: ["Unity", "Save System", "Serialization", "Persistence"],
      testCases: [
        { input: "Save game", output: "file written, no frame drop" },
        { input: "Load game", output: "state restored correctly" },
        { input: "Corrupt save file", output: "detected, error shown" },
        { input: "Version mismatch", output: "migration applied" }
      ],
      solutionApproach: "Serializable classes, async IO, encryption, versioning, cloud sync"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "hard",
      title: "Behavior Tree AI System",
      question: "Implement behavior tree for enemy AI:\n1. Node types: Selector, Sequence, Action, Condition, Decorator\n2. Blackboard for shared data (target, health, patrol points)\n3. Patrol, Chase, Attack, Flee behaviors\n4. Line of sight and hearing detection\n5. Cover finding (navmesh raycast evaluation)\n6. Group tactics (flanking, suppression fire)\n7. Animation integration (triggers, blend trees)\n8. Debug visualization (runtime tree view)\n9. Hot-reloadable trees (ScriptableObjects)\n10. Performance (limit tick rate, LOD AI)\n\nCreate tactical shooter enemy.",
      hint: "Use ScriptableObject for tree structure, blackboard dictionary, tick at 10Hz not 60Hz.",
      expectedTime: "55 min",
      topics: ["AI", "Behavior Trees", "Unity", "Game AI"],
      testCases: [
        { input: "Player in view", output: "chase behavior activates" },
        { input: "Low health", output: "flee to cover point" },
        { input: "Lost player", output: "search at last known position" },
        { input: "Multiple enemies", output: "flanking maneuver executed" }
      ],
      solutionApproach: "Node classes, blackboard system, patrol/chase/attack logic, cover finding, debug viz"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "medium",
      title: "Unity Audio Manager",
      question: "Build centralized audio system:\n1. Audio mixer with groups (music, SFX, UI, ambient)\n2. Object pooling for frequent sounds (gunshots)\n3. 3D spatial audio with attenuation\n4. Dynamic music (layered tracks, crossfade)\n5. Footstep surface detection (material-based)\n6. Sound occlusion (raycast check)\n7. Volume settings persistence\n8. Adaptive audio (intensity based on gameplay)\n9. Audio compression and streaming (large files)\n10. Subtitle/caption system\n\nEfficient audio management.",
      hint: "Use AudioMixer for groups, AudioSource pool, raycast for occlusion, blend trees for music.",
      expectedTime: "40 min",
      topics: ["Unity", "Audio", "Sound Design", "System Design"],
      testCases: [
        { input: "Play gunshot", output: "3D positioned sound, pooled source" },
        { input: "Enter cave", output: "reverb effect applied" },
        { input: "Volume slider changed", output: "mixer parameter updated" },
        { input: "Combat starts", output: "intense music layer fades in" }
      ],
      solutionApproach: "AudioMixer groups, object pool, spatial settings, dynamic music, persistence"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "medium",
      title: "Unity Event System & Quest Framework",
      question: "Create event-driven quest system:\n1. ScriptableObject quest definitions\n2. Event system (ScriptableObject-based or C# events)\n3. Objective types: kill, collect, reach, talk\n4. Quest states: inactive, active, completed, failed\n5. Branching quest lines (prerequisites)\n6. Rewards (XP, items, reputation)\n7. Quest log UI (trackable, abandon)\n8. Save/load quest progress\n9. Cutscene integration (timeline triggers)\n10. Localization support\n\nCreate RPG quest system.",
      hint: "Use Observer pattern with ScriptableObject events, quest database, UI binding.",
      expectedTime: "45 min",
      topics: ["Unity", "Quest System", "Events", "RPG"],
      testCases: [
        { input: "Accept quest", output: "quest active, objectives shown" },
        { input: "Kill 5 enemies", output: "objective counter updates" },
        { input: "All objectives complete", output: "quest complete, rewards given" },
        { input: "Load game", output: "quest progress restored" }
      ],
      solutionApproach: "Quest ScriptableObjects, event system, objective tracking, UI, persistence"
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "medium",
      title: "Game Design Patterns",
      question: "Explain common game design patterns: Game Loop, Update Method, Component Pattern, Observer, State Machine, Object Pool, Singleton (and why it's often bad). When to use each?",
      hint: "Connect patterns to Unity/Unreal implementations.",
      expectedPoints: ["Game Loop pattern", "Update Method", "Component Pattern (ECS)", "Observer pattern (events)", "State Machine (AI, game states)", "Object Pool (performance)", "Singleton controversy", "Service Locator", "Command pattern (undo/redo)", "Factory pattern", "Strategy pattern", "Flyweight pattern"],
      topics: ["Game Design", "Patterns", "Software Architecture"]
    },
    {
      id: 14,
      type: "theoretical",
      difficulty: "hard",
      title: "Game Physics Engines",
      question: "Compare physics engines: Unity Physics, Unreal Chaos, Bullet, Havok. How do they handle rigid bodies, soft bodies, joints, and collision detection? What are performance trade-offs?",
      hint: "Discuss continuous vs discrete collision detection, solver iterations.",
      expectedPoints: ["Unity Physics (PhysX-based)", "Unreal Chaos", "Bullet Physics", "Havok Physics", "Rigid body dynamics", "Soft body simulation", "Joint types (hinge, spring)", "Collision detection (broad/narrow phase)", "Continuous collision detection", "Solver iterations", "Performance optimization", "Deterministic physics"],
      topics: ["Physics", "Game Engines", "Simulation"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "hard",
      title: "Rendering Pipeline & Optimization",
      question: "Explain game rendering pipeline: frustum culling, occlusion culling, LOD, batching, instancing. What are draw calls and how do you minimize them? Cover Unity SRP and Unreal rendering.",
      hint: "Discuss GPU profiling and frame budget (16ms for 60FPS).",
      expectedPoints: ["Frustum culling", "Occlusion culling (umbra)", "LOD (Level of Detail)", "Draw call batching", "GPU instancing", "Texture atlasing", "GPU profiling (RenderDoc)", "Unity SRP (URP/HDRP)", "Unreal rendering pipeline", "Deferred vs Forward rendering", "Frame budget 16ms", "Mobile optimization"],
      topics: ["Rendering", "Optimization", "Graphics", "Performance"]
    },
    {
      id: 16,
      type: "theoretical",
      difficulty: "medium",
      title: "Game Networking Architectures",
      question: "Compare networking approaches: P2P vs Client-Server, authoritative server, lockstep vs snapshot interpolation, state sync vs delta compression. What about lag compensation?",
      hint: "Discuss determinism for fighting games vs shooter networking.",
      expectedPoints: ["P2P networking", "Client-Server", "Authoritative server", "Lockstep (deterministic)", "Snapshot interpolation", "State synchronization", "Delta compression", "Lag compensation (rewind)", "Client-side prediction", "Dead reckoning", "Fighting game networking (GGPO)", "Shooter networking (CSGO/Valorant)"],
      topics: ["Networking", "Multiplayer", "Game Development"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "hard",
      title: "Procedural Content Generation (PCG)",
      question: "Explain PCG techniques: noise functions (Perlin, Simplex), L-systems, cellular automata, wave function collapse. When to use each? What are the trade-offs between hand-crafted and procedural?",
      hint: "Use examples like Minecraft terrain, Spelunky levels, No Man's Sky planets.",
      expectedPoints: ["Perlin/Simplex noise", "Fractal Brownian Motion", "L-systems (plants)", "Cellular automata (caves)", "Wave function collapse", "Dungeon generation (BSP)", "Procedural quests", "Seeded generation", "Authoring tools", "Hand-crafted vs procedural", "Hybrid approaches", "Emergent gameplay"],
      topics: ["PCG", "Procedural Generation", "Level Design"]
    },
    {
      id: 18,
      type: "theoretical",
      difficulty: "medium",
      title: "Game AI Techniques",
      question: "Compare AI approaches: Finite State Machines, Behavior Trees, GOAP (Goal-Oriented Action Planning), Utility AI, Machine Learning (NEAT, reinforcement learning). When to use each?",
      hint: "Discuss complexity, debugging, and emergence of behavior.",
      expectedPoints: ["Finite State Machines (FSM)", "Hierarchical FSM", "Behavior Trees (BT)", "GOAP (planning)", "Utility AI (The Sims)", "Navigation mesh (NavMesh)", "Flocking (boids)", "NEAT (evolutionary)", "Reinforcement learning", "Utility vs GOAP trade-offs", "Debugging AI", "Emergent behavior"],
      topics: ["Game AI", "AI", "Behavior"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "hard",
      title: "Game Monetization & LiveOps",
      question: "Discuss game monetization models: premium, F2P, subscription, battle pass. What is LiveOps? Cover retention, DAU/MAU, ARPDAU, and ethical considerations (loot boxes, dark patterns).",
      hint: "Balance player value with business sustainability.",
      expectedPoints: ["Premium model", "Free-to-play (F2P)", "Subscription", "Battle pass", "IAP (in-app purchase)", "Ad-based", "LiveOps (events)", "Retention metrics", "DAU/MAU/WAU", "ARPDAU/ARPU", "Loot box regulations", "Ethical monetization", "Player lifetime value (LTV)"],
      topics: ["Monetization", "LiveOps", "Business", "Game Design"]
    },
    {
      id: 20,
      type: "theoretical",
      difficulty: "hard",
      title: "Unity vs Unreal Engine Comparison",
      question: "Compare Unity and Unreal Engine: rendering, physics, blueprint/visual scripting vs C#, asset store vs marketplace, licensing, target platforms, learning curve. When to choose each?",
      hint: "Discuss DOTS vs Niagara, URP vs Lumen, mobile vs AAA focus.",
      expectedPoints: ["Unity strengths", "Unreal strengths", "C# vs C++/Blueprint", "Rendering (URP/HDRP vs Lumen/Nanite)", "Physics (PhysX vs Chaos)", "Visual scripting", "Asset ecosystems", "Licensing models", "Platform support", "Mobile vs AAA focus", "Learning curves", "Industry adoption"],
      topics: ["Game Engines", "Unity", "Unreal", "Comparison"]
    }
  ],

  "AI Engineer": [
    {
      id: 1,
      type: "coding",
      difficulty: "medium",
      title: "Neural Network from Scratch (NumPy)",
      question: "Implement fully-connected neural network using only NumPy:\n1. Layer initialization (Xavier/He initialization)\n2. Forward pass (matrix multiplication, activations)\n3. Backpropagation (chain rule, gradient computation)\n4. Activation functions (ReLU, Sigmoid, Softmax)\n5. Cross-entropy loss with regularization\n6. Mini-batch gradient descent with momentum\n7. Learning rate decay schedule\n8. Dropout for regularization\n9. Batch normalization (optional)\n10. Early stopping based on validation loss\n\nTrain on MNIST, achieve >95% accuracy.",
      hint: "Vectorize operations, check gradients numerically, monitor loss curves.",
      expectedTime: "50 min",
      topics: ["Deep Learning", "Neural Networks", "NumPy", "Backpropagation"],
      testCases: [
        { input: "Forward pass batch of 32 images", output: "probabilities sum to 1" },
        { input: "Backward pass", output: "gradients computed for all weights" },
        { input: "Train 10 epochs", output: "training loss decreases, val loss stable" },
        { input: "Test on MNIST", output: "accuracy > 95%" }
      ],
      solutionApproach: "Layer class, forward/backward methods, SGD with momentum, dropout, monitoring"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "hard",
      title: "Transformer Architecture Implementation",
      question: "Build Transformer encoder from scratch (PyTorch):\n1. Multi-head self-attention (Q, K, V computation)\n2. Positional encoding (sinusoidal or learned)\n3. Feed-forward network (GELU activation)\n4. Layer normalization (pre-norm vs post-norm)\n5. Residual connections\n6. Masked attention for causal/decoding\n7. Dropout throughout\n8. Stack multiple layers (configurable depth)\n9. Classification head on [CLS] token\n10. Attention visualization (heatmap output)\n\nTrain on text classification task.",
      hint: "Use einsum for attention, scale by sqrt(d_k), handle padding masks properly.",
      expectedTime: "60 min",
      topics: ["Transformers", "Attention", "PyTorch", "NLP"],
      testCases: [
        { input: "Input sequence [batch, seq_len]", output: "contextualized representations" },
        { input: "Multi-head attention", output: "parallel attention computations" },
        { input: "Attention weights", output: "softmax along key dimension" },
        { input: "Train on IMDB", output: "sentiment classification accuracy" }
      ],
      solutionApproach: "Attention module, MLP block, Transformer block, stacking, classification head"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "hard",
      title: "BERT Fine-tuning for NER",
      question: "Fine-tune BERT for Named Entity Recognition:\n1. Load pre-trained BERT (Hugging Face Transformers)\n2. Token classification head on each token\n3. Handle subword tokenization (wordpiece alignment)\n4. BIO tagging scheme encoding\n5. CRF layer on top (optional for constraints)\n6. Handle long sequences (sliding window)\n7. Custom Dataset and DataLoader\n8. Training loop with gradient accumulation\n9. Evaluation: precision, recall, F1 per entity\n10. Inference pipeline for new text\n\nTrain on CoNLL-2003 dataset.",
      hint: "Align labels with wordpiece tokens, use -100 for ignore_index, consider CRF for BIO.",
      expectedTime: "55 min",
      topics: ["BERT", "NER", "HuggingFace", "Transfer Learning"],
      testCases: [
        { input: "'Apple Inc. is in Cupertino'", output: "ORG: Apple Inc., LOC: Cupertino" },
        { input: "Subword 'Washington'", output: "correctly aligned labels" },
        { input: "Evaluate F1", output: "macro F1 > 0.90" },
        { input: "Inference new sentence", output: "entities extracted with confidence" }
      ],
      solutionApproach: "BERT loading, token classifier, alignment, training loop, evaluation metrics"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "hard",
      title: "Diffusion Model for Image Generation",
      question: "Implement simplified DDPM for image generation:\n1. Forward process (noise scheduling, beta schedule)\n2. UNet architecture for noise prediction\n3. Time step embedding (sinusoidal)\n4. Reverse denoising process\n5. Training objective (MSE on noise)\n6. Sampling algorithm (DDPM/DDIM)\n7. Classifier-free guidance (optional)\n8. Attention blocks in UNet\n9. EMA of model weights\n10. FID score computation for evaluation\n\nGenerate 32x32 CIFAR-10 images.",
      hint: "Use cosine beta schedule, group norm, residual blocks, attention at lower resolutions.",
      expectedTime: "65 min",
      topics: ["Diffusion Models", "DDPM", "Generative AI", "Computer Vision"],
      testCases: [
        { input: "Train 100 epochs", output: "loss decreases, samples improve" },
        { input: "Sample 64 images", output: "coherent CIFAR-like images" },
        { input: "FID calculation", output: "FID < 30 on CIFAR-10" },
        { input: "Interpolation in latent", output: "smooth transitions" }
      ],
      solutionApproach: "DDPM scheduler, UNet, training loop, sampling loop, EMA, evaluation"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "medium",
      title: "RAG System with Vector Database",
      question: "Build Retrieval-Augmented Generation pipeline:\n1. Document chunking (semantic splitting)\n2. Embedding model (OpenAI/Sentence-BERT)\n3. Vector store (Pinecone/Chroma/FAISS)\n4. Similarity search with metadata filtering\n5. Re-ranking (cross-encoder)\n6. Prompt construction with retrieved context\n7. LLM integration (OpenAI/local)\n8. Citation tracking (source attribution)\n9. Streaming response generation\n10. Evaluation: relevance, faithfulness\n\nBuild on custom document corpus.",
      hint: "Chunk size 500-1000 tokens, overlap 10%, use MMR for diversity, include source in prompt.",
      expectedTime: "50 min",
      topics: ["RAG", "LLM", "Vector DB", "NLP"],
      testCases: [
        { input: "Query about document content", output: "relevant chunks retrieved" },
        { input: "Generate answer", output: "answer grounded in retrieved context" },
        { input: "Source tracking", output: "citations link to original docs" },
        { input: "Irrelevant query", output: "no relevant chunks, fallback response" }
      ],
      solutionApproach: "Chunking, embedding, vector store, retrieval, re-ranking, prompt, LLM, streaming"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "hard",
      title: "Reinforcement Learning (DQN) Agent",
      question: "Implement Deep Q-Network for Atari:\n1. Experience replay buffer (prioritized optional)\n2. Q-network architecture (CNN for pixels)\n3. Target network with soft updates\n4. Epsilon-greedy exploration (decay)\n5. Double DQN to reduce overestimation\n6. Dueling architecture (value + advantage)\n7. Frame stacking (4 consecutive frames)\n8. Reward clipping and preprocessing\n9. Training loop with target updates\n10. Evaluation: average reward over 100 episodes\n\nTrain on CartPole or Breakout.",
      hint: "Use frame skip, max pooling, experience replay size 1M, target update every 10k steps.",
      expectedTime: "55 min",
      topics: ["Reinforcement Learning", "DQN", "PyTorch", "Game AI"],
      testCases: [
        { input: "Train 1000 episodes", output: "reward increases, loss stabilizes" },
        { input: "Epsilon decay", output: "exploration decreases over time" },
        { input: "Evaluation", output: "avg reward > threshold for solved" },
        { input: "Visualize Q-values", output: "sensible value estimates" }
      ],
      solutionApproach: "Replay buffer, Q-network, target network, training loop, evaluation"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "medium",
      title: "CNN Image Classifier with Augmentation",
      question: "Build production-ready image classifier:\n1. Data pipeline with augmentation (rotation, flip, color jitter)\n2. ResNet/ EfficientNet architecture\n3. Transfer learning (ImageNet pre-trained)\n4. Progressive resizing (train on small, fine-tune on large)\n5. Label smoothing and mixup/cutmix\n6. Learning rate finder and scheduling\n7. Test-time augmentation (TTA)\n8. Model quantization for inference\n9. ONNX export for deployment\n10. Grad-CAM visualization for explainability\n\nTrain on custom dataset.",
      hint: "Use torchvision models, albumentations for aug, wandb for logging, torch.jit for export.",
      expectedTime: "45 min",
      topics: ["Computer Vision", "CNN", "Transfer Learning", "PyTorch"],
      testCases: [
        { input: "Train with augmentation", output: "validation accuracy higher" },
        { input: "MixUp applied", output: "smoother loss landscape" },
        { input: "Export to ONNX", output: "model loads in ONNX Runtime" },
        { input: "Grad-CAM", output: "heatmap shows relevant regions" }
      ],
      solutionApproach: "Data pipeline, model, training loop, augmentation, export, visualization"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "hard",
      title: "Model Serving API (FastAPI + TorchServe)",
      question: "Build ML model serving infrastructure:\n1. FastAPI REST API with async endpoints\n2. Model loading and caching (singleton pattern)\n3. Batch inference for efficiency\n4. Request validation (Pydantic schemas)\n5. GPU memory management (clear cache)\n6. A/B testing support (model versioning)\n7. Monitoring (prometheus metrics)\n8. Rate limiting and authentication\n9. Docker containerization\n10. Load testing (locust/vegeta)\n\nServe transformer or CV model.",
      hint: "Use asyncio, model pool for multi-GPU, batch dynamically, health check endpoint.",
      expectedTime: "50 min",
      topics: ["MLOps", "Model Serving", "FastAPI", "Production"],
      testCases: [
        { input: "POST /predict with image", output: "prediction JSON returned" },
        { input: "Batch 32 images", output: "batch inference, faster per image" },
        { input: "Concurrent requests", output: "queued and processed async" },
        { input: "Load test 1000 RPS", output: "latency < 100ms p99" }
      ],
      solutionApproach: "FastAPI setup, model loading, batching, endpoints, monitoring, Docker"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "medium",
      title: "Feature Engineering Pipeline",
      question: "Build ML feature engineering system:\n1. Data validation (Great Expectations/Pandera)\n2. Missing value imputation strategies\n3. Categorical encoding (one-hot, target, ordinal)\n4. Numerical scaling (standard, robust, quantile)\n5. Feature interactions (polynomial, domain-specific)\n6. Time-based features (lag, rolling windows)\n7. Dimensionality reduction (PCA, feature selection)\n8. Pipeline persistence (sklearn Pipeline)\n9. Feature store integration (Feast/Tecton)\n10. Monitoring for drift (evidently)\n\nProcess tabular dataset.",
      hint: "Use sklearn pipelines, custom transformers, fit on train only, transform test.",
      expectedTime: "40 min",
      topics: ["Feature Engineering", "ML Pipeline", "sklearn", "Data Processing"],
      testCases: [
        { input: "Fit pipeline on train", output: "encoders fitted, scalars computed" },
        { input: "Transform test data", output: "same shape, no data leakage" },
        { input: "Detect drift", output: "alert on distribution change" },
        { input: "Feature importance", output: "top features identified" }
      ],
      solutionApproach: "Validation, imputation, encoding, scaling, feature engineering, drift detection"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "hard",
      title: "LLM Fine-tuning with LoRA",
      question: "Fine-tune LLM efficiently with LoRA:\n1. Load 7B parameter model (Llama/Mistral)\n2. LoRA configuration (rank, alpha, dropout)\n3. Target modules (q_proj, v_proj)\n4. Quantization (4-bit/8-bit with bitsandbytes)\n5. Gradient checkpointing for memory\n6. Instruction dataset formatting (alpaca/chatml)\n7. Training with TRL/Transformers\n8. Evaluation on held-out prompts\n9. Merge LoRA weights for inference\n10. vLLM deployment for serving\n\nFine-tune for chat or task.",
      hint: "Use peft library, target attention layers, gradient accumulation, watch VRAM.",
      expectedTime: "55 min",
      topics: ["LLM", "LoRA", "Fine-tuning", "PEFT"],
      testCases: [
        { input: "Train with LoRA", output: "trainable params < 1% of total" },
        { input: "4-bit quantization", output: "model fits in 16GB VRAM" },
        { input: "Generate text", output: "follows instruction format" },
        { input: "Inference speed", output: "20+ tokens/sec with vLLM" }
      ],
      solutionApproach: "Model loading, LoRA config, training loop, evaluation, merge, deploy"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "hard",
      title: "Multi-Agent RL with Communication",
      question: "Implement multi-agent reinforcement learning:\n1. Multi-agent environment (cooperative/competitive)\n2. Independent Q-learning (IQL) or MADDPG\n3. Communication channel between agents\n4. Centralized training, decentralized execution\n5. Experience sharing vs independent\n6. Credit assignment problem\n7. Curriculum learning for coordination\n8. Evaluation: team reward, individual performance\n9. Visualization of emergent strategies\n10. Parameter sharing for scalability\n\nSolve multi-agent task.",
      hint: "Use PettingZoo environments, shared replay buffer, attention for communication.",
      expectedTime: "60 min",
      topics: ["Multi-Agent RL", "MARL", "Cooperative AI", "PyTorch"],
      testCases: [
        { input: "2 agents cooperate", output: "higher combined reward" },
        { input: "Communication enabled", output: "better coordination" },
        { input: "Self-play training", output: "emergence of strategies" },
        { input: "Generalization", output: "works with new partners" }
      ],
      solutionApproach: "Environment, agent networks, communication, training loop, evaluation"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "medium",
      title: "AutoML with Neural Architecture Search",
      question: "Implement simple NAS (Neural Architecture Search):\n1. Search space definition (operations, connectivity)\n2. Controller RNN for architecture sampling\n3. Child network training with weight sharing\n4. ENAS or DARTS style optimization\n5. Reward based on validation accuracy\n6. Progressive complexity (start small)\n7. Architecture encoding/decoding\n8. Best architecture retraining from scratch\n9. Comparison with human-designed baseline\n10. Visualization of searched architectures\n\nFind best CNN for CIFAR-10.",
      hint: "Use small search space initially, weight sharing crucial, patience for convergence.",
      expectedTime: "55 min",
      topics: ["AutoML", "NAS", "Architecture Search", "PyTorch"],
      testCases: [
        { input: "Sample architecture", output: "valid CNN structure" },
        { input: "Train child network", output: "accuracy measured as reward" },
        { input: "Controller update", output: "policy improves over iterations" },
        { input: "Best architecture", output: "retrained, beats baseline" }
      ],
      solutionApproach: "Search space, controller, child network, training loop, architecture decoding"
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "hard",
      title: "Attention Mechanisms & Transformers",
      question: "Explain attention mechanisms: self-attention, cross-attention, multi-head attention. What are the computational complexity trade-offs? Cover transformer variants: BERT (encoder), GPT (decoder), T5 (encoder-decoder), and efficiency improvements (sparse attention, linear attention, Flash Attention).",
      hint: "Discuss O(n²) complexity and solutions like Flash Attention's memory access patterns.",
      expectedPoints: ["Self-attention (Q, K, V)", "Multi-head attention", "Cross-attention", "Positional encoding", "Computational complexity O(n²d)", "BERT (bidirectional)", "GPT (autoregressive)", "T5 (seq2seq)", "Sparse attention (Longformer)", "Linear attention (Performer)", "Flash Attention (IO-aware)", "Efficient transformers survey"],
      topics: ["Transformers", "Attention", "Deep Learning"]
    },
    {
      id: 14,
      type: "theoretical",
      difficulty: "hard",
      title: "LLM Training & Alignment",
      question: "Explain LLM training pipeline: pre-training (next token prediction), supervised fine-tuning (SFT), RLHF (reward model + PPO), DPO. What is instruction tuning and why is it important? Cover model scaling laws.",
      hint: "Discuss compute-optimal training and the Chinchilla scaling laws.",
      expectedPoints: ["Pre-training objective", "SFT (instruction tuning)", "RLHF process", "Reward modeling", "PPO for LLMs", "DPO (direct preference)", "Constitutional AI", "Scaling laws (Chinchilla)", "Compute-optimal training", "Emergent abilities", "In-context learning", "Chain-of-thought prompting"],
      topics: ["LLM", "Training", "Alignment", "RLHF"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "hard",
      title: "Computer Vision Architectures",
      question: "Trace evolution of CV architectures: AlexNet → VGG → ResNet → DenseNet → EfficientNet → Vision Transformer (ViT). What are inductive biases? Compare CNNs vs Transformers for vision.",
      hint: "Discuss translation equivariance, local receptive fields vs global attention.",
      expectedPoints: ["AlexNet (ReLU, dropout)", "VGG (depth, 3x3 conv)", "ResNet (skip connections)", "DenseNet (feature reuse)", "EfficientNet (compound scaling)", "Vision Transformer (patches)", "Inductive biases (CNNs)", "Translation equivariance", "Swin Transformer (hierarchical)", "ConvNeXt (CNN comeback)", "Hybrid approaches", "Data efficiency comparison"],
      topics: ["Computer Vision", "Architectures", "CNN", "Transformer"]
    },
    {
      id: 16,
      type: "theoretical",
      difficulty: "medium",
      title: "Optimization Algorithms for Deep Learning",
      question: "Compare optimizers: SGD, Momentum, RMSprop, Adam, AdamW. What is the role of learning rate schedules (step, cosine, warm-up)? Explain second-order methods (L-BFGS, natural gradient) and when they're used.",
      hint: "Discuss adaptive vs non-adaptive, weight decay decoupling in AdamW.",
      expectedPoints: ["SGD with momentum", "RMSprop (adaptive LR)", "Adam (momentum + RMSprop)", "AdamW (decoupled weight decay)", "Learning rate schedules", "Warm-up importance", "Cosine annealing", "Second-order methods", "L-BFGS", "Natural gradient", "Sharpness-Aware Minimization (SAM)", "Optimizer selection guide"],
      topics: ["Optimization", "Deep Learning", "Training"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "hard",
      title: "MLOps & Model Lifecycle",
      question: "Explain MLOps practices: experiment tracking, model versioning, data versioning, CI/CD for ML, monitoring (data drift, concept drift), A/B testing, model governance. What is the ML model lifecycle?",
      hint: "Compare with traditional DevOps and discuss unique ML challenges.",
      expectedPoints: ["Experiment tracking (MLflow, WandB)", "Model registry", "Data versioning (DVC)", "Feature store", "ML pipelines (Kubeflow)", "CI/CD for ML", "Data drift detection", "Concept drift", "Model monitoring", "A/B testing models", "Model governance", "Responsible AI"],
      topics: ["MLOps", "DevOps", "Model Management"]
    },
    {
      id: 18,
      type: "theoretical",
      difficulty: "hard",
      title: "Generative AI: GANs, VAEs, Diffusion",
      question: "Compare generative models: GANs (adversarial training), VAEs (latent space), Diffusion (iterative denoising), Flow-based models. What are the trade-offs in quality, diversity, training stability, and sampling speed?",
      hint: "Discuss mode collapse in GANs and the revolution of diffusion models.",
      expectedPoints: ["GAN architecture (generator, discriminator)", "GAN training challenges (mode collapse)", "VAE (ELBO, reparameterization)", "VAE limitations (blurry outputs)", "Diffusion models (DDPM)", "Score matching", "Flow-based models (normalizing flows)", "Quality vs diversity", "Sampling speed comparison", "Latent diffusion (Stable Diffusion)", "Autoregressive models (GPT, PixelCNN)", "Model selection guide"],
      topics: ["Generative AI", "GAN", "VAE", "Diffusion"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "medium",
      title: "Ethics, Bias & Explainability",
      question: "What are AI ethics considerations? Explain: fairness (demographic parity, equalized odds), bias detection and mitigation, explainability methods (SHAP, LIME, attention), model cards, and responsible AI principles.",
      hint: "Discuss real-world examples of AI bias and their consequences.",
      expectedPoints: ["Algorithmic bias sources", "Fairness metrics", "Demographic parity", "Equalized odds", "Bias mitigation techniques", "Explainability vs performance", "SHAP values", "LIME", "Attention visualization", "Model cards", "Datasheets for datasets", "Responsible AI principles"],
      topics: ["AI Ethics", "Fairness", "Explainability", "Responsible AI"]
    },
    {
      id: 20,
      type: "theoretical",
      difficulty: "hard",
      title: "AI Hardware & Acceleration",
      question: "Discuss AI hardware: GPUs (CUDA, Tensor Cores), TPUs, custom accelerators (NPUs), quantization (INT8, INT4), model pruning, knowledge distillation, and distributed training (data parallelism, model parallelism, pipeline parallelism).",
      hint: "Cover memory bandwidth vs compute bound kernels, roofline model.",
      expectedPoints: ["GPU architecture (SMs, warps)", "Tensor Cores", "TPU (systolic array)", "Memory bandwidth bottleneck", "Mixed precision training", "Quantization (PTQ, QAT)", "Pruning (unstructured, structured)", "Knowledge distillation", "Data parallelism", "Model parallelism", "Pipeline parallelism", "FSDP (ZeRO)"],
      topics: ["AI Hardware", "Acceleration", "Distributed Training"]
    }
  ],

  "Cybersecurity Engineer": [
    {
      id: 1,
      type: "coding",
      difficulty: "medium",
      title: "Python Network Scanner",
      question: "Build network reconnaissance tool:\n1. TCP SYN port scanner (threaded/asyncio)\n2. Service banner grabbing\n3. OS fingerprinting (TTL analysis)\n4. SYN stealth scan (raw sockets)\n5. Common vulnerability detection ( outdated versions)\n6. Output to JSON/CSV\n7. Rate limiting to avoid detection\n8. Multiple target support (CIDR notation)\n9. Integration with Nmap (optional)\n10. Report generation with risk scoring\n\nScan 1000 ports on local network.",
      hint: "Use scapy for raw packets, asyncio for concurrency, socket for banner grabbing.",
      expectedTime: "40 min",
      topics: ["Network Security", "Python", "Port Scanning", "Reconnaissance"],
      testCases: [
        { input: "Scan 192.168.1.1 ports 1-1000", output: "list of open ports with services" },
        { input: "Banner grab on port 22", output: "SSH-2.0-OpenSSH_8.2" },
        { input: "SYN scan", output: "stealthy, no full handshake" },
        { input: "Export to JSON", output: "structured scan results" }
      ],
      solutionApproach: "Socket scanning, threading, banner grabbing, OS detection, output formatting"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "hard",
      title: "Web Application Firewall (WAF) Rules",
      question: "Implement WAF rule engine:\n1. SQL injection detection (pattern matching, regex)\n2. XSS filtering (input sanitization)\n3. CSRF token validation\n4. Rate limiting per IP/user\n5. IP whitelist/blacklist\n6. Request logging and alerting\n7. OWASP Top 10 protection rules\n8. Custom rule DSL parser\n9. ModSecurity compatible format\n10. Machine learning anomaly detection (optional)\n\nProtect against common web attacks.",
      hint: "Use regex for patterns, implement rule priority, handle false positives.",
      expectedTime: "50 min",
      topics: ["WAF", "Web Security", "OWASP", "Attack Prevention"],
      testCases: [
        { input: "Request with SQLi payload", output: "blocked, 403 Forbidden" },
        { input: "XSS attempt in form", output: "sanitized or blocked" },
        { input: "Rate limit exceeded", output: "429 Too Many Requests" },
        { input: "Valid request", output: "passed through to backend" }
      ],
      solutionApproach: "Rule engine, pattern matching, rate limiting, logging, alert system"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "hard",
      title: "Intrusion Detection System (IDS)",
      question: "Build network-based IDS:\n1. Packet capture (libpcap/scapy)\n2. Protocol analysis (TCP/IP, HTTP, DNS)\n3. Signature-based detection (Snort rules)\n4. Anomaly detection (baseline + threshold)\n5. Real-time alerting (Slack/email/syslog)\n6. Log correlation and aggregation\n7. GeoIP lookup for external IPs\n8. Threat intelligence feed integration\n9. Dashboard for visualization\n10. Automated response (block IP via iptables)\n\nDetect port scans, brute force.",
      hint: "Use scapy for packet parsing, maintain connection state, implement rule matching.",
      expectedTime: "55 min",
      topics: ["IDS", "Network Security", "Packet Analysis", "Python"],
      testCases: [
        { input: "Port scan detected", output: "alert: possible reconnaissance" },
        { input: "Multiple failed SSH attempts", output: "alert: brute force attack" },
        { input: "Anomalous DNS query volume", output: "alert: possible C2" },
        { input: "Auto-block enabled", output: "iptables rule added" }
      ],
      solutionApproach: "Packet capture, protocol parsing, signature matching, anomaly detection, alerting"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "medium",
      title: "Vulnerability Scanner",
      question: "Implement automated vulnerability scanner:\n1. CVE database integration (NVD API)\n2. Service version detection\n3. Vulnerability matching (version vs CVE)\n4. Web vulnerability scanning (dir busting)\n5. SSL/TLS configuration check\n6. Header security analysis (HSTS, CSP)\n7. Credential stuffing check (default passwords)\n8. Report generation (CVSS scoring)\n9. Remediation recommendations\n10. Scheduled scanning (cron job)\n\nScan web application stack.",
      hint: "Use requests for HTTP, ssl module for cert checking, BeautifulSoup for parsing.",
      expectedTime: "45 min",
      topics: ["Vulnerability Management", "Security Scanning", "CVE"],
      testCases: [
        { input: "Detect Apache 2.4.41", output: "CVE-2020-11984 reported" },
        { input: "Missing CSP header", output: "medium severity finding" },
        { input: "SSLv3 enabled", output: "critical: outdated protocol" },
        { input: "Generate report", output: "PDF/HTML with CVSS scores" }
      ],
      solutionApproach: "Version detection, CVE matching, web scanning, SSL check, reporting"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "hard",
      title: "SIEM Log Analyzer",
      question: "Build SIEM log analysis system:\n1. Multi-format log parser (syslog, JSON, CSV)\n2. Real-time log ingestion (Kafka/file tail)\n3. Pattern matching for IOCs (indicators of compromise)\n4. Correlation rules (time-window based)\n5. User and Entity Behavior Analytics (UEBA)\n6. Anomaly detection (statistical/ML)\n7. Alert prioritization (severity scoring)\n8. Incident case creation workflow\n9. Integration with threat intel\n10. Dashboard with Kibana/Grafana\n\nProcess 10K events/sec.",
      hint: "Use ELK stack or custom, implement windowing for correlations, use pandas for analysis.",
      expectedTime: "55 min",
      topics: ["SIEM", "Log Analysis", "Threat Detection", "Analytics"],
      testCases: [
        { input: "Login from new location + data download", output: "high severity alert" },
        { input: "Brute force pattern", output: "correlation rule triggered" },
        { input: "Known malicious IP", output: "IOC match alert" },
        { input: "Baseline deviation", output: "UEBA anomaly detected" }
      ],
      solutionApproach: "Log ingestion, parsing, correlation engine, UEBA, alerting, dashboard"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "medium",
      title: "Password Security Analyzer",
      question: "Build password security assessment tool:\n1. Password strength estimation (zxcvbn algorithm)\n2. Breached password check (HaveIBeenPwned API)\n3. Hash analysis (identify hash type)\n4. Password policy validation\n5. Entropy calculation\n6. Crack time estimation\n7. Common pattern detection\n8. Organization policy compliance\n9. Batch analysis for user database\n10. Report with recommendations\n\nAssess password security posture.",
      hint: "Use zxcvbn library, k-anonymity for HIBP, calculate entropy from charset and length.",
      expectedTime: "35 min",
      topics: ["Password Security", "Cryptography", "Assessment"],
      testCases: [
        { input: "Password: Password123!", output: "weak: common pattern" },
        { input: "Check against HIBP", output: "found in 5 breaches" },
        { input: "Strong password", output: "entropy > 60 bits" },
        { input: "Crack time estimate", output: "> 100 years with current hardware" }
      ],
      solutionApproach: "Strength meter, breach check, entropy calc, policy validation, reporting"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "hard",
      title: "Malware Analysis Sandbox",
      question: "Create automated malware analysis environment:\n1. Sandbox isolation (Docker/VM)\n2. Static analysis (strings, PE headers, YARA)\n3. Dynamic analysis (API hooking, behavior)\n4. Network traffic capture\n5. File system activity monitoring\n6. Registry modification tracking\n7. Memory dump analysis (Volatility)\n8. C2 communication detection\n9. IOC extraction (IPs, domains, hashes)\n10. Report generation with MITRE ATT&CK mapping\n\nAnalyze suspicious executable.",
      hint: "Use YARA for signatures, ptrace/strace for monitoring, tcpdump for network.",
      expectedTime: "60 min",
      topics: ["Malware Analysis", "Sandbox", "Reverse Engineering"],
      testCases: [
        { input: "Static analysis", output: "suspicious imports, packed binary" },
        { input: "Dynamic execution", output: "registry changes, network connections" },
        { input: "Network capture", output: "DNS to suspicious domain" },
        { input: "MITRE mapping", output: "T1055: Process Injection" }
      ],
      solutionApproach: "Sandbox, static analysis, dynamic monitoring, network capture, IOC extraction"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "medium",
      title: "Encryption/Decryption Tool",
      question: "Implement cryptographic operations tool:\n1. Symmetric encryption (AES-256-GCM)\n2. Asymmetric encryption (RSA-4096)\n3. Hybrid encryption (AES + RSA)\n4. Digital signatures (ECDSA, Ed25519)\n5. Key derivation (PBKDF2, Argon2, scrypt)\n6. HMAC for message authentication\n7. Secure random generation\n8. File encryption with chunking\n9. Password-based key derivation\n10. Key management (keyring integration)\n\nSecure data at rest.",
      hint: "Use cryptography library, never reuse nonces, use authenticated encryption.",
      expectedTime: "45 min",
      topics: ["Cryptography", "Encryption", "Security"],
      testCases: [
        { input: "Encrypt with AES-GCM", output: "ciphertext + tag + nonce" },
        { input: "Decrypt", output: "original plaintext verified" },
        { input: "Sign message", output: "signature valid with verify" },
        { input: "Derive key from password", output: "PBKDF2 with 100k iterations" }
      ],
      solutionApproach: "AES-GCM, RSA, hybrid scheme, signatures, KDF, secure random"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "hard",
      title: "Zero Trust Architecture Implementation",
      question: "Implement Zero Trust components:\n1. Identity verification (MFA, device attestation)\n2. Least privilege access control (RBAC + ABAC)\n3. Micro-segmentation (network policies)\n4. Continuous authentication (risk-based)\n5. Device trust scoring\n6. Encrypted traffic inspection (TLS inspection)\n7. Software-defined perimeter (SDP)\n8. Just-in-time access (time-limited)\n9. Policy enforcement points\n10. Audit logging for all access\n\nDesign for cloud environment.",
      hint: "Use SPIFFE/SPIRE for identity, implement policy engine, consider performance impact.",
      expectedTime: "55 min",
      topics: ["Zero Trust", "Architecture", "Cloud Security"],
      testCases: [
        { input: "User access request", output: "verified identity, device trust OK" },
        { input: "Anomalous behavior", output: "step-up authentication required" },
        { input: "Micro-segmentation", output: "east-west traffic blocked by default" },
        { input: "Session expires", output: "re-authentication required" }
      ],
      solutionApproach: "Identity, device trust, policy engine, segmentation, continuous auth, logging"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "medium",
      title: "Security Automation with SOAR",
      question: "Build SOAR (Security Orchestration) playbook:\n1. Alert ingestion from multiple sources\n2. Automated enrichment (VirusTotal, WHOIS)\n3. Case management and assignment\n4. Automated containment (isolate host, block IP)\n5. Workflow engine for investigation steps\n6. Integration with EDR, firewall, Active Directory\n7. Approval workflows for sensitive actions\n8. Metrics and KPI tracking\n9. Runbook automation (conditional logic)\n10. Post-incident reporting\n\nAutomate phishing response.",
      hint: "Use TheHive/Cortex or custom, REST API integrations, implement workflow engine.",
      expectedTime: "50 min",
      topics: ["SOAR", "Automation", "Incident Response"],
      testCases: [
        { input: "Phishing alert", output: "auto-enrich, check domain reputation" },
        { input: "Malicious confirmed", output: "block domain, isolate affected hosts" },
        { input: "User notification", output: "email sent with instructions" },
        { input: "Metrics", output: "MTTD, MTTR calculated" }
      ],
      solutionApproach: "Alert ingestion, enrichment, decision logic, automated response, metrics"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "hard",
      title: "Blockchain Forensics Tool",
      question: "Implement cryptocurrency transaction analysis:\n1. Multi-chain support (BTC, ETH, major chains)\n2. Transaction graph analysis\n3. Address clustering (heuristics)\n4. Taint analysis (funds tracing)\n5. Mixing detection (CoinJoin, Tornado Cash)\n6. Exchange identification (tagged addresses)\n7. Sanctions screening (OFAC list)\n8. Visualization (transaction graph)\n9. Risk scoring for addresses\n10. Report generation for investigators\n\nTrace suspicious transactions.",
      hint: "Use blockchain APIs, implement graph algorithms, maintain address database.",
      expectedTime: "55 min",
      topics: ["Blockchain", "Forensics", "Crypto", "Investigation"],
      testCases: [
        { input: "Trace BTC transaction", output: "path from source to destination" },
        { input: "Tornado Cash detected", output: "privacy protocol usage flagged" },
        { input: "OFAC match", output: "sanctioned address alert" },
        { input: "Clustering", output: "addresses likely same entity" }
      ],
      solutionApproach: "Multi-chain APIs, graph analysis, heuristics, screening, visualization"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "medium",
      title: "Secure Coding Scanner",
      question: "Build static analysis tool for secure coding:\n1. Source code parsing (AST analysis)\n2. OWASP Top 10 pattern detection\n3. Hardcoded secret detection (regex, entropy)\n4. SQL injection vulnerability identification\n5. XSS sink identification\n6. Insecure dependency check\n7. CWE mapping for findings\n8. False positive reduction\n9. SARIF output format\n10. CI/CD integration (GitHub Actions)\n\nScan Python/JavaScript code.",
      hint: "Use AST module, implement taint analysis, check for dangerous functions.",
      expectedTime: "50 min",
      topics: ["Secure Coding", "Static Analysis", "SAST"],
      testCases: [
        { input: "Detect eval() usage", output: "code injection risk warning" },
        { input: "Find hardcoded API key", output: "secret detected, high entropy" },
        { input: "SQL string concatenation", output: "SQLi vulnerability found" },
        { input: "SARIF export", output: "standardized format for GitHub" }
      ],
      solutionApproach: "AST parsing, pattern matching, taint analysis, secret detection, SARIF output"
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "hard",
      title: "Threat Modeling & Risk Assessment",
      question: "Explain threat modeling methodologies: STRIDE, PASTA, MITRE ATT&CK, DREAD. How do you perform risk assessment? What is the difference between vulnerability, threat, and risk?",
      hint: "Provide examples of applying STRIDE to a web application.",
      expectedPoints: ["STRIDE categories", "PASTA methodology", "MITRE ATT&CK framework", "DREAD scoring", "Threat modeling process", "Data flow diagrams", "Attack trees", "Vulnerability vs threat vs risk", "Risk = Threat × Vulnerability × Impact", "Threat actors", "Threat intelligence", "Risk treatment options"],
      topics: ["Threat Modeling", "Risk Assessment", "Security Architecture"]
    },
    {
      id: 14,
      type: "theoretical",
      difficulty: "hard",
      title: "Cryptographic Fundamentals",
      question: "Explain cryptographic primitives: symmetric encryption (AES, ChaCha20), asymmetric encryption (RSA, ECC), hash functions (SHA-256), MACs (HMAC), digital signatures. What is perfect forward secrecy?",
      hint: "Discuss key sizes, security levels, and post-quantum considerations.",
      expectedPoints: ["Symmetric vs asymmetric", "Block ciphers (AES modes)", "Stream ciphers", "RSA algorithm", "Elliptic Curve Cryptography", "Hash functions properties", "HMAC construction", "Digital signatures (ECDSA, EdDSA)", "Perfect forward secrecy", "Key exchange (DH, ECDH)", "Post-quantum cryptography", "Quantum key distribution"],
      topics: ["Cryptography", "Security", "Encryption"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "medium",
      title: "Network Security Architecture",
      question: "Design secure network architecture: DMZ, segmentation, firewalls (stateful vs stateless), IDS/IPS, VPNs (site-to-site, remote access), bastion hosts, jump boxes. What is defense in depth?",
      hint: "Cover Zero Trust networking principles and traditional perimeter security.",
      expectedPoints: ["DMZ design", "Network segmentation", "VLANs", "Firewall types", "IDS vs IPS", "VPN technologies (IPsec, SSL)", "Bastion hosts", "Jump boxes", "Defense in depth", "Zero Trust networking", "Micro-segmentation", "Software-defined perimeter"],
      topics: ["Network Security", "Architecture", "Defense"]
    },
    {
      id: 16,
      type: "theoretical",
      difficulty: "hard",
      title: "Incident Response & Forensics",
      question: "Explain incident response lifecycle: preparation, identification, containment, eradication, recovery, lessons learned. What is digital forensics? Cover: evidence collection, chain of custody, timeline analysis, memory forensics.",
      hint: "Use real incident examples and forensic artifacts.",
      expectedPoints: ["NIST incident response", "Preparation phase", "Identification and detection", "Containment strategies", "Eradication", "Recovery", "Post-incident activity", "Digital forensics process", "Evidence handling", "Chain of custody", "Timeline analysis", "Memory forensics (Volatility)", "Disk forensics"],
      topics: ["Incident Response", "Forensics", "DFIR"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "hard",
      title: "Application Security (AppSec)",
      question: "Discuss application security: OWASP Top 10, SDLC integration, SAST/DAST/IAST, secure coding practices, dependency management, secrets management. How do you build security into DevOps (DevSecOps)?",
      hint: "Cover shift-left security and security automation.",
      expectedPoints: ["OWASP Top 10 (2021)", "Secure SDLC", "SAST tools", "DAST tools", "IAST", "Software Composition Analysis (SCA)", "Secure coding guidelines", "Input validation", "Authentication best practices", "Session management", "Secrets management (Vault)", "DevSecOps pipeline", "Security gates"],
      topics: ["AppSec", "OWASP", "DevSecOps"]
    },
    {
      id: 18,
      type: "theoretical",
      difficulty: "hard",
      title: "Cloud Security & Container Security",
      question: "Explain cloud security: shared responsibility model, IAM, data protection, network security in cloud. What are container security concerns? Cover: image scanning, runtime protection, Kubernetes security.",
      hint: "Discuss CSPM, CWPP, and CNAPP categories.",
      expectedPoints: ["Shared responsibility model", "Cloud IAM", "Data encryption (at rest, in transit)", "Cloud network security", "CSPM", "CWPP", "CNAPP", "Container image scanning", "Container runtime security", "Kubernetes RBAC", "Pod security policies", "Network policies", "Service mesh security"],
      topics: ["Cloud Security", "Container Security", "Kubernetes"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "medium",
      title: "Identity & Access Management (IAM)",
      question: "Explain IAM concepts: authentication vs authorization, MFA, SSO, OAuth 2.0, OpenID Connect, SAML, RBAC, ABAC, Zero Trust identity. What is identity federation?",
      hint: "Discuss modern identity standards and protocols.",
      expectedPoints: ["Authentication vs authorization", "Multi-factor authentication", "Single Sign-On (SSO)", "OAuth 2.0 flow", "OpenID Connect", "SAML", "JWT tokens", "RBAC", "ABAC", "PBAC", "Identity federation", "Zero Trust identity", "Identity providers", "Privileged Access Management (PAM)"],
      topics: ["IAM", "Identity", "Access Control"]
    },
    {
      id: 20,
      type: "theoretical",
      difficulty: "hard",
      title: "Security Governance & Compliance",
      question: "Discuss security governance: policies, standards, procedures, guidelines. What are major compliance frameworks: ISO 27001, SOC 2, NIST, PCI-DSS, GDPR, HIPAA? How do you implement GRC (Governance, Risk, Compliance)?",
      hint: "Cover audit processes and continuous compliance monitoring.",
      expectedPoints: ["Security governance framework", "Policies vs standards", "Compliance frameworks", "ISO 27001", "SOC 2", "NIST Cybersecurity Framework", "PCI-DSS", "GDPR security requirements", "HIPAA", "GRC platforms", "Audit processes", "Continuous compliance monitoring", "Evidence collection"],
      topics: ["Governance", "Compliance", "GRC"]
    }
  ],

  "Database Administrator": [
    {
      id: 1,
      type: "coding",
      difficulty: "medium",
      title: "PostgreSQL Query Optimization",
      question: "Optimize slow database queries:\n1. Analyze execution plans (EXPLAIN ANALYZE)\n2. Index design (B-tree, GiST, GIN, partial indexes)\n3. Query rewriting (avoid N+1, use joins)\n4. Partitioning strategies (range, list, hash)\n5. Connection pooling (PgBouncer)\n6. Vacuum and analyze scheduling\n7. Configuration tuning (shared_buffers, work_mem)\n8. Slow query log analysis\n9. Materialized views for aggregation\n10. Parallel query execution\n\nReduce query time from 10s to <100ms.",
      hint: "Check seq scans, add appropriate indexes, partition large tables, tune memory settings.",
      expectedTime: "45 min",
      topics: ["PostgreSQL", "Query Optimization", "Performance"],
      testCases: [
        { input: "EXPLAIN ANALYZE slow query", output: "identify seq scan, missing index" },
        { input: "Add composite index", output: "index scan used, time 10s→50ms" },
        { input: "Partition by date", output: "query only relevant partitions" },
        { input: "Connection pooling", output: "1000 concurrent connections handled" }
      ],
      solutionApproach: "Analysis, indexing, query rewrite, partitioning, config tuning, monitoring"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "hard",
      title: "MySQL Replication & High Availability",
      question: "Setup MySQL high availability cluster:\n1. Master-slave replication (async, semi-sync)\n2. Group Replication (multi-master)\n3. InnoDB Cluster with MySQL Shell\n4. Automatic failover (MySQL Router)\n5. Read replicas for scaling reads\n6. GTID-based replication\n7. Replication lag monitoring\n8. Data consistency checks (pt-table-checksum)\n9. Backup strategy (mysqldump, xtrabackup)\n10. Disaster recovery procedures\n\nZero downtime maintenance.",
      hint: "Use GTID for easy failover, monitor replication lag, test failover procedures.",
      expectedTime: "50 min",
      topics: ["MySQL", "Replication", "High Availability", "Clustering"],
      testCases: [
        { input: "Setup replication", output: "slave in sync with master" },
        { input: "Master failure", output: "automatic failover to new master" },
        { input: "Read scaling", output: "reads distributed across replicas" },
        { input: "Consistency check", output: "data identical across nodes" }
      ],
      solutionApproach: "Replication setup, monitoring, failover automation, backups, DR procedures"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "hard",
      title: "MongoDB Sharding Implementation",
      question: "Implement MongoDB sharded cluster:\n1. Shard key selection (cardinality, distribution)\n2. Config server replica set\n3. Shard deployment (multiple replica sets)\n4. Mongos router configuration\n5. Zone sharding (geographic data distribution)\n6. Chunk migration and balancing\n7. Query routing (targeted vs scatter-gather)\n8. Jumbo chunk handling\n9. Sharded cluster monitoring\n10. Backup strategies for sharded data\n\nScale to 10TB+ dataset.",
      hint: "Choose shard key carefully, avoid monotonic keys, pre-split if needed.",
      expectedTime: "55 min",
      topics: ["MongoDB", "Sharding", "NoSQL", "Scaling"],
      testCases: [
        { input: "Insert 1M documents", output: "evenly distributed across shards" },
        { input: "Query with shard key", output: "routed to single shard" },
        { input: "Add new shard", output: "chunks migrate automatically" },
        { input: "Zone sharding", output: "EU data on EU shards" }
      ],
      solutionApproach: "Cluster architecture, shard key design, deployment, monitoring, balancing"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "medium",
      title: "Redis Caching & Session Store",
      question: "Implement Redis caching layer:\n1. Cache-aside vs write-through patterns\n2. TTL and eviction policies (LRU, LFU)\n3. Redis Cluster for high availability\n4. Sentinel for automatic failover\n5. Session management with Redis\n6. Rate limiting implementation\n7. Pub/sub for real-time messaging\n8. Redis Streams for event sourcing\n9. Memory optimization (compression, hashes)\n10. Monitoring (RedisInsight, slowlog)\n\nHandle 100K req/sec.",
      hint: "Use appropriate data structures, pipeline commands, watch memory usage.",
      expectedTime: "40 min",
      topics: ["Redis", "Caching", "NoSQL", "Performance"],
      testCases: [
        { input: "Cache query result", output: "subsequent queries served from cache" },
        { input: "Cache miss", output: "DB queried, cache populated" },
        { input: "TTL expires", output: "key removed, next request misses" },
        { input: "Cluster failover", output: "automatic promotion, minimal downtime" }
      ],
      solutionApproach: "Caching patterns, cluster setup, session management, monitoring"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "hard",
      title: "Data Warehouse Design (Snowflake/BigQuery)",
      question: "Design cloud data warehouse:\n1. Star vs snowflake schema design\n2. Columnar storage optimization\n3. Partitioning and clustering keys\n4. ETL/ELT pipeline design\n5. Materialized views and caching\n6. Cost optimization (storage, compute)\n7. Access control (RBAC, row-level security)\n8. Data sharing across accounts\n9. Time travel and cloning\n10. Integration with BI tools\n\nSupport 100TB analytics.",
      hint: "Use appropriate schema, partition by date, cluster by common filters, monitor costs.",
      expectedTime: "50 min",
      topics: ["Data Warehouse", "Snowflake", "BigQuery", "Analytics"],
      testCases: [
        { input: "Query 1 year of data", output: "only relevant partitions scanned" },
        { input: "Complex aggregation", output: "result in < 10 seconds" },
        { input: "Data sharing", output: "secure cross-account access" },
        { input: "Cost analysis", output: "compute credits optimized" }
      ],
      solutionApproach: "Schema design, partitioning, clustering, ETL, security, cost optimization"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "medium",
      title: "Database Backup & Recovery",
      question: "Implement comprehensive backup strategy:\n1. Full backups (weekly)\n2. Incremental backups (daily)\n3. Point-in-time recovery (PITR)\n4. Continuous archiving (WAL archiving)\n5. Cross-region backup replication\n6. Backup verification (automated restore tests)\n7. Encryption at rest and in transit\n8. Retention policies (compliance-based)\n9. Disaster recovery runbooks\n10. RTO/RPO measurement\n\nRecover from corruption.",
      hint: "Automate backup verification, test restores regularly, document procedures.",
      expectedTime: "45 min",
      topics: ["Backup", "Recovery", "DR", "PostgreSQL"],
      testCases: [
        { input: "Scheduled full backup", output: "compressed, encrypted, verified" },
        { input: "Point-in-time restore", output: "database at specific timestamp" },
        { input: "Disaster scenario", output: "RTO < 4 hours, RPO < 15 min" },
        { input: "Backup verification", output: "automated restore test passes" }
      ],
      solutionApproach: "Backup scheduling, WAL archiving, encryption, verification, DR procedures"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "hard",
      title: "Elasticsearch Cluster Management",
      question: "Manage Elasticsearch cluster:\n1. Index lifecycle management (hot-warm-cold)\n2. Shard allocation and sizing\n3. Replica configuration for HA\n4. Search performance optimization\n5. Mapping design (nested vs flattened)\n6. Ingest pipelines for preprocessing\n7. Snapshot and restore (S3 repository)\n8. Monitoring (cluster health, JVM pressure)\n9. Query caching and request circuit breakers\n10. Security (TLS, authentication, RBAC)\n\nHandle 1B documents.",
      hint: "Size shards to 30-50GB, use time-based indices, monitor heap usage.",
      expectedTime: "50 min",
      topics: ["Elasticsearch", "Search", "Clustering", "NoSQL"],
      testCases: [
        { input: "Index 1M documents", output: "bulk indexing, proper mapping" },
        { input: "Search query", output: "results in < 100ms" },
        { input: "Node failure", output: "replicas promote, cluster yellow→green" },
        { input: "Snapshot to S3", output: "incremental backup completed" }
      ],
      solutionApproach: "Cluster setup, index management, performance tuning, monitoring, security"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "medium",
      title: "SQL Server Performance Tuning",
      question: "Optimize SQL Server performance:\n1. Query execution plan analysis\n2. Index optimization (missing index DMVs)\n3. Statistics update and maintenance\n4. TempDB configuration\n5. Memory configuration (Max Server Memory)\n6. Blocking and deadlock detection\n7. Query Store for regression detection\n8. Columnstore indexes for analytics\n9. In-Memory OLTP for high throughput\n10. Always On Availability Groups\n\nImprove OLTP performance.",
      hint: "Use Query Store for baselines, update statistics regularly, monitor waits.",
      expectedTime: "45 min",
      topics: ["SQL Server", "Performance", "Tuning", "Windows"],
      testCases: [
        { input: "Analyze wait stats", output: "identify IO bottlenecks" },
        { input: "Add columnstore index", output: "analytical query 10x faster" },
        { input: "Configure In-Memory", output: "OLTP throughput increased" },
        { input: "Detect deadlock", output: "graph captured, resolution applied" }
      ],
      solutionApproach: "Plan analysis, indexing, stats maintenance, config tuning, monitoring"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "hard",
      title: "Database Migration Strategy",
      question: "Plan and execute database migration:\n1. Schema comparison and drift detection\n2. Data migration (ETL approach)\n3. Online migration with minimal downtime\n4. CDC (Change Data Capture) for sync\n5. Data validation and checksums\n6. Rollback procedures\n7. Connection cutover strategy\n8. Application compatibility testing\n9. Performance baseline comparison\n10. Post-migration optimization\n\nMigrate 10TB Oracle to PostgreSQL.",
      hint: "Use tools like AWS DMS, test thoroughly, plan rollback, monitor closely.",
      expectedTime: "55 min",
      topics: ["Database Migration", "ETL", "Oracle", "PostgreSQL"],
      testCases: [
        { input: "Schema conversion", output: "DDL generated, reviewed" },
        { input: "Data migration", output: "rows match, checksums verified" },
        { input: "Cutover", output: "downtime < 5 minutes" },
        { input: "Rollback test", output: "can revert in 10 minutes" }
      ],
      solutionApproach: "Assessment, schema conversion, data migration, validation, cutover, optimization"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "medium",
      title: "Database Security Hardening",
      question: "Implement database security:\n1. Authentication (LDAP/AD integration)\n2. Role-based access control (RBAC)\n3. Row-level security (RLS)\n4. Column-level encryption\n5. Transparent Data Encryption (TDE)\n6. Audit logging (DDL, DML, SELECT)\n7. Data masking for non-prod\n8. SSL/TLS configuration\n9. Password policies and rotation\n10. Vulnerability scanning and patching\n\nPass security audit.",
      hint: "Principle of least privilege, encrypt sensitive data, monitor all access.",
      expectedTime: "45 min",
      topics: ["Database Security", "Encryption", "Auditing", "Compliance"],
      testCases: [
        { input: "Configure RLS", output: "users see only their data" },
        { input: "Enable TDE", output: "data encrypted at rest" },
        { input: "Audit DDL", output: "all schema changes logged" },
        { input: "Vulnerability scan", output: "no critical findings" }
      ],
      solutionApproach: "Authentication, authorization, encryption, auditing, masking, monitoring"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "hard",
      title: "Time-Series Database (InfluxDB/TimescaleDB)",
      question: "Implement time-series data solution:\n1. Schema design (tags vs fields)\n2. High-volume ingestion (batch writes)\n3. Downsampling and retention policies\n4. Continuous aggregation\n5. Time-based partitioning\n6. Tag cardinality management\n7. Query optimization (time bounds)\n8. Data retention and archival\n9. Grafana integration for visualization\n10. Alerting on time-series data\n\nHandle 1M metrics/sec.",
      hint: "Use appropriate retention, batch writes, manage cardinality, pre-aggregate.",
      expectedTime: "50 min",
      topics: ["Time Series", "InfluxDB", "TimescaleDB", "Monitoring"],
      testCases: [
        { input: "Insert metrics", output: "high throughput ingestion" },
        { input: "Query 24h range", output: "fast aggregation with downsampling" },
        { input: "Retention policy", output: "old data automatically dropped" },
        { input: "Cardinality check", output: "warn if exceeding limit" }
      ],
      solutionApproach: "Schema design, ingestion optimization, retention, aggregation, visualization"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "medium",
      title: "Graph Database Query Optimization (Neo4j)",
      question: "Optimize Neo4j graph queries:\n1. Cypher query profiling (EXPLAIN, PROFILE)\n2. Index creation (B-tree, full-text)\n3. Relationship direction optimization\n4. Query pattern matching efficiency\n5. APOC procedures for complex operations\n6. Graph data modeling best practices\n7. Batch imports (neo4j-admin import)\n8. Caching strategies\n9. Cluster setup (causal clustering)\n10. Backup and restore procedures\n\nQuery social network graph.",
      hint: "Use relationship types effectively, avoid variable-length paths, profile queries.",
      expectedTime: "45 min",
      topics: ["Neo4j", "Graph Database", "Cypher", "Query Optimization"],
      testCases: [
        { input: "Friend of friend query", output: "2-hop traversal < 50ms" },
        { input: "Shortest path", output: "efficient algorithm used" },
        { input: "Full-text search", output: "indexed properties queried" },
        { input: "Import 10M nodes", output: "batch import completed" }
      ],
      solutionApproach: "Modeling, indexing, query optimization, profiling, clustering, import"
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "hard",
      title: "Database ACID & Transaction Isolation",
      question: "Explain ACID properties: Atomicity, Consistency, Isolation, Durability. What are transaction isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable)? What anomalies can occur (dirty read, non-repeatable read, phantom read)?",
      hint: "Discuss real-world implications and when to use each isolation level.",
      expectedPoints: ["ACID definition", "Atomicity (all or nothing)", "Consistency (constraints)", "Isolation (concurrency)", "Durability (persisted)", "Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable", "Dirty read", "Non-repeatable read", "Phantom read", "Isolation level selection"],
      topics: ["ACID", "Transactions", "Database Theory"]
    },
    {
      id: 14,
      type: "theoretical",
      difficulty: "hard",
      title: "CAP Theorem & Distributed Databases",
      question: "Explain CAP Theorem: Consistency, Availability, Partition tolerance. What are the trade-offs? Compare distributed database architectures: sharding, replication, leader-follower, leaderless. What is eventual consistency?",
      hint: "Discuss PACELC theorem extension and real-world system examples.",
      expectedPoints: ["CAP Theorem", "Consistency models", "Availability", "Partition tolerance", "CP vs AP systems", "PACELC", "Sharding strategies", "Replication types", "Leader-follower", "Multi-leader", "Leaderless (Dynamo)", "Eventual consistency", "Strong consistency"],
      topics: ["CAP", "Distributed Systems", "Database Architecture"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "medium",
      title: "SQL vs NoSQL Database Selection",
      question: "When to use SQL vs NoSQL databases? Compare: relational (PostgreSQL, MySQL) vs document (MongoDB), key-value (Redis), wide-column (Cassandra), graph (Neo4j). What are the trade-offs in consistency, scalability, and flexibility?",
      hint: "Consider data relationships, query patterns, and scaling needs.",
      expectedPoints: ["Relational strengths", "ACID compliance", "SQL querying", "NoSQL types", "Document stores (MongoDB)", "Key-value (Redis)", "Wide-column (Cassandra)", "Graph (Neo4j)", "Schema flexibility", "Horizontal scaling", "CAP trade-offs", "Use case selection"],
      topics: ["SQL", "NoSQL", "Database Selection"]
    },
    {
      id: 16,
      type: "theoretical",
      difficulty: "hard",
      title: "Database Indexing Strategies",
      question: "Explain indexing: B-tree, hash, bitmap, GiST, GIN. When to use each? Cover: covering indexes, partial indexes, composite indexes, index selectivity. What is the overhead of indexes?",
      hint: "Discuss index maintenance and when indexes hurt performance.",
      expectedPoints: ["B-tree indexes", "Hash indexes", "Bitmap indexes", "GiST/GIN (PostgreSQL)", "Covering indexes", "Partial indexes", "Composite indexes", "Index selectivity", "Index maintenance overhead", "Write amplification", "Index-only scans", "Query planner hints"],
      topics: ["Indexing", "Query Optimization", "Performance"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "hard",
      title: "Database Normalization & Denormalization",
      question: "Explain normalization forms: 1NF, 2NF, 3NF, BCNF. What are the benefits and trade-offs? When to denormalize? What are common patterns: star schema, materialized views, application-level joins?",
      hint: "Consider read vs write patterns and data integrity requirements.",
      expectedPoints: ["1NF (atomic values)", "2NF (partial dependencies)", "3NF (transitive dependencies)", "BCNF", "Normalization benefits", "Denormalization reasons", "Read performance", "Write penalties", "Data integrity", "Star schema", "Snowflake schema", "Materialized views", "Application joins"],
      topics: ["Normalization", "Schema Design", "Data Modeling"]
    },
    {
      id: 18,
      type: "theoretical",
      difficulty: "medium",
      title: "Database Monitoring & Alerting",
      question: "What metrics should be monitored in databases? Cover: performance (QPS, latency), resources (CPU, memory, disk), replication lag, connection counts. What tools: Prometheus, Datadog, native monitoring?",
      hint: "Discuss proactive vs reactive monitoring and alerting thresholds.",
      expectedPoints: ["Key metrics (QPS, latency)", "Resource utilization", "Replication lag", "Connection monitoring", "Lock waits", "Deadlock frequency", "Slow query log", "Monitoring tools", "Prometheus exporters", "Alerting thresholds", "SLA monitoring", "Capacity planning"],
      topics: ["Monitoring", "Alerting", "Observability"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "hard",
      title: "Data Replication & Consistency Models",
      question: "Explain replication: synchronous vs asynchronous, single-leader vs multi-leader. What are consistency models: linearizability, sequential consistency, causal consistency, eventual consistency?",
      hint: "Discuss read replicas, write concerns, and quorum-based consistency.",
      expectedPoints: ["Synchronous replication", "Asynchronous replication", "Single-leader", "Multi-leader", "Leaderless", "Read replicas", "Consistency models", "Linearizability", "Sequential consistency", "Causal consistency", "Read-after-write consistency", "Quorum consistency", "Vector clocks"],
      topics: ["Replication", "Consistency", "Distributed Databases"]
    },
    {
      id: 20,
      type: "theoretical",
      difficulty: "hard",
      title: "Database Security Best Practices",
      question: "Discuss database security: encryption (at rest, in transit, column-level), access control (RBAC, row-level security), auditing, data masking, SQL injection prevention. What are compliance considerations (GDPR, HIPAA)?",
      hint: "Cover defense in depth and principle of least privilege.",
      expectedPoints: ["Encryption at rest (TDE)", "Encryption in transit (TLS)", "Column-level encryption", "Access control (RBAC)", "Row-level security (RLS)", "Auditing and logging", "Data masking", "SQL injection prevention", "Parameterized queries", "Least privilege", "GDPR considerations", "HIPAA considerations", "Data classification"],
      topics: ["Database Security", "Compliance", "Data Protection"]
    }
  ],

  "Embedded Software Engineer": [
    {
      id: 1,
      type: "coding",
      difficulty: "medium",
      title: "Bare Metal GPIO Driver",
      question: "Write bare metal GPIO driver for ARM Cortex-M:\n1. Register-level access (no HAL)\n2. Clock enable/disable for GPIO ports\n3. Pin configuration (input, output, alternate, analog)\n4. Speed configuration (low, medium, high, very high)\n5. Pull-up/pull-down configuration\n6. Open-drain and push-pull\n7. Atomic bit set/reset\n8. Locking mechanism\n9. External interrupt configuration\n10. Debouncing for inputs\n\nNo floating-point operations.",
      hint: "Use CMSIS headers, volatile for registers, bit-banding for atomic access.",
      expectedTime: "40 min",
      topics: ["Embedded C", "GPIO", "ARM Cortex-M", "Bare Metal"],
      testCases: [
        { input: "Configure pin as output", output: "MODER register updated" },
        { input: "Set pin high", output: "BSRR register written" },
        { input: "Configure interrupt", output: "EXTI and NVIC enabled" },
        { input: "Debounce input", output: "stable reading after 20ms" }
      ],
      solutionApproach: "Register definitions, clock control, pin config, atomic operations, interrupt setup"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "hard",
      title: "DMA Double Buffer for ADC",
      question: "Implement DMA double buffering for continuous ADC:\n1. DMA circular mode configuration\n2. Double buffer mode (buffer A/B switching)\n3. Half-transfer and transfer-complete interrupts\n4. ADC scan mode with multiple channels\n5. Timer-triggered conversions\n6. Digital filtering on acquired data\n7. CPU usage optimization (process while DMA fills)\n8. Error handling (DMA transfer errors)\n9. Buffer overflow protection\n10. Power-efficient processing (sleep between conversions)\n\nSample 8 channels at 10kHz each.",
      hint: "Process one buffer while DMA fills other, use callbacks for processing, minimize ISR time.",
      expectedTime: "50 min",
      topics: ["DMA", "ADC", "ARM Cortex-M", "Interrupts"],
      testCases: [
        { input: "Half-transfer ISR", output: "process first half while second fills" },
        { input: "Transfer complete", output: "process second half, switch buffers" },
        { input: "8 channels sampling", output: "round-robin sequence" },
        { input: "Error condition", output: "flagged and handled" }
      ],
      solutionApproach: "DMA config, double buffer, ADC setup, ISRs, filtering, error handling"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "medium",
      title: "Real-Time Scheduler (Round-Robin)",
      question: "Implement preemptive round-robin scheduler:\n1. Task Control Block (TCB) structure\n2. Task creation with stack allocation\n3. Context switch (save/restore registers)\n4. PendSV handler for switching\n5. Time slicing (SysTick timer)\n6. Task states (ready, running, blocked)\n7. Priority support (optional enhancement)\n8. Sleep/delay function\n9. Task yield functionality\n10. Stack overflow detection\n\nNo RTOS, pure implementation.",
      hint: "Use PendSV for context switch, maintain ready queue, save all callee-saved registers.",
      expectedTime: "55 min",
      topics: ["RTOS", "Scheduler", "ARM Cortex-M", "Real-Time"],
      testCases: [
        { input: "Create 3 tasks", output: "all in ready queue" },
        { input: "Time slice expires", output: "context switch to next task" },
        { input: "Task sleep", output: "removed from ready, wakes after delay" },
        { input: "Stack overflow", output: "detected and flagged" }
      ],
      solutionApproach: "TCB design, PendSV handler, scheduler, SysTick, task management"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "hard",
      title: "Flash Memory Management (Wear Leveling)",
      question: "Implement flash memory file system:\n1. NOR/NAND flash driver (page/erase operations)\n2. Bad block management (NAND)\n3. Wear leveling (distributed writes)\n4. Garbage collection\n5. Power-loss protection (journaling)\n6. Error correction (ECC for NAND)\n7. File system API (open, read, write, close)\n8. Directory support\n9. Defragmentation\n10. Health monitoring (erase cycle counts)\n\nSupport 100K write cycles.",
      hint: "Use log-structured approach, track erase counts, implement copy-on-write.",
      expectedTime: "60 min",
      topics: ["Flash", "File System", "Wear Leveling", "Storage"],
      testCases: [
        { input: "Write file", output: "data written to least-worn blocks" },
        { input: "Update file", output: "new version, old marked obsolete" },
        { input: "Power loss during write", output: "recover to consistent state" },
        { input: "Wear leveling check", output: "even distribution across blocks" }
      ],
      solutionApproach: "Flash driver, wear leveling algo, garbage collection, journaling, API"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "medium",
      title: "I2C/SPI Driver with Error Handling",
      question: "Implement robust I2C and SPI drivers:\n1. I2C: start/stop/ACK handling, clock stretching\n2. SPI: CPOL/CPHA modes, CS management\n3. Error detection (NACK, bus error, timeout)\n4. Transaction retry with backoff\n5. Interrupt-driven transfers\n6. DMA support for bulk transfers\n7. Device discovery (I2C scan)\n8. Multi-master support (I2C)\n9. Bus recovery (stuck SDA/SCL)\n10. Debug/logging interface\n\nHandle multiple sensors.",
      hint: "State machine for transfers, handle arbitration loss, timeout all operations.",
      expectedTime: "50 min",
      topics: ["I2C", "SPI", "Drivers", "Communication"],
      testCases: [
        { input: "I2C write with NACK", output: "retry 3 times, then fail" },
        { input: "SPI burst read", output: "DMA completes, callback fires" },
        { input: "Bus stuck low", output: "recovery sequence executed" },
        { input: "Scan bus", output: "detected device addresses listed" }
      ],
      solutionApproach: "I2C state machine, SPI driver, error handling, DMA, recovery"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "hard",
      title: "Bootloader with Secure Update",
      question: "Implement secure bootloader:\n1. Flash layout (bootloader, app, update regions)\n2. UART/USB for firmware download\n3. CRC/SHA verification of image\n4. Digital signature verification (RSA/ECC)\n5. Rollback protection (version check)\n6. A/B partition support\n7. Power-loss safe update\n8. Encryption for firmware image\n9. Secure debug disable\n10. Jump to application\n\nSecure OTA updates.",
      hint: "Use dual bank, verify before swap, rollback on failure, protect keys in secure storage.",
      expectedTime: "55 min",
      topics: ["Bootloader", "Security", "OTA", "Firmware Update"],
      testCases: [
        { input: "Download firmware", output: "stored in update region" },
        { input: "Verify signature", output: "valid signature required" },
        { input: "Update and reboot", output: "new firmware boots" },
        { input: "Corrupted update", output: "rollback to previous" }
      ],
      solutionApproach: "Flash layout, download, verification, dual bank, rollback, jump"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "medium",
      title: "Low Power Mode Implementation",
      question: "Implement power management:\n1. Sleep modes (Sleep, Deep Sleep, Standby)\n2. Clock gating (disable unused peripherals)\n3. GPIO configuration for low power\n4. RTC for wake-up scheduling\n5. Interrupt wake sources (external, RTC)\n6. Voltage scaling (dynamic frequency)\n7. Peripheral power domains\n8. Current consumption profiling\n9. Wake-up time optimization\n10. Battery life estimation\n\nAchieve 1-year battery life.",
      hint: "Use lowest power mode possible, minimize wake frequency, optimize wake time.",
      expectedTime: "45 min",
      topics: ["Low Power", "Power Management", "Battery", "Optimization"],
      testCases: [
        { input: "Enter deep sleep", output: "current < 10uA" },
        { input: "RTC alarm", output: "wake at scheduled time" },
        { input: "External interrupt", output: "wake on button press" },
        { input: "Profile power", output: "average current calculated" }
      ],
      solutionApproach: "Sleep modes, clock gating, GPIO config, RTC, interrupts, profiling"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "hard",
      title: "Watchdog Timer Implementation",
      question: "Implement robust watchdog system:\n1. Independent watchdog (IWDG) configuration\n2. Window watchdog (WWDG) for timing\n3. Watchdog refresh strategy (kick points)\n4. Early warning interrupt\n5. Debug freeze handling\n6. Crash dump on watchdog reset\n7. Boot reason detection\n8. Recovery procedures\n9. Task-level watchdog (software)\n10. Logging watchdog events\n\nPrevent system hangs.",
      hint: "Place kick points carefully, detect task starvation, use window mode for strict timing.",
      expectedTime: "40 min",
      topics: ["Watchdog", "Reliability", "Safety", "ARM Cortex-M"],
      testCases: [
        { input: "Normal operation", output: "watchdog refreshed regularly" },
        { input: "Task hangs", output: "watchdog not refreshed, reset occurs" },
        { input: "Early warning", output: "interrupt before reset, cleanup" },
        { input: "Reset reason", output: "identified as watchdog" }
      ],
      solutionApproach: "IWDG/WWDG config, refresh strategy, interrupt handling, crash dump"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "hard",
      title: "CAN Bus Protocol Implementation",
      question: "Implement CAN 2.0B protocol stack:\n1. CAN peripheral initialization (bit timing)\n2. Filter and mask configuration\n3. Transmit with priority\n4. Receive with FIFO\n5. Error handling (bus-off recovery)\n6. Remote frame handling\n7. J1939 or CANopen protocol layer\n8. Bus load calculation\n9. Diagnostics and error counting\n10. Wake-up on CAN (low power)\n\nAutomotive communication.",
      hint: "Calculate bit timing precisely, handle bus-off state, implement proper filters.",
      expectedTime: "50 min",
      topics: ["CAN", "Automotive", "Communication", "Protocol"],
      testCases: [
        { input: "Send frame", output: "transmitted with correct ID" },
        { input: "Filter match", output: "only matching IDs received" },
        { input: "Bus-off error", output: "recovery after 128×11 recessive" },
        { input: "Remote frame", output: "response transmitted" }
      ],
      solutionApproach: "CAN init, bit timing, filters, TX/RX, error handling, protocol layer"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "medium",
      title: "Memory Pool Allocator",
      question: "Implement fixed-size memory pool:\n1. Pool initialization with static buffer\n2. Block allocation (O(1) time)\n3. Block deallocation\n4. Multiple pool sizes\n5. Thread safety (if applicable)\n6. Fragmentation handling\n7. Debug features (allocation tracking)\n8. Overflow detection\n9. Statistics (used/free blocks)\n10. No malloc/free usage\n\nReplace dynamic allocation.",
      hint: "Use linked list of free blocks, pre-allocate pools, track with bitmasks or pointers.",
      expectedTime: "40 min",
      topics: ["Memory Management", "Allocator", "Embedded C", "Optimization"],
      testCases: [
        { input: "Allocate block", output: "pointer returned, O(1) time" },
        { input: "Free block", output: "returned to pool" },
        { input: "Pool exhausted", output: "NULL returned" },
        { input: "Double free", output: "detected and flagged" }
      ],
      solutionApproach: "Pool structure, free list, alloc/free logic, thread safety, tracking"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "hard",
      title: "TCP/IP Stack for Embedded (lwIP)",
      question: "Integrate lwIP on bare metal:\n1. Ethernet driver (MAC + PHY)\n2. lwIP initialization (no OS)\n3. DHCP client for auto IP\n4. TCP server implementation\n5. HTTP server for configuration\n6. MQTT client for IoT\n7. Zero-copy RX/TX\n8. Buffer management (pbuf)\n9. Timeout handling (sys_now)\n10. Connection keepalive\n\nNetwork-enabled device.",
      hint: "Use raw API for no OS, implement sys_arch layer, handle link status.",
      expectedTime: "55 min",
      topics: ["lwIP", "TCP/IP", "Ethernet", "Embedded"],
      testCases: [
        { input: "DHCP request", output: "IP address assigned" },
        { input: "TCP connection", output: "data exchanged" },
        { input: "HTTP request", output: "configuration page served" },
        { input: "Link down", output: "connections closed gracefully" }
      ],
      solutionApproach: "Ethernet driver, lwIP init, TCP/HTTP/MQTT, raw API, timeouts"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "medium",
      title: "CRC and Checksum Library",
      question: "Implement error detection algorithms:\n1. CRC8 (various polynomials)\n2. CRC16 (CCITT, Modbus)\n3. CRC32 (IEEE 802.3)\n4. Table-driven fast CRC\n5. XOR checksum\n6. Fletcher checksum\n7. Adler-32\n8. Hamming code (error correction)\n9. Lookup table generation\n10. Verification with known values\n\nData integrity checking.",
      hint: "Use lookup tables for speed, verify with online calculators, handle endianness.",
      expectedTime: "35 min",
      topics: ["CRC", "Checksum", "Error Detection", "Embedded"],
      testCases: [
        { input: "CRC32 of test data", output: "matches known value" },
        { input: "Corrupted data", output: "CRC mismatch detected" },
        { input: "Table generation", output: "valid lookup table created" },
        { input: "Hamming encode/decode", output: "single bit errors corrected" }
      ],
      solutionApproach: "CRC algorithms, lookup tables, checksums, Hamming code, verification"
    },
    {
      id: 13,
      type: "theoretical",
      difficulty: "medium",
      title: "ARM Cortex-M Architecture",
      question: "Explain ARM Cortex-M architecture: registers, modes, NVIC, SysTick, memory map, bit-banding. What are the differences between M0, M3, M4, M7?",
      hint: "Discuss use cases for each Cortex-M variant.",
      expectedPoints: ["Core registers", "Special registers", "Operating modes", "NVIC", "SysTick", "Memory map", "Bit-banding", "Cortex-M0", "Cortex-M3", "Cortex-M4 (FPU)", "Cortex-M7", "MPU", "Debug features"],
      topics: ["ARM", "Cortex-M", "Architecture"]
    },
    {
      id: 14,
      type: "theoretical",
      difficulty: "hard",
      title: "Real-Time Operating Systems (RTOS)",
      question: "Explain RTOS concepts: tasks/threads, scheduling (priority-based, round-robin), context switching, semaphores, mutexes, queues, interrupt handling. Compare FreeRTOS, Zephyr, RT-Thread.",
      hint: "Discuss determinism, priority inversion, and when to use RTOS vs bare metal.",
      expectedPoints: ["Task states", "Priority-based scheduling", "Round-robin", "Context switch overhead", "Semaphores", "Mutexes (priority inheritance)", "Queues", "Interrupt vs task", "FreeRTOS features", "Zephyr features", "Determinism", "Priority inversion"],
      topics: ["RTOS", "Real-Time", "Operating Systems"]
    },
    {
      id: 15,
      type: "theoretical",
      difficulty: "medium",
      title: "Embedded Communication Protocols",
      question: "Compare embedded protocols: UART, SPI, I2C, CAN, USB, Ethernet. What are the electrical characteristics, speeds, topologies, and use cases for each?",
      hint: "Discuss master-slave vs multi-master, synchronous vs asynchronous.",
      expectedPoints: ["UART (async)", "SPI (sync, master-slave)", "I2C (multi-master)", "CAN (multi-master, priority)", "USB (host-device)", "Ethernet", "Speed comparison", "Distance limitations", "Bus topologies", "Pull-up requirements", "Termination", "Use case selection"],
      topics: ["Protocols", "Communication", "Embedded"]
    },
    {
      id: 16,
      type: "theoretical",
      difficulty: "hard",
      title: "Embedded Security & Secure Boot",
      question: "Explain embedded security: secure boot, code signing, encryption, secure storage, debug protection. What are TrustZone, TPM, HSM? How do you protect firmware?",
      hint: "Discuss side-channel attacks and countermeasures.",
      expectedPoints: ["Secure boot chain", "Code signing", "Public key verification", "Encrypted firmware", "Secure storage", "TrustZone (ARM)", "TPM", "HSM", "Debug port protection", "Side-channel attacks", "Power analysis", "Countermeasures"],
      topics: ["Embedded Security", "Secure Boot", "Cryptography"]
    },
    {
      id: 17,
      type: "theoretical",
      difficulty: "medium",
      title: "Hardware Abstraction Layers (HAL)",
      question: "Discuss HAL design: register abstraction, driver APIs, portability, configuration systems (Device Tree, CubeMX). What are the trade-offs between HAL and direct register access?",
      hint: "Compare vendor HALs (STM32 HAL, NXP SDK) vs CMSIS.",
      expectedPoints: ["HAL purpose", "Register abstraction", "Driver API design", "Portability", "Device Tree", "STM32 CubeMX", "CMSIS", "Vendor HALs", "HAL overhead", "Direct register access", "Hybrid approaches", "Code generation"],
      topics: ["HAL", "Abstraction", "Embedded"]
    },
    {
      id: 18,
      type: "theoretical",
      difficulty: "hard",
      title: "Interrupts and DMA",
      question: "Explain interrupts vs polling: NVIC, priority, latency, context save/restore. What is DMA? How does it work with peripherals? Discuss DMA modes and double buffering.",
      hint: "Cover interrupt response time and DMA throughput benefits.",
      expectedPoints: ["Interrupt vs polling", "NVIC", "Interrupt priority", "Latency", "Context switching", "DMA basics", "DMA modes", "Circular DMA", "Double buffering", "DMA interrupts", "Peripheral DMA", "Memory-to-memory DMA"],
      topics: ["Interrupts", "DMA", "Performance"]
    },
    {
      id: 19,
      type: "theoretical",
      difficulty: "medium",
      title: "Power Management in Embedded Systems",
      question: "Explain power management techniques: sleep modes, clock gating, voltage scaling, power domains. How do you optimize battery life? What are wake-up sources?",
      hint: "Discuss active vs sleep current consumption trade-offs.",
      expectedPoints: ["Sleep modes (Sleep, Deep Sleep, Standby)", "Clock gating", "Voltage scaling", "Power domains", "Wake-up sources (RTC, GPIO)", "Battery life calculation", "Current profiling", "Wake-up time", "Peripheral power", "Low power design", "Energy harvesting", "Power budget"],
      topics: ["Power Management", "Low Power", "Battery"]
    },
    {
      id: 20,
      type: "theoretical",
      difficulty: "hard",
      title: "Debugging Embedded Systems",
      question: "Discuss embedded debugging: JTAG, SWD, ITM, DWT, breakpoints, watchpoints, trace. What tools are available: GDB, OpenOCD, IDE debuggers, logic analyzers?",
      hint: "Cover printf debugging and its problems in embedded.",
      expectedPoints: ["JTAG interface", "SWD (Serial Wire Debug)", "ITM (Instrumentation Trace)", "DWT (Data Watchpoint)", "Breakpoints (hardware/software)", "Watchpoints", "Trace (ETM)", "GDB + OpenOCD", "Printf debugging (semi-hosting)", "Logic analyzers", " oscilloscopes", "Debug challenges"],
      topics: ["Debugging", "Embedded", "Tools"]
    }
  ],

  "Frontend Developer": [
    {
      id: 1,
      type: "coding",
      difficulty: "easy",
      title: "Two Sum - Array Problem",
      question: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nExample:\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: nums[0] + nums[1] = 2 + 7 = 9",
      hint: "Use a hash map to store values and indices for O(1) lookup.",
      expectedTime: "15 min",
      topics: ["Arrays", "Hash Map", "DSA"],
      testCases: [
        { input: "[2,7,11,15], target=9", output: "[0,1]" },
        { input: "[3,2,4], target=6", output: "[1,2]" }
      ],
      solutionApproach: "Hash map for O(n) time complexity"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "medium",
      title: "Debounce Function Implementation",
      question: "Implement a debounce function that delays invoking a function until after a specified wait time has elapsed since the last time it was invoked.\n\nExample:\nconst debounced = debounce(() => console.log('called'), 300);\ndebounced(); debounced(); debounced(); // Only logs once after 300ms",
      hint: "Use setTimeout and clearTimeout. Track the timer ID.",
      expectedTime: "15 min",
      topics: ["JavaScript", "Async", "Event Handling"],
      testCases: [
        { input: "call 5 times rapidly with 100ms debounce", output: "executes once after 100ms" }
      ],
      solutionApproach: "setTimeout/clearTimeout with timer tracking"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "medium",
      title: "Promise.all Implementation",
      question: "Implement a custom Promise.all function that takes an array of promises and returns a single Promise that resolves when all promises resolve, or rejects when any promise rejects.\n\nRequirements:\n- Resolve with array of results in order\n- Reject immediately if any promise rejects\n- Handle non-promise values\n- Support empty array",
      hint: "Iterate through promises, track completed count, store results in order.",
      expectedTime: "20 min",
      topics: ["JavaScript", "Promises", "Async"],
      testCases: [
        { input: "[Promise.resolve(1), Promise.resolve(2)]", output: "[1, 2]" },
        { input: "[Promise.reject('err'), Promise.resolve(2)]", output: "rejected" }
      ],
      solutionApproach: "Track completions with counter, resolve when all done"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "hard",
      title: "Virtual DOM Diff Algorithm",
      question: "Implement a diff algorithm to compare two virtual DOM trees and return patches needed to transform old to new.\n\nPatch types: REPLACE, REMOVE, ADD, UPDATE_PROPS\n\nTree node: { type, props, children }",
      hint: "Recursively traverse both trees. Compare node types first. If same type, diff props.",
      expectedTime: "30 min",
      topics: ["Virtual DOM", "Algorithms", "DOM"],
      testCases: [
        { input: "old: div, new: span", output: "REPLACE patch" },
        { input: "same type, different props", output: "UPDATE_PROPS patch" }
      ],
      solutionApproach: "Recursive tree traversal with type and props comparison"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "hard",
      title: "Event Emitter Implementation",
      question: "Create an EventEmitter class with: on(event, listener), off(event, listener), once(event, listener), emit(event, ...args)\n\nSupport multiple listeners per event and proper cleanup.",
      hint: "Use Map to store event -> Set of listeners. For once(), wrap to auto-unsubscribe.",
      expectedTime: "25 min",
      topics: ["JavaScript", "Design Patterns", "Events"],
      testCases: [
        { input: "on('test', fn), emit('test', 1)", output: "fn called with 1" },
        { input: "once, emit twice", output: "called only once" }
      ],
      solutionApproach: "Map of Sets, wrap once listeners"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "medium",
      title: "Infinite Scroll Component",
      question: "Implement infinite scroll with:\n- Load items on scroll near bottom\n- Show loading indicator\n- Handle errors with retry\n- Throttle scroll events",
      hint: "Use Intersection Observer or calculate: scrollTop + clientHeight >= scrollHeight - threshold",
      expectedTime: "25 min",
      topics: ["DOM", "Performance", "Async"],
      testCases: [
        { input: "scroll to bottom", output: "fetch next page" },
        { input: "API error", output: "show retry button" }
      ],
      solutionApproach: "Intersection Observer + throttling"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "medium",
      title: "Custom React useFetch Hook",
      question: "Implement useFetch hook with:\n- Fetch data from URL\n- Return { data, loading, error, refetch }\n- Handle unmount (cancel request)\n- Support dependency array\n- Retry on failure",
      hint: "Use useEffect with AbortController. Track mounted state with useRef.",
      expectedTime: "25 min",
      topics: ["React", "Hooks", "Async"],
      testCases: [
        { input: "initial fetch", output: "loading then data" },
        { input: "unmount during fetch", output: "no state updates" }
      ],
      solutionApproach: "useEffect + AbortController + mounted ref"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "hard",
      title: "Client-Side Router",
      question: "Implement SPA router with:\n- Route matching with params (/user/:id)\n- History API for back/forward\n- Lazy loading\n- Route guards\n- 404 handling",
      hint: "Use popstate event. Parse routes with regex for params. Use dynamic import().",
      expectedTime: "40 min",
      topics: ["SPA", "Routing", "History API"],
      testCases: [
        { input: "navigate /user/123", output: "render with id=123" },
        { input: "browser back", output: "previous route" }
      ],
      solutionApproach: "History API + regex matching + dynamic imports"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "medium",
      title: "Form Validation Library",
      question: "Create validation library with:\n- Schema: required, minLength, email, pattern\n- Async validation support\n- Error messages\n- Validate on blur/change/submit",
      hint: "Create validator functions returning { valid, message }. Support async with Promises.",
      expectedTime: "30 min",
      topics: ["Forms", "Validation", "JavaScript"],
      testCases: [
        { input: "empty required field", output: "error: 'Required'" },
        { input: "invalid email", output: "error: 'Invalid email'" }
      ],
      solutionApproach: "Chain of validators + async support"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "hard",
      title: "Virtual List for Large Data",
      question: "Implement virtual list rendering only visible items from 100,000+ items.\n\n- Variable height support\n- Smooth scrolling\n- Scroll to index",
      hint: "Calculate visible range based on scroll position. Use absolute positioning.",
      expectedTime: "35 min",
      topics: ["Performance", "Virtualization", "DOM"],
      testCases: [
        { input: "scroll to middle", output: "render ~10 visible items" },
        { input: "variable heights", output: "correct positioning" }
      ],
      solutionApproach: "Visible index calculation + absolute positioning"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "medium",
      title: "CSS-in-JS Style Injection",
      question: "Implement CSS-in-JS with:\n- Style object to CSS conversion\n- Unique class names (hash)\n- Nested selectors support\n- Media queries",
      hint: "Convert camelCase to kebab-case. Hash style object for unique class.",
      expectedTime: "30 min",
      topics: ["CSS", "JavaScript", "Styling"],
      testCases: [
        { input: "{ color: 'red', fontSize: 16 }", output: "unique class with CSS" },
        { input: "nested &:hover", output: ":hover selector" }
      ],
      solutionApproach: "Hash class names + recursive CSS generation"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "hard",
      title: "Service Worker for Caching",
      question: "Implement Service Worker with:\n- Cache First for assets\n- Network First for API\n- Offline fallback\n- Background sync",
      hint: "Use caches.open() for named caches. Different strategies per request type.",
      expectedTime: "40 min",
      topics: ["Service Workers", "Caching", "PWA"],
      testCases: [
        { input: "request cached asset", output: "serve from cache" },
        { input: "API call offline", output: "queue for sync" }
      ],
      solutionApproach: "Cache strategies + versioning + background sync"
    },
    {
      id: 13,
      type: "coding",
      difficulty: "medium",
      title: "WebSocket Client with Reconnection",
      question: "Implement WebSocket client with:\n- Auto-reconnect with backoff\n- Message queue when disconnected\n- Heartbeat detection",
      hint: "Use WebSocket API. Implement exponential backoff. Queue messages in array.",
      expectedTime: "30 min",
      topics: ["WebSocket", "Network", "Real-time"],
      testCases: [
        { input: "connection drops", output: "reconnect with backoff" },
        { input: "send while disconnected", output: "queue, send on reconnect" }
      ],
      solutionApproach: "WebSocket + exponential backoff + message queue"
    },
    {
      id: 14,
      type: "coding",
      difficulty: "medium",
      title: "Responsive Image Loader",
      question: "Implement responsive image with:\n- srcset for multiple resolutions\n- Lazy loading\n- Placeholder while loading\n- WebP with fallback",
      hint: "Use srcset and sizes attributes. Intersection Observer for lazy loading.",
      expectedTime: "25 min",
      topics: ["Images", "Performance", "Responsive"],
      testCases: [
        { input: "DPR=2, viewport 800px", output: "load 2x size" },
        { input: "image fails", output: "show fallback" }
      ],
      solutionApproach: "srcset/sizes + Intersection Observer + picture element"
    },
    {
      id: 15,
      type: "coding",
      difficulty: "hard",
      title: "Drag and Drop File Upload",
      question: "Implement drag-drop upload with:\n- Visual feedback\n- Progress tracking\n- Chunked upload\n- Retry failed",
      hint: "Use drag events. Upload with XMLHttpRequest for progress. Chunk with FileReader.",
      expectedTime: "40 min",
      topics: ["File API", "Upload", "Drag & Drop"],
      testCases: [
        { input: "drop 3 files", output: "upload with progress" },
        { input: "upload fails", output: "retry button" }
      ],
      solutionApproach: "Drag events + FileReader chunks + XMLHttpRequest progress"
    },
    {
      id: 16,
      type: "coding",
      difficulty: "medium",
      title: "Simple Unit Testing Framework",
      question: "Implement testing framework with:\n- describe/test blocks\n- expect matchers\n- beforeEach/afterEach\n- Mock functions",
      hint: "Use closures for scope. Implement matchers as functions that throw on failure.",
      expectedTime: "35 min",
      topics: ["Testing", "JavaScript", "Framework"],
      testCases: [
        { input: "test passes", output: "✓ test name" },
        { input: "test fails", output: "✗ expected X, got Y" }
      ],
      solutionApproach: "Nested describe + expect chain + mock spy"
    },
    {
      id: 17,
      type: "coding",
      difficulty: "hard",
      title: "Module Bundler",
      question: "Implement simplified bundler:\n- Parse ES6 imports\n- Build dependency graph\n- Handle circular deps\n- Transform to IIFE",
      hint: "Parse with regex. Build graph with DFS. Wrap modules in functions.",
      expectedTime: "45 min",
      topics: ["Build Tools", "Modules", "Parsing"],
      testCases: [
        { input: "2 imports", output: "bundled with dependency graph" },
        { input: "circular dependency", output: "handled gracefully" }
      ],
      solutionApproach: "Parse imports -> Build graph -> Wrap modules -> Concatenate"
    },
    {
      id: 18,
      type: "coding",
      difficulty: "hard",
      title: "HTML Sanitizer (XSS Prevention)",
      question: "Implement HTML sanitizer:\n- Whitelist allowed tags\n- Remove scripts and events\n- Validate URLs\n- Escape special chars",
      hint: "Use DOMParser or regex. Check whitelist. Validate URLs with URL constructor.",
      expectedTime: "35 min",
      topics: ["Security", "XSS", "HTML Parsing"],
      testCases: [
        { input: "<script>alert(1)</script>", output: "script removed" },
        { input: "<a href='javascript:...'>", output: "href removed" }
      ],
      solutionApproach: "DOMParser + whitelist + URL validation"
    },
    {
      id: 19,
      type: "coding",
      difficulty: "medium",
      title: "State Management - Mini Redux",
      question: "Implement Redux-like store:\n- createStore(reducer, initialState)\n- dispatch(action)\n- subscribe(listener)\n- combineReducers()",
      hint: "Store holds state and reducer. Dispatch calls reducer. Notify subscribers.",
      expectedTime: "35 min",
      topics: ["React", "State Management", "Design Patterns"],
      testCases: [
        { input: "dispatch action", output: "state updated, subscribers notified" },
        { input: "multiple subscribers", output: "all called" }
      ],
      solutionApproach: "Observer pattern + reducer function"
    },
    {
      id: 20,
      type: "coding",
      difficulty: "hard",
      title: "Longest Common Subsequence",
      question: "Given two strings text1 and text2, return length of longest common subsequence.\n\nExample:\nInput: text1 = \"abcde\", text2 = \"ace\"\nOutput: 3\nExplanation: LCS is \"ace\"",
      hint: "Use 2D DP. dp[i][j] = length of LCS for text1[0..i) and text2[0..j).",
      expectedTime: "25 min",
      topics: ["Dynamic Programming", "Strings"],
      testCases: [
        { input: "'abcde', 'ace'", output: "3" },
        { input: "'abc', 'def'", output: "0" }
      ],
      solutionApproach: "2D DP table"
    }
  ],

  "Backend Developer": [
    {
      id: 1,
      type: "coding",
      difficulty: "medium",
      title: "Rate Limiting Middleware",
      question: "Implement rate limiting middleware for Express.js. Limit requests per IP with sliding window. Return 429 status when exceeded.",
      hint: "Track requests with Map (ip -> timestamps). Clean expired entries periodically.",
      expectedTime: "25 min",
      topics: ["Node.js", "Middleware", "Rate Limiting"],
      testCases: [
        { input: "101 requests in 60s from same IP", output: "429 on 101st" }
      ],
      solutionApproach: "Map of timestamps, sliding window cleanup"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "hard",
      title: "JWT Auth with Refresh Tokens",
      question: "Implement JWT system with access token (15min) and refresh token (7 days). Support rotation and blacklisting.",
      hint: "Use crypto for signing. Store refresh tokens in DB. Rotate on each use.",
      expectedTime: "35 min",
      topics: ["JWT", "Authentication", "Security"],
      testCases: [
        { input: "valid access token", output: "verified" },
        { input: "expired access, valid refresh", output: "new tokens issued" }
      ],
      solutionApproach: "HMAC + refresh token DB + rotation"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "hard",
      title: "DB Connection Pool",
      question: "Implement database connection pool with min/max size, health checks, auto-scaling, and LRU eviction.",
      hint: "Use queue for waiting requests. Track active/idle connections with timeout.",
      expectedTime: "40 min",
      topics: ["Database", "Connection Pool", "Resource Management"],
      testCases: [
        { input: "acquire 3 connections from pool of 5", output: "3 active, 0 idle" }
      ],
      solutionApproach: "Queue + connection tracking + lifecycle"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "medium",
      title: "API Gateway Router",
      question: "Implement API Gateway with path matching, middleware chain, load balancing, and circuit breaker.",
      hint: "Use trie for path matching. Chain middleware with next(). Track backend health.",
      expectedTime: "35 min",
      topics: ["API Gateway", "Routing", "Microservices"],
      testCases: [
        { input: "GET /users/123", output: "routed with id param" }
      ],
      solutionApproach: "Path trie + middleware chain + circuit breaker"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "hard",
      title: "Distributed Lock with Redis",
      question: "Implement distributed lock using Redis with acquisition, safe release, watchdog extension, and RedLock algorithm.",
      hint: "Use SET NX EX for atomic acquire. Lua script for safe release. Watchdog updates TTL.",
      expectedTime: "40 min",
      topics: ["Redis", "Distributed Systems", "Locking"],
      testCases: [
        { input: "acquire available lock", output: "acquired with UUID" }
      ],
      solutionApproach: "SET NX EX + Lua release + watchdog"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "medium",
      title: "CRUD API with Pagination",
      question: "Design REST API with full CRUD, pagination, sorting, filtering. Support cursor and offset pagination.",
      hint: "Use query string for filters. Validate with schema. Return { data, meta } format.",
      expectedTime: "35 min",
      topics: ["REST API", "CRUD", "Pagination"],
      testCases: [
        { input: "GET /products?page=1&sort=-price", output: "paginated sorted list" }
      ],
      solutionApproach: "Controller + query builder + validation"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "hard",
      title: "Message Queue with Retry",
      question: "Implement message queue with delayed delivery, exponential backoff retry, and dead letter queue.",
      hint: "Use priority queue with timestamps. Track retry count. Separate DLQ.",
      expectedTime: "45 min",
      topics: ["Message Queue", "Async", "Reliability"],
      testCases: [
        { input: "message fails 3 times", output: "moved to DLQ" }
      ],
      solutionApproach: "Priority queue + persistence + DLQ"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "medium",
      title: "Multi-Level Cache (L1/L2/L3)",
      question: "Implement multi-level caching: L1 in-memory, L2 Redis, L3 DB. Support TTL and LRU eviction.",
      hint: "Check L1 -> L2 -> L3 on miss. Promote on hit. Use Map for L1 with access order.",
      expectedTime: "35 min",
      topics: ["Caching", "LRU", "Performance"],
      testCases: [
        { input: "key not in any cache", output: "fetch from DB, populate all levels" }
      ],
      solutionApproach: "Multi-level + LRU Map + TTL tracking"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "hard",
      title: "WebSocket Chat Server",
      question: "Build scalable chat with rooms, DMs, message history, typing indicators, and Redis Pub/Sub for scaling.",
      hint: "Store connections by user and room. Use Redis to publish across server instances.",
      expectedTime: "45 min",
      topics: ["WebSocket", "Real-time", "Chat"],
      testCases: [
        { input: "user joins room, sends message", output: "broadcast to room" }
      ],
      solutionApproach: "WebSocket rooms + Redis pub/sub + persistence"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "hard",
      title: "Cron Job Scheduler",
      question: "Implement distributed job scheduler with cron expressions, job locking, misfire handling, and dependencies.",
      hint: "Use priority queue. Lock job in DB before executing. Handle misfires based on policy.",
      expectedTime: "50 min",
      topics: ["Scheduling", "Cron", "Distributed"],
      testCases: [
        { input: "schedule '* * * * *'", output: "runs every minute" }
      ],
      solutionApproach: "Cron parser + priority queue + distributed locking"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "medium",
      title: "Lightweight ORM with Query Builder",
      question: "Build ORM with models, query builder (where, join, orderBy), relations, and migrations.",
      hint: "Build SQL with placeholders. Chain methods. Support eager loading.",
      expectedTime: "40 min",
      topics: ["ORM", "SQL", "Query Builder"],
      testCases: [
        { input: "User.where({status: 'active'}).toSQL()", output: "parameterized query" }
      ],
      solutionApproach: "Query builder + SQL generation + relations"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "hard",
      title: "Database Migration System",
      question: "Implement migration system with up/down, batch tracking, transactions, and rollback support.",
      hint: "Store migration in table with batch number. Run in transactions. Track applied.",
      expectedTime: "35 min",
      topics: ["Migrations", "Schema", "Versioning"],
      testCases: [
        { input: "run 3 pending migrations", output: "executed and recorded" }
      ],
      solutionApproach: "Migration table + transactions + batch tracking"
    },
    {
      id: 13,
      type: "coding",
      difficulty: "medium",
      title: "Load Balancer (Round Robin)",
      question: "Implement load balancer with round-robin, health checks, weighted routing, and sticky sessions.",
      hint: "Maintain backend list with status. Index pointer for round-robin. HTTP health checks.",
      expectedTime: "35 min",
      topics: ["Load Balancer", "System Design", "High Availability"],
      testCases: [
        { input: "3 healthy backends, 6 requests", output: "2 requests each" }
      ],
      solutionApproach: "Backend list + health polling + algorithms"
    },
    {
      id: 14,
      type: "coding",
      difficulty: "hard",
      title: "Event Sourcing System",
      question: "Implement event sourcing with append-only log, event replay, snapshots, and optimistic concurrency.",
      hint: "Store events in append-only log. Replay to rebuild state. Snapshots for performance.",
      expectedTime: "50 min",
      topics: ["Event Sourcing", "CQRS", "Architecture"],
      testCases: [
        { input: "save 5 events, rebuild", output: "correct state after replay" }
      ],
      solutionApproach: "Event store + replay + snapshots + locking"
    },
    {
      id: 15,
      type: "coding",
      difficulty: "medium",
      title: "Input Validation Middleware",
      question: "Create validation middleware with schema support, sanitization, custom validators, and nested objects.",
      hint: "Build schema validator recursively. Apply sanitizers before validators. Collect errors.",
      expectedTime: "35 min",
      topics: ["Validation", "Security", "Middleware"],
      testCases: [
        { input: "invalid email, negative age", output: "400 with error array" }
      ],
      solutionApproach: "Schema + recursive validation + sanitization"
    },
    {
      id: 16,
      type: "coding",
      difficulty: "hard",
      title: "CSRF Protection",
      question: "Implement CSRF protection with token generation, double-submit cookie, and synchronizer token pattern.",
      hint: "Create secure token. Store in session and send to client. Verify on state-changing requests.",
      expectedTime: "30 min",
      topics: ["Security", "CSRF", "Web Security"],
      testCases: [
        { input: "POST without token", output: "403 forbidden" }
      ],
      solutionApproach: "Token generation + session storage + validation"
    },
    {
      id: 17,
      type: "coding",
      difficulty: "medium",
      title: "Structured Logger",
      question: "Build structured logging system with levels, JSON format, multiple transports, and log rotation.",
      hint: "Use streams for async writing. Create child loggers with bound context. Rotate streams.",
      expectedTime: "35 min",
      topics: ["Logging", "Monitoring"],
      testCases: [
        { input: "logger.info('User login', {userId: 123})", output: "JSON with metadata" }
      ],
      solutionApproach: "Levels + JSON + transport streams + rotation"
    },
    {
      id: 18,
      type: "coding",
      difficulty: "medium",
      title: "API Client SDK Generator",
      question: "Generate typed API client from OpenAPI spec with methods, types, interceptors, and error handling.",
      hint: "Parse paths and methods. Generate functions with JSDoc. Template literals for URLs.",
      expectedTime: "45 min",
      topics: ["Code Generation", "API", "TypeScript"],
      testCases: [
        { input: "GET /users/{id} spec", output: "getUser(id: string): Promise<User>" }
      ],
      solutionApproach: "OpenAPI parser + templates + type generation"
    },
    {
      id: 19,
      type: "coding",
      difficulty: "hard",
      title: "GraphQL Query Complexity Limiter",
      question: "Implement GraphQL complexity analysis to prevent expensive queries with depth and cost limiting.",
      hint: "Traverse AST recursively. Sum field complexities. Check depth against limits.",
      expectedTime: "40 min",
      topics: ["GraphQL", "Performance", "Security"],
      testCases: [
        { input: "deep nested query > 5 levels", output: "rejected" }
      ],
      solutionApproach: "AST traversal + complexity scoring"
    },
    {
      id: 20,
      type: "coding",
      difficulty: "hard",
      title: "Streaming JSON Parser",
      question: "Implement streaming JSON parser for large files (>1GB) with event-driven parsing and selective extraction.",
      hint: "Use state machine. Buffer chunks and emit tokens. Track nesting depth.",
      expectedTime: "45 min",
      topics: ["Streaming", "JSON", "Parser"],
      testCases: [
        { input: "stream 10000 objects", output: "emits each without loading all" }
      ],
      solutionApproach: "State machine tokenizer + incremental parsing"
    }
  ],

  "Full Stack Developer": [
    {
      id: 1,
      type: "coding",
      difficulty: "medium",
      title: "Authentication System (Login/Register)",
      question: "Build complete auth system with:\n- User registration with validation\n- Password hashing (bcrypt)\n- JWT token generation\n- Login with credential verification\n- Protected route middleware\n- Password reset flow",
      hint: "Hash passwords with bcrypt. Sign JWT with user ID. Verify token in middleware.",
      expectedTime: "40 min",
      topics: ["Authentication", "Security", "Full Stack"],
      testCases: [
        { input: "register new user", output: "user created, password hashed" },
        { input: "login with valid creds", output: "JWT token returned" },
        { input: "access protected route without token", output: "401 unauthorized" }
      ],
      solutionApproach: "bcrypt + JWT + middleware chain"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "hard",
      title: "Real-time Collaborative Editor",
      question: "Build collaborative text editor with:\n- Multiple users editing simultaneously\n- Operational Transform or CRDT for conflict resolution\n- Cursor position tracking\n- WebSocket for real-time sync\n- Version history\n- Conflict resolution UI",
      hint: "Use CRDT (Yjs) or Operational Transform. Sync operations via WebSocket. Track cursors separately.",
      expectedTime: "50 min",
      topics: ["Real-time", "CRDT", "WebSocket", "Collaboration"],
      testCases: [
        { input: "two users type simultaneously", output: "merged correctly, no lost chars" },
        { input: "user disconnects and reconnects", output: "syncs missed operations" }
      ],
      solutionApproach: "CRDT/OT + WebSocket sync + cursor tracking"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "medium",
      title: "E-commerce Cart System",
      question: "Implement shopping cart with:\n- Add/remove/update items\n- Calculate totals (subtotal, tax, shipping)\n- Apply discount codes\n- Persist to localStorage/backend\n- Handle stock availability\n- Guest checkout (merge on login)",
      hint: "Use state management (Redux/Context). Sync to backend when authenticated. Validate stock before checkout.",
      expectedTime: "35 min",
      topics: ["State Management", "E-commerce", "Full Stack"],
      testCases: [
        { input: "add item, refresh page", output: "cart persisted" },
        { input: "apply invalid coupon", output: "error message" },
        { input: "checkout with insufficient stock", output: "stock error" }
      ],
      solutionApproach: "State management + localStorage + stock validation"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "hard",
      title: "Social Media Feed Algorithm",
      question: "Build feed system with:\n- Fetch posts from followed users\n- Pagination (infinite scroll)\n- Like/comment in real-time\n- Sort by relevance or time\n- Image lazy loading\n- Optimistic UI updates",
      hint: "Use cursor-based pagination. WebSocket for real-time updates. Optimistic updates for likes.",
      expectedTime: "45 min",
      topics: ["Algorithms", "Real-time", "UI/UX"],
      testCases: [
        { input: "scroll to bottom", output: "load next page via cursor" },
        { input: "like post", output: "optimistic update, then confirm" }
      ],
      solutionApproach: "Cursor pagination + WebSocket + optimistic updates"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "medium",
      title: "File Upload with Progress",
      question: "Implement file upload with:\n- Drag & drop zone\n- Multiple file selection\n- Upload progress bar\n- Pause/resume capability\n- Server-side storage (local/S3)\n- File type validation\n- Image thumbnail generation",
      hint: "Use XMLHttpRequest for progress. Chunk large files. Generate thumbnails with canvas.",
      expectedTime: "40 min",
      topics: ["File API", "Upload", "Async"],
      testCases: [
        { input: "upload 5 images", output: "progress bars, thumbs generated" },
        { input: "invalid file type", output: "rejected with error" }
      ],
      solutionApproach: "XMLHttpRequest + chunks + canvas thumbnails"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "hard",
      title: "Database Query Builder",
      question: "Build SQL query builder with:\n- Chainable methods (where, join, orderBy, groupBy)\n- Parameterized queries (SQL injection safe)\n- Support for subqueries\n- Aggregation functions\n- Raw query escape hatch\n- TypeScript types",
      hint: "Build SQL string incrementally. Use ? placeholders for values. Validate table/column names.",
      expectedTime: "45 min",
      topics: ["SQL", "Builder Pattern", "Database"],
      testCases: [
        { input: "User.where({age: {gte: 18}}).toSQL()", output: "parameterized query" },
        { input: "join with subquery", output: "valid nested SQL" }
      ],
      solutionApproach: "Query object + SQL builder + parameterization"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "medium",
      title: "Notification System",
      question: "Build notification system with:\n- In-app notifications (toast/bell icon)\n- Email notifications (queue-based)\n- Push notifications (web push)\n- Notification preferences per user\n- Mark as read/unread\n- Group similar notifications",
      hint: "Use WebSocket for in-app. Queue emails with Bull/Agenda. Store preferences in DB.",
      expectedTime: "40 min",
      topics: ["Notifications", "WebSocket", "Queue"],
      testCases: [
        { input: "new comment on post", output: "in-app + email queued" },
        { input: "user disables email", output: "only in-app sent" }
      ],
      solutionApproach: "Multi-channel + preferences + queue"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "hard",
      title: "Search with Autocomplete",
      question: "Build search with:\n- Full-text search backend (Elasticsearch/similar)\n- Autocomplete suggestions\n- Debounced input\n- Search history\n- Filters (category, price range)\n- Search analytics tracking",
      hint: "Use trie or prefix matching for autocomplete. Debounce with 300ms. Track searches in DB.",
      expectedTime: "45 min",
      topics: ["Search", "Algorithms", "UI/UX"],
      testCases: [
        { input: "type 'lap'", output: "suggestions: laptop, lapdesk..." },
        { input: "search with filters", output: "filtered results" }
      ],
      solutionApproach: "Full-text index + debounce + filter system"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "medium",
      title: "Role-Based Access Control (RBAC)",
      question: "Implement RBAC system with:\n- Roles: admin, editor, viewer\n- Permissions per role\n- Middleware to check permissions\n- UI adapts to permissions\n- Hierarchical permissions\n- Audit log of actions",
      hint: "Store permissions as bitflags or array. Check in middleware before controller. Filter UI elements.",
      expectedTime: "35 min",
      topics: ["Security", "RBAC", "Authorization"],
      testCases: [
        { input: "viewer tries to delete", output: "403 forbidden" },
        { input: "admin accesses dashboard", output: "allowed" }
      ],
      solutionApproach: "Permission matrix + middleware + UI guards"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "hard",
      title: "Payment Integration (Stripe)",
      question: "Integrate payment system with:\n- Stripe checkout/session\n- Save payment methods\n- Subscription handling\n- Webhook for events\n- Retry failed payments\n- Invoice generation\n- Refund capability",
      hint: "Use Stripe SDK. Create checkout sessions. Handle webhooks for async events. Store subscription status.",
      expectedTime: "50 min",
      topics: ["Payments", "Stripe", "E-commerce"],
      testCases: [
        { input: "successful payment", output: "order confirmed, webhook processed" },
        { input: "payment fails", output: "retry initiated" }
      ],
      solutionApproach: "Stripe SDK + webhooks + retry logic"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "medium",
      title: "Dashboard with Charts",
      question: "Build analytics dashboard with:\n- Multiple chart types (line, bar, pie)\n- Date range picker\n- Real-time updates\n- Export to CSV/PDF\n- Responsive layout\n- Loading states",
      hint: "Use Chart.js or D3. Fetch aggregated data from API. WebSocket for real-time. Canvas for export.",
      expectedTime: "40 min",
      topics: ["Data Visualization", "Charts", "Dashboard"],
      testCases: [
        { input: "select date range", output: "charts update with filtered data" },
        { input: "export CSV", output: "file downloaded" }
      ],
      solutionApproach: "Chart library + API aggregation + export logic"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "hard",
      title: "Multi-tenant SaaS Architecture",
      question: "Design multi-tenant system with:\n- Tenant isolation (schema-per-tenant or row-level)\n- Subdomain routing (tenant1.app.com)\n- Shared assets with tenant override\n- Tenant-specific config\n- Billing per tenant\n- Data migration between tenants",
      hint: "Use middleware to identify tenant from subdomain. Set DB schema or add tenant_id filter. Isolate configs.",
      expectedTime: "50 min",
      topics: ["SaaS", "Multi-tenant", "Architecture"],
      testCases: [
        { input: "tenant1.app.com", output: "data isolated to tenant1" },
        { input: "tenant2 queries", output: "cannot access tenant1 data" }
      ],
      solutionApproach: "Tenant detection + schema isolation + middleware"
    },
    {
      id: 13,
      type: "coding",
      difficulty: "medium",
      title: "Comment System (Nested)",
      question: "Build nested comment system:\n- CRUD comments\n- Reply to comments (threading)\n- Vote up/down\n- Sort by popular/newest\n- Pagination with 'load more'\n- Real-time new comments",
      hint: "Use closure table or nested set for hierarchy. Calculate vote score. WebSocket for real-time.",
      expectedTime: "35 min",
      topics: ["Database", "Hierarchy", "Real-time"],
      testCases: [
        { input: "reply to nested comment", output: "correctly nested in thread" },
        { input: "sort by popular", output: "ordered by vote score" }
      ],
      solutionApproach: "Closure table/nested set + voting + WebSocket"
    },
    {
      id: 14,
      type: "coding",
      difficulty: "hard",
      title: "API Rate Limiting with Tiers",
      question: "Implement tiered rate limiting:\n- Free tier: 100 req/day\n- Pro tier: 10000 req/day\n- Reset at midnight UTC\n- Redis for distributed state\n- Headers: X-RateLimit-Remaining\n- Graceful degradation",
      hint: "Store counters in Redis with TTL. Check tier from user profile. Reset with cron or on first request after midnight.",
      expectedTime: "40 min",
      topics: ["Rate Limiting", "Redis", "API Design"],
      testCases: [
        { input: "free user exceeds 100", output: "429 with upgrade message" },
        { input: "new day", output: "counter reset" }
      ],
      solutionApproach: "Redis counters + tier checks + reset logic"
    },
    {
      id: 15,
      type: "coding",
      difficulty: "medium",
      title: "Image Optimization Pipeline",
      question: "Build image processing pipeline:\n- Upload to temp storage\n- Generate multiple sizes (thumb, medium, large)\n- Convert to WebP\n- Store in CDN/S3\n- Lazy loading in UI\n- Progressive loading (blur-up)",
      hint: "Use Sharp/ImageMagick for processing. Queue with Bull. Store variants. Use srcset for responsive.",
      expectedTime: "45 min",
      topics: ["Image Processing", "Performance", "CDN"],
      testCases: [
        { input: "upload 4K image", output: "3 sizes + WebP generated" },
        { input: "client requests", output: "srcset delivers appropriate size" }
      ],
      solutionApproach: "Processing queue + variants + responsive images"
    },
    {
      id: 16,
      type: "coding",
      difficulty: "hard",
      title: "GraphQL Server with Subscriptions",
      question: "Build GraphQL API with:\n- Schema definition (types, queries, mutations)\n- Resolvers with DataLoader (N+1 fix)\n- Subscriptions for real-time\n- Authentication context\n- Error handling\n- Query complexity limiting",
      hint: "Use Apollo Server. DataLoader for batching. PubSub for subscriptions. Check complexity before execution.",
      expectedTime: "50 min",
      topics: ["GraphQL", "Real-time", "API"],
      testCases: [
        { input: "nested query", output: "DataLoader batches DB calls" },
        { input: "subscription to new posts", output: "real-time updates" }
      ],
      solutionApproach: "Apollo + DataLoader + PubSub + complexity check"
    },
    {
      id: 17,
      type: "coding",
      difficulty: "medium",
      title: "A/B Testing Framework",
      question: "Implement A/B testing system:\n- Define experiments with variants\n- Random assignment (consistent per user)\n- Track conversion events\n- Statistical significance calculation\n- Feature flags integration\n- Dashboard for results",
      hint: "Hash user ID for consistent assignment. Store assignments in DB. Track events. Calculate p-value.",
      expectedTime: "45 min",
      topics: ["A/B Testing", "Statistics", "Feature Flags"],
      testCases: [
        { input: "user assigned to variant A", output: "always sees A" },
        { input: "conversion tracked", output: "attributed to correct variant" }
      ],
      solutionApproach: "Consistent hashing + event tracking + stats calculation"
    },
    {
      id: 18,
      type: "coding",
      difficulty: "hard",
      title: "Server-Side Rendering (SSR)",
      question: "Implement SSR for React app:\n- Render on server for initial load\n- Hydrate on client\n- Handle async data fetching\n- Manage head/meta tags\n- Code splitting with lazy load\n- Error boundaries",
      hint: "Use ReactDOMServer.renderToString. Fetch data before render. Inject initial state. Hydrate client-side.",
      expectedTime: "45 min",
      topics: ["SSR", "React", "Performance"],
      testCases: [
        { input: "initial request", output: "HTML with content rendered" },
        { input: "client hydrates", output: "interactive without re-fetch" }
      ],
      solutionApproach: "ReactDOMServer + data prefetch + hydration"
    },
    {
      id: 19,
      type: "coding",
      difficulty: "medium",
      title: "Webhook Management System",
      question: "Build webhook system:\n- Register webhook URLs\n- Event type subscription\n- Retry with backoff (3 attempts)\n- Signature verification (HMAC)\n- Delivery logs\n- Pause/resume webhooks",
      hint: "Queue deliveries. Retry with exponential backoff. Sign payload with HMAC. Log all attempts.",
      expectedTime: "40 min",
      topics: ["Webhooks", "Security", "Queue"],
      testCases: [
        { input: "event triggers", output: "webhook POST sent" },
        { input: "delivery fails", output: "retried with backoff" }
      ],
      solutionApproach: "Queue + retry logic + HMAC signing + logging"
    },
    {
      id: 20,
      type: "coding",
      difficulty: "hard",
      title: "Microservices Communication",
      question: "Implement inter-service communication:\n- Service discovery (registry)\n- Load balancing between instances\n- Circuit breaker pattern\n- Retry with exponential backoff\n- Distributed tracing (correlation IDs)\n- Event-driven async (message bus)",
      hint: "Use Consul/Eureka for discovery. Implement circuit breaker state machine. Pass correlation IDs in headers.",
      expectedTime: "50 min",
      topics: ["Microservices", "Distributed", "Patterns"],
      testCases: [
        { input: "service A calls B", output: "discovered, load balanced" },
        { input: "service B down", output: "circuit opens, fallback used" }
      ],
      solutionApproach: "Registry + client-side LB + circuit breaker + tracing"
    }
  ],

  "DevOps Engineer": [
    {
      id: 1,
      type: "coding",
      difficulty: "medium",
      title: "Docker Container Orchestrator",
      question: "Implement a simplified Docker container orchestrator that manages container lifecycle across multiple hosts.\n\nRequirements:\n- Pull and start containers\n- Monitor container health\n- Auto-restart failed containers\n- Load balance across instances\n- Rolling updates (zero downtime)\n- Resource limits enforcement\n- Log aggregation\n\nUse Docker API or exec commands.",
      hint: "Use Docker SDK. Track containers in a map. Monitor with health checks. Rolling update: start new, stop old gradually.",
      expectedTime: "45 min",
      topics: ["Docker", "Containers", "Orchestration"],
      testCases: [
        { input: "deploy 3 replicas of nginx", output: "3 containers running across hosts" },
        { input: "container fails health check", output: "stopped and restarted" },
        { input: "rolling update to v2", output: "zero downtime deployment" }
      ],
      solutionApproach: "Docker API + health monitoring + rolling deployment logic"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "hard",
      title: "Infrastructure as Code - Config Generator",
      question: "Build a tool that generates cloud infrastructure configs (Terraform-like) from a high-level YAML definition.\n\nInput YAML defines: VMs, networks, load balancers, databases\nOutput: Terraform JSON / CloudFormation / ARM templates\n\nSupport:\n- Variable interpolation\n- Resource dependencies\n- Modules (reusable components)\n- State tracking\n- Multi-cloud abstraction (AWS, Azure, GCP)",
      hint: "Parse YAML to AST. Resolve variables and dependencies. Generate provider-specific JSON with templates.",
      expectedTime: "50 min",
      topics: ["IaC", "Cloud", "Code Generation"],
      testCases: [
        { input: "define 2 VMs + LB", output: "valid Terraform JSON" },
        { input: "variable interpolation ${var.region}", output: "replaced with value" }
      ],
      solutionApproach: "YAML parser + dependency graph + template engine"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "hard",
      title: "CI/CD Pipeline Engine",
      question: "Implement a CI/CD pipeline engine that executes build, test, and deploy stages.\n\nFeatures:\n- YAML pipeline definition\n- Parallel and sequential jobs\n- Job dependencies\n- Artifact passing between jobs\n- Environment variables and secrets\n- Conditional execution (branch, tags)\n- Retry failed jobs\n- Pipeline visualization data\n\nExecute jobs in Docker containers.",
      hint: "Parse YAML pipeline. Build DAG of jobs. Execute with topological sort. Use Docker for isolation.",
      expectedTime: "50 min",
      topics: ["CI/CD", "Pipeline", "Automation"],
      testCases: [
        { input: "build -> test -> deploy pipeline", output: "executed in order" },
        { input: "parallel test jobs", output: "run simultaneously" }
      ],
      solutionApproach: "YAML parser + DAG execution + Docker runner"
    },
    {
      id: 4,
      type: "coding",
      difficulty: "medium",
      title: "Log Aggregation System",
      question: "Build a centralized log aggregation system that collects, processes, and queries logs from multiple services.\n\nComponents:\n- Log shipper (tail files, send to collector)\n- Log collector (receive and buffer)\n- Log processor (parse, filter, enrich)\n- Storage backend (Elasticsearch/file)\n- Query API (search logs)\n- Real-time tail (WebSocket)\n\nHandle backpressure and buffering.",
      hint: "Use streams for processing. Parse with regex/json. Index by timestamp. Query with inverted index.",
      expectedTime: "45 min",
      topics: ["Logging", "Monitoring", "ELK"],
      testCases: [
        { input: "1000 log lines/second", output: "processed and indexed" },
        { input: "search 'ERROR' last hour", output: "matching logs returned" }
      ],
      solutionApproach: "Stream processing + parsing + indexing + query API"
    },
    {
      id: 5,
      type: "coding",
      difficulty: "hard",
      title: "Kubernetes-style Pod Scheduler",
      question: "Implement a pod scheduler that places containers on nodes based on resource requirements and constraints.\n\nScheduling criteria:\n- Resource fit (CPU, memory)\n- Affinity/anti-affinity rules\n- Node selectors (labels)\n- Pod priority and preemption\n- Quality of service classes\n- Bin packing optimization\n\nInput: pod spec with resources\nOutput: selected node or unschedulable",
      hint: "Filter nodes by hard constraints. Score by soft preferences. Select highest score.",
      expectedTime: "50 min",
      topics: ["Kubernetes", "Scheduling", "Resource Management"],
      testCases: [
        { input: "pod needs 2CPU, 4GB", output: "scheduled on node with capacity" },
        { input: "no node has enough resources", output: "unschedulable" }
      ],
      solutionApproach: "Filter + Score algorithm"
    },
    {
      id: 6,
      type: "coding",
      difficulty: "medium",
      title: "Service Discovery Registry",
      question: "Build a service discovery system where services register themselves and clients can discover them.\n\nFeatures:\n- Service registration (name, host, port, metadata)\n- Health checking (heartbeat or active check)\n- Service lookup (DNS-style or API)\n- Load balancing strategies (round-robin, least-conn)\n- Watch for changes (push notifications)\n- Multi-datacenter support\n\nImplement server and client SDK.",
      hint: "Store services in consistent hash ring. Health check with TTL. Notify watchers on change.",
      expectedTime: "40 min",
      topics: ["Service Discovery", "Microservices", "Consul"],
      testCases: [
        { input: "service A registers", output: "stored and healthy" },
        { input: "service A stops heartbeating", output: "marked unhealthy, removed" }
      ],
      solutionApproach: "Registry + health checks + watch notifications"
    },
    {
      id: 7,
      type: "coding",
      difficulty: "hard",
      title: "Auto-scaling Controller",
      question: "Implement an auto-scaling controller that scales applications based on metrics.\n\nScaling policies:\n- CPU utilization threshold\n- Request latency (p95/p99)\n- Queue depth\n- Custom metrics\n\nFeatures:\n- Scale out (add instances) when high load\n- Scale in (remove instances) when idle\n- Cooldown periods\n- Min/max instance limits\n- Predictive scaling (time-based)\n- Cost-aware scaling (spot instances)\n\nIntegrate with cloud provider API.",
      hint: "Collect metrics. Evaluate policies. Calculate desired replicas. Scale gradually with cooldown.",
      expectedTime: "45 min",
      topics: ["Auto-scaling", "Monitoring", "Cloud"],
      testCases: [
        { input: "CPU > 80% for 5min", output: "scale out triggered" },
        { input: "low load for 10min", output: "scale in (respect min limit)" }
      ],
      solutionApproach: "Metrics collection + policy evaluation + scaling actions"
    },
    {
      id: 8,
      type: "coding",
      difficulty: "medium",
      title: "SSL Certificate Manager",
      question: "Build automated SSL certificate management with Let's Encrypt integration.\n\nFeatures:\n- Automatic certificate issuance\n- HTTP-01 challenge handler\n- Certificate renewal (before expiry)\n- Multi-domain (SAN) certificates\n- Wildcard certificates (DNS-01)\n- Certificate storage (secure)\n- Nginx/Apache config updater\n- Renewal notifications\n\nImplement ACME protocol client.",
      hint: "Implement ACME client. Handle challenges by serving files or DNS records. Renew at 2/3 lifetime.",
      expectedTime: "45 min",
      topics: ["SSL/TLS", "Let's Encrypt", "Security"],
      testCases: [
        { input: "request cert for example.com", output: "issued and stored" },
        { input: "cert expires in 7 days", output: "automatic renewal triggered" }
      ],
      solutionApproach: "ACME client + challenge handler + renewal scheduler"
    },
    {
      id: 9,
      type: "coding",
      difficulty: "hard",
      title: "Network Load Balancer",
      question: "Implement a Layer 4 (TCP/UDP) load balancer with multiple algorithms.\n\nAlgorithms:\n- Round robin\n- Least connections\n- IP hash (session affinity)\n- Weighted round robin\n- Least response time\n\nFeatures:\n- Health checks (TCP/HTTP)\n- Graceful shutdown (drain connections)\n- Connection pooling\n- SSL termination\n- Rate limiting per backend\n- Metrics export (Prometheus format)",
      hint: "Accept connections. Pick backend by algorithm. Proxy data both ways. Track health.",
      expectedTime: "50 min",
      topics: ["Load Balancer", "Networking", "HAProxy"],
      testCases: [
        { input: "3 backends, round robin", output: "traffic distributed evenly" },
        { input: "backend fails health check", output: "removed from pool" }
      ],
      solutionApproach: "Socket proxy + algorithm + health checks"
    },
    {
      id: 10,
      type: "coding",
      difficulty: "medium",
      title: "Configuration Management Tool",
      question: "Build a configuration management tool like Ansible that applies configuration to servers.\n\nFeatures:\n- Playbook format (YAML)\n- Tasks: file, package, service, command, template\n- Variables and facts\n- Conditionals (when)\n- Loops (with_items)\n- Handlers (notify on change)\n- Idempotency (check before apply)\n- Dry-run mode\n- SSH connection management\n\nTarget: configure nginx on remote hosts.",
      hint: "Parse playbook. SSH to hosts. Execute tasks. Check state for idempotency. Notify handlers.",
      expectedTime: "45 min",
      topics: ["Configuration Management", "Automation", "Ansible"],
      testCases: [
        { input: "install nginx playbook", output: "nginx installed and running" },
        { input: "run again (idempotent)", output: "no changes made" }
      ],
      solutionApproach: "YAML parser + SSH executor + idempotency checks"
    },
    {
      id: 11,
      type: "coding",
      difficulty: "hard",
      title: "Prometheus-style Metrics Collector",
      question: "Implement a metrics collection system with time-series storage.\n\nFeatures:\n- Counter, Gauge, Histogram metric types\n- /metrics HTTP endpoint (Prometheus format)\n- Time-series storage (compressed)\n- Query language (simple PromQL subset)\n- Aggregation functions (sum, avg, rate)\n- Retention policies\n- Alert rule evaluation\n- Push gateway for batch jobs\n\nStore: timestamp -> value mapping per metric series.",
      hint: "Store samples in memory or disk. Index by metric name and labels. Implement query parser.",
      expectedTime: "50 min",
      topics: ["Monitoring", "Metrics", "Prometheus"],
      testCases: [
        { input: "record 1000 samples", output: "stored efficiently" },
        { input: "query 'rate(http_requests[5m])'", output: "calculated rate" }
      ],
      solutionApproach: "Time-series DB + query engine + Prometheus format"
    },
    {
      id: 12,
      type: "coding",
      difficulty: "medium",
      title: "GitOps Controller",
      question: "Build a GitOps controller that syncs Kubernetes cluster state with Git repository.\n\nFeatures:\n- Watch Git repo for changes (webhook/polling)\n- Clone and parse YAML manifests\n- Apply to Kubernetes (kubectl or API)\n- Detect drift (actual vs desired)\n- Self-healing (correct drift automatically)\n- Sync status dashboard\n- Rollback on failure\n- Multi-environment support (dev/staging/prod)\n\nUse K8s client library.",
      hint: "Poll Git or receive webhook. Parse manifests. Use K8s API to apply. Compare for drift detection.",
      expectedTime: "45 min",
      topics: ["GitOps", "Kubernetes", "Git"],
      testCases: [
        { input: "new deployment pushed to Git", output: "applied to cluster" },
        { input: "manual change in cluster", output: "detected drift, reverted" }
      ],
      solutionApproach: "Git watcher + K8s API + drift detection"
    },
    {
      id: 13,
      type: "coding",
      difficulty: "hard",
      title: "Distributed Tracing System",
      question: "Implement distributed tracing for microservices (like Jaeger/Zipkin).\n\nComponents:\n- Trace instrumentation (OpenTelemetry compatible)\n- Trace context propagation (headers)\n- Span collection and batching\n- Trace storage (Cassandra/Elasticsearch)\n- Trace query API\n- Dependency graph generation\n- Latency histograms\n\nTrace: request path through multiple services with timing.",
      hint: "Generate trace/span IDs. Pass context in headers. Collect spans centrally. Build DAG from parent refs.",
      expectedTime: "50 min",
      topics: ["Observability", "Tracing", "Microservices"],
      testCases: [
        { input: "request through 3 services", output: "trace with 3 spans" },
        { input: "query traces by service", output: "relevant traces returned" }
      ],
      solutionApproach: "Instrumentation + context propagation + collector + storage"
    },
    {
      id: 14,
      type: "coding",
      difficulty: "medium",
      title: "Backup and Restore System",
      question: "Build automated backup system for databases and files.\n\nFeatures:\n- Scheduled backups (cron-like)\n- Incremental and full backups\n- Compression (gzip/zstd)\n- Encryption (AES/GPG)\n- Multi-target storage (S3, GCS, Azure)\n- Backup verification (checksums)\n- Point-in-time recovery\n- Retention policies\n- Backup monitoring/alerts\n\nSupport PostgreSQL and file backups.",
      hint: "Use database native tools (pg_dump). Compress with streams. Encrypt before upload. Track in manifest.",
      expectedTime: "45 min",
      topics: ["Backup", "Disaster Recovery", "Storage"],
      testCases: [
        { input: "daily backup job", output: "backup created and uploaded" },
        { input: "restore from 3 days ago", output: "data restored successfully" }
      ],
      solutionApproach: "Scheduler + backup tool + compression + encryption + storage"
    },
    {
      id: 15,
      type: "coding",
      difficulty: "hard",
      title: "Vault-like Secrets Manager",
      question: "Build a secrets management system with dynamic secrets and encryption.\n\nFeatures:\n- Secret storage (encrypted at rest)\n- Key-value and structured secrets\n- Dynamic secrets (DB credentials on-demand)\n- Secret versioning\n- Leasing and automatic rotation\n- Access control (policies)\n- Audit logging\n- Unseal mechanism (Shamir's secret sharing)\n\nEncrypt with AES-256-GCM. Use envelope encryption.",
      hint: "Encrypt with master key. Use key derivation. Implement Shamir's for unseal. Generate dynamic creds via plugins.",
      expectedTime: "55 min",
      topics: ["Security", "Secrets", "Encryption"],
      testCases: [
        { input: "store secret", output: "encrypted and stored" },
        { input: "request dynamic DB creds", output: "temporary user created" }
      ],
      solutionApproach: "Encryption + storage + ACL + dynamic secret generation"
    },
    {
      id: 16,
      type: "coding",
      difficulty: "medium",
      title: "Chaos Engineering Tool",
      question: "Build a chaos engineering tool that injects failures into systems.\n\nExperiments:\n- CPU/Memory stress\n- Network latency/packet loss\n- Disk fill\n- Process killer\n- Container/pod killer\n- DNS failure\n- Time drift\n\nFeatures:\n- YAML experiment definition\n- Blast radius control (affects only % of traffic)\n- Automatic rollback\n- Safety checks (don't kill critical services)\n- Experiment scheduling\n- Result reporting\n\nTarget: Kubernetes pods.",
      hint: "Use stress-ng for resource chaos. Use tc for network. Use K8s API for pod killing. Safety checks with labels.",
      expectedTime: "45 min",
      topics: ["Chaos Engineering", "Reliability", "Testing"],
      testCases: [
        { input: "inject 100ms latency to service", output: "latency added via tc" },
        { input: "kill 1 pod", output: "pod deleted, K8s recreates" }
      ],
      solutionApproach: "Experiment runner + chaos injectors + safety controls"
    },
    {
      id: 17,
      type: "coding",
      difficulty: "medium",
      title: "Terraform State Backend",
      question: "Implement a remote state backend for Terraform with locking.\n\nFeatures:\n- Store state files (JSON)\n- State locking (prevent concurrent modifications)\n- State versioning (keep history)\n- Encryption at rest\n- State comparison (diff)\n- State resource graph\n- HTTP API (compatible with Terraform)\n- State import/export\n\nLocking: optimistic with check-and-set or distributed lock.",
      hint: "Store state in DB or object storage. Implement lock with TTL. Version with timestamp. HTTP endpoints per TF docs.",
      expectedTime: "40 min",
      topics: ["Terraform", "State Management", "IaC"],
      testCases: [
        { input: "store state via API", output: "saved and versioned" },
        { input: "concurrent lock attempt", output: "rejected with lock info" }
      ],
      solutionApproach: "Storage + locking API + versioning + HTTP endpoints"
    },
    {
      id: 18,
      type: "coding",
      difficulty: "hard",
      title: "Edge CDN Cache Server",
      question: "Build an edge cache server that caches content from origin and serves to clients.\n\nFeatures:\n- HTTP reverse proxy to origin\n- Cache based on URL and headers\n- Cache policies (TTL, stale-while-revalidate)\n- Purge API (invalidate cache)\n- Cache hierarchy (L1 memory, L2 disk)\n- Compression (gzip/brotli)\n- ETag support\n- Range request support\n- Cache analytics (hit/miss ratio)\n\nHTTP/1.1 and HTTP/2 support.",
      hint: "Check cache on request. Serve if fresh. Fetch from origin if stale/miss. Update cache. Handle purge via API.",
      expectedTime: "50 min",
      topics: ["CDN", "Caching", "HTTP"],
      testCases: [
        { input: "request cached URL", output: "served from cache" },
        { input: "cache purge via API", output: "cache invalidated" }
      ],
      solutionApproach: "HTTP proxy + cache store + TTL management + purge API"
    },
    {
      id: 19,
      type: "coding",
      difficulty: "medium",
      title: "Cloud Cost Analyzer",
      question: "Build a cloud cost analysis tool that tracks and optimizes cloud spending.\n\nFeatures:\n- Ingest billing data (AWS/GCP/Azure CSV/API)\n- Cost allocation by service, team, project\n- Anomaly detection (unexpected spikes)\n- Reserved instance recommendations\n- Budget alerts (threshold-based)\n- Cost forecasting (linear regression)\n- Resource right-sizing recommendations\n- Idle resource detection\n- Dashboard with charts\n\nOutput actionable recommendations.",
      hint: "Parse billing CSV. Aggregate by dimensions. Detect anomalies with std dev. Forecast with trend analysis.",
      expectedTime: "45 min",
      topics: ["Cloud Cost", "FinOps", "Analytics"],
      testCases: [
        { input: "ingest month's AWS bill", output: "cost breakdown by service" },
        { input: "detect 50% spike", output: "alert with affected resources" }
      ],
      solutionApproach: "Billing parser + aggregation + anomaly detection + recommendations"
    },
    {
      id: 20,
      type: "coding",
      difficulty: "hard",
      title: "Zero-Downtime Database Migration",
      question: "Implement a tool for zero-downtime database schema migrations.\n\nStrategy: expand, migrate, contract\n\nSteps:\n1. Add new column/table (dual schema)\n2. Dual-write to old and new\n3. Backfill data to new schema\n4. Switch reads to new schema\n5. Stop writes to old\n6. Drop old column/table\n\nFeatures:\n- Migration script runner\n- Progress tracking\n- Rollback capability\n- Data consistency verification\n- Schema version table\n- Lock-free migrations\n\nSupport PostgreSQL.",
      hint: "Use expand/contract pattern. Track version in schema_migrations table. Verify consistency with checksums. Rollback on failure.",
      expectedTime: "50 min",
      topics: ["Database", "Migration", "Zero-downtime"],
      testCases: [
        { input: "add column migration", output: "dual schema, no downtime" },
        { input: "migration fails", output: "automatic rollback" }
      ],
      solutionApproach: "Expand/contract pattern + version tracking + verification"
    }
  ],

  "Data Scientist": [
    {
      id: 1,
      type: "coding",
      difficulty: "medium",
      title: "Linear Regression from Scratch",
      question: "Implement linear regression using gradient descent without using sklearn/tensorflow.\n\nRequirements:\n- Fit: X (n_samples, n_features), y (n_samples)\n- Predict: return predictions\n- Gradient descent optimization\n- Support for regularization (L1/L2)\n- Feature normalization\n- Learning rate scheduling\n- Convergence detection\n\nUse only NumPy.",
      hint: "Initialize weights randomly. Compute predictions. Calculate MSE loss. Compute gradients. Update weights.",
      expectedTime: "35 min",
      topics: ["Machine Learning", "Linear Regression", "Optimization"],
      testCases: [
        { input: "fit on house prices data", output: "trained model with low MSE" },
        { input: "predict on new data", output: "reasonable predictions" }
      ],
      solutionApproach: "Gradient descent + regularization + normalization"
    },
    {
      id: 2,
      type: "coding",
      difficulty: "hard",
      title: "K-Means Clustering",
      question: "Implement K-Means clustering algorithm from scratch.\n\nRequirements:\n- Initialize k centroids (k-means++)\n- Assign points to nearest centroid\n- Update centroids (mean of assigned points)\n- Iterate until convergence\n- Support multiple distance metrics (euclidean, manhattan)\n- Handle empty clusters\n- Silhouette score calculation\n- Elbow method for optimal k\n\nVisualize clusters with matplotlib.",
      hint: "Initialize centroids smartly. Assign by distance. Recompute means. Repeat until stable.",
      expectedTime: "40 min",
      topics: ["Clustering", "K-Means", "Unsupervised Learning"],
      testCases: [
        { input: "cluster 2D data into 3 clusters", output: "3 distinct clusters" },
        { input: "elbow method", output: "optimal k identified" }
      ],
      solutionApproach: "K-means++ init + Lloyd's algorithm + convergence check"
    },
    {
      id: 3,
      type: "coding",
      difficulty: "medium",
      title: "Decision Tree Classifier",
      question: "Implement a decision tree classifier with ID3/C4.5 algorithm.\n\nRequirements:\n- Handle categorical and numerical features\n- Information gain / Gini impurity for splits\n- Recursive tree building\n- Pruning to prevent overfitting\n- Predict class probabilities\n- Feature importance calculation\n- Max depth and min samples constraints\n- Handle missing values\n\nNo sklearn - use only NumPy.",
      hint: "Calculate impurity. Find best split. Create nodes recursively. Prune by validation.",
      expectedTime: "45 min",
      topics: ["Decision Trees", "Classification", "ML Algorithms"],
      testCases: [
        { input: "fit on iris dataset", output: "accurate classifier" },
        { input: "feature importance", output: "ranked features" }
      ],
      solutionApproach: "Impurity calculation + recursive splitting + pruning"
    }
  ],

  "Software Engineer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Two Sum", question: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.", hint: "Use hash map for O(n) time", expectedTime: "10 min", topics: ["DSA", "Array", "Hash Table"], testCases: [{ input: "nums=[2,7,11,15], target=9", output: "[0,1]" }, { input: "nums=[3,2,4], target=6", output: "[1,2]" }], solutionApproach: "Store complement in hash map" },
    { id: 2, type: "coding", difficulty: "easy", title: "Valid Palindrome", question: "Given a string s, return true if it is a palindrome, considering only alphanumeric characters and ignoring cases.", hint: "Use two pointers from both ends", expectedTime: "10 min", topics: ["DSA", "String", "Two Pointers"], testCases: [{ input: '"A man, a plan, a canal: Panama"', output: "true" }, { input: '"race a car"', output: "false" }], solutionApproach: "Compare chars from both ends, skip non-alphanumeric" },
    { id: 3, type: "coding", difficulty: "easy", title: "Best Time to Buy/Sell Stock", question: "Given prices array where prices[i] is stock price on day i, maximize profit by choosing single day to buy and different day to sell.", hint: "Track min price seen so far", expectedTime: "10 min", topics: ["DSA", "Array", "Greedy"], testCases: [{ input: "[7,1,5,3,6,4]", output: "5" }, { input: "[7,6,4,3,1]", output: "0" }], solutionApproach: "Min price tracking, calculate max profit at each step" },
    { id: 4, type: "coding", difficulty: "easy", title: "Fizz Buzz", question: "For n=100, print numbers 1 to n. For multiples of 3 print Fizz, multiples of 5 print Buzz, both print FizzBuzz.", hint: "Use modulo operator", expectedTime: "5 min", topics: ["Basic", "Math"], testCases: [{ input: "n=15", output: "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz" }], solutionApproach: "Iterate and check divisibility" },
    { id: 5, type: "coding", difficulty: "medium", title: "Group Anagrams", question: "Given array of strings, group anagrams together. Anagrams contain same chars with same frequencies.", hint: "Sort each string as key, or use char count as key", expectedTime: "15 min", topics: ["DSA", "String", "Hash Table"], testCases: [{ input: '["eat","tea","tan","ate","nat","bat"]', output: "[[eat,tea,ate],[tan,nat],[bat]]" }], solutionApproach: "Use sorted string or char count as hash key" },
    { id: 6, type: "coding", difficulty: "medium", title: "Container With Most Water", question: "Given n non-negative integers representing heights, find two lines that form container holding most water.", hint: "Two pointers from both ends", expectedTime: "15 min", topics: ["DSA", "Array", "Two Pointers"], testCases: [{ input: "[1,8,6,2,5,4,8,3,7]", output: "49" }], solutionApproach: "Two pointers, move shorter line inward" },
    { id: 7, type: "coding", difficulty: "medium", title: "3Sum", question: "Given integer array nums, return all unique triplets [nums[i], nums[j], nums[k]] where i != j != k and sum is 0.", hint: "Sort array, use two pointers for each fixed element", expectedTime: "20 min", topics: ["DSA", "Array", "Two Pointers"], testCases: [{ input: "[-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }], solutionApproach: "Sort, fix one element, two pointer search for remaining sum" },
    { id: 8, type: "coding", difficulty: "medium", title: "Longest Substring Without Repeating", question: "Given string s, find length of longest substring without repeating characters.", hint: "Sliding window with char set/map", expectedTime: "15 min", topics: ["DSA", "String", "Sliding Window"], testCases: [{ input: '"abcabcbb"', output: "3" }, { input: '"bbbbb"', output: "1" }], solutionApproach: "Sliding window, expand right, contract left on duplicate" },
    { id: 9, type: "coding", difficulty: "medium", title: "Clone Graph", question: "Given reference of node in connected undirected graph, return deep copy of graph.", hint: "DFS/BFS with hash map to track visited/cloned nodes", expectedTime: "20 min", topics: ["DSA", "Graph", "DFS", "BFS"], testCases: [{ input: "adjList=[[2,4],[1,3],[2,4],[1,3]]", output: "deep copy with same structure" }], solutionApproach: "Hash map old->new node, DFS to clone neighbors" },
    { id: 10, type: "coding", difficulty: "medium", title: "Coin Change", question: "Given coins denominations and amount, find fewest coins needed to make that amount.", hint: "Dynamic programming: dp[i] = min coins for amount i", expectedTime: "20 min", topics: ["DSA", "DP"], testCases: [{ input: "coins=[1,2,5], amount=11", output: "3 (5+5+1)" }], solutionApproach: "DP: dp[i] = min(dp[i-coin] + 1) for all coins" },
    { id: 11, type: "coding", difficulty: "medium", title: "Decode Ways", question: "String of digits can be decoded to letters (A=1, B=2...Z=26). Count total decode ways.", hint: "DP: ways[i] depends on single digit and two-digit combos", expectedTime: "20 min", topics: ["DSA", "DP", "String"], testCases: [{ input: '"226"', output: "3 (BZ, VF, BBF)" }], solutionApproach: "DP: check if current digit valid, check if two-digit combo valid" },
    { id: 12, type: "coding", difficulty: "medium", title: "Validate BST", question: "Given root of binary tree, determine if it is valid BST.", hint: "Validate each node within min/max bounds, or inorder traversal", expectedTime: "15 min", topics: ["DSA", "Tree", "BST"], testCases: [{ input: "[2,1,3]", output: "true" }, { input: "[5,1,4,null,null,3,6]", output: "false" }], solutionApproach: "Recursive check with min/max bounds" },
    { id: 13, type: "coding", difficulty: "medium", title: "Kth Largest Element", question: "Given integer array nums and integer k, return kth largest element.", hint: "QuickSelect (partition), or min-heap of size k", expectedTime: "20 min", topics: ["DSA", "Array", "Heap", "QuickSelect"], testCases: [{ input: "[3,2,1,5,6,4], k=2", output: "5" }], solutionApproach: "Min heap of size k, or QuickSelect partition" },
    { id: 14, type: "coding", difficulty: "medium", title: "Task Scheduler", question: "Given tasks array and cooling time n, find least intervals to complete all tasks.", hint: "Max frequency task determines structure, use math formula", expectedTime: "25 min", topics: ["DSA", "Array", "Greedy"], testCases: [{ input: 'tasks=["A","A","A","B","B","B"], n=2', output: "8" }], solutionApproach: "Count frequencies, calculate idle slots needed" },
    { id: 15, type: "coding", difficulty: "medium", title: "Rotate Image", question: "Given n x n 2D matrix representing image, rotate by 90 degrees clockwise in-place.", hint: "Transpose then reverse rows", expectedTime: "15 min", topics: ["DSA", "Matrix"], testCases: [{ input: "[[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]" }], solutionApproach: "Transpose matrix, then reverse each row" },
    { id: 16, type: "coding", difficulty: "hard", title: "Merge K Sorted Lists", question: "Given array of k linked-lists sorted in ascending order, merge all into one sorted linked-list.", hint: "Min-heap to track smallest head, or divide and conquer", expectedTime: "25 min", topics: ["DSA", "Linked List", "Heap", "Divide Conquer"], testCases: [{ input: "[[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" }], solutionApproach: "Min-heap of list heads, or recursive merge pairs" },
    { id: 17, type: "coding", difficulty: "hard", title: "Edit Distance", question: "Given two strings word1 and word2, return min operations to convert word1 to word2. Operations: insert, delete, replace.", hint: "2D DP: dp[i][j] = min ops for word1[0:i] to word2[0:j]", expectedTime: "30 min", topics: ["DSA", "DP", "String"], testCases: [{ input: 'word1="horse", word2="ros"', output: "3" }], solutionApproach: "DP table, fill based on char match/mismatch" },
    { id: 18, type: "coding", difficulty: "hard", title: "N-Queens", question: "Place n queens on n×n chessboard so no two queens attack each other. Return all distinct solutions.", hint: "Backtracking, track attacked columns and diagonals", expectedTime: "30 min", topics: ["DSA", "Backtracking"], testCases: [{ input: "n=4", output: "2 solutions" }, { input: "n=1", output: "1 solution" }], solutionApproach: "Backtrack row by row, check column and diagonal safety" },
    { id: 19, type: "coding", difficulty: "hard", title: "Alien Dictionary", question: "Given list of words sorted lexicographically by alien language rules, derive order of letters.", hint: "Build graph from adjacent word char comparisons, topological sort", expectedTime: "30 min", topics: ["DSA", "Graph", "Topological Sort"], testCases: [{ input: '["wrt","wrf","er","ett","rftt"]', output: '"wertf"' }], solutionApproach: "Build char graph, Kahn's algorithm for topological order" },
    { id: 20, type: "coding", difficulty: "hard", title: "Regular Expression Matching", question: "Implement regular expression matching with support for . and * where . matches any single char and * matches zero or more of preceding element.", hint: "2D DP: dp[i][j] = does pattern[0:j] match string[0:i]", expectedTime: "35 min", topics: ["DSA", "DP", "String"], testCases: [{ input: 's="aa", p="a*"', output: "true" }, { input: 's="ab", p=".*"', output: "true" }], solutionApproach: "DP with char match and star handling" }
  ],

  "Frontend Developer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "DOM Element Selector", question: "Implement querySelector functionality that returns first element matching CSS selector string within given root element.", hint: "Parse selector, traverse DOM tree, match by tag/class/id", expectedTime: "20 min", topics: ["DOM", "JavaScript"], testCases: [{ input: 'selector=".container #main"', output: "matching element or null" }], solutionApproach: "Parse selector, DFS/BFS DOM traversal, element matching" },
    { id: 2, type: "coding", difficulty: "easy", title: "Event Emitter", question: "Implement EventEmitter class with methods: on(event, listener), off(event, listener), emit(event, ...args), once(event, listener).", hint: "Use object to map event names to arrays of listeners", expectedTime: "15 min", topics: ["JavaScript", "Events"], testCases: [{ input: "emitter.on('click', fn); emitter.emit('click', data)", output: "fn called with data" }], solutionApproach: "Store listeners in array per event, iterate on emit" },
    { id: 3, type: "coding", difficulty: "easy", title: "Deep Clone Object", question: "Implement deep clone function that creates deep copy of given value (handles objects, arrays, primitives). Do not use JSON.parse/stringify.", hint: "Recursively clone, handle circular references with WeakMap", expectedTime: "20 min", topics: ["JavaScript", "Objects"], testCases: [{ input: '{a:1, b:{c:2}, d:[3,4]}', output: "deep copy with no shared refs" }], solutionApproach: "Type checking, recursion, WeakMap for cycle detection" },
    { id: 4, type: "coding", difficulty: "easy", title: "Fetch with Retry", question: "Implement fetchWithRetry(url, options, retries, delay) that retries failed requests with exponential backoff.", hint: "Use async/await, try/catch, setTimeout for delay", expectedTime: "15 min", topics: ["JavaScript", "Async", "Network"], testCases: [{ input: "fetchWithRetry(url, {}, 3, 1000)", output: "response or final error" }], solutionApproach: "Loop with try/catch, wait with delay * 2^attempt" },
    { id: 5, type: "coding", difficulty: "medium", title: "Virtual DOM Diff", question: "Implement simple virtual DOM diff algorithm that compares two vdom trees and returns list of patches. Patches: {type: 'CREATE'|'REMOVE'|'REPLACE'|'UPDATE', node, ...}", hint: "Compare node types, props, children recursively", expectedTime: "30 min", topics: ["Virtual DOM", "Algorithms"], testCases: [{ input: "oldTree={tag:'div',props:{id:'a'}}, newTree={tag:'div',props:{id:'b'}}", output: "[UPDATE patch]" }], solutionApproach: "Compare node types, diff props, diff children with key matching" },
    { id: 6, type: "coding", difficulty: "medium", title: "Infinite Scroll Component", question: "Build infinite scroll component in vanilla JS that loads more items as user scrolls to bottom.", hint: "Listen to scroll event, check scroll position, fetch more data", expectedTime: "25 min", topics: ["JavaScript", "DOM", "UI"], testCases: [{ input: "scroll to bottom", output: "fetch next page, append items" }], solutionApproach: "Scroll listener, position check, API call, DOM append" },
    { id: 7, type: "coding", difficulty: "medium", title: "Promise.all Implementation", question: "Implement Promise.all(iterable) that returns promise resolving when all input promises resolve, rejects if any reject.", hint: "Track resolved count, resolve when all done", expectedTime: "15 min", topics: ["JavaScript", "Promises"], testCases: [{ input: "Promise.all([Promise.resolve(1), Promise.resolve(2)])", output: "[1, 2]" }], solutionApproach: "Array to store results, counter, resolve when count matches" },
    { id: 8, type: "coding", difficulty: "medium", title: "LocalStorage with Expiry", question: "Implement localStorage wrapper that supports TTL (time-to-live) for stored items. Auto-expire old items on get.", hint: "Store timestamp with value, check on retrieval", expectedTime: "20 min", topics: ["JavaScript", "Storage"], testCases: [{ input: "set('key', 'value', 5000)", output: "expired after 5s" }], solutionApproach: "Wrap value with expiry timestamp, check on get" },
    { id: 9, type: "coding", difficulty: "medium", title: "Autocomplete Component", question: "Build autocomplete input component with debounced search, results dropdown, keyboard navigation.", hint: "Debounce input, fetch suggestions, render dropdown, handle arrow keys", expectedTime: "30 min", topics: ["JavaScript", "DOM", "UI"], testCases: [{ input: "type 'jav'", output: "suggestions: [javascript, java, ...]" }], solutionApproach: "Debounce, API call, render list, keyboard handlers" },
    { id: 10, type: "coding", difficulty: "medium", title: "Drag and Drop List", question: "Implement sortable list with drag and drop functionality using HTML5 Drag API or mouse events.", hint: "Drag events or mousedown/mousemove/mouseup with position tracking", expectedTime: "35 min", topics: ["JavaScript", "DOM", "UI"], testCases: [{ input: "drag item 3 to position 1", output: "reordered list" }], solutionApproach: "Drag events, track positions, reorder array/DOM on drop" },
    { id: 11, type: "coding", difficulty: "medium", title: "Intersection Observer Polyfill", question: "Implement basic IntersectionObserver polyfill that detects when elements enter/leave viewport.", hint: "Listen to scroll/resize, check element bounds vs viewport", expectedTime: "30 min", topics: ["JavaScript", "DOM", "Performance"], testCases: [{ input: "element scrolls into view", output: "callback fired with intersection data" }], solutionApproach: "Scroll/resize listeners, getBoundingClientRect, threshold check" },
    { id: 12, type: "coding", difficulty: "medium", title: "Router Implementation", question: "Implement SPA router with history API, route matching, and dynamic component rendering.", hint: "Listen to popstate, match current path to routes, render component", expectedTime: "35 min", topics: ["JavaScript", "Router"], testCases: [{ input: "navigate('/users/123')", output: "UserComponent with id=123 rendered" }], solutionApproach: "History API, path matching, component registry, render" },
    { id: 13, type: "coding", difficulty: "medium", title: "Form Validation Library", question: "Create form validation library with schema-based rules, custom validators, and error reporting.", hint: "Schema defines rules per field, validate function checks all", expectedTime: "30 min", topics: ["JavaScript", "Forms"], testCases: [{ input: "validate({name:'John', email:'invalid'})", output: "errors: {email: 'Invalid email'}" }], solutionApproach: "Rule definitions, iterate schema, collect errors" },
    { id: 14, type: "coding", difficulty: "hard", title: "Virtual List Renderer", question: "Render list of 100000 items efficiently by only rendering visible items in viewport.", hint: "Calculate visible range from scroll position, render window of items", expectedTime: "40 min", topics: ["JavaScript", "DOM", "Performance"], testCases: [{ input: "scroll to middle of 100000 items", output: "render ~20 visible items" }], solutionApproach: "Scroll listener, calculate indices, slice data, transform/position" },
    { id: 15, type: "coding", difficulty: "hard", title: "State Management Store", question: "Implement Redux-like store with: state, actions, reducers, subscribe(listener), dispatch(action).", hint: "Reducer updates state based on action type, notify subscribers", expectedTime: "35 min", topics: ["JavaScript", "State Management"], testCases: [{ input: "dispatch({type:'INCREMENT'}) with reducer", output: "state updated, subscribers notified" }], solutionApproach: "Current state, reducer function, subscribers array" },
    { id: 16, type: "coding", difficulty: "hard", title: "CSS Parser to Object", question: "Parse CSS string into JavaScript object representation of selectors and rules.", hint: "Tokenize, handle selectors, declarations, nested rules", expectedTime: "40 min", topics: ["CSS", "Parsing"], testCases: [{ input: '"body { color: red; }"', output: "{body: {color: 'red'}}" }], solutionApproach: "Tokenizer, selector parser, declaration parser, build object" },
    { id: 17, type: "coding", difficulty: "hard", title: "Canvas Drawing App", question: "Build drawing app with canvas element supporting brush, eraser, color picker, undo/redo.", hint: "Track mouse events, draw lines, store actions for undo", expectedTime: "45 min", topics: ["Canvas", "JavaScript", "Graphics"], testCases: [{ input: "draw stroke, click undo", output: "stroke removed" }], solutionApproach: "Mouse tracking, path drawing, action history stack" },
    { id: 18, type: "coding", difficulty: "hard", title: "Web Workers Pool", question: "Implement WorkerPool class managing multiple web workers for parallel task execution.", hint: "Queue tasks, assign to available workers, return results via promises", expectedTime: "35 min", topics: ["Web Workers", "Performance"], testCases: [{ input: "pool.execute(task, data) for 10 tasks with 3 workers", output: "tasks processed in parallel" }], solutionApproach: "Worker array, task queue, message passing, promise wrapper" },
    { id: 19, type: "coding", difficulty: "hard", title: "Image Lazy Loader", question: "Implement lazy image loading with blur-up placeholder, intersection observer, and fade-in animation.", hint: "Small placeholder first, full image on intersection, CSS transition", expectedTime: "30 min", topics: ["JavaScript", "DOM", "Performance"], testCases: [{ input: "image enters viewport", output: "full image loaded, fades in" }], solutionApproach: "Observer, data-src attribute, load event, CSS transition" },
    { id: 20, type: "coding", difficulty: "hard", title: "Code Editor Syntax Highlighter", question: "Build basic syntax highlighter for JavaScript that tokenizes and applies CSS classes.", hint: "Tokenize keywords, strings, comments, numbers, apply span classes", expectedTime: "45 min", topics: ["JavaScript", "Parsing"], testCases: [{ input: '"function foo() { return 1; }"', output: "spans with class per token type" }], solutionApproach: "Tokenizer regex, generate HTML with class spans" }
  ],

  "Backend Developer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Express Route Handler", question: "Create Express route handler for GET /users/:id that returns user by ID from in-memory array or 404.", hint: "Use req.params.id, find in array, return JSON", expectedTime: "10 min", topics: ["Node.js", "Express"], testCases: [{ input: "GET /users/1", output: "{id:1, name:'John'} or 404" }], solutionApproach: "Parse param, find user, send JSON or status 404" },
    { id: 2, type: "coding", difficulty: "easy", title: "JWT Middleware", question: "Implement Express middleware that verifies JWT token from Authorization header and attaches user to request.", hint: "Extract token, verify with jwt library, set req.user", expectedTime: "15 min", topics: ["Node.js", "Express", "JWT"], testCases: [{ input: "valid Bearer token", output: "req.user populated, next()" }, { input: "invalid token", output: "401 response" }], solutionApproach: "Split header, verify token, decode payload, attach user" },
    { id: 3, type: "coding", difficulty: "easy", title: "Rate Limiter", question: "Implement rate limiter middleware allowing max N requests per window (e.g., 100 requests per 15 min) per IP.", hint: "Store request timestamps per IP, check count within window", expectedTime: "20 min", topics: ["Node.js", "Middleware"], testCases: [{ input: "101 requests from same IP in 15min", output: "429 Too Many Requests on 101st" }], solutionApproach: "Map of IP to timestamps, sliding window count check" },
    { id: 4, type: "coding", difficulty: "easy", title: "File Upload Handler", question: "Create multipart/form-data file upload endpoint using multer or raw Node.js, save to disk.", hint: "Parse multipart, handle file stream, write to filesystem", expectedTime: "20 min", topics: ["Node.js", "File Upload"], testCases: [{ input: "POST /upload with file", output: "file saved, path returned" }], solutionApproach: "Multipart parsing, stream handling, fs.writeFile" },
    { id: 5, type: "coding", difficulty: "medium", title: "Connection Pool", question: "Implement database connection pool with min/max connections, acquire/release methods, and queue for waiting requests.", hint: "Array of connections, queue of pending requests, release returns to pool", expectedTime: "30 min", topics: ["Node.js", "Database"], testCases: [{ input: "acquire() when pool exhausted", output: "queued until connection released" }], solutionApproach: "Connections array, available set, waiting queue, release callback" },
    { id: 6, type: "coding", difficulty: "medium", title: "WebSocket Chat Server", question: "Build WebSocket server supporting multiple rooms, user join/leave messages, and broadcasting.", hint: "Track socket-to-room mapping, handle join/leave/emit events", expectedTime: "30 min", topics: ["WebSocket", "Node.js"], testCases: [{ input: "user joins room, sends message", output: "broadcasted to room members" }], solutionApproach: "Room mapping, connection management, message routing" },
    { id: 7, type: "coding", difficulty: "medium", title: "API Response Cache", question: "Implement middleware that caches API responses based on request URL/method with configurable TTL.", hint: "Key by URL+method, store response body, check before handler", expectedTime: "25 min", topics: ["Node.js", "Caching"], testCases: [{ input: "GET /api/data", output: "cached response on subsequent calls" }], solutionApproach: "Cache store, key generation, TTL check, skip cache on mutation" },
    { id: 8, type: "coding", difficulty: "medium", title: "Background Job Queue", question: "Implement job queue system with delayed execution, retries, and worker processing using Redis or in-memory.", hint: "Queue with priorities, worker polling, retry with backoff", expectedTime: "35 min", topics: ["Node.js", "Queue"], testCases: [{ input: "job.add(data, {delay: 5000})", output: "processed after 5 seconds" }], solutionApproach: "Priority queue, delayed setTimeout, retry logic, worker loop" },
    { id: 9, type: "coding", difficulty: "medium", title: "Request Validator", question: "Build request body validation middleware supporting type checking, required fields, custom rules.", hint: "Schema defines field rules, validate each field, collect errors", expectedTime: "25 min", topics: ["Node.js", "Validation"], testCases: [{ input: "POST with invalid email", output: "400 with validation errors" }], solutionApproach: "Schema definition, type checking, regex validation, error collection" },
    { id: 10, type: "coding", difficulty: "medium", title: "SQL Query Builder", question: "Implement SQL query builder class supporting select, where, orderBy, limit, and toSQL() method.", hint: "Chain methods building internal state, generate SQL string", expectedTime: "30 min", topics: ["JavaScript", "SQL"], testCases: [{ input: "qb.select('*').from('users').where('id', 1).toSQL()", output: '"SELECT * FROM users WHERE id = 1"' }], solutionApproach: "Internal state object, chain methods, SQL generation" },
    { id: 11, type: "coding", difficulty: "medium", title: "OAuth2 Client", question: "Implement OAuth2 authorization code flow client with token exchange and refresh.", hint: "Generate state, redirect to auth server, exchange code for tokens", expectedTime: "35 min", topics: ["OAuth2", "Security"], testCases: [{ input: "authorization code callback", output: "access token + refresh token" }], solutionApproach: "State generation, redirect URL, token exchange POST, token storage" },
    { id: 12, type: "coding", difficulty: "medium", title: "GraphQL Schema Stitching", question: "Implement basic schema stitching that merges multiple GraphQL schemas into one.", hint: "Parse schemas, merge types and resolvers, handle conflicts", expectedTime: "40 min", topics: ["GraphQL"], testCases: [{ input: "schemas A and B", output: "merged schema with types from both" }], solutionApproach: "Schema parsing, type merging, resolver composition" },
    { id: 13, type: "coding", difficulty: "hard", title: "Distributed Lock", question: "Implement distributed lock using Redis with proper expiry, renewal, and deadlock prevention.", hint: "SET NX EX for atomic lock, Lua script for safe release", expectedTime: "35 min", topics: ["Redis", "Distributed Systems"], testCases: [{ input: "lock.acquire('resource1')", output: "true or false, auto-expires" }], solutionApproach: "Redis SET NX, unique token, Lua release, watchdog renewal" },
    { id: 14, type: "coding", difficulty: "hard", title: "Event Sourcing Store", question: "Build event sourcing system that stores events and can rebuild aggregate state by replaying.", hint: "Append events to stream, replay to build state, snapshot optimization", expectedTime: "45 min", topics: ["Backend", "Event Sourcing"], testCases: [{ input: "apply 3 events, rebuild state", output: "correct aggregate state" }], solutionApproach: "Event store, replay function, state reduction, snapshots" },
    { id: 15, type: "coding", difficulty: "hard", title: "Circuit Breaker Pattern", question: "Implement circuit breaker for API calls with closed/open/half-open states and failure threshold.", hint: "Track failures, trip on threshold, timeout, test with single call in half-open", expectedTime: "35 min", topics: ["Node.js", "Resilience"], testCases: [{ input: "5 failures in row", output: "circuit opens, fast fail" }], solutionApproach: "State machine, failure count, timeout, half-open test call" },
    { id: 16, type: "coding", difficulty: "hard", title: "Database Migration Runner", question: "Build migration system that runs SQL migrations in order, tracks applied migrations in table.", hint: "Read migration files, check which not applied, run in transaction", expectedTime: "40 min", topics: ["Database", "Migrations"], testCases: [{ input: "run pending migrations", output: "executed in order, recorded in migrations table" }], solutionApproach: "Migration registry, transaction runner, version tracking" },
    { id: 17, type: "coding", difficulty: "hard", title: "Pub/Sub Message Broker", question: "Implement in-memory pub/sub message broker with topics, subscriptions, and message persistence.", hint: "Topic registry, subscriber callbacks, message queue per subscription", expectedTime: "40 min", topics: ["Backend", "Messaging"], testCases: [{ input: "publish to topic with 2 subscribers", output: "both subscribers receive message" }], solutionApproach: "Topic map, subscription arrays, message routing, ack handling" },
    { id: 18, type: "coding", difficulty: "hard", title: "API Gateway", question: "Build API gateway with routing to microservices, authentication, rate limiting, and request aggregation.", hint: "Route table, middleware chain, service proxy, response combining", expectedTime: "50 min", topics: ["Backend", "Microservices"], testCases: [{ input: "/users -> user-service", output: "proxied with auth check" }], solutionApproach: "Route matching, middleware pipeline, service proxy" },
    { id: 19, type: "coding", difficulty: "hard", title: "Streaming CSV Parser", question: "Implement streaming CSV parser that handles large files without loading all into memory, supports backpressure.", hint: "Transform stream, parse chunks, emit rows, handle quotes/newlines", expectedTime: "40 min", topics: ["Node.js", "Streams"], testCases: [{ input: "1GB CSV file", output: "parsed row by row without OOM" }], solutionApproach: "Transform stream, buffer management, CSV state machine" },
    { id: 20, type: "coding", difficulty: "hard", title: "Consistent Hashing Ring", question: "Implement consistent hashing ring for distributed caching with virtual nodes and add/remove node rebalancing.", hint: "Hash ring sorted array, find clockwise node, virtual nodes for balance", expectedTime: "45 min", topics: ["Backend", "Distributed Systems"], testCases: [{ input: "add node to ring", output: "minimal keys move to new node" }], solutionApproach: "Sorted hash ring, binary search for node, virtual node expansion" }
  ],

  "Full Stack Developer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Todo List App", question: "Build full-stack todo app: Frontend (HTML/JS), Backend API (REST), Data persistence (file or DB).", hint: "Frontend renders list, calls API for CRUD, backend stores data", expectedTime: "30 min", topics: ["Full Stack", "CRUD"], testCases: [{ input: "add todo via form", output: "saved, appears in list" }], solutionApproach: "HTML+JS frontend, REST API, JSON storage" },
    { id: 2, type: "coding", difficulty: "easy", title: "Real-time Chat", question: "Create chat application with Socket.io or WebSockets: message broadcasting, user list, simple UI.", hint: "Socket connection, emit messages, broadcast to all clients", expectedTime: "30 min", topics: ["WebSocket", "Real-time"], testCases: [{ input: "user sends message", output: "received by all connected users" }], solutionApproach: "WebSocket server, event handlers, HTML message display" },
    { id: 3, type: "coding", difficulty: "easy", title: "User Auth System", question: "Implement login/register with JWT: frontend forms, backend validation, token storage, protected routes.", hint: "Hash passwords with bcrypt, sign JWT, store in localStorage/httpOnly cookie", expectedTime: "35 min", topics: ["Authentication", "Full Stack"], testCases: [{ input: "register -> login", output: "token issued, protected route accessible" }], solutionApproach: "bcrypt hashing, JWT sign/verify, middleware protection" },
    { id: 4, type: "coding", difficulty: "medium", title: "Blog with Comments", question: "Build blog system: posts (CRUD), comments on posts, user authentication, simple responsive design.", hint: "Relational data model, nested API routes, server-side rendering or API", expectedTime: "45 min", topics: ["Full Stack", "Database"], testCases: [{ input: "create post, add comment", output: "post displays with comments" }], solutionApproach: "Post/Comment models, REST routes, auth middleware" },
    { id: 5, type: "coding", difficulty: "medium", title: "File Upload with Preview", question: "Create file upload: drag-drop zone, progress bar, preview (images), backend storage, file list.", hint: "Drag events, FileReader for preview, FormData for upload, multer backend", expectedTime: "40 min", topics: ["Full Stack", "File Upload"], testCases: [{ input: "drop image file", output: "preview shows, uploads, saved" }], solutionApproach: "Drag API, FileReader preview, FormData POST, multer save" },
    { id: 6, type: "coding", difficulty: "medium", title: "E-commerce Cart", question: "Build shopping cart: add/remove items, quantity update, cart total calculation, persistent storage.", hint: "Session/local storage or DB cart, calculate totals, update quantities", expectedTime: "45 min", topics: ["Full Stack", "State Management"], testCases: [{ input: "add 2 items, update qty, remove 1", output: "cart reflects changes" }], solutionApproach: "Cart state, localStorage or DB, quantity handlers, total calc" },
    { id: 7, type: "coding", difficulty: "medium", title: "Search with Filters", question: "Implement product search with filters (category, price range, rating) and sorting, pagination.", hint: "Query params for filters, backend filtering logic, pagination metadata", expectedTime: "40 min", topics: ["Full Stack", "Search"], testCases: [{ input: "search 'laptop', filter price < 1000", output: "filtered results, paginated" }], solutionApproach: "Query parsing, DB filters, pagination skip/limit" },
    { id: 8, type: "coding", difficulty: "medium", title: "Dashboard with Charts", question: "Create analytics dashboard: backend aggregation API, frontend charts (Chart.js/D3), date range picker.", hint: "API returns aggregated data, frontend renders charts, date filter changes data", expectedTime: "45 min", topics: ["Full Stack", "Analytics"], testCases: [{ input: "select date range", output: "charts update with new data" }], solutionApproach: "Aggregation queries, chart library integration, date handling" },
    { id: 9, type: "coding", difficulty: "medium", title: "Form Builder", question: "Build dynamic form builder: drag-drop fields, edit properties, preview form, submit to API.", hint: "Field types schema, drag-drop reorder, generate form from config", expectedTime: "50 min", topics: ["Full Stack", "UI"], testCases: [{ input: "drag text field, set label, preview", output: "rendered form field" }], solutionApproach: "Field config array, drag-drop, dynamic form generation" },
    { id: 10, type: "coding", difficulty: "medium", title: "Notification System", question: "Build notification system: backend triggers, real-time delivery (Socket.io), notification bell UI with badge.", hint: "Event-driven notifications, socket emission, frontend notification center", expectedTime: "45 min", topics: ["Full Stack", "Real-time"], testCases: [{ input: "event triggers notification", output: "real-time update, badge increments" }], solutionApproach: "Notification model, socket emission, UI component" },
    { id: 11, type: "coding", difficulty: "medium", title: "URL Shortener", question: "Create URL shortener: input long URL, generate short code, redirect to original, click analytics.", hint: "Hash or random code generation, redirect lookup, click tracking", expectedTime: "35 min", topics: ["Full Stack", "Web"], testCases: [{ input: "shorten google.com", output: "short.url/abc123 redirects to google" }], solutionApproach: "Code generation, URL mapping, redirect handler" },
    { id: 12, type: "coding", difficulty: "medium", title: "Image Gallery", question: "Build image gallery: upload multiple images, thumbnail generation, lightbox view, delete images.", hint: "Multi-file upload, image processing (sharp), grid layout, modal", expectedTime: "50 min", topics: ["Full Stack", "Media"], testCases: [{ input: "upload 5 images", output: "thumbnails displayed, lightbox works" }], solutionApproach: "Multi-upload, thumbnail generation, modal lightbox" },
    { id: 13, type: "coding", difficulty: "hard", title: "Collaborative Editor", question: "Build collaborative text editor: operational transforms or CRDT for conflict resolution, cursor positions, presence.", hint: "WebSocket for sync, operational transform algorithm, cursor tracking", expectedTime: "60 min", topics: ["Full Stack", "Collaboration"], testCases: [{ input: "two users type simultaneously", output: "merged without conflicts" }], solutionApproach: "OT/CRDT algorithm, WebSocket sync, presence system" },
    { id: 14, type: "coding", difficulty: "hard", title: "Social Feed", question: "Create social feed: posts, likes, comments, infinite scroll, real-time updates, image uploads.", hint: "Pagination cursor-based, socket for real-time, nested resources", expectedTime: "55 min", topics: ["Full Stack", "Social"], testCases: [{ input: "scroll feed, new post arrives", output: "infinite scroll loads, new post appears" }], solutionApproach: "Cursor pagination, WebSocket events, nested API routes" },
    { id: 15, type: "coding", difficulty: "hard", title: "Booking System", question: "Build appointment booking: available slots calculation, booking with conflict prevention, email confirmation.", hint: "Time slot generation, booking transaction, conflict check", expectedTime: "55 min", topics: ["Full Stack", "Booking"], testCases: [{ input: "book slot at 2pm", output: "confirmed, slot no longer available" }], solutionApproach: "Slot algorithm, atomic booking, confirmation email" },
    { id: 16, type: "coding", difficulty: "hard", title: "Video Call App", question: "Create 1-on-1 video calling with WebRTC: signaling server, video/audio streams, mute/leave controls.", hint: "WebRTC peer connection, signaling via socket, STUN/TURN servers", expectedTime: "60 min", topics: ["Full Stack", "WebRTC"], testCases: [{ input: "call initiated", output: "video streams connected" }], solutionApproach: "Signaling server, WebRTC negotiation, stream handling" },
    { id: 17, type: "coding", difficulty: "hard", title: "Payment Integration", question: "Integrate Stripe: checkout page, payment intent creation, webhook handling for confirmation.", hint: "Stripe.js frontend, payment intent API, webhook endpoint", expectedTime: "50 min", topics: ["Full Stack", "Payments"], testCases: [{ input: "complete checkout", output: "payment processed, webhook received" }], solutionApproach: "Stripe elements, payment intent, webhook signature verify" },
    { id: 18, type: "coding", difficulty: "hard", title: "CI/CD Pipeline Viewer", question: "Build CI/CD dashboard: pipeline configuration, run history, real-time logs, status indicators.", hint: "Pipeline model, step execution, log streaming via WebSocket", expectedTime: "60 min", topics: ["Full Stack", "DevOps"], testCases: [{ input: "pipeline runs", output: "real-time log updates, status shown" }], solutionApproach: "Pipeline runner, log streaming, status tracking" },
    { id: 19, type: "coding", difficulty: "hard", title: "Map Location App", question: "Create location-based app: Google/Mapbox maps, pins, geolocation, location search, directions.", hint: "Map API integration, geolocation API, geocoding, markers", expectedTime: "55 min", topics: ["Full Stack", "Maps"], testCases: [{ input: "search 'coffee', click pin", output: "nearby results, marker shown, details" }], solutionApproach: "Map library, geocoding service, marker management" },
    { id: 20, type: "coding", difficulty: "hard", title: "Admin Dashboard", question: "Build admin dashboard: role-based access, user management, CRUD for all entities, audit logs.", hint: "RBAC middleware, admin layout, resource management", expectedTime: "60 min", topics: ["Full Stack", "Admin"], testCases: [{ input: "admin creates user", output: "user created, audit logged" }], solutionApproach: "RBAC system, admin routes, audit logging" }
  ],

  "DevOps Engineer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Log Parser", question: "Write script to parse web server logs (Nginx/Apache format) and extract: top 10 IPs, status codes count, average response time.", hint: "Regex to parse log lines, count occurrences, sort by frequency", expectedTime: "20 min", topics: ["Scripting", "Parsing"], testCases: [{ input: "1000 log lines", output: "stats report" }], solutionApproach: "Regex parsing, hash maps for counting, sorting" },
    { id: 2, type: "coding", difficulty: "easy", title: "Config File Validator", question: "Create YAML/JSON config validator that checks required fields, types, and value ranges.", hint: "Schema definition, validation rules, error collection", expectedTime: "20 min", topics: ["Configuration", "Validation"], testCases: [{ input: "config with missing required field", output: "validation error" }], solutionApproach: "Schema parsing, field validation, type checking" },
    { id: 3, type: "coding", difficulty: "easy", title: "Port Scanner", question: "Build TCP port scanner that checks if common ports (22, 80, 443, 3306, etc.) are open on given host.", hint: "Socket connection attempts with timeout, report open/closed/filtered", expectedTime: "15 min", topics: ["Networking", "Security"], testCases: [{ input: "scan localhost", output: "open ports list" }], solutionApproach: "Socket attempts, timeout handling, result collection" },
    { id: 4, type: "coding", difficulty: "easy", title: "Health Check Script", question: "Write health check script that pings HTTP endpoints, checks response code/time, alerts on failure.", hint: "HTTP requests, timeout, retry logic, notification on failure", expectedTime: "20 min", topics: ["Monitoring", "Scripting"], testCases: [{ input: "endpoint returns 500", output: "alert triggered" }], solutionApproach: "HTTP client, status check, retry, alert on failure" },
    { id: 5, type: "coding", difficulty: "medium", title: "Docker Compose Generator", question: "Build tool that generates docker-compose.yml from service definitions with networking, volumes, env vars.", hint: "Input service configs, output YAML, handle dependencies", expectedTime: "30 min", topics: ["Docker", "YAML"], testCases: [{ input: "web+db service config", output: "valid docker-compose.yml" }], solutionApproach: "Service model, YAML generation, dependency ordering" },
    { id: 6, type: "coding", difficulty: "medium", title: "SSH Key Manager", question: "Create SSH key management tool: generate keys, add to agent, copy to remote servers, rotation.", hint: "ssh-keygen execution, ssh-copy-id, agent forwarding", expectedTime: "30 min", topics: ["SSH", "Security"], testCases: [{ input: "generate and deploy key", output: "key created, copied to server" }], solutionApproach: "Key generation subprocess, SSH operations" },
    { id: 7, type: "coding", difficulty: "medium", title: "Certificate Expiry Checker", question: "Build SSL certificate expiry monitor that checks domains and alerts when certs expire within N days.", hint: "TLS connection to get cert, parse notAfter date, compare to threshold", expectedTime: "25 min", topics: ["SSL", "Monitoring"], testCases: [{ input: "cert expires in 7 days, threshold=30", output: "alert sent" }], solutionApproach: "TLS socket, certificate extraction, date comparison" },
    { id: 8, type: "coding", difficulty: "medium", title: "Terraform Plan Parser", question: "Parse terraform plan JSON to extract resources being created/modified/destroyed with cost estimates.", hint: "JSON parsing, resource categorization, change type extraction", expectedTime: "30 min", topics: ["Terraform", "IaC"], testCases: [{ input: "terraform plan -out=plan.json", output: "summary of changes" }], solutionApproach: "JSON parsing, resource counting, change analysis" },
    { id: 9, type: "coding", difficulty: "medium", title: "Kubernetes Resource Monitor", question: "Build pod resource usage monitor using K8s API that reports CPU/memory usage by namespace.", hint: "K8s client, metrics API, resource aggregation", expectedTime: "35 min", topics: ["Kubernetes", "Monitoring"], testCases: [{ input: "get pod metrics", output: "CPU/memory by namespace" }], solutionApproach: "K8s API client, metrics extraction, aggregation" },
    { id: 10, type: "coding", difficulty: "medium", title: "Git Repository Analyzer", question: "Analyze git repo: contributor stats, commit frequency, file change frequency, branch analysis.", hint: "Git log parsing, aggregation by author/file, time series analysis", expectedTime: "35 min", topics: ["Git", "Analytics"], testCases: [{ input: "analyze repo", output: "contributor stats, commit heatmap" }], solutionApproach: "Git command execution, output parsing, statistics" },
    { id: 11, type: "coding", difficulty: "medium", title: "Environment Sync Tool", question: "Create tool to sync environment variables between environments (dev/staging/prod) with encryption for secrets.", hint: "Environment comparison, selective sync, encryption for sensitive values", expectedTime: "35 min", topics: ["DevOps", "Security"], testCases: [{ input: "sync dev to staging", output: "env vars copied, secrets encrypted" }], solutionApproach: "Env file parsing, diff calculation, secure sync" },
    { id: 12, type: "coding", difficulty: "medium", title: "Backup Rotation Script", question: "Implement backup rotation with daily/weekly/monthly retention policies and automatic cleanup.", hint: "Date-based file sorting, retention rules, deletion of old backups", expectedTime: "30 min", topics: ["Backup", "Scripting"], testCases: [{ input: "30 daily backups exist", output: "old ones removed per policy" }], solutionApproach: "File date extraction, retention logic, cleanup" },
    { id: 13, type: "coding", difficulty: "hard", title: "Load Testing Tool", question: "Build HTTP load testing tool: configurable concurrent users, ramp-up, report latency percentiles and RPS.", hint: "Concurrent request workers, latency tracking, percentile calculation", expectedTime: "40 min", topics: ["Testing", "Performance"], testCases: [{ input: "100 concurrent users, 10s test", output: "latency histogram, RPS" }], solutionApproach: "Worker pool, request timing, statistics aggregation" },
    { id: 14, type: "coding", difficulty: "hard", title: "Log Aggregator", question: "Implement centralized log aggregator that collects logs from multiple sources, parses, indexes, and queries.", hint: "File tailing, parsing, storage, search index, query API", expectedTime: "45 min", topics: ["Logging", "ELK"], testCases: [{ input: "search 'ERROR' last hour", output: "matching log entries" }], solutionApproach: "Log collection, parsing pipeline, search index" },
    { id: 15, type: "coding", difficulty: "hard", title: "Blue-Green Deployment Script", question: "Create deployment script that switches traffic between blue and green environments with health checks.", hint: "Health check before switch, atomic traffic cutover, rollback on failure", expectedTime: "40 min", topics: ["Deployment", "CI/CD"], testCases: [{ input: "deploy green, health check passes", output: "traffic switched to green" }], solutionApproach: "Deployment verification, health check, traffic routing" },
    { id: 16, type: "coding", difficulty: "hard", title: "Chaos Monkey", question: "Implement chaos engineering tool that randomly terminates instances/pods to test system resilience.", hint: "Random selection, termination API, safety checks, schedule", expectedTime: "40 min", topics: ["Chaos Engineering", "Resilience"], testCases: [{ input: "run chaos on ASG", output: "random instance terminated" }], solutionApproach: "Resource listing, random selection, termination, monitoring" },
    { id: 17, type: "coding", difficulty: "hard", title: "Multi-Cloud Deployer", question: "Build abstraction layer to deploy applications to AWS/Azure/GCP with common interface.", hint: "Provider abstraction, credential management, resource mapping", expectedTime: "50 min", topics: ["Multi-Cloud", "IaC"], testCases: [{ input: "deploy to AWS and GCP", output: "app deployed on both" }], solutionApproach: "Provider interface, credential handling, deployment logic" },
    { id: 18, type: "coding", difficulty: "hard", title: "Service Mesh Config", question: "Generate Istio/Linkerd service mesh configuration for mTLS, traffic splitting, and circuit breaking.", hint: "YAML generation for VirtualService, DestinationRule, mTLS policy", expectedTime: "45 min", topics: ["Service Mesh", "Istio"], testCases: [{ input: "traffic split 90/10", output: "valid Istio VirtualService" }], solutionApproach: "Service mesh API, YAML generation, policy config" },
    { id: 19, type: "coding", difficulty: "hard", title: "Secret Rotation Automation", question: "Automate secret rotation: generate new secret, update all services, verify, retire old secret.", hint: "Secret generation, coordinated update, health verification, cleanup", expectedTime: "45 min", topics: ["Security", "Automation"], testCases: [{ input: "rotate DB password", output: "new password, services updated" }], solutionApproach: "Secret generation, service updates, verification, cleanup" },
    { id: 20, type: "coding", difficulty: "hard", title: "Disaster Recovery Orchestrator", question: "Build DR orchestration tool: backup verification, failover decision, DNS cutover, data consistency checks.", hint: "Health assessment, automated decision tree, DNS API, verification", expectedTime: "55 min", topics: ["Disaster Recovery", "Automation"], testCases: [{ input: "primary region down", output: "failover to secondary initiated" }], solutionApproach: "Health monitoring, failover logic, DNS management, verification" }
  ],

  "Senior Software Engineer Coding": [
    { id: 1, type: "coding", difficulty: "medium", title: "Design LRU Cache", question: "Design and implement LRU Cache with O(1) get and put operations.", hint: "HashMap + Doubly Linked List", expectedTime: "20 min", topics: ["DSA", "Design"], testCases: [{ input: "put(1,1), put(2,2), get(1), put(3,3), get(2)", output: "1, -1" }], solutionApproach: "HashMap for O(1) access, DLL for order" },
    { id: 2, type: "coding", difficulty: "medium", title: "Design Rate Limiter", question: "Design rate limiter for API Gateway supporting different algorithms.", hint: "Token bucket or sliding window", expectedTime: "25 min", topics: ["System Design", "Algorithms"], testCases: [{ input: "100 requests in 1 min, limit=60", output: "40 blocked" }], solutionApproach: "Token bucket with refill rate" },
    { id: 3, type: "coding", difficulty: "medium", title: "Design URL Shortener", question: "Design scalable URL shortener like bit.ly with analytics.", hint: "Base62 encoding, distributed counter, analytics DB", expectedTime: "30 min", topics: ["System Design"], testCases: [{ input: "shorten 1M URLs", output: "unique short codes" }], solutionApproach: "Base62 hash, counter service, redirect handler" },
    { id: 4, type: "coding", difficulty: "hard", title: "Design Message Queue", question: "Design message queue like Kafka/RabbitMQ with pub/sub and persistence.", hint: "Log-based storage, consumer groups, offset tracking", expectedTime: "40 min", topics: ["System Design", "Messaging"], testCases: [{ input: "publish 1000 messages", output: "delivered to subscribers" }], solutionApproach: "Append-only log, consumer offsets, partitions" },
    { id: 5, type: "coding", difficulty: "hard", title: "Design Distributed Cache", question: "Design distributed caching system like Redis Cluster with sharding.", hint: "Consistent hashing, replication, eviction policies", expectedTime: "45 min", topics: ["System Design", "Caching"], testCases: [{ input: "3 nodes, add 1 node", output: "minimal key movement" }], solutionApproach: "Consistent hashing ring, virtual nodes, replication" },
    { id: 6, type: "coding", difficulty: "hard", title: "Design Web Crawler", question: "Design distributed web crawler that respects robots.txt and rate limits.", hint: "URL frontier, politeness, deduplication", expectedTime: "40 min", topics: ["System Design", "Crawler"], testCases: [{ input: "crawl 1000 pages", output: "indexed content" }], solutionApproach: "Priority queue, bloom filter, rate limiter per host" },
    { id: 7, type: "coding", difficulty: "hard", title: "Design Key-Value Store", question: "Design consistent, available key-value store with replication.", hint: "Quorum, vector clocks, conflict resolution", expectedTime: "50 min", topics: ["System Design", "Database"], testCases: [{ input: "write to 3 nodes, 1 fails", output: "still available" }], solutionApproach: "Quorum writes, hinted handoff, read repair" },
    { id: 8, type: "coding", difficulty: "hard", title: "Design Load Balancer", question: "Design L7 load balancer with health checks and sticky sessions.", hint: "Health polling, connection draining, algorithms", expectedTime: "45 min", topics: ["System Design", "Networking"], testCases: [{ input: "backend fails", output: "traffic rerouted" }], solutionApproach: "Health checks, weighted routing, session affinity" },
    { id: 9, type: "coding", difficulty: "hard", title: "Design Search Autocomplete", question: "Design search autocomplete system with ranking and personalization.", hint: "Trie, popularity scores, sharding by prefix", expectedTime: "40 min", topics: ["System Design", "Search"], testCases: [{ input: "type 'app'", output: "['apple', 'application', ...]" }], solutionApproach: "Trie with weights, prefix sharding, caching" },
    { id: 10, type: "coding", difficulty: "hard", title: "Design Notification System", question: "Design multi-channel notification system (push, email, SMS).", hint: "Priority queues, templates, delivery tracking", expectedTime: "45 min", topics: ["System Design", "Notifications"], testCases: [{ input: "send 1M notifications", output: "delivered, tracked" }], solutionApproach: "Priority queues, provider adapters, retry logic" },
    { id: 11, type: "coding", difficulty: "hard", title: "Design Video Streaming", question: "Design YouTube-like video streaming with adaptive bitrate.", hint: "CDN, transcoding, DASH/HLS protocols", expectedTime: "50 min", topics: ["System Design", "Video"], testCases: [{ input: "upload video", output: "multiple resolutions served" }], solutionApproach: "Transcoding pipeline, CDN, manifest files" },
    { id: 12, type: "coding", difficulty: "hard", title: "Design Ride Sharing", question: "Design Uber-like ride sharing with matching and pricing.", hint: "Geohash, supply-demand, route optimization", expectedTime: "55 min", topics: ["System Design", "Geo"], testCases: [{ input: "rider request, driver nearby", output: "matched, ETA shown" }], solutionApproach: "Geospatial index, matching algorithm, surge pricing" },
    { id: 13, type: "coding", difficulty: "hard", title: "Design Chat Application", question: "Design WhatsApp-like chat with end-to-end encryption.", hint: "WebSocket, message sync, E2EE protocol", expectedTime: "50 min", topics: ["System Design", "Chat"], testCases: [{ input: "send message offline", output: "delivered when online" }], solutionApproach: "Message queue, sync protocol, E2EE keys" },
    { id: 14, type: "coding", difficulty: "hard", title: "Design Payment System", question: "Design payment processing with idempotency and fraud detection.", hint: "Idempotency keys, ledger, risk scoring", expectedTime: "55 min", topics: ["System Design", "Payments"], testCases: [{ input: "double submit payment", output: "single charge only" }], solutionApproach: "Idempotency, double-entry, risk engine" },
    { id: 15, type: "coding", difficulty: "hard", title: "Design Social Feed", question: "Design Facebook-like news feed generation.", hint: "Fan-out on write vs read, ranking algorithm", expectedTime: "50 min", topics: ["System Design", "Feed"], testCases: [{ input: "post created", output: "appears in followers feeds" }], solutionApproach: "Push/pull hybrid, ranking service, caching" },
    { id: 16, type: "coding", difficulty: "hard", title: "Design Code Collaboration", question: "Design GitHub-like code collaboration with version control.", hint: "Git storage model, PR workflow, merge algorithms", expectedTime: "55 min", topics: ["System Design", "Git"], testCases: [{ input: "push commit", output: "stored, indexed" }], solutionApproach: "Object storage, ref management, merge logic" },
    { id: 17, type: "coding", difficulty: "hard", title: "Design Recommendation Engine", question: "Design Netflix-like recommendation system.", hint: "Collaborative filtering, content-based, feature store", expectedTime: "60 min", topics: ["System Design", "ML"], testCases: [{ input: "user history", output: "personalized recommendations" }], solutionApproach: "Feature engineering, model serving, A/B testing" },
    { id: 18, type: "coding", difficulty: "hard", title: "Design Multi-Tenant SaaS", question: "Design multi-tenant SaaS with data isolation and scaling.", hint: "Tenant ID sharding, schema per tenant vs shared", expectedTime: "50 min", topics: ["System Design", "SaaS"], testCases: [{ input: "1000 tenants, 1M users each", output: "isolated, performant" }], solutionApproach: "Tenant routing, resource limits, schema design" },
    { id: 19, type: "coding", difficulty: "hard", title: "Design Logging Pipeline", question: "Design centralized logging with search and analytics.", hint: "Log aggregation, indexing, retention policies", expectedTime: "45 min", topics: ["System Design", "Logging"], testCases: [{ input: "1M logs/sec", output: "searchable in real-time" }], solutionApproach: "Buffer, index, search engine, archival" },
    { id: 20, type: "coding", difficulty: "hard", title: "Design E-Commerce Platform", question: "Design Amazon-like e-commerce with inventory and checkout.", hint: "Inventory management, cart, checkout flow", expectedTime: "60 min", topics: ["System Design", "E-Commerce"], testCases: [{ input: "add to cart, checkout", output: "order created, inventory updated" }], solutionApproach: "Cart service, inventory locks, order pipeline" }
  ],

  "Data Scientist Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Data Cleaning Pipeline", question: "Implement data cleaning pipeline handling missing values, outliers, duplicates.", hint: "Pandas fillna, z-score for outliers, drop_duplicates", expectedTime: "20 min", topics: ["Data Cleaning", "Pandas"], testCases: [{ input: "dirty dataset", output: "clean dataset" }], solutionApproach: "Fill missing, remove outliers, deduplicate" },
    { id: 2, type: "coding", difficulty: "easy", title: "Exploratory Data Analysis", question: "Write EDA function generating summary stats, distributions, correlations.", hint: "Describe, hist, corr matrix, missing value analysis", expectedTime: "25 min", topics: ["EDA", "Statistics"], testCases: [{ input: "sales data", output: "stats report, visualizations" }], solutionApproach: "Summary stats, plots, correlation analysis" },
    { id: 3, type: "coding", difficulty: "medium", title: "Linear Regression", question: "Implement linear regression with gradient descent from scratch.", hint: "Initialize weights, compute gradients, update iteratively", expectedTime: "30 min", topics: ["ML", "Regression"], testCases: [{ input: "housing data", output: "predictions, R2 score" }], solutionApproach: "Gradient descent, MSE loss, regularization" },
    { id: 4, type: "coding", difficulty: "medium", title: "K-Means Clustering", question: "Implement K-Means algorithm with k-means++ initialization.", hint: "Distance calculation, centroid update, convergence check", expectedTime: "35 min", topics: ["ML", "Clustering"], testCases: [{ input: "2D data, k=3", output: "3 clusters" }], solutionApproach: "K-means++, Lloyd's algorithm, silhouette score" },
    { id: 5, type: "coding", difficulty: "medium", title: "Logistic Regression", question: "Implement logistic regression with sigmoid and cross-entropy loss.", hint: "Sigmoid function, binary cross-entropy, gradient descent", expectedTime: "30 min", topics: ["ML", "Classification"], testCases: [{ input: "binary data", output: "accuracy, ROC AUC" }], solutionApproach: "Sigmoid, BCE loss, gradient update, predict proba" },
    { id: 6, type: "coding", difficulty: "medium", title: "Decision Tree", question: "Implement decision tree classifier with information gain.", hint: "Entropy calculation, best split, recursive partitioning", expectedTime: "40 min", topics: ["ML", "Trees"], testCases: [{ input: "iris data", output: "accuracy, feature importance" }], solutionApproach: "Information gain, recursive split, pruning" },
    { id: 7, type: "coding", difficulty: "medium", title: "PCA Dimensionality Reduction", question: "Implement PCA for dimensionality reduction from scratch.", hint: "Covariance matrix, eigen decomposition, projection", expectedTime: "35 min", topics: ["ML", "Dimensionality Reduction"], testCases: [{ input: "high-dim data", output: "reduced dimensions" }], solutionApproach: "Center data, covariance, eigendecomposition, transform" },
    { id: 8, type: "coding", difficulty: "medium", title: "Time Series Forecasting", question: "Build ARIMA or exponential smoothing forecaster.", hint: "Differencing, ACF/PACF, parameter tuning", expectedTime: "40 min", topics: ["Time Series"], testCases: [{ input: "monthly sales", output: "12-month forecast" }], solutionApproach: "Stationarity, model fitting, prediction intervals" },
    { id: 9, type: "coding", difficulty: "hard", title: "Neural Network MLP", question: "Implement multi-layer perceptron with backpropagation.", hint: "Forward pass, backward pass, weight updates", expectedTime: "50 min", topics: ["ML", "Neural Networks"], testCases: [{ input: "MNIST", output: "90%+ accuracy" }], solutionApproach: "Layers, activations, backprop, SGD" },
    { id: 10, type: "coding", difficulty: "hard", title: "Collaborative Filtering", question: "Implement user-user or item-item collaborative filtering.", hint: "Similarity matrix, rating prediction, top-N", expectedTime: "45 min", topics: ["ML", "Recommender"], testCases: [{ input: "user-item ratings", output: "recommendations" }], solutionApproach: "Cosine similarity, neighborhood, prediction" },
    { id: 11, type: "coding", difficulty: "hard", title: "Gradient Boosting", question: "Implement gradient boosting for regression from scratch.", hint: "Sequential trees, residual fitting, shrinkage", expectedTime: "50 min", topics: ["ML", "Ensemble"], testCases: [{ input: "regression data", output: "low RMSE" }], solutionApproach: "Base learner, residuals, additive model" },
    { id: 12, type: "coding", difficulty: "hard", title: "Cross-Validation", question: "Implement k-fold cross-validation with stratification.", hint: "Data splitting, model training, aggregation", expectedTime: "30 min", topics: ["ML", "Validation"], testCases: [{ input: "k=5 folds", output: "avg score, std" }], solutionApproach: "Stratified split, train/test loop, metrics aggregation" },
    { id: 13, type: "coding", difficulty: "hard", title: "Feature Engineering", question: "Build automated feature engineering pipeline.", hint: "Polynomial, interactions, binning, encoding", expectedTime: "40 min", topics: ["Feature Engineering"], testCases: [{ input: "raw features", output: "engineered features" }], solutionApproach: "Transformer classes, pipeline, selection" },
    { id: 14, type: "coding", difficulty: "hard", title: "Hyperparameter Tuning", question: "Implement grid search or random search with CV.", hint: "Parameter grid, parallel execution, best selection", expectedTime: "35 min", topics: ["ML", "Optimization"], testCases: [{ input: "parameter space", output: "best params" }], solutionApproach: "Grid generation, CV loop, score tracking" },
    { id: 15, type: "coding", difficulty: "hard", title: "Anomaly Detection", question: "Build anomaly detection using Isolation Forest or LOF.", hint: "Isolation trees, path length, anomaly scoring", expectedTime: "45 min", topics: ["ML", "Anomaly"], testCases: [{ input: "network traffic", output: "anomalies flagged" }], solutionApproach: "Tree building, path length, threshold" },
    { id: 16, type: "coding", difficulty: "hard", title: "Text Classification", question: "Implement Naive Bayes text classifier.", hint: "TF-IDF, class priors, conditional probabilities", expectedTime: "35 min", topics: ["NLP", "Classification"], testCases: [{ input: "news articles", output: "category predictions" }], solutionApproach: "Vectorization, probability calculation, prediction" },
    { id: 17, type: "coding", difficulty: "hard", title: "Association Rules", question: "Implement Apriori algorithm for frequent itemsets.", hint: "Candidate generation, support counting, pruning", expectedTime: "45 min", topics: ["ML", "Association"], testCases: [{ input: "transaction data", output: "association rules" }], solutionApproach: "Join, prune, count, generate rules" },
    { id: 18, type: "coding", difficulty: "hard", title: "Survival Analysis", question: "Implement Kaplan-Meier estimator for survival probability.", hint: "Event times, censoring, survival function", expectedTime: "40 min", topics: ["Statistics", "Survival"], testCases: [{ input: "patient data", output: "survival curves" }], solutionApproach: "KM calculation, confidence intervals, plotting" },
    { id: 19, type: "coding", difficulty: "hard", title: "A/B Testing", question: "Implement A/B test analysis with statistical significance.", hint: "T-test, power analysis, effect size", expectedTime: "35 min", topics: ["Statistics", "Experimentation"], testCases: [{ input: "control vs treatment", output: "p-value, significant?" }], solutionApproach: "Metric calculation, statistical test, interpretation" },
    { id: 20, type: "coding", difficulty: "hard", title: "Pipeline Orchestration", question: "Build ML pipeline with data validation, training, evaluation.", hint: "DAG, step dependencies, artifact tracking", expectedTime: "50 min", topics: ["MLOps", "Pipeline"], testCases: [{ input: "data -> model", output: "trained model, metrics" }], solutionApproach: "Step definition, execution order, result tracking" }
  ],

  "Mobile App Developer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Todo App (React Native/Flutter)", question: "Build mobile todo app with add, toggle, delete, persist in AsyncStorage/local storage.", hint: "State management, storage API, list rendering", expectedTime: "25 min", topics: ["Mobile", "React Native"], testCases: [{ input: "add todo, close app, reopen", output: "todo persisted" }], solutionApproach: "Component state, storage persistence, list UI" },
    { id: 2, type: "coding", difficulty: "easy", title: "Login Screen", question: "Create login screen with validation, API integration, error handling.", hint: "Form validation, fetch API, loading states", expectedTime: "20 min", topics: ["Mobile", "UI"], testCases: [{ input: "valid credentials", output: "navigate to home" }], solutionApproach: "Input fields, validation, API call, navigation" },
    { id: 3, type: "coding", difficulty: "medium", title: "Camera Integration", question: "Implement camera capture with preview and upload to cloud storage.", hint: "Camera API, image picker, upload handling", expectedTime: "30 min", topics: ["Mobile", "Camera"], testCases: [{ input: "take photo, upload", output: "photo stored in cloud" }], solutionApproach: "Permissions, camera launch, image processing, upload" },
    { id: 4, type: "coding", difficulty: "medium", title: "Push Notifications", question: "Implement push notification handling with deep linking.", hint: "FCM/APNS setup, notification handlers, deep links", expectedTime: "30 min", topics: ["Mobile", "Notifications"], testCases: [{ input: "notification tapped", output: "open specific screen" }], solutionApproach: "Token registration, message handling, navigation" },
    { id: 5, type: "coding", difficulty: "medium", title: "Offline Sync", question: "Build offline-first app with local SQLite and server sync.", hint: "SQLite, sync queue, conflict resolution", expectedTime: "40 min", topics: ["Mobile", "Offline"], testCases: [{ input: "create offline, go online", output: "syncs to server" }], solutionApproach: "Local DB, change tracking, sync logic" },
    { id: 6, type: "coding", difficulty: "medium", title: "Geolocation Tracker", question: "Implement location tracking with background updates and geofencing.", hint: "Geolocation API, background tasks, geofence triggers", expectedTime: "35 min", topics: ["Mobile", "Location"], testCases: [{ input: "enter geofence", output: "trigger notification" }], solutionApproach: "Location permissions, tracking, geofence monitoring" },
    { id: 7, type: "coding", difficulty: "medium", title: "Chat Interface", question: "Build chat UI with messages list, input, real-time updates.", hint: "FlatList, WebSocket, keyboard handling", expectedTime: "35 min", topics: ["Mobile", "UI"], testCases: [{ input: "send message", output: "appears in list" }], solutionApproach: "Message list, input field, real-time sync" },
    { id: 8, type: "coding", difficulty: "medium", title: "Biometric Auth", question: "Implement fingerprint/Face ID authentication.", hint: "Biometric prompt, secure storage, fallback PIN", expectedTime: "25 min", topics: ["Mobile", "Security"], testCases: [{ input: "scan fingerprint", output: "auth success" }], solutionApproach: "Biometric API, credential storage, fallback" },
    { id: 9, type: "coding", difficulty: "hard", title: "Maps Integration", question: "Build map with markers, directions, and location search.", hint: "Map SDK, geocoding, routing API", expectedTime: "45 min", topics: ["Mobile", "Maps"], testCases: [{ input: "search location", output: "show marker, route" }], solutionApproach: "Map component, search integration, directions" },
    { id: 10, type: "coding", difficulty: "hard", title: "Video Player", question: "Implement custom video player with controls and playlists.", hint: "Video component, custom controls, playlist management", expectedTime: "45 min", topics: ["Mobile", "Media"], testCases: [{ input: "play video, switch quality", output: "adaptive streaming" }], solutionApproach: "Video playback, UI controls, quality switching" },
    { id: 11, type: "coding", difficulty: "hard", title: "Payment Integration", question: "Integrate in-app payments with Stripe/Apple Pay/Google Pay.", hint: "Payment SDK, tokenization, confirmation", expectedTime: "45 min", topics: ["Mobile", "Payments"], testCases: [{ input: "purchase item", output: "payment processed" }], solutionApproach: "SDK setup, payment sheet, backend confirmation" },
    { id: 12, type: "coding", difficulty: "hard", title: "AR Feature", question: "Build simple AR feature with camera overlay.", hint: "AR SDK, scene detection, object placement", expectedTime: "55 min", topics: ["Mobile", "AR"], testCases: [{ input: "point camera at surface", output: "place 3D object" }], solutionApproach: "AR setup, plane detection, object rendering" },
    { id: 13, type: "coding", difficulty: "hard", title: "Bluetooth LE", question: "Implement BLE device scanning and data exchange.", hint: "BLE API, peripheral connection, characteristic read/write", expectedTime: "50 min", topics: ["Mobile", "Bluetooth"], testCases: [{ input: "scan for devices", output: "connect, read data" }], solutionApproach: "Scanning, connection, GATT operations" },
    { id: 14, type: "coding", difficulty: "hard", title: "Social Share", question: "Implement native sharing to multiple social platforms.", hint: "Share API, platform-specific formatting, callbacks", expectedTime: "30 min", topics: ["Mobile", "Social"], testCases: [{ input: "share photo", output: "native share sheet" }], solutionApproach: "Share intent, content preparation, result handling" },
    { id: 15, type: "coding", difficulty: "hard", title: "Image Editor", question: "Build image editor with filters, crop, rotate.", hint: "Image processing library, gesture handling, export", expectedTime: "50 min", topics: ["Mobile", "Graphics"], testCases: [{ input: "apply filter, crop", output: "edited image" }], solutionApproach: "Processing pipeline, gesture recognition, export" },
    { id: 16, type: "coding", difficulty: "hard", title: "Animations", question: "Implement complex animations with gestures and transitions.", hint: "Animated API, gesture handlers, interpolation", expectedTime: "45 min", topics: ["Mobile", "Animation"], testCases: [{ input: "swipe card", output: "smooth animation" }], solutionApproach: "Animation values, gesture binding, interpolation" },
    { id: 17, type: "coding", difficulty: "hard", title: "Audio Recorder", question: "Build audio recorder with playback, waveform visualization.", hint: "Audio API, permissions, visualization", expectedTime: "45 min", topics: ["Mobile", "Audio"], testCases: [{ input: "record 10s", output: "play with waveform" }], solutionApproach: "Recording, storage, playback, visualization" },
    { id: 18, type: "coding", difficulty: "hard", title: "Deep Linking", question: "Implement universal links with routing and params.", hint: "Link configuration, route parsing, navigation", expectedTime: "35 min", topics: ["Mobile", "Navigation"], testCases: [{ input: "open app from link", output: "correct screen with params" }], solutionApproach: "Link handling, router, param extraction" },
    { id: 19, type: "coding", difficulty: "hard", title: "Widget/Extension", question: "Build home screen widget or app extension.", hint: "WidgetKit/RemoteViews, data sharing, updates", expectedTime: "50 min", topics: ["Mobile", "Widgets"], testCases: [{ input: "add widget", output: "displays app data" }], solutionApproach: "Widget config, data provider, UI update" },
    { id: 20, type: "coding", difficulty: "hard", title: "Performance Monitor", question: "Implement performance monitoring with crash analytics.", hint: "Crashlytics setup, custom metrics, reporting", expectedTime: "40 min", topics: ["Mobile", "Monitoring"], testCases: [{ input: "app crash", output: "reported to dashboard" }], solutionApproach: "SDK integration, error catching, metric logging" }
  ],

  "Cloud Architect Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "AWS S3 File Manager", question: "Build CLI tool for S3 operations: upload, download, list, delete.", hint: "AWS SDK, credential handling, stream operations", expectedTime: "25 min", topics: ["AWS", "S3"], testCases: [{ input: "upload file", output: "stored in bucket" }], solutionApproach: "SDK setup, credential chain, CRUD operations" },
    { id: 2, type: "coding", difficulty: "easy", title: "EC2 Instance Manager", question: "Script to start/stop/terminate EC2 instances by tag.", hint: "EC2 API, filtering by tags, state management", expectedTime: "25 min", topics: ["AWS", "EC2"], testCases: [{ input: "stop tagged instances", output: "instances stopped" }], solutionApproach: "Describe instances, filter, control operations" },
    { id: 3, type: "coding", difficulty: "medium", title: "Terraform Module", question: "Create reusable Terraform module for VPC with subnets.", hint: "Variables, outputs, resource blocks, data sources", expectedTime: "30 min", topics: ["Terraform", "IaC"], testCases: [{ input: "module call", output: "VPC created" }], solutionApproach: "Resource definition, parameterization, outputs" },
    { id: 4, type: "coding", difficulty: "medium", title: "CloudFormation Template", question: "Write CF template for auto-scaling group with ALB.", hint: "Resources, parameters, mappings, conditions", expectedTime: "35 min", topics: ["AWS", "CloudFormation"], testCases: [{ input: "stack create", output: "ASG + ALB deployed" }], solutionApproach: "Template structure, resource relationships, outputs" },
    { id: 5, type: "coding", difficulty: "medium", title: "Kubernetes Deployment", question: "Create K8s manifests for deployment, service, ingress.", hint: "YAML structure, labels, selectors, health checks", expectedTime: "30 min", topics: ["Kubernetes"], testCases: [{ input: "kubectl apply", output: "app deployed, accessible" }], solutionApproach: "Deployment spec, service exposure, ingress routing" },
    { id: 6, type: "coding", difficulty: "medium", title: "Lambda Function", question: "Build serverless function with API Gateway integration.", hint: "Handler, event processing, response format", expectedTime: "25 min", topics: ["AWS", "Lambda"], testCases: [{ input: "API call", output: "lambda executed" }], solutionApproach: "Function code, IAM role, API Gateway setup" },
    { id: 7, type: "coding", difficulty: "medium", title: "RDS Backup Automation", question: "Automate RDS snapshots with retention management.", hint: "RDS API, event bridge, cleanup logic", expectedTime: "30 min", topics: ["AWS", "RDS"], testCases: [{ input: "daily schedule", output: "snapshot created" }], solutionApproach: "Snapshot creation, tagging, retention cleanup" },
    { id: 8, type: "coding", difficulty: "medium", title: "Cost Analyzer", question: "Build cost analysis tool using AWS Cost Explorer API.", hint: "Cost API, grouping, filtering, reporting", expectedTime: "35 min", topics: ["AWS", "Cost"], testCases: [{ input: "monthly query", output: "cost breakdown" }], solutionApproach: "API calls, data aggregation, visualization" },
    { id: 9, type: "coding", difficulty: "hard", title: "Multi-Region Deployer", question: "Implement deployment pipeline to multiple regions.", hint: "CloudFormation StackSets, parameter overrides", expectedTime: "45 min", topics: ["AWS", "Multi-Region"], testCases: [{ input: "deploy to us-east, eu-west", output: "stacks in both" }], solutionApproach: "StackSet configuration, region list, parameter mapping" },
    { id: 10, type: "coding", difficulty: "hard", title: "Security Scanner", question: "Build security scanner checking IAM policies, S3 buckets.", hint: "IAM analyzer, S3 ACL check, compliance rules", expectedTime: "40 min", topics: ["AWS", "Security"], testCases: [{ input: "scan account", output: "security findings" }], solutionApproach: "Resource enumeration, policy analysis, reporting" },
    { id: 11, type: "coding", difficulty: "hard", title: "Container Orchestrator", question: "Build custom ECS/EKS task orchestrator.", hint: "Container service API, task definition, scheduling", expectedTime: "50 min", topics: ["AWS", "Containers"], testCases: [{ input: "deploy service", output: "tasks running" }], solutionApproach: "Task definition, service creation, monitoring" },
    { id: 12, type: "coding", difficulty: "hard", title: "Network Config", question: "Automate VPC peering and routing table updates.", hint: "VPC API, peering connections, route propagation", expectedTime: "45 min", topics: ["AWS", "Networking"], testCases: [{ input: "peer VPCs", output: "routing configured" }], solutionApproach: "Peering creation, route table updates, validation" },
    { id: 13, type: "coding", difficulty: "hard", title: "Disaster Recovery", question: "Implement DR failover automation with Route53.", hint: "Health checks, DNS failover, resource promotion", expectedTime: "50 min", topics: ["AWS", "DR"], testCases: [{ input: "primary fails", output: "DNS to secondary" }], solutionApproach: "Health monitoring, Route53 update, failover" },
    { id: 14, type: "coding", difficulty: "hard", title: "Compliance Auditor", question: "Build compliance checking tool for CIS/AWS standards.", hint: "Rule engine, resource assessment, report generation", expectedTime: "50 min", topics: ["AWS", "Compliance"], testCases: [{ input: "scan environment", output: "compliance score" }], solutionApproach: "Rule definitions, resource checks, scoring" },
    { id: 15, type: "coding", difficulty: "hard", title: "Auto-Remediation", question: "Implement auto-remediation for common issues.", hint: "EventBridge, Lambda, remediation actions", expectedTime: "50 min", topics: ["AWS", "Automation"], testCases: [{ input: "public S3 detected", output: "auto-remediated" }], solutionApproach: "Event detection, Lambda handler, action execution" },
    { id: 16, type: "coding", difficulty: "hard", title: "Infrastructure Drift", question: "Detect infrastructure drift from IaC templates.", hint: "Resource comparison, change detection, alerting", expectedTime: "45 min", topics: ["IaC", "Drift"], testCases: [{ input: "compare stack", output: "drift detected" }], solutionApproach: "Current state fetch, template compare, report" },
    { id: 17, type: "coding", difficulty: "hard", title: "Spot Instance Manager", question: "Build spot instance bidding and management system.", hint: "Spot API, interruption handling, capacity pools", expectedTime: "50 min", topics: ["AWS", "Cost Optimization"], testCases: [{ input: "bid for spot", output: "instances launched" }], solutionApproach: "Spot requests, interruption handling, fallback" },
    { id: 18, type: "coding", difficulty: "hard", title: "Log Analytics Pipeline", question: "Build log ingestion pipeline with Kinesis and Lambda.", hint: "Kinesis streams, Lambda processing, Elasticsearch", expectedTime: "50 min", topics: ["AWS", "Logging"], testCases: [{ input: "send logs", output: "indexed in ES" }], solutionApproach: "Stream setup, processing Lambda, indexing" },
    { id: 19, type: "coding", difficulty: "hard", title: "API Gateway Analytics", question: "Implement API Gateway usage analytics dashboard.", hint: "CloudWatch logs, API Gateway metrics, visualization", expectedTime: "45 min", topics: ["AWS", "Analytics"], testCases: [{ input: "fetch metrics", output: "usage dashboard" }], solutionApproach: "Metrics collection, aggregation, dashboard" },
    { id: 20, type: "coding", difficulty: "hard", title: "Cross-Account Deployer", question: "Build cross-account deployment with STS assume role.", hint: "STS, role assumption, cross-account access", expectedTime: "50 min", topics: ["AWS", "Multi-Account"], testCases: [{ input: "deploy to prod account", output: "resources created" }], solutionApproach: "STS assume, credential management, deployment" }
  ],

  "Security Engineer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Password Strength Checker", question: "Implement password strength validation with entropy calculation.", hint: "Length, character variety, dictionary check", expectedTime: "20 min", topics: ["Security", "Passwords"], testCases: [{ input: "'Password123!'", output: "strength score" }], solutionApproach: "Entropy calc, pattern detection, scoring" },
    { id: 2, type: "coding", difficulty: "easy", title: "Hash Generator", question: "Build tool to generate MD5/SHA256 hashes of files/strings.", hint: "Crypto library, streaming for files", expectedTime: "15 min", topics: ["Security", "Hashing"], testCases: [{ input: "'hello'", output: "sha256 hash" }], solutionApproach: "Hash algorithm, data input, hex output" },
    { id: 3, type: "coding", difficulty: "medium", title: "JWT Validator", question: "Implement JWT signature verification without libraries.", hint: "Base64 decode, HMAC verification, expiry check", expectedTime: "30 min", topics: ["Security", "JWT"], testCases: [{ input: "valid JWT", output: "payload verified" }], solutionApproach: "Parse, signature verify, claims validation" },
    { id: 4, type: "coding", difficulty: "medium", title: "Vulnerability Scanner", question: "Build basic web vulnerability scanner for XSS/SQLi.", hint: "Payload injection, response analysis", expectedTime: "40 min", topics: ["Security", "Scanning"], testCases: [{ input: "target URL", output: "vulnerabilities found" }], solutionApproach: "Crawling, payload injection, detection" },
    { id: 5, type: "coding", difficulty: "medium", title: "Encryption Tool", question: "Implement AES encryption/decryption with key derivation.", hint: "PBKDF2, AES-GCM, IV generation", expectedTime: "35 min", topics: ["Security", "Crypto"], testCases: [{ input: "encrypt 'secret'", output: "ciphertext, decryptable" }], solutionApproach: "Key derivation, encryption, authentication tag" },
    { id: 6, type: "coding", difficulty: "medium", title: "Firewall Rule Parser", question: "Parse and validate firewall rules (iptables format).", hint: "Rule syntax, validation, conflict detection", expectedTime: "30 min", topics: ["Security", "Networking"], testCases: [{ input: "rule string", output: "parsed rule object" }], solutionApproach: "Tokenizer, rule parsing, validation" },
    { id: 7, type: "coding", difficulty: "medium", title: "Certificate Validator", question: "Validate SSL certificates for expiry and chain.", hint: "X509 parsing, date check, chain verification", expectedTime: "35 min", topics: ["Security", "SSL"], testCases: [{ input: "cert.pem", output: "valid/invalid, expiry" }], solutionApproach: "Cert parsing, chain build, verification" },
    { id: 8, type: "coding", difficulty: "hard", title: "Intrusion Detection", question: "Build IDS analyzing network traffic for anomalies.", hint: "Packet capture, signature matching, alerting", expectedTime: "50 min", topics: ["Security", "IDS"], testCases: [{ input: "suspicious traffic", output: "alert generated" }], solutionApproach: "Packet analysis, signature DB, alert engine" },
    { id: 9, type: "coding", difficulty: "hard", title: "Honeypot System", question: "Implement honeypot to detect and log attacks.", hint: "Fake services, interaction logging, analysis", expectedTime: "50 min", topics: ["Security", "Honeypot"], testCases: [{ input: "attacker connects", output: "logged, analyzed" }], solutionApproach: "Service emulation, logging, threat intel" },
    { id: 10, type: "coding", difficulty: "hard", title: "Malware Analyzer", question: "Build static malware analyzer for PE files.", hint: "PE parsing, signature matching, behavior analysis", expectedTime: "55 min", topics: ["Security", "Malware"], testCases: [{ input: "suspicious.exe", output: "threat score" }], solutionApproach: "PE structure, YARA rules, heuristic scoring" },
    { id: 11, type: "coding", difficulty: "hard", title: "SIEM Log Parser", question: "Parse and normalize logs from multiple sources.", hint: "Parsers for syslog, JSON, CEF, normalization", expectedTime: "40 min", topics: ["Security", "SIEM"], testCases: [{ input: "mixed logs", output: "normalized events" }], solutionApproach: "Format detection, parsing, field mapping" },
    { id: 12, type: "coding", difficulty: "hard", title: "Penetration Test Report", question: "Generate pentest report from scan findings.", hint: "Data aggregation, risk scoring, report template", expectedTime: "35 min", topics: ["Security", "Reporting"], testCases: [{ input: "findings list", output: "PDF/HTML report" }], solutionApproach: "Finding classification, scoring, report gen" },
    { id: 13, type: "coding", difficulty: "hard", title: "Secure File Share", question: "Build E2EE file sharing with password protection.", hint: "Client-side encryption, key sharing, download", expectedTime: "45 min", topics: ["Security", "Encryption"], testCases: [{ input: "upload file", output: "encrypted, shareable link" }], solutionApproach: "AES encryption, password derivation, sharing" },
    { id: 14, type: "coding", difficulty: "hard", title: "Threat Intel Platform", question: "Build threat intelligence aggregation platform.", hint: "APIs, indicators, correlation, alerting", expectedTime: "55 min", topics: ["Security", "Threat Intel"], testCases: [{ input: "IOC list", output: "enriched, correlated" }], solutionApproach: "Feed ingestion, enrichment, correlation engine" },
    { id: 15, type: "coding", difficulty: "hard", title: "Zero Trust Proxy", question: "Implement zero-trust access proxy with device verification.", hint: "mTLS, device attestation, policy engine", expectedTime: "60 min", topics: ["Security", "Zero Trust"], testCases: [{ input: "unauthorized device", output: "access denied" }], solutionApproach: "Authentication, authorization, policy enforcement" },
    { id: 16, type: "coding", difficulty: "hard", title: "Secrets Scanner", question: "Build secrets scanner for git repos (API keys, passwords).", hint: "Regex patterns, entropy analysis, git history", expectedTime: "45 min", topics: ["Security", "Secrets"], testCases: [{ input: "scan repo", output: "leaked secrets found" }], solutionApproach: "Pattern matching, entropy calc, history scan" },
    { id: 17, type: "coding", difficulty: "hard", title: "WAF Rule Generator", question: "Generate WAF rules from vulnerability findings.", hint: "Attack patterns, rule syntax, optimization", expectedTime: "50 min", topics: ["Security", "WAF"], testCases: [{ input: "XSS patterns", output: "ModSecurity rules" }], solutionApproach: "Pattern analysis, rule generation, testing" },
    { id: 18, type: "coding", difficulty: "hard", title: "Crypto Wallet", question: "Implement HD wallet key derivation and transaction signing.", hint: "BIP32/39, ECDSA, transaction building", expectedTime: "60 min", topics: ["Security", "Crypto"], testCases: [{ input: "mnemonic", output: "addresses, signed tx" }], solutionApproach: "Seed derivation, key generation, signing" },
    { id: 19, type: "coding", difficulty: "hard", title: "Security Benchmark", question: "Automated CIS benchmark checking tool.", hint: "Benchmark rules, system checks, scoring", expectedTime: "50 min", topics: ["Security", "Compliance"], testCases: [{ input: "scan server", output: "compliance score" }], solutionApproach: "Rule engine, system commands, reporting" },
    { id: 20, type: "coding", difficulty: "hard", title: "Incident Response", question: "Build incident response automation playbook.", hint: "Detection, containment, eradication, recovery", expectedTime: "55 min", topics: ["Security", "IR"], testCases: [{ input: "incident detected", output: "automated response" }], solutionApproach: "Workflow engine, action execution, logging" }
  ],

  "Database Administrator Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Query Optimizer", question: "Analyze and optimize slow SQL queries with EXPLAIN.", hint: "Index analysis, query rewrite, execution plan", expectedTime: "25 min", topics: ["Database", "Performance"], testCases: [{ input: "slow query", output: "optimized query" }], solutionApproach: "EXPLAIN, index suggestions, rewrite" },
    { id: 2, type: "coding", difficulty: "easy", title: "Backup Script", question: "Automate database backup with compression and rotation.", hint: "mysqldump/pg_dump, gzip, cleanup", expectedTime: "20 min", topics: ["Database", "Backup"], testCases: [{ input: "run backup", output: "compressed backup file" }], solutionApproach: "Dump command, compression, retention" },
    { id: 3, type: "coding", difficulty: "medium", title: "Replication Monitor", question: "Build replication lag monitoring tool.", hint: "SHOW SLAVE STATUS, lag calculation, alerting", expectedTime: "30 min", topics: ["Database", "Replication"], testCases: [{ input: "check replica", output: "lag seconds" }], solutionApproach: "Status query, lag calc, threshold alert" },
    { id: 4, type: "coding", difficulty: "medium", title: "Index Advisor", question: "Suggest indexes based on query workload analysis.", hint: "Query parsing, column analysis, benefit calc", expectedTime: "35 min", topics: ["Database", "Indexing"], testCases: [{ input: "workload", output: "index recommendations" }], solutionApproach: "Pattern analysis, cardinality, cost model" },
    { id: 5, type: "coding", difficulty: "medium", title: "Schema Comparator", question: "Compare database schemas across environments.", hint: "Schema extraction, diff algorithm, report", expectedTime: "30 min", topics: ["Database", "Schema"], testCases: [{ input: "dev vs prod", output: "differences list" }], solutionApproach: "Metadata extraction, comparison, reporting" },
    { id: 6, type: "coding", difficulty: "medium", title: "Partition Manager", question: "Automate table partitioning for time-series data.", hint: "Range partitioning, creation, archival, dropping", expectedTime: "40 min", topics: ["Database", "Partitioning"], testCases: [{ input: "monthly partitions", output: "auto-created" }], solutionApproach: "Partition strategy, automation, maintenance" },
    { id: 7, type: "coding", difficulty: "medium", title: "Connection Pool Monitor", question: "Monitor and alert on connection pool usage.", hint: "Pool metrics, threshold alerting, optimization", expectedTime: "30 min", topics: ["Database", "Monitoring"], testCases: [{ input: "pool stats", output: "utilization report" }], solutionApproach: "Metrics collection, analysis, alerting" },
    { id: 8, type: "coding", difficulty: "hard", title: "Query Cache", question: "Implement query result caching layer.", hint: "Cache key, invalidation, TTL, storage", expectedTime: "45 min", topics: ["Database", "Caching"], testCases: [{ input: "repeated query", output: "cached result" }], solutionApproach: "Key generation, storage, invalidation logic" },
    { id: 9, type: "coding", difficulty: "hard", title: "Sharding Manager", question: "Build shard key advisor and data distribution tool.", hint: "Key analysis, rebalancing, routing", expectedTime: "50 min", topics: ["Database", "Sharding"], testCases: [{ input: "dataset", output: "shard recommendation" }], solutionApproach: "Distribution analysis, key selection, routing" },
    { id: 10, type: "coding", difficulty: "hard", title: "Deadlock Detector", question: "Detect and resolve deadlocks automatically.", hint: "Lock monitoring, cycle detection, victim selection", expectedTime: "45 min", topics: ["Database", "Deadlocks"], testCases: [{ input: "deadlock occurs", output: "detected, resolved" }], solutionApproach: "Monitoring, graph analysis, intervention" },
    { id: 11, type: "coding", difficulty: "hard", title: "Data Masking", question: "Implement dynamic data masking for sensitive columns.", hint: "Policy rules, masking functions, query rewrite", expectedTime: "45 min", topics: ["Database", "Security"], testCases: [{ input: "SELECT *", output: "masked sensitive data" }], solutionApproach: "Policy engine, masking logic, proxy layer" },
    { id: 12, type: "coding", difficulty: "hard", title: "Audit Logger", question: "Build comprehensive audit logging for all DB operations.", hint: "Triggers, logging table, tamper-proof", expectedTime: "40 min", topics: ["Database", "Audit"], testCases: [{ input: "DML executed", output: "audit record" }], solutionApproach: "Audit triggers, secure storage, reporting" },
    { id: 13, type: "coding", difficulty: "hard", title: "Migration Tool", question: "Build zero-downtime migration tool with CDC.", hint: "Change capture, dual-write, verification", expectedTime: "55 min", topics: ["Database", "Migration"], testCases: [{ input: "migrate table", output: "migrated, verified" }], solutionApproach: "CDC setup, sync, cutover, verification" },
    { id: 14, type: "coding", difficulty: "hard", title: "Statistics Analyzer", question: "Analyze table statistics and suggest optimizations.", hint: "Histogram analysis, cardinality, correlation", expectedTime: "40 min", topics: ["Database", "Statistics"], testCases: [{ input: "table stats", output: "optimization suggestions" }], solutionApproach: "Stats analysis, outlier detection, recommendations" },
    { id: 15, type: "coding", difficulty: "hard", title: "Recovery Tool", question: "Build point-in-time recovery tool.", hint: "Backup selection, log replay, verification", expectedTime: "50 min", topics: ["Database", "Recovery"], testCases: [{ input: "recover to timestamp", output: "database restored" }], solutionApproach: "Backup chain, log application, verification" },
    { id: 16, type: "coding", difficulty: "hard", title: "Capacity Planner", question: "Predict storage and performance capacity needs.", hint: "Growth modeling, trend analysis, forecasting", expectedTime: "45 min", topics: ["Database", "Planning"], testCases: [{ input: "historical data", output: "capacity forecast" }], solutionApproach: "Trend analysis, modeling, prediction" },
    { id: 17, type: "coding", difficulty: "hard", title: "Health Dashboard", question: "Build database health monitoring dashboard.", hint: "Metrics collection, visualization, alerting", expectedTime: "50 min", topics: ["Database", "Monitoring"], testCases: [{ input: "DB metrics", output: "health dashboard" }], solutionApproach: "Metrics, visualization, threshold alerts" },
    { id: 18, type: "coding", difficulty: "hard", title: "SQL Firewall", question: "Implement SQL injection prevention proxy.", hint: "Query parsing, pattern matching, blocking", expectedTime: "50 min", topics: ["Database", "Security"], testCases: [{ input: "malicious query", output: "blocked" }], solutionApproach: "Parser, rule engine, proxy layer" },
    { id: 19, type: "coding", difficulty: "hard", title: "Data Archiver", question: "Automate cold data archival to object storage.", hint: "Data classification, compression, tiering", expectedTime: "45 min", topics: ["Database", "Archival"], testCases: [{ input: "old data", output: "archived to S3" }], solutionApproach: "Policy engine, extraction, compression, upload" },
    { id: 20, type: "coding", difficulty: "hard", title: "Multi-Master Sync", question: "Build multi-master conflict resolution system.", hint: "Conflict detection, resolution strategies, convergence", expectedTime: "60 min", topics: ["Database", "Replication"], testCases: [{ input: "conflicting writes", output: "resolved, consistent" }], solutionApproach: "Vector clocks, conflict resolution, sync" }
  ],

  "Blockchain Developer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Simple Blockchain", question: "Implement basic blockchain with blocks, hashing, and validation.", hint: "Block structure, SHA256, chain validation", expectedTime: "30 min", topics: ["Blockchain", "Basics"], testCases: [{ input: "3 blocks", output: "valid chain" }], solutionApproach: "Block class, mining, chain validation" },
    { id: 2, type: "coding", difficulty: "easy", title: "Wallet Generator", question: "Generate cryptocurrency wallet addresses with keys.", hint: "ECDSA, public key derivation, address encoding", expectedTime: "25 min", topics: ["Blockchain", "Crypto"], testCases: [{ input: "generate", output: "address + keys" }], solutionApproach: "Key generation, address derivation" },
    { id: 3, type: "coding", difficulty: "medium", title: "Smart Contract (ERC20)", question: "Implement ERC20 token contract with transfers and allowances.", hint: "Solidity, balances mapping, events", expectedTime: "35 min", topics: ["Blockchain", "Solidity"], testCases: [{ input: "deploy, transfer", output: "tokens moved" }], solutionApproach: "Contract code, transfer logic, approval" },
    { id: 4, type: "coding", difficulty: "medium", title: "Transaction Pool", question: "Build mempool for pending transactions with prioritization.", hint: "Priority queue, nonce tracking, gas sorting", expectedTime: "35 min", topics: ["Blockchain", "Mempool"], testCases: [{ input: "add transactions", output: "sorted by gas" }], solutionApproach: "Pool structure, sorting, eviction" },
    { id: 5, type: "coding", difficulty: "medium", title: "Merkle Tree", question: "Implement Merkle tree for transaction verification.", hint: "Tree building, root calculation, proof generation", expectedTime: "30 min", topics: ["Blockchain", "Data Structure"], testCases: [{ input: "4 transactions", output: "root hash, proof" }], solutionApproach: "Tree construction, hashing, verification" },
    { id: 6, type: "coding", difficulty: "medium", title: "Digital Signature", question: "Implement ECDSA signature and verification.", hint: "Key pair, signing, verification algorithm", expectedTime: "35 min", topics: ["Blockchain", "Crypto"], testCases: [{ input: "sign message", output: "verifiable signature" }], solutionApproach: "ECDSA implementation, sign, verify" },
    { id: 7, type: "coding", difficulty: "medium", title: "Node Discovery", question: "Build peer discovery for blockchain network.", hint: "DHT, peer list, handshake protocol", expectedTime: "40 min", topics: ["Blockchain", "P2P"], testCases: [{ input: "join network", output: "peer list populated" }], solutionApproach: "Discovery protocol, peer management" },
    { id: 8, type: "coding", difficulty: "hard", title: "Consensus Algorithm", question: "Implement Proof of Authority consensus.", hint: "Validators, voting, block finalization", expectedTime: "50 min", topics: ["Blockchain", "Consensus"], testCases: [{ input: "propose block", output: "consensus reached" }], solutionApproach: "Validator set, voting, finality" },
    { id: 9, type: "coding", difficulty: "hard", title: "NFT Contract", question: "Implement ERC721 NFT contract with minting and transfers.", hint: "ERC721 standard, metadata, ownership", expectedTime: "45 min", topics: ["Blockchain", "NFT"], testCases: [{ input: "mint NFT", output: "owned token" }], solutionApproach: "Token standard, minting, transfer logic" },
    { id: 10, type: "coding", difficulty: "hard", title: "DEX AMM", question: "Build automated market maker for token swaps.", hint: "Constant product formula, liquidity pools, pricing", expectedTime: "55 min", topics: ["Blockchain", "DeFi"], testCases: [{ input: "swap tokens", output: "correct exchange rate" }], solutionApproach: "Pool math, swap execution, LP tokens" },
    { id: 11, type: "coding", difficulty: "hard", title: "Cross-Chain Bridge", question: "Implement token bridge between two chains.", hint: "Lock/mint, burn/release, validation", expectedTime: "60 min", topics: ["Blockchain", "Bridge"], testCases: [{ input: "lock on chain A", output: "mint on chain B" }], solutionApproach: "Locking, minting, verification, relay" },
    { id: 12, type: "coding", difficulty: "hard", title: "Staking Contract", question: "Build staking contract with rewards distribution.", hint: "Stake tracking, reward calculation, compound", expectedTime: "50 min", topics: ["Blockchain", "DeFi"], testCases: [{ input: "stake tokens", output: "rewards accumulated" }], solutionApproach: "Staking logic, reward rate, claiming" },
    { id: 13, type: "coding", difficulty: "hard", title: "Multi-Sig Wallet", question: "Implement multi-signature wallet requiring M of N approvals.", hint: "Owners mapping, nonce tracking, execute", expectedTime: "50 min", topics: ["Blockchain", "Security"], testCases: [{ input: "2 of 3 sign", output: "transaction executed" }], solutionApproach: "Signer management, threshold, execution" },
    { id: 14, type: "coding", difficulty: "hard", title: "Oracle Integration", question: "Build price oracle feeding external data to contracts.", hint: "Data source, aggregation, update mechanism", expectedTime: "50 min", topics: ["Blockchain", "Oracle"], testCases: [{ input: "price update", output: "contract updated" }], solutionApproach: "Feed aggregation, update logic, verification" },
    { id: 15, type: "coding", difficulty: "hard", title: "DAO Governance", question: "Implement DAO with proposal and voting system.", hint: "Proposal creation, voting power, execution", expectedTime: "55 min", topics: ["Blockchain", "DAO"], testCases: [{ input: "create proposal", output: "vote and execute" }], solutionApproach: "Governance token, voting, timelock" },
    { id: 16, type: "coding", difficulty: "hard", title: "Flash Loan", question: "Implement flash loan contract for arbitrage.", hint: "Borrow, execute, repay in single tx, fees", expectedTime: "55 min", topics: ["Blockchain", "DeFi"], testCases: [{ input: "flash borrow", output: "repaid with fee" }], solutionApproach: "Lending, callback, validation, fee" },
    { id: 17, type: "coding", difficulty: "hard", title: "ZK Proof Demo", question: "Implement simple zero-knowledge proof system.", hint: "Commitment, challenge, response, verification", expectedTime: "60 min", topics: ["Blockchain", "ZK"], testCases: [{ input: "prove knowledge", output: "verified without revealing" }], solutionApproach: "Protocol implementation, proof generation" },
    { id: 18, type: "coding", difficulty: "hard", title: "Layer 2 Rollup", question: "Build optimistic rollup implementation.", hint: "Batching, fraud proof, state root", expectedTime: "65 min", topics: ["Blockchain", "L2"], testCases: [{ input: "batch transactions", output: "compressed state" }], solutionApproach: "Compression, fraud detection, settlement" },
    { id: 19, type: "coding", difficulty: "hard", title: "Token Vesting", question: "Implement token vesting with cliff and schedule.", hint: "Time locks, release calculation, revocation", expectedTime: "45 min", topics: ["Blockchain", "Tokenomics"], testCases: [{ input: "vesting start", output: "tokens release over time" }], solutionApproach: "Schedule, release logic, claim function" },
    { id: 20, type: "coding", difficulty: "hard", title: "Chain Analyzer", question: "Build blockchain explorer with transaction indexing.", hint: "Block parsing, indexing, query API", expectedTime: "55 min", topics: ["Blockchain", "Explorer"], testCases: [{ input: "address query", output: "transaction history" }], solutionApproach: "Sync, indexing, query interface" }
  ],

  "Game Developer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Tic-Tac-Toe", question: "Build tic-tac-toe game with win detection.", hint: "Grid state, turn management, win check", expectedTime: "25 min", topics: ["Game", "Logic"], testCases: [{ input: "3 in row", output: "winner detected" }], solutionApproach: "Board array, turn logic, win patterns" },
    { id: 2, type: "coding", difficulty: "easy", title: "Snake Game", question: "Implement snake game with collision detection.", hint: "Linked list for snake, grid collision, food spawn", expectedTime: "30 min", topics: ["Game", "Logic"], testCases: [{ input: "hit wall", output: "game over" }], solutionApproach: "Snake body, movement, collision" },
    { id: 3, type: "coding", difficulty: "medium", title: "Physics Engine (Basic)", question: "Implement 2D physics with gravity and collisions.", hint: "Euler integration, AABB collision, response", expectedTime: "40 min", topics: ["Game", "Physics"], testCases: [{ input: "drop ball", output: "bounces, settles" }], solutionApproach: "Integration, collision detection, resolution" },
    { id: 4, type: "coding", difficulty: "medium", title: "Pathfinding (A*)", question: "Implement A* pathfinding for grid-based movement.", hint: "Heuristic, open/closed sets, path reconstruction", expectedTime: "40 min", topics: ["Game", "AI"], testCases: [{ input: "start to goal", output: "optimal path" }], solutionApproach: "A* algorithm, priority queue, path" },
    { id: 5, type: "coding", difficulty: "medium", title: "Sprite Animation", question: "Build sprite animation system with state management.", hint: "Animation states, frame timing, transitions", expectedTime: "35 min", topics: ["Game", "Graphics"], testCases: [{ input: "walk state", output: "walk animation plays" }], solutionApproach: "State machine, frame update, rendering" },
    { id: 6, type: "coding", difficulty: "medium", title: "Inventory System", question: "Implement RPG inventory with stacking and equipment.", hint: "Slot grid, item data, equipment slots", expectedTime: "35 min", topics: ["Game", "Systems"], testCases: [{ input: "equip item", output: "stats updated" }], solutionApproach: "Inventory grid, item management, equipment" },
    { id: 7, type: "coding", difficulty: "medium", title: "Save System", question: "Build game save/load system with serialization.", hint: "Game state, JSON/binary, encryption", expectedTime: "30 min", topics: ["Game", "Persistence"], testCases: [{ input: "save game", output: "state restored" }], solutionApproach: "State capture, serialization, persistence" },
    { id: 8, type: "coding", difficulty: "hard", title: "Procedural Generation", question: "Implement dungeon generation with rooms and corridors.", hint: "BSP, random walk, connectivity", expectedTime: "50 min", topics: ["Game", "ProcGen"], testCases: [{ input: "generate", output: "connected dungeon" }], solutionApproach: "Room placement, corridor connection, validation" },
    { id: 9, type: "coding", difficulty: "hard", title: "Behavior Tree", question: "Implement behavior tree AI for enemy NPCs.", hint: "Nodes: sequence, selector, action, decorator", expectedTime: "50 min", topics: ["Game", "AI"], testCases: [{ input: "patrol, chase", output: "appropriate behavior" }], solutionApproach: "Tree structure, node execution, state" },
    { id: 10, type: "coding", difficulty: "hard", title: "Multiplayer Sync", question: "Build client-server sync with prediction and interpolation.", hint: "Dead reckoning, snapshot interpolation", expectedTime: "60 min", topics: ["Game", "Networking"], testCases: [{ input: "player moves", output: "smooth sync" }], solutionApproach: "Prediction, reconciliation, interpolation" },
    { id: 11, type: "coding", difficulty: "hard", title: "Particle System", question: "Implement GPU particle system with emitters.", hint: "Particle data, update shader, rendering", expectedTime: "55 min", topics: ["Game", "Graphics"], testCases: [{ input: "emit particles", output: "visual effect" }], solutionApproach: "Emitter, particle data, GPU update" },
    { id: 12, type: "coding", difficulty: "hard", title: "Audio Engine", question: "Build spatial audio engine with 3D positioning.", hint: "HRTF, distance attenuation, mixing", expectedTime: "50 min", topics: ["Game", "Audio"], testCases: [{ input: "3D position", output: "spatial sound" }], solutionApproach: "Position calculation, filtering, mixing" },
    { id: 13, type: "coding", difficulty: "hard", title: "Dialogue System", question: "Implement branching dialogue with conditions.", hint: "Tree/graph structure, condition eval, UI", expectedTime: "45 min", topics: ["Game", "Systems"], testCases: [{ input: "choice selected", output: "branch taken" }], solutionApproach: "Dialogue tree, condition system, UI" },
    { id: 14, type: "coding", difficulty: "hard", title: "Loot System", question: "Build weighted loot drop system with rarity tiers.", hint: "Weight tables, roll mechanics, modifiers", expectedTime: "35 min", topics: ["Game", "Systems"], testCases: [{ input: "boss kill", output: "appropriate drops" }], solutionApproach: "Drop tables, RNG, rarity weights" },
    { id: 15, type: "coding", difficulty: "hard", title: "Quest System", question: "Implement quest system with objectives and rewards.", hint: "Objectives, completion conditions, progression", expectedTime: "50 min", topics: ["Game", "Systems"], testCases: [{ input: "objective complete", output: "quest advances" }], solutionApproach: "Quest data, objective tracking, rewards" },
    { id: 16, type: "coding", difficulty: "hard", title: "Shadow Mapping", question: "Implement real-time shadow mapping.", hint: "Depth pass, shadow matrix, PCF filtering", expectedTime: "55 min", topics: ["Game", "Graphics"], testCases: [{ input: "scene render", output: "shadows cast" }], solutionApproach: "Shadow map generation, sampling, filtering" },
    { id: 17, type: "coding", difficulty: "hard", title: "Physics Solver", question: "Build constraint-based physics solver.", hint: "Jacobian, iterative solver, constraints", expectedTime: "60 min", topics: ["Game", "Physics"], testCases: [{ input: "ragdoll", output: "realistic physics" }], solutionApproach: "Constraint setup, solver iteration" },
    { id: 18, type: "coding", difficulty: "hard", title: "LOD System", question: "Implement level-of-detail mesh switching.", hint: "Distance check, LOD groups, smooth transition", expectedTime: "40 min", topics: ["Game", "Optimization"], testCases: [{ input: "camera moves", output: "LOD switches" }], solutionApproach: "Distance calc, mesh swap, blending" },
    { id: 19, type: "coding", difficulty: "hard", title: "Replay System", question: "Build deterministic replay recording and playback.", hint: "Input recording, state snapshots, deterministic", expectedTime: "50 min", topics: ["Game", "Replay"], testCases: [{ input: "record gameplay", output: "exact replay" }], solutionApproach: "Input capture, replay logic, verification" },
    { id: 20, type: "coding", difficulty: "hard", title: "Voxel Engine", question: "Implement basic voxel rendering with meshing.", hint: "Chunk management, greedy meshing, culling", expectedTime: "60 min", topics: ["Game", "Voxels"], testCases: [{ input: "voxel world", output: "rendered meshes" }], solutionApproach: "Voxel storage, mesh generation, rendering" }
  ],

  "AI Engineer Coding": [
    { id: 1, type: "coding", difficulty: "medium", title: "Neural Network Framework", question: "Build neural network library with forward/backward pass.", hint: "Layer abstraction, autograd, optimizer", expectedTime: "50 min", topics: ["AI", "Deep Learning"], testCases: [{ input: "train XOR", output: "converges" }], solutionApproach: "Tensor ops, backprop, SGD" },
    { id: 2, type: "coding", difficulty: "medium", title: "CNN Image Classifier", question: "Implement CNN for image classification from scratch.", hint: "Conv2D, pooling, flatten, dense", expectedTime: "50 min", topics: ["AI", "CNN"], testCases: [{ input: "CIFAR-10", output: "60%+ accuracy" }], solutionApproach: "Convolution, pooling, training loop" },
    { id: 3, type: "coding", difficulty: "medium", title: "LSTM Cell", question: "Implement LSTM cell with gates and state management.", hint: "Forget, input, output gates, cell state", expectedTime: "45 min", topics: ["AI", "RNN"], testCases: [{ input: "sequence", output: "predicts next" }], solutionApproach: "Gate computation, state update, output" },
    { id: 4, type: "coding", difficulty: "hard", title: "Transformer Block", question: "Implement transformer encoder block with attention.", hint: "Self-attention, FFN, layer norm", expectedTime: "55 min", topics: ["AI", "Transformers"], testCases: [{ input: "tokens", output: "representations" }], solutionApproach: "QKV computation, attention, FFN" },
    { id: 5, type: "coding", difficulty: "hard", title: "Autoencoder", question: "Build denoising autoencoder for image reconstruction.", hint: "Encoder, bottleneck, decoder, MSE loss", expectedTime: "45 min", topics: ["AI", "Autoencoder"], testCases: [{ input: "noisy image", output: "denoised" }], solutionApproach: "Encode, compress, decode, train" },
    { id: 6, type: "coding", difficulty: "hard", title: "GAN Generator", question: "Implement GAN generator and discriminator.", hint: "Adversarial loss, training loop", expectedTime: "60 min", topics: ["AI", "GAN"], testCases: [{ input: "train", output: "generates images" }], solutionApproach: "Generator, discriminator, alternating training" },
    { id: 7, type: "coding", difficulty: "hard", title: "DQN Agent", question: "Build Deep Q-Network for game playing.", hint: "Experience replay, target network, epsilon-greedy", expectedTime: "55 min", topics: ["AI", "RL"], testCases: [{ input: "CartPole", output: "solves" }], solutionApproach: "Q network, replay buffer, training" },
    { id: 8, type: "coding", difficulty: "hard", title: "Policy Gradient", question: "Implement REINFORCE policy gradient algorithm.", hint: "Policy network, Monte Carlo returns", expectedTime: "55 min", topics: ["AI", "RL"], testCases: [{ input: "environment", output: "policy improves" }], solutionApproach: "Policy, episode collection, gradient update" },
    { id: 9, type: "coding", difficulty: "hard", title: "BERT Embedding", question: "Extract embeddings from pre-trained BERT.", hint: "Tokenizer, forward pass, pooling", expectedTime: "40 min", topics: ["AI", "NLP"], testCases: [{ input: "sentence", output: "embedding vector" }], solutionApproach: "Load model, tokenize, inference" },
    { id: 10, type: "coding", difficulty: "hard", title: "Object Detector", question: "Implement YOLO-style object detector.", hint: "Grid, anchors, bounding box regression", expectedTime: "65 min", topics: ["AI", "CV"], testCases: [{ input: "image", output: "detected boxes" }], solutionApproach: "Grid prediction, NMS, post-processing" },
    { id: 11, type: "coding", difficulty: "hard", title: "Style Transfer", question: "Build neural style transfer with VGG features.", hint: "Content loss, style loss, optimization", expectedTime: "50 min", topics: ["AI", "CV"], testCases: [{ input: "content + style", output: "stylized" }], solutionApproach: "Feature extraction, loss optimization" },
    { id: 12, type: "coding", difficulty: "hard", title: "Text Generator", question: "Build character-level RNN text generator.", hint: "LSTM, sampling, temperature", expectedTime: "45 min", topics: ["AI", "NLP"], testCases: [{ input: "seed text", output: "generated continuation" }], solutionApproach: "Training, sampling strategy, generation" },
    { id: 13, type: "coding", difficulty: "hard", title: "Image Segmentation", question: "Implement U-Net for semantic segmentation.", hint: "Encoder-decoder, skip connections", expectedTime: "55 min", topics: ["AI", "CV"], testCases: [{ input: "image", output: "segmentation mask" }], solutionApproach: "Contracting path, expanding path, skip" },
    { id: 14, type: "coding", difficulty: "hard", title: "Attention Visualizer", question: "Visualize attention weights in transformer.", hint: "Attention extraction, heatmap generation", expectedTime: "40 min", topics: ["AI", "Visualization"], testCases: [{ input: "forward pass", output: "attention maps" }], solutionApproach: "Hook attention, plot weights" },
    { id: 15, type: "coding", difficulty: "hard", title: "Model Quantization", question: "Implement post-training quantization for inference.", hint: "Calibration, range mapping, int8 conversion", expectedTime: "50 min", topics: ["AI", "Optimization"], testCases: [{ input: "FP32 model", output: "INT8 model" }], solutionApproach: "Range estimation, quantization, verification" },
    { id: 16, type: "coding", difficulty: "hard", title: "ONNX Exporter", question: "Export custom model to ONNX format.", hint: "Op mapping, graph construction", expectedTime: "45 min", topics: ["AI", "Deployment"], testCases: [{ input: "model", output: "onnx file" }], solutionApproach: "Trace, graph build, export" },
    { id: 17, type: "coding", difficulty: "hard", title: "Serving API", question: "Build model serving API with batching.", hint: "FastAPI, batching, async inference", expectedTime: "40 min", topics: ["AI", "Serving"], testCases: [{ input: "requests", output: "predictions" }], solutionApproach: "Model load, batching, inference" },
    { id: 18, type: "coding", difficulty: "hard", title: "Prompt Engineering", question: "Build prompt template system for LLMs.", hint: "Templates, variables, chaining", expectedTime: "35 min", topics: ["AI", "LLM"], testCases: [{ input: "template + vars", output: "final prompt" }], solutionApproach: "Template engine, variable substitution" },
    { id: 19, type: "coding", difficulty: "hard", title: "RAG Pipeline", question: "Implement RAG with vector DB and generation.", hint: "Embedding, retrieval, prompt augmentation", expectedTime: "50 min", topics: ["AI", "RAG"], testCases: [{ input: "query", output: "augmented answer" }], solutionApproach: "Index, search, prompt build, generate" },
    { id: 20, type: "coding", difficulty: "hard", title: "Diffusion Sampling", question: "Implement DDPM sampling for image generation.", hint: "Noise schedule, denoising, sampling loop", expectedTime: "65 min", topics: ["AI", "Diffusion"], testCases: [{ input: "noise", output: "generated image" }], solutionApproach: "Schedule, reverse process, sampling" }
  ],

  "Cybersecurity Engineer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Password Policy Enforcer", question: "Implement password policy validation.", hint: "Length, complexity, history checks", expectedTime: "20 min", topics: ["Security", "Policy"], testCases: [{ input: "'weakpass'", output: "rejected" }], solutionApproach: "Policy rules, validation logic" },
    { id: 2, type: "coding", difficulty: "easy", title: "File Integrity Monitor", question: "Monitor file changes with hash comparison.", hint: "Baseline hashes, periodic check, alert", expectedTime: "25 min", topics: ["Security", "Monitoring"], testCases: [{ input: "file modified", output: "alert" }], solutionApproach: "Hash baseline, comparison loop" },
    { id: 3, type: "coding", difficulty: "medium", title: "SIEM Parser", question: "Parse and normalize security logs to JSON.", hint: "Regex, field extraction, normalization", expectedTime: "30 min", topics: ["Security", "SIEM"], testCases: [{ input: "syslog", output: "normalized JSON" }], solutionApproach: "Parsing, mapping, output" },
    { id: 4, type: "coding", difficulty: "medium", title: "Threat Indicator IOC", question: "Match network traffic against IOC list.", hint: "IP/domain matching, bloom filter", expectedTime: "35 min", topics: ["Security", "Threat Intel"], testCases: [{ input: "traffic", output: "matches found" }], solutionApproach: "IOC database, matching logic" },
    { id: 5, type: "coding", difficulty: "medium", title: "Vulnerability Scanner", question: "Scan for CVEs in software inventory.", hint: "Version comparison, CVE DB, reporting", expectedTime: "40 min", topics: ["Security", "Vulnerability"], testCases: [{ input: "inventory", output: "CVE list" }], solutionApproach: "Version check, database lookup" },
    { id: 6, type: "coding", difficulty: "medium", title: "Network Traffic Analyzer", question: "Analyze PCAP for suspicious patterns.", hint: "Scapy, packet inspection, heuristics", expectedTime: "45 min", topics: ["Security", "Network"], testCases: [{ input: "pcap file", output: "suspicious flows" }], solutionApproach: "Packet parsing, analysis, detection" },
    { id: 7, type: "coding", difficulty: "medium", title: "IDS Rule Engine", question: "Implement Snort-like rule matching engine.", hint: "Rule parsing, pattern matching, alert", expectedTime: "50 min", topics: ["Security", "IDS"], testCases: [{ input: "packet", output: "rule match" }], solutionApproach: "Rule syntax, matching engine" },
    { id: 8, type: "coding", difficulty: "hard", title: "Memory Forensics", question: "Parse memory dump for artifacts.", hint: "Volatility-style, process enumeration", expectedTime: "55 min", topics: ["Security", "Forensics"], testCases: [{ input: "memory dump", output: "process list" }], solutionApproach: "Memory parsing, artifact extraction" },
    { id: 9, type: "coding", difficulty: "hard", title: "Exploit Mitigation", question: "Implement stack canary checker.", hint: "Canary generation, verification, detection", expectedTime: "45 min", topics: ["Security", "Exploit"], testCases: [{ input: "overflow attempt", output: "detected" }], solutionApproach: "Stack protection, verification" },
    { id: 10, type: "coding", difficulty: "hard", title: "Malware Sandbox", question: "Build basic sandbox for dynamic analysis.", hint: "Process monitoring, API hooking", expectedTime: "60 min", topics: ["Security", "Malware"], testCases: [{ input: "run sample", output: "behavior report" }], solutionApproach: "Isolation, monitoring, logging" },
    { id: 11, type: "coding", difficulty: "hard", title: "Crypto Cracker", question: "Implement rainbow table for password cracking.", hint: "Chain generation, reduction function", expectedTime: "55 min", topics: ["Security", "Crypto"], testCases: [{ input: "hash", output: "cracked password" }], solutionApproach: "Table generation, lookup" },
    { id: 12, type: "coding", difficulty: "hard", title: "Steganography Detector", question: "Detect LSB steganography in images.", hint: "Statistical analysis, chi-square", expectedTime: "50 min", topics: ["Security", "Steganography"], testCases: [{ input: "suspicious image", output: "stego detected" }], solutionApproach: "LSB analysis, statistics" },
    { id: 13, type: "coding", difficulty: "hard", title: "Honeypot Logger", question: "Build interactive SSH honeypot.", hint: "Fake shell, command logging", expectedTime: "50 min", topics: ["Security", "Honeypot"], testCases: [{ input: "attacker connects", output: "session logged" }], solutionApproach: "SSH server, emulation, logging" },
    { id: 14, type: "coding", difficulty: "hard", title: "XSS Filter", question: "Implement context-aware XSS filter.", hint: "HTML context, JavaScript context", expectedTime: "45 min", topics: ["Security", "Web"], testCases: [{ input: "<script>", output: "blocked" }], solutionApproach: "Context detection, filtering" },
    { id: 15, type: "coding", difficulty: "hard", title: "DLP Scanner", question: "Scan documents for sensitive data patterns.", hint: "Regex patterns, entropy, context", expectedTime: "45 min", topics: ["Security", "DLP"], testCases: [{ input: "document", output: "sensitive found" }], solutionApproach: "Pattern matching, classification" },
    { id: 16, type: "coding", difficulty: "hard", title: "Ransomware Detector", question: "Detect ransomware behavior patterns.", hint: "File entropy, extension changes, rate", expectedTime: "50 min", topics: ["Security", "Ransomware"], testCases: [{ input: "behavior", output: "alert" }], solutionApproach: "Monitoring, heuristics" },
    { id: 17, type: "coding", difficulty: "hard", title: "Compliance Checker", question: "Check system against CIS benchmarks.", hint: "Rule engine, system commands", expectedTime: "55 min", topics: ["Security", "Compliance"], testCases: [{ input: "scan", output: "compliance score" }], solutionApproach: "Rule parsing, execution, scoring" },
    { id: 18, type: "coding", difficulty: "hard", title: "Phishing Detector", question: "Build ML-based phishing URL detector.", hint: "Features, classifier, prediction", expectedTime: "50 min", topics: ["Security", "ML"], testCases: [{ input: "URL", output: "phishing probability" }], solutionApproach: "Feature extraction, model inference" },
    { id: 19, type: "coding", difficulty: "hard", title: "Zero-Day Hunter", question: "Fuzzing framework for vulnerability discovery.", hint: "Mutation, coverage, crash detection", expectedTime: "65 min", topics: ["Security", "Fuzzing"], testCases: [{ input: "target", output: "crashes found" }], solutionApproach: "Fuzzer, mutator, monitor" },
    { id: 20, type: "coding", difficulty: "hard", title: "APT Detector", question: "Build behavioral APT detection system.", hint: "Behavioral baselines, anomaly detection", expectedTime: "65 min", topics: ["Security", "APT"], testCases: [{ input: "telemetry", output: "APT alert" }], solutionApproach: "Baseline, anomaly, correlation" }
  ],

  "Embedded Systems Engineer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "GPIO Control", question: "Implement GPIO pin control library.", hint: "Register mapping, direction, read/write", expectedTime: "20 min", topics: ["Embedded", "GPIO"], testCases: [{ input: "set pin high", output: "voltage high" }], solutionApproach: "Register access, bit manipulation" },
    { id: 2, type: "coding", difficulty: "easy", title: "UART Driver", question: "Implement UART communication driver.", hint: "Baud rate, register config, TX/RX", expectedTime: "25 min", topics: ["Embedded", "UART"], testCases: [{ input: "send byte", output: "received" }], solutionApproach: "Register config, polling/ISR" },
    { id: 3, type: "coding", difficulty: "medium", title: "I2C Master", question: "Implement I2C master communication.", hint: "Start, stop, ACK, data transfer", expectedTime: "35 min", topics: ["Embedded", "I2C"], testCases: [{ input: "read register", output: "data" }], solutionApproach: "Bit-banging or peripheral, protocol" },
    { id: 4, type: "coding", difficulty: "medium", title: "SPI Communication", question: "Implement SPI master for sensor reading.", hint: "CS, clock, MOSI, MISO timing", expectedTime: "30 min", topics: ["Embedded", "SPI"], testCases: [{ input: "read sensor", output: "ADC value" }], solutionApproach: "SPI timing, data exchange" },
    { id: 5, type: "coding", difficulty: "medium", title: "PWM Generator", question: "Generate PWM signal for motor control.", hint: "Timer config, duty cycle, frequency", expectedTime: "25 min", topics: ["Embedded", "PWM"], testCases: [{ input: "50% duty", output: "square wave" }], solutionApproach: "Timer setup, compare register" },
    { id: 6, type: "coding", difficulty: "medium", title: "ADC Reading", question: "Implement ADC sampling with averaging.", hint: "Trigger, read, filter", expectedTime: "25 min", topics: ["Embedded", "ADC"], testCases: [{ input: "analog signal", output: "digital value" }], solutionApproach: "ADC config, sampling, averaging" },
    { id: 7, type: "coding", difficulty: "medium", title: "Timer Interrupt", question: "Implement periodic timer interrupt handler.", hint: "Timer setup, ISR, callback", expectedTime: "25 min", topics: ["Embedded", "Timer"], testCases: [{ input: "1ms interval", output: "ISR called" }], solutionApproach: "Timer config, vector table, handler" },
    { id: 8, type: "coding", difficulty: "hard", title: "RTOS Scheduler", question: "Implement basic priority-based scheduler.", hint: "Task struct, ready queue, context switch", expectedTime: "50 min", topics: ["Embedded", "RTOS"], testCases: [{ input: "2 tasks", output: "scheduled" }], solutionApproach: "Task control, scheduling algorithm" },
    { id: 9, type: "coding", difficulty: "hard", title: "DMA Transfer", question: "Implement memory-to-memory DMA.", hint: "Channel config, trigger, completion", expectedTime: "40 min", topics: ["Embedded", "DMA"], testCases: [{ input: "transfer", output: "data moved" }], solutionApproach: "DMA setup, transfer, interrupt" },
    { id: 10, type: "coding", difficulty: "hard", title: "Flash Memory", question: "Implement flash page erase and write.", hint: "Unlock, erase, program, verify", expectedTime: "35 min", topics: ["Embedded", "Flash"], testCases: [{ input: "write data", output: "persisted" }], solutionApproach: "Flash controller, programming" },
    { id: 11, type: "coding", difficulty: "hard", title: "Bootloader", question: "Implement firmware update bootloader.", hint: "Communication, flash write, vector table", expectedTime: "55 min", topics: ["Embedded", "Bootloader"], testCases: [{ input: "firmware image", output: "updated" }], solutionApproach: "Protocol, verification, flashing" },
    { id: 12, type: "coding", difficulty: "hard", title: "Watchdog Timer", question: "Implement watchdog with refresh mechanism.", hint: "Timeout config, refresh, reset", expectedTime: "25 min", topics: ["Embedded", "Watchdog"], testCases: [{ input: "miss refresh", output: "reset" }], solutionApproach: "WDOG setup, kick mechanism" },
    { id: 13, type: "coding", difficulty: "hard", title: "Low Power Mode", question: "Implement sleep mode with wake-up sources.", hint: "Clock gating, wake config, entry/exit", expectedTime: "40 min", topics: ["Embedded", "Power"], testCases: [{ input: "enter sleep", output: "wakes on interrupt" }], solutionApproach: "Sleep config, wake sources, resume" },
    { id: 14, type: "coding", difficulty: "hard", title: "Motor PID", question: "Implement PID controller for DC motor speed.", hint: "Error calc, PID terms, PWM output", expectedTime: "45 min", topics: ["Embedded", "Control"], testCases: [{ input: "set speed", output: "reaches target" }], solutionApproach: "PID algorithm, feedback, output" },
    { id: 15, type: "coding", difficulty: "hard", title: "Sensor Fusion", question: "Implement complementary filter for IMU.", hint: "Accel, gyro, fusion algorithm", expectedTime: "45 min", topics: ["Embedded", "Fusion"], testCases: [{ input: "raw data", output: "orientation" }], solutionApproach: "Filtering, sensor combination" },
    { id: 16, type: "coding", difficulty: "hard", title: "CAN Bus", question: "Implement CAN message transmission/reception.", hint: "CAN frame, ID, mailbox", expectedTime: "50 min", topics: ["Embedded", "CAN"], testCases: [{ input: "send frame", output: "received" }], solutionApproach: "CAN config, TX/RX, filtering" },
    { id: 17, type: "coding", difficulty: "hard", title: "Ethernet Driver", question: "Implement basic Ethernet MAC driver.", hint: "PHY setup, frame TX/RX, MAC", expectedTime: "60 min", topics: ["Embedded", "Ethernet"], testCases: [{ input: "send packet", output: "transmitted" }], solutionApproach: "MAC config, descriptor rings" },
    { id: 18, type: "coding", difficulty: "hard", title: "File System", question: "Implement FAT16 file system on SD card.", hint: "Boot sector, FAT, directory, cluster", expectedTime: "65 min", topics: ["Embedded", "FS"], testCases: [{ input: "write file", output: "stored" }], solutionApproach: "FAT implementation, block driver" },
    { id: 19, type: "coding", difficulty: "hard", title: "Crypto Engine", question: "Implement hardware-accelerated AES.", hint: "Key schedule, encryption, DMA", expectedTime: "55 min", topics: ["Embedded", "Crypto"], testCases: [{ input: "encrypt", output: "ciphertext" }], solutionApproach: "AES algorithm, hardware assist" },
    { id: 20, type: "coding", difficulty: "hard", title: "USB Device", question: "Implement USB CDC device class.", hint: "Descriptors, endpoints, enumeration", expectedTime: "70 min", topics: ["Embedded", "USB"], testCases: [{ input: "connect", output: "serial port" }], solutionApproach: "USB stack, descriptors, CDC" }
  ],

  "Machine Learning Engineer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Feature Pipeline", question: "Build feature extraction pipeline for tabular data.", hint: "Encoding, scaling, transformations", expectedTime: "25 min", topics: ["ML", "Features"], testCases: [{ input: "raw data", output: "features" }], solutionApproach: "Pipeline, transformers, fit/transform" },
    { id: 2, type: "coding", difficulty: "easy", title: "Model Registry", question: "Implement model versioning and storage system.", hint: "Versioning, metadata, artifact storage", expectedTime: "30 min", topics: ["ML", "MLOps"], testCases: [{ input: "save model", output: "versioned" }], solutionApproach: "Storage, versioning, metadata" },
    { id: 3, type: "coding", difficulty: "medium", title: "Training Pipeline", question: "Build end-to-end training pipeline with validation.", hint: "Data loading, training loop, checkpoint", expectedTime: "40 min", topics: ["ML", "Training"], testCases: [{ input: "dataset", output: "trained model" }], solutionApproach: "Pipeline, training, evaluation" },
    { id: 4, type: "coding", difficulty: "medium", title: "Hyperparameter Search", question: "Implement random search for hyperparameters.", hint: "Space definition, sampling, evaluation", expectedTime: "35 min", topics: ["ML", "Optimization"], testCases: [{ input: "param space", output: "best config" }], solutionApproach: "Sampling, training loop, tracking" },
    { id: 5, type: "coding", difficulty: "medium", title: "Model Serving", question: "Build REST API for model inference.", hint: "FastAPI, model loading, batching", expectedTime: "35 min", topics: ["ML", "Serving"], testCases: [{ input: "request", output: "prediction" }], solutionApproach: "API, model, inference" },
    { id: 6, type: "coding", difficulty: "medium", title: "Feature Store", question: "Implement online/offline feature store.", hint: "Storage, serving, consistency", expectedTime: "50 min", topics: ["ML", "Features"], testCases: [{ input: "feature request", output: "values" }], solutionApproach: "Store, retrieval, sync" },
    { id: 7, type: "coding", difficulty: "medium", title: "Data Validation", question: "Build data quality validation framework.", hint: "Schema, statistics, checks", expectedTime: "40 min", topics: ["ML", "Quality"], testCases: [{ input: "dataset", output: "valid/invalid" }], solutionApproach: "Validation rules, execution, report" },
    { id: 8, type: "coding", difficulty: "hard", title: "Distributed Training", question: "Implement data parallel training.", hint: "Gradient sync, DDP, all-reduce", expectedTime: "55 min", topics: ["ML", "Distributed"], testCases: [{ input: "multi-GPU", output: "trained" }], solutionApproach: "Parallel wrapper, gradient sync" },
    { id: 9, type: "coding", difficulty: "hard", title: "Model Compression", question: "Implement knowledge distillation.", hint: "Teacher, student, soft targets", expectedTime: "50 min", topics: ["ML", "Compression"], testCases: [{ input: "teacher model", output: "compressed student" }], solutionApproach: "Distillation loss, training" },
    { id: 10, type: "coding", difficulty: "hard", title: "AutoML", question: "Build automated model selection pipeline.", hint: "Search space, NAS, evaluation", expectedTime: "60 min", topics: ["ML", "AutoML"], testCases: [{ input: "dataset", output: "best model" }], solutionApproach: "Search, train, compare" },
    { id: 11, type: "coding", difficulty: "hard", title: "Monitoring Dashboard", question: "Build ML model monitoring with drift detection.", hint: "Metrics, drift, alerting", expectedTime: "50 min", topics: ["ML", "Monitoring"], testCases: [{ input: "predictions", output: "drift alert" }], solutionApproach: "Metrics calc, comparison, alert" },
    { id: 12, type: "coding", difficulty: "hard", title: "A/B Testing Framework", question: "Implement ML model A/B testing.", hint: "Traffic split, metrics, significance", expectedTime: "45 min", topics: ["ML", "Testing"], testCases: [{ input: "2 models", output: "winner" }], solutionApproach: "Routing, metrics, analysis" },
    { id: 13, type: "coding", difficulty: "hard", title: "Experiment Tracker", question: "Build experiment tracking with MLflow style.", hint: "Runs, params, metrics, artifacts", expectedTime: "50 min", topics: ["ML", "Tracking"], testCases: [{ input: "log experiment", output: "tracked" }], solutionApproach: "Backend, logging, UI" },
    { id: 14, type: "coding", difficulty: "hard", title: "Online Learning", question: "Implement incremental/online learning.", hint: "Partial fit, streaming, update", expectedTime: "45 min", topics: ["ML", "Online"], testCases: [{ input: "new data", output: "model updated" }], solutionApproach: "Incremental update, forgetting" },
    { id: 15, type: "coding", difficulty: "hard", title: "Model Explainability", question: "Build SHAP/LIME explainer integration.", hint: "Attribution, visualization, API", expectedTime: "50 min", topics: ["ML", "XAI"], testCases: [{ input: "prediction", output: "explanation" }], solutionApproach: "Explainer, calculation, display" },
    { id: 16, type: "coding", difficulty: "hard", title: "Data Augmentation", question: "Implement custom data augmentation pipeline.", hint: "Transforms, composition, on-the-fly", expectedTime: "40 min", topics: ["ML", "Augmentation"], testCases: [{ input: "image", output: "augmented" }], solutionApproach: "Transforms, randomness, pipeline" },
    { id: 17, type: "coding", difficulty: "hard", title: "Neural Architecture", question: "Build neural architecture search (NAS) implementation.", hint: "Cell search, controller, reward", expectedTime: "70 min", topics: ["ML", "NAS"], testCases: [{ input: "search space", output: "architecture" }], solutionApproach: "Controller, child network, RL" },
    { id: 18, type: "coding", difficulty: "hard", title: "Federated Learning", question: "Implement federated learning coordinator.", hint: "Clients, aggregation, privacy", expectedTime: "65 min", topics: ["ML", "Federated"], testCases: [{ input: "client updates", output: "global model" }], solutionApproach: "Coordination, FedAvg, security" },
    { id: 19, type: "coding", difficulty: "hard", title: "Model Optimization", question: "Build model optimization service (quantization, pruning).", hint: "Quantization, pruning, benchmark", expectedTime: "60 min", topics: ["ML", "Optimization"], testCases: [{ input: "model", output: "optimized" }], solutionApproach: "Techniques, evaluation, export" },
    { id: 20, type: "coding", difficulty: "hard", title: "Edge Deployment", question: "Implement edge model deployment with ONNX Runtime.", hint: "Conversion, optimization, inference", expectedTime: "50 min", topics: ["ML", "Edge"], testCases: [{ input: "model", output: "runs on edge" }], solutionApproach: "Convert, optimize, deploy" }
  ],

  "Web Developer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Responsive Grid", question: "Create a responsive CSS grid that shows 4 columns on desktop, 2 on tablet, 1 on mobile.", hint: "Use CSS Grid with media queries", expectedTime: "10 min", topics: ["CSS", "Responsive"], testCases: [{ input: "screen width 1200px", output: "4 columns" }, { input: "screen width 768px", output: "2 columns" }, { input: "screen width 375px", output: "1 column" }], solutionApproach: "grid-template-columns with repeat and minmax, media queries" },
    { id: 2, type: "coding", difficulty: "easy", title: "Form Validation", question: "Write JavaScript to validate an email input field in real-time.", hint: "Use regex and addEventListener for input events", expectedTime: "10 min", topics: ["JavaScript", "Validation"], testCases: [{ input: "test@example.com", output: "valid" }, { input: "invalid-email", output: "invalid" }, { input: "", output: "invalid" }], solutionApproach: "Regex test, input event listener, show/hide error message" },
    { id: 3, type: "coding", difficulty: "easy", title: "Fetch API Call", question: "Use fetch API to get data from /api/users and display names in a list.", hint: "fetch().then().then() pattern, createElement, appendChild", expectedTime: "10 min", topics: ["JavaScript", "API"], testCases: [{ input: "GET /api/users", output: "list of user names displayed" }], solutionApproach: "fetch, json(), DOM manipulation" },
    { id: 4, type: "coding", difficulty: "easy", title: "CSS Flexbox Center", question: "Center a div both horizontally and vertically using flexbox.", hint: "Use display:flex, justify-content, align-items on parent", expectedTime: "5 min", topics: ["CSS", "Flexbox"], testCases: [{ input: "any child element", output: "centered in viewport" }], solutionApproach: "display:flex, justify-content:center, align-items:center, height:100vh" },
    { id: 5, type: "coding", difficulty: "easy", title: "Debounce Function", question: "Implement a debounce function that delays execution until after wait milliseconds.", hint: "Use setTimeout, clearTimeout, return new function", expectedTime: "10 min", topics: ["JavaScript", "Functions"], testCases: [{ input: "call 5 times rapidly with 300ms debounce", output: "only last call executes" }], solutionApproach: "setTimeout/clearTimeout, closure for timer variable" },
    { id: 6, type: "coding", difficulty: "easy", title: "LocalStorage Todo", question: "Save and retrieve a todo list from localStorage.", hint: "JSON.stringify, JSON.parse, localStorage.setItem/getItem", expectedTime: "10 min", topics: ["JavaScript", "Storage"], testCases: [{ input: '[{"text":"Buy milk","done":false}]', output: "persisted after page reload" }], solutionApproach: "JSON serialization, localStorage API" },
    { id: 7, type: "coding", difficulty: "easy", title: "DOM Event Delegation", question: "Use event delegation to handle clicks on dynamically added list items.", hint: "Attach listener to parent, check event.target", expectedTime: "10 min", topics: ["JavaScript", "DOM"], testCases: [{ input: "click on dynamically added item", output: "event handler triggered" }], solutionApproach: "Parent addEventListener, event.target.matches() check" },
    { id: 8, type: "coding", difficulty: "easy", title: "CSS Animation", question: "Create a fade-in animation for a modal dialog.", hint: "Use @keyframes, opacity transition", expectedTime: "10 min", topics: ["CSS", "Animation"], testCases: [{ input: "modal open trigger", output: "opacity 0 to 1 over 300ms" }], solutionApproach: "@keyframes fadeIn, animation property, opacity transition" },
    { id: 9, type: "coding", difficulty: "easy", title: "Array Filter Map", question: "Given an array of numbers, return array of squares of even numbers.", hint: "Use filter then map methods", expectedTime: "5 min", topics: ["JavaScript", "Arrays"], testCases: [{ input: "[1, 2, 3, 4, 5, 6]", output: "[4, 16, 36]" }, { input: "[1, 3, 5]", output: "[]" }], solutionApproach: "arr.filter(n => n%2===0).map(n => n*n)" },
    { id: 10, type: "coding", difficulty: "easy", title: "Promise Chain", question: "Chain promises to fetch user, then fetch user's posts, then display count.", hint: "Return promise from first .then(), chain second .then()", expectedTime: "15 min", topics: ["JavaScript", "Promises"], testCases: [{ input: "userId=1", output: "User John has 5 posts" }], solutionApproach: "fetch().then().then() chaining, promise return" }
  ],

  "Cloud Architect Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "AWS S3 Upload", question: "Write Node.js code to upload a file to AWS S3 bucket.", hint: "Use AWS SDK, putObject method", expectedTime: "10 min", topics: ["AWS", "S3"], testCases: [{ input: "file.txt content", output: "uploaded to s3://bucket/file.txt" }], solutionApproach: "AWS.S3, putObject with Bucket, Key, Body params" },
    { id: 2, type: "coding", difficulty: "easy", title: "Dockerfile", question: "Write a Dockerfile for a Node.js Express app.", hint: "FROM node, COPY, RUN npm install, CMD", expectedTime: "10 min", topics: ["Docker", "DevOps"], testCases: [{ input: "Node.js app", output: "Docker image builds and runs" }], solutionApproach: "FROM node:18-alpine, WORKDIR, COPY package*.json, RUN npm ci, COPY ., CMD" },
    { id: 3, type: "coding", difficulty: "easy", title: "EC2 Health Check", question: "Write a script to check health of EC2 instances via AWS CLI.", hint: "Use aws ec2 describe-instance-status", expectedTime: "10 min", topics: ["AWS", "CLI"], testCases: [{ input: "instance-id i-123", output: "status: running, checks: passed" }], solutionApproach: "AWS CLI describe-instance-status, filter by instance ID" },
    { id: 4, type: "coding", difficulty: "easy", title: "S3 List Buckets", question: "List all S3 buckets and their creation dates using AWS SDK.", hint: "Use listBuckets() API call", expectedTime: "5 min", topics: ["AWS", "S3"], testCases: [{ input: "AWS credentials", output: "array of bucket names and dates" }], solutionApproach: "s3.listBuckets(), map over Buckets array" },
    { id: 5, type: "coding", difficulty: "easy", title: "Lambda Handler", question: "Write an AWS Lambda handler that returns a JSON response.", hint: "exports.handler = async (event) => { return {statusCode: 200, body: JSON.stringify(data)} }", expectedTime: "10 min", topics: ["AWS", "Lambda"], testCases: [{ input: "GET request", output: "{statusCode:200, body:'{message:Hello}'}" }], solutionApproach: "handler function, return object with statusCode and body" },
    { id: 6, type: "coding", difficulty: "easy", title: "Terraform Resource", question: "Write Terraform code to create an AWS EC2 instance.", hint: "resource aws_instance, ami, instance_type", expectedTime: "10 min", topics: ["Terraform", "IaC"], testCases: [{ input: "terraform apply", output: "EC2 instance created" }], solutionApproach: "resource aws_instance with ami, instance_type, tags" },
    { id: 7, type: "coding", difficulty: "easy", title: "K8s Deployment", question: "Write a Kubernetes Deployment YAML for a web app with 3 replicas.", hint: "apiVersion: apps/v1, kind: Deployment, replicas: 3", expectedTime: "10 min", topics: ["Kubernetes", "YAML"], testCases: [{ input: "kubectl apply", output: "3 pods running" }], solutionApproach: "Deployment spec with replicas, selector, template, containers" },
    { id: 8, type: "coding", difficulty: "easy", title: "CloudWatch Log Query", question: "Write a CloudWatch Logs Insights query to find ERROR messages.", hint: "fields @timestamp, @message | filter @message like /ERROR/", expectedTime: "5 min", topics: ["AWS", "Monitoring"], testCases: [{ input: "log group /aws/lambda/myfunction", output: "error log entries" }], solutionApproach: "fields, filter with regex pattern, sort, limit" }
  ],

  "Database Administrator Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "SQL Select Query", question: "Write a SQL query to select all employees in department 5 with salary > 50000.", hint: "SELECT * FROM employees WHERE department_id = 5 AND salary > 50000", expectedTime: "5 min", topics: ["SQL", "SELECT"], testCases: [{ input: "employees table", output: "filtered rows" }], solutionApproach: "SELECT with WHERE clause, AND condition" },
    { id: 2, type: "coding", difficulty: "easy", title: "SQL Join", question: "Write a query to get employee names and their department names using JOIN.", hint: "SELECT e.name, d.name FROM employees e JOIN departments d ON e.dept_id = d.id", expectedTime: "5 min", topics: ["SQL", "JOIN"], testCases: [{ input: "employees and departments tables", output: "combined data" }], solutionApproach: "INNER JOIN on foreign key relationship" },
    { id: 3, type: "coding", difficulty: "easy", title: "SQL Aggregation", question: "Find average salary per department using GROUP BY.", hint: "SELECT department_id, AVG(salary) FROM employees GROUP BY department_id", expectedTime: "5 min", topics: ["SQL", "Aggregation"], testCases: [{ input: "employees table", output: "avg salary per dept" }], solutionApproach: "GROUP BY with AVG aggregate function" },
    { id: 4, type: "coding", difficulty: "easy", title: "SQL Index Creation", question: "Write SQL to create an index on employees(email) for faster lookups.", hint: "CREATE INDEX idx_email ON employees(email)", expectedTime: "5 min", topics: ["SQL", "Indexes"], testCases: [{ input: "employees table", output: "index created" }], solutionApproach: "CREATE INDEX statement with table and column" },
    { id: 5, type: "coding", difficulty: "easy", title: "MongoDB Find", question: "Write MongoDB query to find all users with age >= 18 and status = active.", hint: "db.users.find({age: {$gte: 18}, status: 'active'})", expectedTime: "5 min", topics: ["MongoDB", "NoSQL"], testCases: [{ input: "users collection", output: "filtered documents" }], solutionApproach: "find() with comparison and equality operators" },
    { id: 6, type: "coding", difficulty: "easy", title: "SQL Update", question: "Update all employees in department 3 to have a 10% salary increase.", hint: "UPDATE employees SET salary = salary * 1.1 WHERE department_id = 3", expectedTime: "5 min", topics: ["SQL", "UPDATE"], testCases: [{ input: "dept 3 employees", output: "salaries increased 10%" }], solutionApproach: "UPDATE with SET and WHERE clause" },
    { id: 7, type: "coding", difficulty: "easy", title: "SQL Delete Duplicates", question: "Delete duplicate rows from a table keeping only one instance.", hint: "Use DELETE with subquery or CTE with ROW_NUMBER()", expectedTime: "10 min", topics: ["SQL", "Data Cleaning"], testCases: [{ input: "table with duplicates", output: "unique rows only" }], solutionApproach: "CTE with ROW_NUMBER(), DELETE where row_num > 1" },
    { id: 8, type: "coding", difficulty: "easy", title: "Redis Set/Get", question: "Write Redis commands to set a key with expiration and retrieve it.", hint: "SETEX key seconds value, GET key", expectedTime: "5 min", topics: ["Redis", "Caching"], testCases: [{ input: "SETEX session:123 3600 'data'", output: "value stored with TTL" }], solutionApproach: "SETEX for set with expiration, GET for retrieval" }
  ],

  "Network Engineer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Ping Sweep", question: "Write a script to ping a range of IP addresses (192.168.1.1 to 192.168.1.254).", hint: "Use subprocess or os.system to run ping command in loop", expectedTime: "10 min", topics: ["Networking", "Scripting"], testCases: [{ input: "192.168.1.1-254", output: "list of responsive hosts" }], solutionApproach: "Loop through IP range, run ping command, capture output" },
    { id: 2, type: "coding", difficulty: "easy", title: "Port Scanner", question: "Scan common ports (22, 80, 443, 3306) on a given host.", hint: "Use socket module, try connect with timeout", expectedTime: "10 min", topics: ["Networking", "Security"], testCases: [{ input: "localhost", output: "open ports list" }], solutionApproach: "socket.connect_ex() with timeout, check return value" },
    { id: 3, type: "coding", difficulty: "easy", title: "Subnet Calculator", question: "Calculate network address, broadcast, and usable range from IP/CIDR.", hint: "Use ipaddress module in Python", expectedTime: "10 min", topics: ["Networking", "IP"], testCases: [{ input: "192.168.1.0/24", output: "network, broadcast, usable IPs" }], solutionApproach: "ipaddress.IPv4Network, network_address, broadcast_address, hosts()" },
    { id: 4, type: "coding", difficulty: "easy", title: "DNS Lookup", question: "Resolve domain names to IP addresses using socket.gethostbyname.", hint: "socket.gethostbyname() or dns.resolver", expectedTime: "5 min", topics: ["Networking", "DNS"], testCases: [{ input: "google.com", output: "IP addresses list" }], solutionApproach: "socket.gethostbyname_ex() or dnspython resolver" },
    { id: 5, type: "coding", difficulty: "easy", title: "HTTP Request", question: "Send GET request and print status code, headers, and body length.", hint: "Use requests library or http.client", expectedTime: "5 min", topics: ["HTTP", "API"], testCases: [{ input: "https://api.example.com/data", output: "200, headers, body length" }], solutionApproach: "requests.get(), status_code, headers, len(content)" },
    { id: 6, type: "coding", difficulty: "easy", title: "Traceroute", question: "Implement basic traceroute using increasing TTL values.", hint: "Use scapy or raw sockets with TTL manipulation", expectedTime: "20 min", topics: ["Networking", "Protocols"], testCases: [{ input: "8.8.8.8", output: "hop list with IPs" }], solutionApproach: "Raw sockets, setsockopt for TTL, recv ICMP responses" },
    { id: 7, type: "coding", difficulty: "easy", title: "Bandwidth Monitor", question: "Monitor network interface bytes sent/received over 10 seconds.", hint: "Read /proc/net/dev or use psutil.net_io_counters", expectedTime: "10 min", topics: ["Networking", "Monitoring"], testCases: [{ input: "eth0, 10 seconds", output: "MB sent/received" }], solutionApproach: "psutil.net_io_counters, delta over time interval" },
    { id: 8, type: "coding", difficulty: "easy", title: "Packet Sniffer", question: "Capture and display TCP packets with source/dest IPs and ports.", hint: "Use scapy.sniff() or socket with AF_PACKET", expectedTime: "15 min", topics: ["Networking", "Security"], testCases: [{ input: "interface eth0, count 10", output: "packet details" }], solutionApproach: "scapy.sniff(), filter='tcp', lambda for packet display" }
  ],

  "Systems Administrator Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Disk Usage Alert", question: "Check disk usage and alert if above 90% using df command.", hint: "subprocess.check_output(['df', '-h']), parse percentage", expectedTime: "10 min", topics: ["Linux", "Monitoring"], testCases: [{ input: "/dev/sda1 at 95%", output: "ALERT: Disk usage 95%" }], solutionApproach: "subprocess, regex for percentage, threshold check" },
    { id: 2, type: "coding", difficulty: "easy", title: "Process Monitor", question: "List all running Python processes with their PID and memory usage.", hint: "Use psutil.process_iter() with name filter", expectedTime: "10 min", topics: ["Linux", "Processes"], testCases: [{ input: "processes", output: "PID, name, memory for python processes" }], solutionApproach: "psutil.process_iter, info=['pid', 'name', 'memory_info']" },
    { id: 3, type: "coding", difficulty: "easy", title: "Log Rotation", question: "Rotate log files when they exceed 100MB, keeping 5 backups.", hint: "Check file size, rename with timestamp, gzip old logs", expectedTime: "15 min", topics: ["Linux", "Log Management"], testCases: [{ input: "app.log at 150MB", output: "app.log.1.gz created, new app.log started" }], solutionApproach: "os.path.getsize, shutil.move, gzip, glob for backup count" },
    { id: 4, type: "coding", difficulty: "easy", title: "User Creation Script", question: "Bulk create users from a CSV file with specified groups.", hint: "subprocess.useradd, set password, add to groups", expectedTime: "10 min", topics: ["Linux", "User Management"], testCases: [{ input: "users.csv with 5 users", output: "5 users created with correct groups" }], solutionApproach: "csv.DictReader, subprocess.run(['useradd']), subprocess.run(['usermod'])" },
    { id: 5, type: "coding", difficulty: "easy", title: "Backup Script", question: "Backup /home directory to /backup with date-stamped tar.gz.", hint: "tar command with czf flags, datetime in filename", expectedTime: "10 min", topics: ["Linux", "Backup"], testCases: [{ input: "/home", output: "/backup/home_20240115_120000.tar.gz" }], solutionApproach: "datetime.now().strftime, subprocess.tar with czf" },
    { id: 6, type: "coding", difficulty: "easy", title: "Service Status Check", question: "Check if nginx service is running and restart if not.", hint: "systemctl is-active, systemctl restart", expectedTime: "10 min", topics: ["Linux", "Services"], testCases: [{ input: "nginx stopped", output: "nginx restarted successfully" }], solutionApproach: "subprocess.run systemctl is-active, check returncode, restart if needed" },
    { id: 7, type: "coding", difficulty: "easy", title: "Cron Parser", question: "Parse a crontab line and explain when it runs.", hint: "Split by space, map fields to time components", expectedTime: "10 min", topics: ["Linux", "Cron"], testCases: [{ input: "0 2 * * * /backup.sh", output: "Runs daily at 2:00 AM" }], solutionApproach: "Split fields, map minute/hour/dom/month/dow to descriptions" },
    { id: 8, type: "coding", difficulty: "easy", title: "File Permission Audit", question: "Find all files in /var/www with permissions more open than 644.", hint: "os.walk, os.stat, st_mode & 0o777 > 0o644", expectedTime: "10 min", topics: ["Linux", "Security"], testCases: [{ input: "/var/www", output: "list of files with 755, 777 permissions" }], solutionApproach: "os.walk, os.stat, bitwise AND with permission mask" }
  ],

  "Embedded Systems Engineer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "GPIO LED Toggle", question: "Write C code to toggle an LED connected to GPIO pin every 500ms.", hint: "Use wiringPi or sysfs gpio interface, sleep, toggle", expectedTime: "10 min", topics: ["Embedded", "GPIO"], testCases: [{ input: "GPIO 17", output: "LED blinks every 500ms" }], solutionApproach: "wiringPiSetup, pinMode, digitalWrite, delay in loop" },
    { id: 2, type: "coding", difficulty: "easy", title: "ADC Read", question: "Read analog value from ADC and convert to voltage (0-3.3V range).", hint: "Read raw value (0-1023), scale to voltage", expectedTime: "10 min", topics: ["Embedded", "ADC"], testCases: [{ input: "raw value 512", output: "1.65V" }], solutionApproach: "voltage = (raw / 1023.0) * 3.3" },
    { id: 3, type: "coding", difficulty: "easy", title: "UART Send", question: "Send a string 'Hello' via UART at 9600 baud.", hint: "Configure UART, open, write bytes", expectedTime: "10 min", topics: ["Embedded", "UART"], testCases: [{ input: "Hello", output: "bytes sent over UART" }], solutionApproach: "serialOpen, serialPuts, wiringPi serial functions" },
    { id: 4, type: "coding", difficulty: "easy", title: "PWM LED Dimmer", question: "Control LED brightness using PWM with duty cycle 0-100%.", hint: "softPwmCreate, softPwmWrite", expectedTime: "10 min", topics: ["Embedded", "PWM"], testCases: [{ input: "duty cycle 50", output: "LED at half brightness" }], solutionApproach: "softPwmCreate(pin, 0, 100), softPwmWrite(pin, value)" },
    { id: 5, type: "coding", difficulty: "easy", title: "Button Debounce", question: "Read button press with software debouncing (20ms delay).", hint: "Read, wait 20ms, read again, check if same", expectedTime: "10 min", topics: ["Embedded", "Input"], testCases: [{ input: "button press", output: "debounced press detected" }], solutionApproach: "digitalRead, delay(20), digitalRead again, compare" },
    { id: 6, type: "coding", difficulty: "easy", title: "I2C Scan", question: "Scan I2C bus and print addresses of connected devices.", hint: "Loop through 0x03-0x77, try to read, print responding", expectedTime: "10 min", topics: ["Embedded", "I2C"], testCases: [{ input: "I2C bus", output: "Found devices at: 0x3C, 0x68" }], solutionApproach: "wiringPiI2CSetup, try addresses 0x03-0x77, check return" },
    { id: 7, type: "coding", difficulty: "easy", title: "Timer Interrupt", question: "Set up timer interrupt to call function every 1 second.", hint: "signal.SIGALRM, signal.signal, setitimer", expectedTime: "15 min", topics: ["Embedded", "Interrupts"], testCases: [{ input: "1 second interval", output: "handler called every 1s" }], solutionApproach: "signal.signal(SIGALRM, handler), setitimer(ITIMER_REAL, 1, 1)" },
    { id: 8, type: "coding", difficulty: "easy", title: "EEPROM Write/Read", question: "Write a byte to EEPROM at address 0x50, then read it back.", hint: "I2C write to address, then read from address", expectedTime: "10 min", topics: ["Embedded", "EEPROM"], testCases: [{ input: "write 0xAB to addr 0x10", output: "read back 0xAB" }], solutionApproach: "wiringPiI2CWriteReg8, wiringPiI2CReadReg8" }
  ],

  "AR/VR Developer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Unity Raycast", question: "Cast a ray from camera center and detect hit object.", hint: "Camera.main.ScreenPointToRay, Physics.Raycast", expectedTime: "10 min", topics: ["Unity", "AR"], testCases: [{ input: "center screen click", output: "hit object name" }], solutionApproach: "ScreenPointToRay, Raycast, check hit.collider" },
    { id: 2, type: "coding", difficulty: "easy", title: "Object Rotation", question: "Rotate an object 360 degrees around Y-axis over 5 seconds.", hint: "transform.Rotate or Quaternion.Slerp in Update", expectedTime: "10 min", topics: ["Unity", "Animation"], testCases: [{ input: "5 seconds", output: "full rotation" }], solutionApproach: "transform.Rotate(0, 360 * Time.deltaTime / 5, 0)" },
    { id: 3, type: "coding", difficulty: "easy", title: "Gaze Input", question: "Highlight object when user looks at it for 2 seconds.", hint: "Raycast from camera, timer, color change", expectedTime: "15 min", topics: ["Unity", "VR"], testCases: [{ input: "look at cube for 2s", output: "cube highlighted" }], solutionApproach: "Physics.Raycast, accumulate Time.deltaTime, change material color" },
    { id: 4, type: "coding", difficulty: "easy", title: "Hand Tracking", question: "Detect if hand is open or closed using finger positions.", hint: "Compare fingertip to knuckle distance for all fingers", expectedTime: "15 min", topics: ["Unity", "Hand Tracking"], testCases: [{ input: "hand pose", output: "'open' or 'closed'" }], solutionApproach: "Vector3.Distance(tip, knuckle) > threshold for all fingers" },
    { id: 5, type: "coding", difficulty: "easy", title: "3D Text Display", question: "Display floating 3D text above an object in world space.", hint: "TextMeshPro, worldPosition, look at camera", expectedTime: "10 min", topics: ["Unity", "UI"], testCases: [{ input: "object at (0,0,0)", output: "3D text floating above" }], solutionApproach: "Instantiate TextMeshPro, set position above object, face camera" },
    { id: 6, type: "coding", difficulty: "easy", title: "Gesture Recognition", question: "Detect swipe left/right gesture from controller.", hint: "Track position delta over time, threshold for swipe", expectedTime: "15 min", topics: ["Unity", "Input"], testCases: [{ input: "quick left motion", output: "'swipe left' detected" }], solutionApproach: "Record positions, calculate delta.x, threshold check" },
    { id: 7, type: "coding", difficulty: "easy", title: "Teleportation", question: "Move player to point on floor where raycast hits.", hint: "Raycast down from controller, set player position to hit.point", expectedTime: "10 min", topics: ["Unity", "VR"], testCases: [{ input: "point at floor", output: "player moved to that point" }], solutionApproach: "Physics.Raycast, check hit, move transform.position" },
    { id: 8, type: "coding", difficulty: "easy", title: "Spatial Audio", question: "Set up audio source that gets louder as player approaches.", hint: "AudioSource, calculate distance, adjust volume", expectedTime: "10 min", topics: ["Unity", "Audio"], testCases: [{ input: "player moves closer", output: "volume increases" }], solutionApproach: "Vector3.Distance, lerp volume based on distance range" }
  ],

  "IoT Developer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "MQTT Publish", question: "Publish sensor data to MQTT topic 'home/sensor/temp'.", hint: "paho-mqtt client, connect, publish, loop", expectedTime: "10 min", topics: ["IoT", "MQTT"], testCases: [{ input: "temperature 25.5", output: "published to topic" }], solutionApproach: "mqtt.Client, connect, publish, loop_start" },
    { id: 2, type: "coding", difficulty: "easy", title: "MQTT Subscribe", question: "Subscribe to topic and print received messages.", hint: "on_connect subscribe, on_message callback", expectedTime: "10 min", topics: ["IoT", "MQTT"], testCases: [{ input: "message on topic", output: "printed to console" }], solutionApproach: "client.on_connect = lambda c,u,f,rc: c.subscribe(), on_message prints payload" },
    { id: 3, type: "coding", difficulty: "easy", title: "HTTP REST API", question: "Create Flask endpoint /sensor that returns JSON data.", hint: "@app.route('/sensor'), return jsonify(data)", expectedTime: "10 min", topics: ["IoT", "API"], testCases: [{ input: "GET /sensor", output: '{"temp": 25.5, "humidity": 60}' }], solutionApproach: "Flask app, route, jsonify sensor data dict" },
    { id: 4, type: "coding", difficulty: "easy", title: "Sensor Read", question: "Read DHT22 temperature/humidity sensor using Adafruit library.", hint: "Adafruit_DHT.read_retry, parse temperature and humidity", expectedTime: "10 min", topics: ["IoT", "Sensors"], testCases: [{ input: "DHT22 on GPIO4", output: "temp=25.5, humidity=60" }], solutionApproach: "Adafruit_DHT.read_retry(22, pin), return result" },
    { id: 5, type: "coding", difficulty: "easy", title: "Data Logging", question: "Log sensor readings to CSV file with timestamp every minute.", hint: "csv.writer, datetime.now, time.sleep(60)", expectedTime: "10 min", topics: ["IoT", "Data"], testCases: [{ input: "sensor data", output: "CSV with timestamp, values" }], solutionApproach: "open file, csv.writer, loop with write row, sleep 60" },
    { id: 6, type: "coding", difficulty: "easy", title: "OTA Update", question: "Download firmware from URL and save to file for ESP32 OTA.", hint: "requests.get, open file, write content", expectedTime: "10 min", topics: ["IoT", "OTA"], testCases: [{ input: "firmware.bin URL", output: "file saved locally" }], solutionApproach: "requests.get, open('/tmp/firmware.bin', 'wb'), write response.content" },
    { id: 7, type: "coding", difficulty: "easy", title: "Device Discovery", question: "Discover IoT devices on local network using SSDP/mDNS.", hint: "zeroconf, ServiceBrowser, or SSDP M-SEARCH", expectedTime: "15 min", topics: ["IoT", "Discovery"], testCases: [{ input: "network scan", output: "list of IoT devices" }], solutionApproach: "zeroconf.ServiceBrowser, on_service_state_changed callback" },
    { id: 8, type: "coding", difficulty: "easy", title: "Alert Threshold", question: "Send email alert when temperature exceeds threshold.", hint: "Check value, smtplib to send email if > threshold", expectedTime: "10 min", topics: ["IoT", "Alerts"], testCases: [{ input: "temp 35C, threshold 30C", output: "email sent" }], solutionApproach: "if temp > threshold: smtplib.SMTP, sendmail with alert message" }
  ],

  "Bioinformatics Engineer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "DNA Reverse Complement", question: "Given a DNA sequence, return its reverse complement (A↔T, C↔G).", hint: "Reverse string, then map A→T, T→A, C→G, G→C", expectedTime: "5 min", topics: ["Bioinformatics", "DNA"], testCases: [{ input: "ATCG", output: "CGAT" }, { input: "AAA", output: "TTT" }], solutionApproach: "Reverse, then char mapping dict, join result" },
    { id: 2, type: "coding", difficulty: "easy", title: "GC Content", question: "Calculate GC content percentage of a DNA sequence.", hint: "Count G and C, divide by total length, multiply by 100", expectedTime: "5 min", topics: ["Bioinformatics", "Statistics"], testCases: [{ input: "GCGC", output: "100.0" }, { input: "ATAT", output: "0.0" }, { input: "ATGC", output: "50.0" }], solutionApproach: "Count G+C, divide by len(seq), *100" },
    { id: 3, type: "coding", difficulty: "easy", title: "Hamming Distance", question: "Calculate Hamming distance between two DNA sequences of equal length.", hint: "Count positions where characters differ", expectedTime: "5 min", topics: ["Bioinformatics", "Comparison"], testCases: [{ input: "ATCG, ATCG", output: "0" }, { input: "ATCG, ATGG", output: "1" }], solutionApproach: "Sum(1 for a,b in zip(s1,s2) if a!=b)" },
    { id: 4, type: "coding", difficulty: "easy", title: "Codon Translation", question: "Translate RNA sequence to protein using codon table.", hint: "Split into triplets, map to amino acids using dict", expectedTime: "10 min", topics: ["Bioinformatics", "Translation"], testCases: [{ input: "AUGUUUUGA", output: "M F Stop" }], solutionApproach: "Dict mapping codons to amino acids, split by 3, map" },
    { id: 5, type: "coding", difficulty: "easy", title: "FASTA Parser", question: "Parse FASTA file and return dict of {header: sequence}.", hint: "Lines starting with > are headers, join following lines", expectedTime: "10 min", topics: ["Bioinformatics", "Parsing"], testCases: [{ input: ">seq1\\nATCG\\n>seq2\\nGGCC", output: "{'seq1': 'ATCG', 'seq2': 'GGCC'}" }], solutionApproach: "Loop lines, if starts with > new key, else append to current" },
    { id: 6, type: "coding", difficulty: "easy", title: "Motif Finding", question: "Find all positions of a motif (substring) in DNA sequence.", hint: "Use string find in loop, starting from previous position+1", expectedTime: "5 min", topics: ["Bioinformatics", "Search"], testCases: [{ input: "ATCGATCG, ATC", output: "[0, 4]" }], solutionApproach: "seq.find(motif, start) in loop until -1" },
    { id: 7, type: "coding", difficulty: "easy", title: "K-mer Count", question: "Count occurrences of all k-mers (substrings of length k) in sequence.", hint: "Sliding window of size k, Counter dict", expectedTime: "5 min", topics: ["Bioinformatics", "K-mers"], testCases: [{ input: "ATCGAT, k=2", output: "{AT:2, TC:1, CG:1, GA:1}" }], solutionApproach: "Sliding window Counter, seq[i:i+k]" },
    { id: 8, type: "coding", difficulty: "easy", title: "Consensus Sequence", question: "Find consensus sequence from multiple DNA sequence alignment.", hint: "For each position, find most common base", expectedTime: "10 min", topics: ["Bioinformatics", "Alignment"], testCases: [{ input: "[ATCG, ATCG, ATGG]", output: "ATCG" }], solutionApproach: "Zip sequences, Counter per position, most_common" }
  ],

  "Research Scientist Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "CSV Data Loader", question: "Load CSV file into pandas DataFrame and show basic stats.", hint: "pd.read_csv, df.describe(), df.info()", expectedTime: "5 min", topics: ["Data Science", "Pandas"], testCases: [{ input: "data.csv", output: "DataFrame with stats" }], solutionApproach: "pandas.read_csv, describe for statistics" },
    { id: 2, type: "coding", difficulty: "easy", title: "Missing Value Check", question: "Count missing values per column in DataFrame.", hint: "df.isnull().sum()", expectedTime: "5 min", topics: ["Data Science", "Cleaning"], testCases: [{ input: "DataFrame with NaNs", output: "column: count of NaNs" }], solutionApproach: "isnull().sum() gives count per column" },
    { id: 3, type: "coding", difficulty: "easy", title: "Normalize Data", question: "Min-max normalize array to 0-1 range.", hint: "(x - min) / (max - min)", expectedTime: "5 min", topics: ["Data Science", "Preprocessing"], testCases: [{ input: "[1, 2, 3, 4, 5]", output: "[0.0, 0.25, 0.5, 0.75, 1.0]" }], solutionApproach: "Subtract min, divide by (max-min)" },
    { id: 4, type: "coding", difficulty: "easy", title: "Scatter Plot", question: "Create scatter plot of x vs y with matplotlib.", hint: "plt.scatter, plt.xlabel, plt.ylabel, plt.show", expectedTime: "5 min", topics: ["Data Science", "Visualization"], testCases: [{ input: "x=[1,2,3], y=[2,4,6]", output: "scatter plot displayed" }], solutionApproach: "plt.scatter(x,y), labels, show" },
    { id: 5, type: "coding", difficulty: "easy", title: "Linear Regression", question: "Fit simple linear regression and predict values.", hint: "sklearn.linear_model.LinearRegression, fit, predict", expectedTime: "10 min", topics: ["ML", "Regression"], testCases: [{ input: "X=[[1],[2],[3]], y=[2,4,6]", output: "predictions [2,4,6], score ~1.0" }], solutionApproach: "LinearRegression(), fit, predict, score" },
    { id: 6, type: "coding", difficulty: "easy", title: "T-Test", question: "Perform independent t-test between two samples.", hint: "scipy.stats.ttest_ind, compare p-value to alpha", expectedTime: "5 min", topics: ["Statistics", "Hypothesis Testing"], testCases: [{ input: "sample1, sample2", output: "t-statistic, p-value" }], solutionApproach: "ttest_ind(sample1, sample2)" },
    { id: 7, type: "coding", difficulty: "easy", title: "Correlation Matrix", question: "Compute Pearson correlation matrix for DataFrame.", hint: "df.corr(), seaborn.heatmap for visualization", expectedTime: "5 min", topics: ["Data Science", "Statistics"], testCases: [{ input: "DataFrame with numeric cols", output: "correlation matrix" }], solutionApproach: "DataFrame.corr()" },
    { id: 8, type: "coding", difficulty: "easy", title: "Outlier Detection", question: "Detect outliers using Z-score method (|z| > 3).", hint: "stats.zscore, np.abs, filter where > 3", expectedTime: "5 min", topics: ["Data Science", "Statistics"], testCases: [{ input: "[1,2,2,2,3,100]", output: "[100] is outlier" }], solutionApproach: "zscore = (x-mean)/std, find where abs(z) > 3" }
  ],

  "NLP Engineer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Tokenize Text", question: "Split text into words (tokens) using regex.", hint: "re.findall(r'\b\w+\b', text.lower())", expectedTime: "5 min", topics: ["NLP", "Tokenization"], testCases: [{ input: "Hello world!", output: "['hello', 'world']" }], solutionApproach: "Regex word boundary, lowercase" },
    { id: 2, type: "coding", difficulty: "easy", title: "Remove Stopwords", question: "Filter out common stopwords from token list.", hint: "Set of stopwords, list comprehension filtering", expectedTime: "5 min", topics: ["NLP", "Preprocessing"], testCases: [{ input: "['the', 'cat', 'sat', 'on', 'mat']", output: "['cat', 'sat', 'mat']" }], solutionApproach: "[token for token in tokens if token not in stopwords]" },
    { id: 3, type: "coding", difficulty: "easy", title: "Word Frequency", question: "Count word frequencies in text using Counter.", hint: "Counter(tokens), most_common", expectedTime: "5 min", topics: ["NLP", "Statistics"], testCases: [{ input: "cat cat dog", output: "cat:2, dog:1" }], solutionApproach: "from collections import Counter, Counter(tokens)" },
    { id: 4, type: "coding", difficulty: "easy", title: "N-Grams", question: "Generate n-grams (sequences of n words) from text.", hint: "Zip shifted lists: zip(*[tokens[i:] for i in range(n)])", expectedTime: "5 min", topics: ["NLP", "N-grams"], testCases: [{ input: "the cat sat, n=2", output: "[('the','cat'), ('cat','sat')]" }], solutionApproach: "Zip tokens[i:] slices" },
    { id: 5, type: "coding", difficulty: "easy", title: "Sentiment Lexicon", question: "Classify sentiment using simple positive/negative word lists.", hint: "Count positive - negative words, compare", expectedTime: "10 min", topics: ["NLP", "Sentiment"], testCases: [{ input: "good great terrible", output: "positive (2 pos, 1 neg)" }], solutionApproach: "Count pos words, count neg words, return sign" },
    { id: 6, type: "coding", difficulty: "easy", title: "Regex Extraction", question: "Extract all email addresses from text using regex.", hint: "re.findall with email pattern", expectedTime: "5 min", topics: ["NLP", "Regex"], testCases: [{ input: "Contact: foo@bar.com or baz@qux.org", output: "['foo@bar.com', 'baz@qux.org']" }], solutionApproach: "re.findall(r'[\w.]+@[\w.]+', text)" },
    { id: 7, type: "coding", difficulty: "easy", title: "TF-IDF", question: "Calculate TF-IDF for a term in document and corpus.", hint: "TF = count/total, IDF = log(N/df), TF*IDF", expectedTime: "10 min", topics: ["NLP", "TF-IDF"], testCases: [{ input: "term='cat', doc=['cat','cat','dog'], corpus=3 docs", output: "TF-IDF score" }], solutionApproach: "TF=count/len, IDF=log(N/df), multiply" },
    { id: 8, type: "coding", difficulty: "easy", title: "Named Entity Regex", question: "Extract capitalized words as potential named entities.", hint: "re.findall(r'[A-Z][a-z]+', text)", expectedTime: "5 min", topics: ["NLP", "NER"], testCases: [{ input: "John lives in New York", output: "['John', 'New', 'York']" }], solutionApproach: "Regex capitalized words, join consecutive" }
  ],

  "Computer Vision Engineer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Load Image", question: "Load image from file using OpenCV and show dimensions.", hint: "cv2.imread, .shape attribute", expectedTime: "5 min", topics: ["CV", "OpenCV"], testCases: [{ input: "image.jpg", output: "(height, width, channels)" }], solutionApproach: "img = cv2.imread(path), h,w,c = img.shape" },
    { id: 2, type: "coding", difficulty: "easy", title: "Convert Grayscale", question: "Convert RGB image to grayscale.", hint: "cv2.cvtColor with COLOR_BGR2GRAY", expectedTime: "5 min", topics: ["CV", "Conversion"], testCases: [{ input: "color image", output: "grayscale image" }], solutionApproach: "cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)" },
    { id: 3, type: "coding", difficulty: "easy", title: "Resize Image", question: "Resize image to specific width and height.", hint: "cv2.resize with (width, height) tuple", expectedTime: "5 min", topics: ["CV", "Transformation"], testCases: [{ input: "img, w=100, h=100", output: "resized image" }], solutionApproach: "cv2.resize(img, (width, height))" },
    { id: 4, type: "coding", difficulty: "easy", title: "Draw Rectangle", question: "Draw red rectangle on image at specified coordinates.", hint: "cv2.rectangle with pt1, pt2, color, thickness", expectedTime: "5 min", topics: ["CV", "Drawing"], testCases: [{ input: "img, x=10,y=10,w=50,h=50", output: "image with red rectangle" }], solutionApproach: "cv2.rectangle(img, (x,y), (x+w,y+h), (0,0,255), 2)" },
    { id: 5, type: "coding", difficulty: "easy", title: "Detect Faces", question: "Detect faces in image using Haar Cascade.", hint: "cv2.CascadeClassifier, detectMultiScale", expectedTime: "10 min", topics: ["CV", "Detection"], testCases: [{ input: "image with 2 faces", output: "2 bounding boxes" }], solutionApproach: "CascadeClassifier, detectMultiScale, draw rectangles" },
    { id: 6, type: "coding", difficulty: "easy", title: "Blur Image", question: "Apply Gaussian blur to image.", hint: "cv2.GaussianBlur with kernel size", expectedTime: "5 min", topics: ["CV", "Filtering"], testCases: [{ input: "img, kernel=5", output: "blurred image" }], solutionApproach: "cv2.GaussianBlur(img, (5,5), 0)" },
    { id: 7, type: "coding", difficulty: "easy", title: "Edge Detection", question: "Detect edges using Canny algorithm.", hint: "cv2.Canny with thresholds", expectedTime: "5 min", topics: ["CV", "Edges"], testCases: [{ input: "grayscale image", output: "edge map" }], solutionApproach: "cv2.Canny(gray, 100, 200)" },
    { id: 8, type: "coding", difficulty: "easy", title: "Histogram", question: "Compute and plot color histogram of image.", hint: "cv2.calcHist, matplotlib bar plot", expectedTime: "5 min", topics: ["CV", "Statistics"], testCases: [{ input: "image", output: "histogram plot" }], solutionApproach: "calcHist for each channel, plt.plot" }
  ],

  "Robotics Engineer Coding": [
    { id: 1, type: "coding", difficulty: "easy", title: "Forward Kinematics", question: "Calculate end effector position given joint angles for 2-link arm.", hint: "x = l1*cos(a1) + l2*cos(a1+a2), y = l1*sin(a1) + l2*sin(a1+a2)", expectedTime: "10 min", topics: ["Robotics", "Kinematics"], testCases: [{ input: "l1=1, l2=1, a1=0, a2=90deg", output: "(1, 1)" }], solutionApproach: "Trig formulas with math.cos, math.sin, radians" },
    { id: 2, type: "coding", difficulty: "easy", title: "Inverse Kinematics 2D", question: "Calculate joint angles for 2-link arm to reach (x,y) target.", hint: "Law of cosines, atan2 for angles", expectedTime: "15 min", topics: ["Robotics", "IK"], testCases: [{ input: "target (1, 1), links=1,1", output: "joint angles" }], solutionApproach: "Distance, law of cosines, atan2 for solutions" },
    { id: 3, type: "coding", difficulty: "easy", title: "Odometry", question: "Update robot pose (x,y,theta) given wheel velocities and dt.", hint: "x += v*cos(theta)*dt, y += v*sin(theta)*dt, theta += w*dt", expectedTime: "5 min", topics: ["Robotics", "Navigation"], testCases: [{ input: "v=1, w=0, dt=1", output: "x increased by 1" }], solutionApproach: "Differential drive kinematics update" },
    { id: 4, type: "coding", difficulty: "easy", title: "Distance Sensor", question: "Convert ultrasonic sensor time to distance in cm.", hint: "distance = (time * speed_of_sound) / 2", expectedTime: "5 min", topics: ["Robotics", "Sensors"], testCases: [{ input: "time=1000us", output: "17.15 cm" }], solutionApproach: "speed_of_sound = 34300 cm/s, calc distance" },
    { id: 5, type: "coding", difficulty: "easy", title: "Wall Following", question: "Simple wall following algorithm using left sensor.", hint: "If left_dist > threshold, turn left, else go straight", expectedTime: "10 min", topics: ["Robotics", "Control"], testCases: [{ input: "left sensor > 30cm", output: "turn left" }], solutionApproach: "Sensor check, bang-bang control" },
    { id: 6, type: "coding", difficulty: "easy", title: "Path Smoothing", question: "Smooth a path by averaging consecutive waypoints.", hint: "For each point, average with neighbors", expectedTime: "5 min", topics: ["Robotics", "Path Planning"], testCases: [{ input: "[(0,0), (1,0), (2,0)]", output: "smoother path" }], solutionApproach: "Each point = 0.25*prev + 0.5*curr + 0.25*next" },
    { id: 7, type: "coding", difficulty: "easy", title: "Obstacle Avoidance", question: "Simple obstacle avoidance based on distance sensors.", hint: "If obstacle ahead, turn based on side clearance", expectedTime: "10 min", topics: ["Robotics", "Navigation"], testCases: [{ input: "front sensor < 20cm", output: "turn towards clearer side" }], solutionApproach: "Compare left/right sensors, turn to open side" },
    { id: 8, type: "coding", difficulty: "easy", title: "Robot Move Command", question: "Send differential drive command given linear and angular velocity.", hint: "v_left = v - w*L/2, v_right = v + w*L/2", expectedTime: "5 min", topics: ["Robotics", "Control"], testCases: [{ input: "v=0.5, w=0.1, L=0.2", output: "wheel velocities" }], solutionApproach: "Unicycle to differential drive conversion" }
  ]
};
