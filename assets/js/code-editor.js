
class CodeEditor {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.language = options.language || 'javascript';
        this.theme = options.theme || 'vs-dark';
        this.readOnly = options.readOnly || false;
        this.height = options.height || '400px';
        
        this.languages = {
            'javascript': { id: 63, name: 'JavaScript (Node.js)', monaco: 'javascript' },
            'python': { id: 71, name: 'Python 3', monaco: 'python' },
            'java': { id: 62, name: 'Java', monaco: 'java' },
            'cpp': { id: 54, name: 'C++', monaco: 'cpp' },
            'c': { id: 50, name: 'C', monaco: 'c' },
            'csharp': { id: 51, name: 'C#', monaco: 'csharp' },
            'go': { id: 60, name: 'Go', monaco: 'go' },
            'rust': { id: 73, name: 'Rust', monaco: 'rust' },
            'ruby': { id: 72, name: 'Ruby', monaco: 'ruby' },
            'php': { id: 68, name: 'PHP', monaco: 'php' },
            'swift': { id: 83, name: 'Swift', monaco: 'swift' },
            'kotlin': { id: 78, name: 'Kotlin', monaco: 'kotlin' },
            'typescript': { id: 74, name: 'TypeScript', monaco: 'typescript' },
            'scala': { id: 81, name: 'Scala', monaco: 'scala' },
            'r': { id: 80, name: 'R', monaco: 'r' }
        };
        
