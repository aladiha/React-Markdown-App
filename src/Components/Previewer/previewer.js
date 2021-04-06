import React from 'react';
import './previewer.css'
import ReactMarkdown from 'react-markdown'
import {faFire} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Previewer = props => {
    return <div>
        <div id="title"><FontAwesomeIcon icon={faFire}/> Previewer</div>
        <div id="previewer">
            <ReactMarkdown source={props.markdown} />
        </div>
    </div>
};

export default Previewer;