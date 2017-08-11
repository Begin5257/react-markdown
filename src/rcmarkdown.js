import React from 'react'
import Markdown from 'react-markdown'
import assign from 'lodash.assign'
import Editor from './editor'
import CodeBlock from './code-block'
// import MarkdownControls from './markdown-controls'

class RcMarkdown extends React.Component {
  
    render() {
        return (
            <div className="demo">
              <div className="editor-pane">
                  <Editor
                    value={this.props.markdownSrc}
                    onChange={this.props.onMarkdownChange}
                  />
              </div>
              <div className="result-pane">
                <Markdown
                  className="result"
                  source={this.props.markdownSrc}
                  skipHtml={this.props.htmlMode === 'skip'}
                  escapeHtml={this.props.htmlMode === 'escape'}
                  renderers={assign({}, Markdown.renderers, {
                      CodeBlock: CodeBlock
                  })}
                />
              </div>
            </div>
        )
    }
}

export default RcMarkdown
