import React from 'react';
import './FunctionalFAQ.css';

function FunctionalFAQ({data, index}) {

    let isExpanded = '';

    if (data.expanded === true) {
        isExpanded = 'expanded'
    } else {
        isExpanded = 'not-expanded';
    }
    
    return (
        <div className={'data ' + isExpanded}>

            <div className="question">{data.q}</div>
            <div className="answer">{data.a}</div>

        </div>
    );
}

export default FunctionalFAQ