#!/usr/bin/env python3
"""
One-off builder: writes questions.json with hundreds of mock-interview Q&A rows.
Run from repo: python3 dataset/build_questions.py
"""
from __future__ import annotations

import json
import os

OUT = os.path.join(os.path.dirname(__file__), "questions.json")


def qa(q: str, a1: str, a2: str, a3: str) -> dict:
    return {"question": q.strip(), "answers": [a1.strip(), a2.strip(), a3.strip()]}


def main() -> None:
    rows: list[dict] = [
        qa(
            "What is DBMS?",
            "DBMS is a system used to manage databases",
            "It helps store and organize data",
            "Database management system handles data efficiently",
        ),
        qa(
            "What is normalization in databases?",
            "Normalization organizes data to reduce redundancy",
            "It breaks tables into smaller related tables",
            "It improves data integrity in relational databases",
        ),
        qa(
            "Explain REST API.",
            "REST is an architectural style for web services",
            "It uses HTTP methods like GET and POST",
            "Resources are identified by URLs and often return JSON",
        ),
    ]

    # --- Core CS / programming (expanded sets) ---
    topics = [
        (
            "What is {}?",
            [
                (
                    "an algorithm",
                    "A step-by-step procedure to solve a problem",
                    "It defines computations with finite steps",
                    "It specifies input, process, and output",
                ),
                (
                    "a variable",
                    "A named storage location in memory",
                    "It holds a value that can change",
                    "Programs use it to represent data",
                ),
                (
                    "a function",
                    "A reusable block of code that performs a task",
                    "It can take parameters and return results",
                    "It helps organize logic and avoid duplication",
                ),
                (
                    "recursion",
                    "A technique where a function calls itself",
                    "It needs a base case to terminate",
                    "It solves problems by reducing them to smaller subproblems",
                ),
                (
                    "iteration",
                    "Repeating a block of code using loops",
                    "It processes collections or ranges step by step",
                    "Common forms include for and while loops",
                ),
                (
                    "Big O notation",
                    "A way to describe algorithm time or space complexity",
                    "It focuses on growth as input size increases",
                    "It abstracts constant factors and lower-order terms",
                ),
                (
                    "a hash table",
                    "A data structure mapping keys to values with fast lookup",
                    "It uses a hash function to index buckets",
                    "Average operations are often constant time",
                ),
                (
                    "a binary search tree",
                    "A tree where left children are smaller and right are larger",
                    "It supports ordered traversal and search",
                    "Operations depend on tree balance",
                ),
                (
                    "dynamic programming",
                    "Solving problems by combining optimal subproblem solutions",
                    "It often uses memoization or tabulation",
                    "It avoids recomputing overlapping subproblems",
                ),
                (
                    "greedy algorithm",
                    "Makes locally optimal choices hoping for a global optimum",
                    "It is efficient when greedy choice property holds",
                    "It may not always yield the best overall solution",
                ),
            ],
        ),
        (
            "Explain {}.",
            [
                (
                    "stack data structure",
                    "A LIFO collection with push and pop operations",
                    "The last element added is removed first",
                    "It is used for parsing, recursion, and undo operations",
                ),
                (
                    "queue data structure",
                    "A FIFO collection with enqueue and dequeue",
                    "The first element added is removed first",
                    "It models waiting lines and breadth-first search",
                ),
                (
                    "heap data structure",
                    "A tree-based structure satisfying heap property",
                    "A min-heap keeps the smallest element at the root",
                    "It supports priority queues efficiently",
                ),
                (
                    "linked list",
                    "A sequence of nodes connected by pointers",
                    "Insertion and deletion can be efficient at known positions",
                    "Unlike arrays, it does not require contiguous memory",
                ),
                (
                    "array vs list",
                    "Arrays often have fixed size and contiguous memory",
                    "Lists may be dynamic with pointer overhead",
                    "Choice depends on access patterns and resizing needs",
                ),
                (
                    "breadth-first search",
                    "Explores graph level by level using a queue",
                    "It finds shortest path in unweighted graphs",
                    "It visits neighbors before deeper nodes",
                ),
                (
                    "depth-first search",
                    "Explores as far as possible before backtracking",
                    "It often uses recursion or an explicit stack",
                    "It is useful for connectivity and topological sorting",
                ),
                (
                    "Dijkstra algorithm",
                    "Finds shortest paths in graphs with non-negative weights",
                    "It uses a priority queue to pick minimum distance nodes",
                    "It relaxes edges until all nodes are settled",
                ),
                (
                    "merge sort",
                    "A divide-and-conquer sorting algorithm",
                    "It splits, sorts halves, and merges in linear time",
                    "It has predictable O(n log n) time in typical implementations",
                ),
                (
                    "quick sort",
                    "Partitions around a pivot and sorts recursively",
                    "Average time is often O(n log n)",
                    "Worst case can degrade without good pivot selection",
                ),
            ],
        ),
        (
            "What is the purpose of {}?",
            [
                (
                    "indexes in databases",
                    "Speed up queries by reducing rows scanned",
                    "They trade extra storage for faster lookups",
                    "They can slow writes because structures must be updated",
                ),
                (
                    "transactions in databases",
                    "Group operations with ACID guarantees",
                    "They ensure consistency across failures",
                    "They can be committed or rolled back",
                ),
                (
                    "foreign keys",
                    "Enforce relationships between tables",
                    "They maintain referential integrity",
                    "They link child rows to parent primary keys",
                ),
                (
                    "primary keys",
                    "Uniquely identify rows in a table",
                    "They enforce uniqueness and often speed lookups",
                    "A table typically has one primary key",
                ),
                (
                    "normalization",
                    "Reduce redundancy and improve integrity",
                    "It decomposes tables into smaller related tables",
                    "It follows normal forms to minimize anomalies",
                ),
                (
                    "denormalization",
                    "Intentionally add redundancy for read performance",
                    "It trades storage for fewer joins",
                    "It is common in analytics workloads",
                ),
                (
                    "CAP theorem",
                    "States trade-offs among consistency, availability, and partition tolerance",
                    "Distributed systems cannot maximize all three under partitions",
                    "Design choices depend on product requirements",
                ),
                (
                    "HTTP status codes",
                    "Communicate the result of an HTTP request",
                    "2xx means success, 4xx client errors, 5xx server errors",
                    "They help clients handle responses programmatically",
                ),
                (
                    "JWT tokens",
                    "Compact signed tokens for stateless authentication",
                    "They carry claims that can be verified with a secret or key",
                    "They must be protected against leakage and misuse",
                ),
                (
                    "OAuth 2.0",
                    "A framework for delegated authorization",
                    "It lets users grant limited access without sharing passwords",
                    "It uses access tokens and defined flows",
                ),
            ],
        ),
    ]

    for pattern, items in topics:
        for name, a1, a2, a3 in items:
            rows.append(qa(pattern.format(name), a1, a2, a3))

    # --- OS / networking / DB / web (fixed list for volume) ---
    extras = [
        qa(
            "What is a process?",
            "An instance of a running program with its own resources",
            "The OS schedules processes and isolates memory",
            "It has a program counter, registers, and address space",
        ),
        qa(
            "What is a thread?",
            "A lightweight unit of execution within a process",
            "Threads share process memory but have separate stacks",
            "Concurrency can improve throughput on multi-core CPUs",
        ),
        qa(
            "What is virtual memory?",
            "An abstraction giving each process a large address space",
            "It maps virtual addresses to physical RAM or disk",
            "It enables isolation and efficient memory use",
        ),
        qa(
            "What is deadlock?",
            "A situation where tasks wait on each other indefinitely",
            "It often involves circular waits for resources",
            "Prevention strategies include ordering locks or timeouts",
        ),
        qa(
            "What is race condition?",
            "Incorrect behavior due to timing of concurrent accesses",
            "It happens when shared state is updated without synchronization",
            "Fixes include locks, atomics, or immutability",
        ),
        qa(
            "What is mutex?",
            "A mutual exclusion lock protecting a critical section",
            "Only one thread can hold it at a time",
            "It prevents data races on shared resources",
        ),
        qa(
            "What is semaphore?",
            "A counter controlling access to a finite pool of resources",
            "It supports signaling between threads or processes",
            "Binary semaphores behave like mutexes",
        ),
        qa(
            "What is TCP?",
            "A connection-oriented reliable transport protocol",
            "It provides ordering, retransmission, and flow control",
            "It underlies many application protocols like HTTP",
        ),
        qa(
            "What is UDP?",
            "A connectionless lightweight transport protocol",
            "It does not guarantee delivery or ordering",
            "It is used when low latency matters more than reliability",
        ),
        qa(
            "What is DNS?",
            "A system mapping human-readable names to IP addresses",
            "It uses hierarchical naming and caching",
            "Resolvers query authoritative servers for records",
        ),
        qa(
            "What is HTTPS?",
            "HTTP secured with TLS encryption and authentication",
            "It protects data in transit from eavesdropping",
            "It relies on certificates to verify server identity",
        ),
        qa(
            "What is SQL injection?",
            "An attack embedding malicious SQL via untrusted input",
            "It can leak or destroy data if queries are concatenated",
            "Parameterized queries and ORMs reduce this risk",
        ),
        qa(
            "What is XSS?",
            "Injecting scripts into pages other users view",
            "It can steal sessions or deface content",
            "Escaping output and CSP headers help mitigate it",
        ),
        qa(
            "What is CSRF?",
            "Tricking a browser into performing authenticated actions",
            "It exploits cookies on trusted sites",
            "Tokens and SameSite cookies reduce exposure",
        ),
        qa(
            "What is caching?",
            "Storing copies of data closer to consumers for speed",
            "It reduces latency and load on origin systems",
            "Invalidation is a common hard problem",
        ),
        qa(
            "What is load balancing?",
            "Distributing traffic across multiple servers",
            "It improves availability and throughput",
            "Algorithms include round robin and least connections",
        ),
        qa(
            "What is microservices architecture?",
            "Splitting a system into small independently deployable services",
            "Teams can scale and release services separately",
            "It increases operational complexity compared to monoliths",
        ),
        qa(
            "What is CI/CD?",
            "Automating build, test, and deployment pipelines",
            "It shortens feedback loops and reduces manual errors",
            "CD may mean continuous delivery or deployment",
        ),
        qa(
            "What is Docker?",
            "A platform packaging apps with dependencies into containers",
            "Containers share the host kernel but isolate filesystems",
            "Images are built from Dockerfiles and run consistently",
        ),
        qa(
            "What is Kubernetes?",
            "An orchestrator automating deployment and scaling of containers",
            "It manages desired state, health checks, and networking",
            "It is widely used for cloud-native systems",
        ),
        qa(
            "What is Git?",
            "A distributed version control system tracking file history",
            "Branches enable parallel development and merges",
            "Commits form a directed acyclic graph of changes",
        ),
        qa(
            "What is a pull request?",
            "A proposal to merge changes after review",
            "It enables discussion, tests, and approvals",
            "It is central to collaborative workflows on Git hosts",
        ),
        qa(
            "What is unit testing?",
            "Testing small pieces of code in isolation",
            "It catches regressions early and documents behavior",
            "Mocks help isolate dependencies",
        ),
        qa(
            "What is integration testing?",
            "Testing interactions between components or services",
            "It validates contracts and wiring end to end",
            "It is slower than unit tests but catches interface bugs",
        ),
        qa(
            "What is Agile?",
            "An iterative approach delivering value in short cycles",
            "It emphasizes feedback, collaboration, and adaptation",
            "Scrum and Kanban are common Agile frameworks",
        ),
        qa(
            "What is Scrum?",
            "A framework with roles, events, and artifacts for iterative delivery",
            "Work is planned in time-boxed sprints",
            "Daily standups and retrospectives improve transparency",
        ),
        qa(
            "What is REST?",
            "An architectural style using stateless HTTP and resource URLs",
            "It leverages standard methods like GET and PUT",
            "HATEOAS is an optional maturity level",
        ),
        qa(
            "What is GraphQL?",
            "A query language letting clients request exactly the fields needed",
            "A single endpoint can serve many shapes of data",
            "Servers must guard against expensive queries",
        ),
        qa(
            "What is NoSQL?",
            "Non-relational databases optimized for flexible schemas or scale",
            "Examples include document, key-value, and column stores",
            "Trade-offs differ from traditional relational models",
        ),
        qa(
            "What is eventual consistency?",
            "Replicas converge over time without strong immediate guarantees",
            "It enables availability and partition tolerance",
            "Applications must tolerate stale reads briefly",
        ),
        qa(
            "What is strong consistency?",
            "Reads return the latest successful write",
            "It simplifies application logic but can reduce availability",
            "It often requires coordination across replicas",
        ),
        qa(
            "What is idempotency?",
            "Repeating an operation yields the same effect as once",
            "It is important for safe retries in distributed systems",
            "PUT requests are often idempotent unlike naive POST",
        ),
        qa(
            "What is rate limiting?",
            "Controlling how many requests a client can make",
            "It protects services from abuse and overload",
            "Algorithms include token bucket and sliding window",
        ),
        qa(
            "What is observability?",
            "Understanding system behavior from external outputs",
            "It combines logs, metrics, and traces",
            "It speeds incident response and performance tuning",
        ),
        qa(
            "What is SLA?",
            "A formal commitment to service levels like uptime",
            "It often includes penalties for breaches",
            "SLOs and SLIs operationalize the targets",
        ),
        qa(
            "What is technical debt?",
            "The implied cost of shortcuts that slow future changes",
            "It accumulates when quality is traded for speed",
            "Refactoring and tests help pay it down",
        ),
        qa(
            "What is code review?",
            "Peers inspect changes before merging",
            "It improves quality, shares knowledge, and catches defects",
            "Constructive feedback should focus on the code",
        ),
        qa(
            "What is pair programming?",
            "Two developers collaborate on the same workstation",
            "It spreads knowledge and catches mistakes quickly",
            "Roles often rotate between driver and navigator",
        ),
        qa(
            "What is TDD?",
            "Writing tests before implementation to guide design",
            "It encourages small incremental steps",
            "Red-green-refactor is a common cycle",
        ),
        qa(
            "What is DRY?",
            "Do not repeat yourself by centralizing shared logic",
            "Duplication increases maintenance risk",
            "Abstractions should not be forced prematurely",
        ),
        qa(
            "What is SOLID?",
            "A set of object-oriented design principles",
            "They promote maintainability and flexibility",
            "Single responsibility and dependency inversion are included",
        ),
        qa(
            "What is dependency injection?",
            "Supplying dependencies from outside rather than constructing inside",
            "It improves testability and decoupling",
            "Frameworks often provide containers for wiring",
        ),
        qa(
            "What is inversion of control?",
            "Framework calls application code instead of the reverse",
            "It shifts control flow to improve modularity",
            "Dependency injection is a common IoC technique",
        ),
        qa(
            "What is MVC?",
            "A pattern separating model, view, and controller concerns",
            "It organizes UI applications for clarity",
            "Many web frameworks adopt MVC or variants",
        ),
        qa(
            "What is API versioning?",
            "Managing changes to public interfaces without breaking clients",
            "Common strategies include URL paths or headers",
            "Deprecation periods help consumers migrate safely",
        ),
        qa(
            "What is backward compatibility?",
            "New versions work with clients built for older versions",
            "It reduces churn for external integrators",
            "Additive changes are safer than removals",
        ),
        qa(
            "What is feature flag?",
            "A toggle enabling or disabling functionality at runtime",
            "It supports gradual rollouts and experiments",
            "Flags should be managed carefully to avoid stale code paths",
        ),
        qa(
            "What is blue-green deployment?",
            "Running two identical environments and switching traffic",
            "It enables quick rollback by toggling routes",
            "It requires resources for duplicate infrastructure",
        ),
        qa(
            "What is canary release?",
            "Routing a small fraction of traffic to a new version",
            "It limits blast radius if issues appear",
            "Metrics guide whether to promote or roll back",
        ),
        qa(
            "What is message queue?",
            "A buffer decoupling producers and consumers",
            "It smooths spikes and enables async processing",
            "Examples include Kafka and RabbitMQ",
        ),
        qa(
            "What is eventual delivery?",
            "Messages may arrive after delay but typically get through",
            "At-least-once delivery may require deduplication",
            "Exactly-once is hard and often approximated",
        ),
        qa(
            "What is sharding?",
            "Splitting data across multiple databases by key",
            "It scales writes horizontally",
            "Cross-shard queries become harder to optimize",
        ),
        qa(
            "What is replication?",
            "Copying data to multiple nodes for durability or reads",
            "Leader-follower is a common topology",
            "Consistency models vary by system design",
        ),
        qa(
            "What is consensus?",
            "Agreement among distributed nodes despite failures",
            "Protocols like Raft and Paxos implement it",
            "It enables consistent state in clusters",
        ),
        qa(
            "What is CAP theorem?",
            "You can prioritize at most two of C, A, and P under partitions",
            "Partition tolerance is usually mandatory in distributed systems",
            "Systems choose between CP and AP behaviors",
        ),
        qa(
            "What is latency?",
            "Time delay between a request and its response",
            "Users perceive it as responsiveness",
            "It differs from throughput which measures volume over time",
        ),
        qa(
            "What is throughput?",
            "Amount of work completed per unit time",
            "It measures system capacity under load",
            "Bottlenecks limit achievable throughput",
        ),
        qa(
            "What is scalability?",
            "Ability to handle growth by adding resources",
            "Vertical scaling upgrades machines; horizontal adds nodes",
            "Design choices affect how far scaling can go",
        ),
        qa(
            "What is availability?",
            "Fraction of time a system is operational and responsive",
            "Nine nines describe high uptime targets",
            "Redundancy and failover improve availability",
        ),
        qa(
            "What is reliability?",
            "Probability a system performs correctly over time",
            "It includes fault tolerance and recovery",
            "Testing and chaos engineering validate assumptions",
        ),
        qa(
            "What is maintainability?",
            "Ease of modifying software safely over time",
            "Clear structure and tests improve maintainability",
            "Poor naming and coupling hurt it",
        ),
        qa(
            "What is security by design?",
            "Building protections into architecture from the start",
            "Threat modeling identifies risks early",
            "Least privilege limits blast radius",
        ),
        qa(
            "What is least privilege?",
            "Granting only permissions needed for a task",
            "It reduces damage from compromised accounts",
            "Roles and policies enforce it in systems",
        ),
        qa(
            "What is encryption at rest?",
            "Protecting stored data with cryptographic keys",
            "It guards against disk theft or backups leaking",
            "Key management is critical to security",
        ),
        qa(
            "What is encryption in transit?",
            "Protecting data while moving across networks",
            "TLS is the standard for web and APIs",
            "Certificate pinning can harden mobile clients",
        ),
        qa(
            "What is hashing?",
            "A one-way function producing a fixed-size digest",
            "Passwords should be hashed with salts and slow algorithms",
            "It is different from encryption which is reversible",
        ),
        qa(
            "What is salting?",
            "Adding random data to inputs before hashing",
            "It prevents rainbow table attacks",
            "Each password should have its own salt",
        ),
        qa(
            "What is MFA?",
            "Requiring multiple authentication factors",
            "It combines something you know, have, or are",
            "It greatly reduces account takeover risk",
        ),
        qa(
            "What is zero trust?",
            "Never trust implicitly; verify every request",
            "Micro-segmentation limits lateral movement",
            "Identity and device posture drive access decisions",
        ),
    ]

    rows.extend(extras)

    # --- Numbered variants to push count into hundreds ---
    behavioral_stems = [
        (
            "Tell me about a time you {}.",
            [
                (
                    "handled conflict",
                    "I listened to both sides and focused on shared goals",
                    "I documented agreements and followed up",
                    "I escalated only when necessary with evidence",
                ),
                (
                    "missed a deadline",
                    "I communicated early and proposed a new plan",
                    "I prioritized scope and negotiated trade-offs",
                    "I learned to estimate better with buffers",
                ),
                (
                    "learned something quickly",
                    "I broke the topic into fundamentals and practiced",
                    "I sought mentorship and feedback loops",
                    "I applied learning to a small project to solidify it",
                ),
                (
                    "improved a process",
                    "I measured bottlenecks with data",
                    "I piloted changes before full rollout",
                    "I documented the new workflow for the team",
                ),
                (
                    "worked with a difficult stakeholder",
                    "I aligned on objectives and set expectations",
                    "I communicated trade-offs transparently",
                    "I involved leadership when scope was unclear",
                ),
                (
                    "made a mistake",
                    "I owned it quickly and mitigated impact",
                    "I communicated to affected parties",
                    "I added safeguards to prevent recurrence",
                ),
                (
                    "led without authority",
                    "I built consensus with evidence and prototypes",
                    "I delegated clearly and supported contributors",
                    "I tracked progress and removed blockers",
                ),
                (
                    "prioritized competing tasks",
                    "I ranked by impact and urgency",
                    "I negotiated deadlines with stakeholders",
                    "I time-boxed deep work to finish critical items",
                ),
                (
                    "received critical feedback",
                    "I listened without defensiveness",
                    "I asked clarifying questions and made a plan",
                    "I followed up to show improvement",
                ),
                (
                    "collaborated across teams",
                    "I established shared definitions of done",
                    "I used async updates to reduce meetings",
                    "I respected dependencies and interfaces between teams",
                ),
            ],
        ),
        (
            "How would you {}?",
            [
                (
                    "debug a production outage",
                    "I would triage severity and communicate status",
                    "I would check logs, metrics, and recent changes",
                    "I would roll back or hotfix based on evidence",
                ),
                (
                    "design a URL shortener",
                    "I would choose encoding, storage, and redirection",
                    "I would plan for collisions and analytics",
                    "I would consider caching and rate limits",
                ),
                (
                    "improve API performance",
                    "I would profile hotspots and reduce payload sizes",
                    "I would add caching and database indexes",
                    "I would parallelize independent calls where safe",
                ),
                (
                    "handle sensitive data",
                    "I would classify data and minimize collection",
                    "I would encrypt and restrict access tightly",
                    "I would audit access and log appropriately",
                ),
                (
                    "onboard a new engineer",
                    "I would provide architecture and tooling overview",
                    "I would pair on starter tasks with clear goals",
                    "I would set checkpoints for feedback",
                ),
                (
                    "estimate project timelines",
                    "I would break work into tasks with ranges",
                    "I would include risks and unknowns explicitly",
                    "I would revisit estimates as learning happens",
                ),
                (
                    "say no to a request",
                    "I would explain constraints with data",
                    "I would propose alternatives or phased delivery",
                    "I would align with leadership on priorities",
                ),
                (
                    "ensure code quality in a rush",
                    "I would enforce minimal critical tests",
                    "I would schedule fast follow-up refactors",
                    "I would use reviews even if smaller in scope",
                ),
                (
                    "choose a database",
                    "I would model access patterns and consistency needs",
                    "I would compare operational costs and scaling",
                    "I would prototype critical queries early",
                ),
                (
                    "reduce technical debt",
                    "I would inventory debt with business impact",
                    "I would allocate recurring capacity to pay it down",
                    "I would prevent new debt with standards",
                ),
            ],
        ),
    ]

    for pattern, items in behavioral_stems:
        for name, a1, a2, a3 in items:
            rows.append(qa(pattern.format(name), a1, a2, a3))

    # --- Language × engineering aspect (hundreds of distinct questions) ---
    languages = [
        "Python",
        "JavaScript",
        "TypeScript",
        "Java",
        "Kotlin",
        "Swift",
        "Go",
        "Rust",
        "C++",
        "C#",
        "Ruby",
        "PHP",
        "Scala",
        "Elixir",
        "Haskell",
        "Dart",
        "R",
        "Julia",
        "Perl",
        "Lua",
        "C",
        "Objective-C",
        "Shell scripting",
        "SQL",
        "GraphQL schema design",
    ]

    aspects = {
        "package and dependency management": (
            "Most ecosystems use a manifest file and a central registry",
            "Lockfiles or version ranges balance reproducibility and updates",
            "Virtual environments or workspaces isolate project dependencies",
        ),
        "testing practices": (
            "Automated tests include unit, integration, and end-to-end layers",
            "Mocks and fixtures isolate components for reliable signals",
            "CI runs tests on every change to catch regressions early",
        ),
        "build and release tooling": (
            "Build pipelines compile, bundle, and package artifacts",
            "Release automation reduces human error and speeds delivery",
            "Version tagging ties deployments to source revisions",
        ),
        "error handling": (
            "Errors should be detected early and surfaced clearly",
            "Typed results or exceptions separate success from failure paths",
            "Logging and monitoring help diagnose production issues",
        ),
        "concurrency": (
            "Threads, async, or actors coordinate parallel work",
            "Synchronization prevents races on shared mutable state",
            "Choosing a model depends on workload and platform constraints",
        ),
        "type systems": (
            "Static typing catches mistakes before runtime in many cases",
            "Gradual typing blends flexibility with safety",
            "Generics and unions express richer data shapes",
        ),
        "performance profiling": (
            "Profiling finds hotspots before optimizing blindly",
            "CPU, memory, and I/O metrics tell different stories",
            "Microbenchmarks can mislead without realistic workloads",
        ),
        "security considerations": (
            "Validate inputs and encode outputs to reduce injection risks",
            "Secrets belong in vaults or environment-specific stores",
            "Dependencies should be scanned for known vulnerabilities",
        ),
        "interoperability": (
            "FFI and APIs connect components written in different languages",
            "Stable interfaces reduce coupling across teams",
            "Serialization formats must be versioned carefully",
        ),
        "observability for services": (
            "Structured logs correlate requests across services",
            "Metrics track latency, errors, and saturation",
            "Traces show end-to-end paths through distributed systems",
        ),
    }

    for lang in languages:
        for aspect, (a1, a2, a3) in aspects.items():
            rows.append(
                qa(
                    f"In {lang}, describe {aspect} at a high level.",
                    a1,
                    a2,
                    a3,
                )
            )

    # --- Role / domain interview prompts ---
    roles = [
        "frontend engineer",
        "backend engineer",
        "full-stack engineer",
        "mobile engineer",
        "data engineer",
        "ML engineer",
        "DevOps engineer",
        "SRE",
        "security engineer",
        "QA engineer",
        "engineering manager",
        "tech lead",
        "product engineer",
        "platform engineer",
        "solutions architect",
    ]

    role_focus = [
        (
            "ownership",
            "Clear ownership reduces ambiguity in complex systems",
            "It pairs responsibilities with authority to decide",
            "It improves accountability for outcomes",
        ),
        (
            "communication",
            "Written updates align stakeholders asynchronously",
            "Active listening prevents rework from misunderstandings",
            "Escalation paths resolve blockers quickly",
        ),
        (
            "trade-off reasoning",
            "Every choice balances latency, cost, and complexity",
            "Explicit criteria make decisions auditable",
            "Prototypes validate assumptions before large investments",
        ),
        (
            "mentoring",
            "Pairing accelerates onboarding and spreads practices",
            "Feedback should be specific and actionable",
            "Career growth plans align individual and team goals",
        ),
        (
            "incident response",
            "Severity guides response timelines and communication",
            "Blameless reviews focus on systems and follow-up actions",
            "Runbooks and dashboards speed mitigation",
        ),
    ]

    for role in roles:
        for focus, a1, a2, a3 in role_focus:
            rows.append(
                qa(
                    f"As a {role}, how do you demonstrate strong {focus}?",
                    a1,
                    a2,
                    a3,
                )
            )

    # Deduplicate questions (keep first)
    seen: set[str] = set()
    unique: list[dict] = []
    for row in rows:
        q = row["question"]
        if q in seen:
            continue
        seen.add(q)
        unique.append(row)

    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(unique, f, indent=2, ensure_ascii=False)
        f.write("\n")

    print(f"Wrote {len(unique)} questions to {OUT}")


if __name__ == "__main__":
    main()
