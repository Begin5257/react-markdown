import React from 'react'
import PropTypes from 'prop-types'
import CodeMirror from 'react-codemirror'

class Editor extends React.Component {
    constructor(props) {
        super(props)

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        this.props.onChange(e);
    }

    render() {
        return (
            <form className="editor pure-form">
              <CodeMirror
                  mode='markdown'
                  theme='monokai'
                  value={this.props.value}
                  onChange={e => this.onInputChange(e)}
               />
            </form>
        )
    }
}

Editor.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
};

export default Editor
