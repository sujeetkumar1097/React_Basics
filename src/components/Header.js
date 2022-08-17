import React from "react";
import ReactDOM from 'react-dom';

var  Header = (props) => {
    return (
        <div>
            <h1>{props.appName}</h1>
            {props.subTitle && <h3>{props.subTitle}</h3>}
        </div>
    )
}

Header.defaultProps= {
    appName : 'Some Default'
}

export default Header;