import React from 'react';
import './FunctionalFAQ.css';

function FunctionalFAQ(props) {

    let isExpanded = '';

    if (props.data.expanded === true) {
        isExpanded = 'expanded'
    } else {
        isExpanded = 'not-expanded';
    }
    
    return (
        <div className={'data ' + isExpanded} key={props.index} onClick={ () => props.isExpanded(props.index)}>

            <div className="question">{props.data.q}</div>
            <div className="answer">{props.data.a}</div>

        </div>
    );
}

export default FunctionalFAQ