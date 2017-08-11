import React from 'react'
import RcMarkdown from '../src/rcmarkdown'

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            markdownSrc: [
                '# Live demo\n\nChanges are automatically rendered as you type.\n\n* Follows the ',
                '[CommonMark](http://commonmark.org/) spec\n* Renders actual, "native" React DOM ',
                'elements\n* Allows you to escape or skip HTML (try toggling the checkboxes above)',
                '\n* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n',
                '\n## HTML block below\n\n<blockquote>\n    This blockquote will change based ',
                'on the HTML settings above.\n</blockquote>\n\n## How about some code?\n',
                '```js\nvar React = require(\'react\');\nvar Markdown = require(\'react-markdown\');',
                '\n\nReact.render(\n    <Markdown source="# Your markdown here" />,\n    document.',
                'getElementById(\'content\')\n);\n```\n\nPretty neat, eh?\n\n', '## More info?\n\n',
                'Read usage information and more on GitHub'
            ].join(''),

            htmlMode: 'raw'
        }
        this.onMarkdownChange = this.onMarkdownChange.bind(this);
        this.onControlsChange = this.onControlsChange.bind(this);
    }

    onMarkdownChange(md) {
        this.setState({
            markdownSrc: md
        });
    }

    onControlsChange(mode) {
        this.setState({ htmlMode: mode });
    }

    render() {
        return (
            <div className="demo">
              <RcMarkdown
                markdownSrc={this.state.markdownSrc}
                htmlMode={this.state.htmlMode}
                onMarkdownChange={this.onMarkdownChange}
                />
            </div>
        )
    }
}

export default Demo
