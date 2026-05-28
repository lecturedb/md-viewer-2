import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'

const initialMarkdown = `# Markdown Viewer

실시간 마크다운 뷰어를 위한 기본 예시 문서입니다.

## 지원 예정 문법

- 제목
- 문단
- 블릿 목록
- 숫자 목록
- 코드 블록

1. 왼쪽 입력 영역에 마크다운을 작성합니다.
2. 오른쪽 영역에서 결과를 확인합니다.

\`\`\`ts
const message = 'Hello, Markdown!'
console.log(message)
\`\`\`
`

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown)
  const hasMarkdown = markdown.trim().length > 0

  return (
    <main className="app">
      <section className="editor-panel" aria-labelledby="editor-title">
        <div className="panel-header">
          <label className="panel-title" id="editor-title" htmlFor="markdown-input">
            Markdown
          </label>
        </div>
        <textarea
          id="markdown-input"
          className="markdown-input"
          value={markdown}
          onChange={(event) => setMarkdown(event.target.value)}
          spellCheck="false"
        />
      </section>

      <section className="preview-panel" aria-labelledby="preview-title">
        <div className="panel-header">
          <h2 id="preview-title">Preview</h2>
        </div>
        <div
          aria-label="Rendered markdown preview"
          className="preview-content"
          tabIndex={0}
        >
          {hasMarkdown ? (
            <ReactMarkdown>{markdown}</ReactMarkdown>
          ) : (
            <p className="empty-preview">미리보기할 마크다운을 입력하세요.</p>
          )}
        </div>
      </section>
    </main>
  )
}

export default App
