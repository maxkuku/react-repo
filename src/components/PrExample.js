


import React, {useState} from 'react';




function ChildSpan(props) {
    return (
        <span className="px-2">{props.count}</span>
    )
}

function AnoButton(props) {
    return (
        <div className="btn btn-primary" onClick={props.onClick}>Props onClick!</div>
    )
}

const PrExample = () => {



    const [count, setCount] = useState(0);


    const changeCount = () => {
        setCount(prevCount => prevCount + 1);
    }

    return (
    <div>
        <ChildSpan count={count} />
        <AnoButton onClick={changeCount} />
    </div>
    )
};

export default PrExample;