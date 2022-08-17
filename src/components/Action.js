import React from "react";
import ReactDOM from 'react-dom';

var Action = (props) => {
    return (
        <div>
            <button disabled={!props.isOptionsEmpty} 
            onClick={props.handlePick}>
            what should I do
            </button>
        </div>
    )
}

export default Action;