import React from "react";
import ReactDOM from 'react-dom';
import Option from "./Option";

var Options = (props) => {
    return (
        <div>
            <button onClick={props.removeAllOptions}>Remove All</button>
            {props.options.map(option => { return <Option key={option} option={option} 
                removeSingleOption={props.removeSingleOption}/> })}   
        </div>
    )
}

export default Options;
