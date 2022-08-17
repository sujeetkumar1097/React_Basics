import React from "react";
import ReactDOM from 'react-dom';

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
        this.state = {
            error : undefined
        }
    }
    formSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        let error = this.props.addValueToOptions(option);
        e.target.elements.option.value = '';
        this.setState(() =>  {
            return {error : error}
        })
        
    }
    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.formSubmit}>
                    <input type='text' name='option'/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddOption;