import React from 'react';

function FunctionalFAQ({data, index}) {
    return (
        <div>

            <div>{data.q}</div>
            <div>{data.a}</div>

        </div>
    );
}

export default FunctionalFAQ