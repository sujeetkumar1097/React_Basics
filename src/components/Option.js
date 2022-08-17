import React from "react";
import ReactDOM from 'react-dom';

var Option = (props) => {
    return (
        <div>
            {props.option}
            <button onClick={(e) => props.removeSingleOption(props.option)}>Remove</button>
        </div>
    )
}

export default Option;