        this.editor = null;
        this.init();
    }
    
    async init() {
        await this.loadMonaco();
        this.createUI();
        this.setupEditor();
    }
    
    loadMonaco() {
        return new Promise((resolve) => {
            if (window.monaco) {
                resolve();
                return;
            }
            
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.36.1/min/vs/loader.min.js';
            script.onload = () => {
                require.config({
                    paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.36.1/min/vs' }
                });
                require(['vs/editor/editor.main'], () => {
                    resolve();
                });
            };
            document.head.appendChild(script);
        });
    }
    
    createUI() {
        this.container.innerHTML = `
            <div class="code-editor-container">
                <div class="editor-toolbar">
                    <div class="language-selector">
                        <label>Language:</label>
                        <select id="lang-select-${this.container.id}">
                            ${Object.entries(this.languages).map(([key, lang]) => 
                                `<option value="${key}" ${key === this.language ? 'selected' : ''}>${lang.name}</option>`
                            ).join('')}
                        </select>
                    </div>
                    <div class="editor-actions">
                        <button id="run-code-${this.container.id}" class="btn-run">
                            <span>▶</span> Run Code
                        </button>
                        <button id="reset-code-${this.container.id}" class="btn-reset">
                            Reset
                        </button>
                        <button id="fullscreen-${this.container.id}" class="btn-fullscreen">
                            ⛶ Fullscreen
                        </button>
                    </div>
                </div>
                <div id="editor-${this.container.id}" class="monaco-editor-instance" style="height: ${this.height};"></div>
                <div class="editor-output" id="output-${this.container.id}">
                    <div class="output-header">
                        <span>Output</span>
                        <span class="output-status" id="status-${this.container.id}">Ready</span>
                    </div>
                    <pre class="output-content" id="output-content-${this.container.id}">// Click "Run Code" to see output</pre>
                </div>
            </div>
        `;
        
        this.addStyles();
        this.bindEvents();
    }
    
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .code-editor-container {
                background: #1e1e1e;
                border-radius: 8px;
                overflow: hidden;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            
            .editor-toolbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 15px;
                background: #2d2d30;
                border-bottom: 1px solid #3e3e42;
            }
            
            .language-selector {
                display: flex;
                align-items: center;
                gap: 10px;
                color: #cccccc;
            }
            
            .language-selector select {
                background: #3c3c3c;
                color: #fff;
                border: 1px solid #555;
                padding: 5px 10px;
                border-radius: 4px;
                font-size: 13px;
                cursor: pointer;
            }
            
            .editor-actions {
                display: flex;
                gap: 10px;
            }
            
            .editor-actions button {
                padding: 6px 14px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 13px;
                transition: all 0.2s;
            }
            
            .btn-run {
                background: #238636;
                color: white;
                font-weight: 600;
            }
            
            .btn-run:hover {
                background: #2ea043;
            }
            
            .btn-run:disabled {
                background: #555;
                cursor: not-allowed;
            }
            
            .btn-reset {
                background: #3c3c3c;
                color: #cccccc;
            }
            
            .btn-reset:hover {
                background: #4c4c4c;
            }
            
            .btn-fullscreen {
                background: #3c3c3c;
                color: #cccccc;
            }
            
            .monaco-editor-instance {
                width: 100%;
            }
            
            .editor-output {
                background: #1e1e1e;
                border-top: 1px solid #3e3e42;
                max-height: 200px;
                overflow-y: auto;
            }
            
            .output-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px 15px;
                background: #2d2d30;
                color: #cccccc;
                font-size: 12px;
                font-weight: 600;
            }
            
            .output-status {
                padding: 2px 8px;
                border-radius: 3px;
                font-size: 11px;
            }
            
            .output-status.ready { background: #3c3c3c; }
            .output-status.running { background: #1f6feb; }
            .output-status.success { background: #238636; }
            .output-status.error { background: #f85149; }
            
            .output-content {
                padding: 12px 15px;
                margin: 0;
                color: #d4d4d4;
                font-family: 'Consolas', 'Monaco', monospace;
                font-size: 13px;
                line-height: 1.5;
                white-space: pre-wrap;
                word-wrap: break-word;
                max-height: 150px;
                overflow-y: auto;
            }
            
            .output-content.error {
                color: #f85149;
            }
            
            .output-content.success {
                color: #7ee787;
            }
            
            .code-editor-container.fullscreen {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                z-index: 10000;
                border-radius: 0;
            }
            
            .code-editor-container.fullscreen .monaco-editor-instance {
                height: calc(100vh - 250px) !important;
            }
            
            .code-editor-container.fullscreen .editor-output {
                max-height: 200px;
            }
        `;
        document.head.appendChild(style);
    }
    
    setupEditor() {
        this.editor = monaco.editor.create(
            document.getElementById(`editor-${this.container.id}`),
            {
                value: this.getStarterCode(this.language),
                language: this.languages[this.language].monaco,
                theme: this.theme,
                readOnly: this.readOnly,
                automaticLayout: true,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                fontSize: 14,
                lineNumbers: 'on',
                roundedSelection: false,
                padding: { top: 10 },
                folding: true,
                renderLineHighlight: 'all',
                matchBrackets: 'always',
                autoIndent: true,
                formatOnPaste: true,
                formatOnType: true,
                suggestOnTriggerCharacters: true,
                acceptSuggestionOnEnter: 'smart',
                quickSuggestions: true,
                wordWrap: 'on'
            }
        );
    }
    
    getStarterCode(language) {
        const starters = {
            javascript: `// Write your solution here\nfunction solve() {\n    // Your code here\n    return 0;\n}\n\n// Test\nconsole.log(solve());`,
            python: `# Write your solution here\ndef solve():\n    # Your code here\n    return 0\n\n# Test\nprint(solve())`,
            java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println(solve());\n    }\n    \n    public static int solve() {\n        // Your code here\n        return 0;\n    }\n}`,
            cpp: `#include <iostream>\nusing namespace std;\n\nint solve() {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout << solve() << endl;\n    return 0;\n}`,
            c: `#include <stdio.h>\n\nint solve() {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    printf("%d\\n", solve());\n    return 0;\n}`,
            csharp: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(Solve());\n    }\n    \n    static int Solve() {\n        // Your code here\n        return 0;\n    }\n}`,
            go: `package main\n\nimport "fmt"\n\nfunc solve() int {\n    // Your code here\n    return 0\n}\n\nfunc main() {\n    fmt.Println(solve())\n}`,
            rust: `fn solve() -> i32 {\n    // Your code here\n    0\n}\n\nfn main() {\n    println!("{}", solve());\n}`,
            ruby: `# Write your solution here\ndef solve\n  # Your code here\n  0\nend\n\n# Test\nputs solve`,
            php: `<?php\nfunction solve() {\n    // Your code here\n    return 0;\n}\n\necho solve();\n?>`,
            swift: `import Foundation\n\nfunc solve() -> Int {\n    // Your code here\n    return 0\n}\n\nprint(solve())`,
            kotlin: `fun solve(): Int {\n    // Your code here\n    return 0\n}\n\nfun main() {\n    println(solve())\n}`,
            typescript: `// Write your solution here\nfunction solve(): number {\n    // Your code here\n    return 0;\n}\n\n// Test\nconsole.log(solve());`,
            scala: `object Main extends App {\n  def solve(): Int = {\n    // Your code here\n    0\n  }\n  \n  println(solve())\n}`,
            r: `# Write your solution here\nsolve <- function() {\n  # Your code here\n  return(0)\n}\n\n# Test\nprint(solve())`
        };
        return starters[language] || starters.javascript;
    }
    
    bindEvents() {
        document.getElementById(`lang-select-${this.container.id}`).addEventListener('change', (e) => {
            this.changeLanguage(e.target.value);
        });
        
        document.getElementById(`run-code-${this.container.id}`).addEventListener('click', () => {
            this.runCode();
        });
        
        document.getElementById(`reset-code-${this.container.id}`).addEventListener('click', () => {
            this.resetCode();
        });
        
        document.getElementById(`fullscreen-${this.container.id}`).addEventListener('click', () => {
            this.toggleFullscreen();
        });
    }
    
    changeLanguage(newLang) {
        this.language = newLang;
        monaco.editor.setModelLanguage(
            this.editor.getModel(),
            this.languages[newLang].monaco
        );
        this.editor.setValue(this.getStarterCode(newLang));
    }
    
    async runCode() {
        const code = this.editor.getValue();
        const langId = this.languages[this.language].id;
        const outputEl = document.getElementById(`output-content-${this.container.id}`);
        const statusEl = document.getElementById(`status-${this.container.id}`);
        const runBtn = document.getElementById(`run-code-${this.container.id}`);
        
        statusEl.textContent = 'Running...';
        statusEl.className = 'output-status running';
        outputEl.textContent = 'Executing...';
        outputEl.className = 'output-content';
        runBtn.disabled = true;
        
        try {
            const response = await fetch('https://judge0-ce.p.rapidapi.com/submissions', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // User needs to add their key
                    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
                },
                body: JSON.stringify({
                    source_code: code,
                    language_id: langId,
                    stdin: '',
                    expected_output: null
                })
            });
            
            const data = await response.json();
            const token = data.token;
            
            let result = null;
            for (let i = 0; i < 10; i++) {
                await new Promise(r => setTimeout(r, 1000));
                
                const resultRes = await fetch(`https://judge0-ce.p.rapidapi.com/submissions/${token}`, {
                    headers: {
                        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
                        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
                    }
                });
                
                result = await resultRes.json();
                if (result.status.id > 2) break; // Not waiting or processing
            }
            
            if (result.status.id === 3) { // Accepted
                statusEl.textContent = 'Success';
                statusEl.className = 'output-status success';
                outputEl.textContent = result.stdout || 'No output';
                outputEl.className = 'output-content success';
            } else if (result.status.id === 4) { // Wrong Answer
                statusEl.textContent = 'Wrong Answer';
                statusEl.className = 'output-status error';
                outputEl.textContent = result.stdout || 'No output';
                outputEl.className = 'output-content error';
            } else if (result.status.id === 6) { // Compilation Error
                statusEl.textContent = 'Compilation Error';
                statusEl.className = 'output-status error';
                outputEl.textContent = result.compile_output || 'Compilation failed';
                outputEl.className = 'output-content error';
            } else if (result.status.id === 11) { // Runtime Error
                statusEl.textContent = 'Runtime Error';
                statusEl.className = 'output-status error';
                outputEl.textContent = result.stderr || 'Runtime error';
                outputEl.className = 'output-content error';
            } else if (result.status.id === 5 || result.status.id === 8) { // Time/Space Limit
                statusEl.textContent = 'Time/Space Limit Exceeded';
                statusEl.className = 'output-status error';
                outputEl.textContent = result.message || 'Resource limit exceeded';
                outputEl.className = 'output-content error';
            } else {
                statusEl.textContent = result.status.description || 'Unknown';
                statusEl.className = 'output-status error';
                outputEl.textContent = result.stderr || result.compile_output || result.message || 'Error';
                outputEl.className = 'output-content error';
            }
            
        } catch (error) {
            statusEl.textContent = 'Error';
            statusEl.className = 'output-status error';
            outputEl.textContent = `Error: ${error.message}\n\nNote: To enable code execution, please:\n1. Sign up at rapidapi.com\n2. Subscribe to Judge0 CE\n3. Add your API key in the code`;
            outputEl.className = 'output-content error';
        } finally {
            runBtn.disabled = false;
        }
    }
    
    resetCode() {
        this.editor.setValue(this.getStarterCode(this.language));
        const outputEl = document.getElementById(`output-content-${this.container.id}`);
        const statusEl = document.getElementById(`status-${this.container.id}`);
        outputEl.textContent = '// Click "Run Code" to see output';
        outputEl.className = 'output-content';
        statusEl.textContent = 'Ready';
        statusEl.className = 'output-status ready';
    }
    
    toggleFullscreen() {
        this.container.classList.toggle('fullscreen');
        if (this.editor) {
            this.editor.layout();
        }
    }
    
    getValue() {
        return this.editor ? this.editor.getValue() : '';
    }
    
    setValue(code) {
        if (this.editor) {
            this.editor.setValue(code);
        }
    }
    
    insertText(text) {
        if (this.editor) {
            const position = this.editor.getPosition();
            this.editor.executeEdits('', [{
                range: new monaco.Range(position.lineNumber, position.column, position.lineNumber, position.column),
                text: text
            }]);
        }
    }
    
    setLanguage(lang) {
        if (this.languages[lang]) {
            document.getElementById(`lang-select-${this.container.id}`).value = lang;
            this.changeLanguage(lang);
        }
    }
    
    readOnlyMode(enabled) {
        if (this.editor) {
            this.editor.updateOptions({ readOnly: enabled });
        }
    }
    
    destroy() {
        if (this.editor) {
            this.editor.dispose();
        }
    }
}

window.CodeEditor = CodeEditor;
