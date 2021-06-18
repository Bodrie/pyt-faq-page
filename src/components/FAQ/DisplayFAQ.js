import {useState} from 'react'
import FunctionalFAQ from './FunctionalFAQ';
import './DisplayFAQ.css';

function DisplayFAQ() {

    const [data, setdata] = useState([
        {
            q: 'Question 1',
            a: 'Answer 1',
            expanded: false
        },
        {
            q: 'Question 2',
            a: 'Answer 2',
            expanded: false
        }
    ]);

    const isExpanded = index =>{
        setdata(data.map((item, i) => {
            if (i === index) {
                item.expanded = !item.expanded;
            } else {
                item.expanded = false;
            }
            return item;
        }))
    }

    return (
        <div className="data-container">
            {data.map((item, i) => 
                <FunctionalFAQ data={item} index={i} isExpanded={isExpanded}/>
            )}
        </div>
    );
}

export default DisplayFAQ;