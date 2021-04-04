import React from 'react';
import './editor.css'

const Editor = props => {
    return <div>
        <h2>Type Here</h2>
        <textarea id="editor" 
        onChange={event => {
            props.onIdit(event.target.value)
        }}
        />
    </div>
};

export default Editor;