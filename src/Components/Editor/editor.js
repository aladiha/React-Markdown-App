import React from 'react';
import './editor.css'
import {faFire} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Editor = props => {
    return <div>
        <div id="title"><FontAwesomeIcon icon={faFire}/> Editor</div>
        <textarea id="editor" 
        onChange={event => {
            props.onIdit(event.target.value)
        }}
        placeholder="start typing .."></textarea>
    </div>
};

export default Editor;