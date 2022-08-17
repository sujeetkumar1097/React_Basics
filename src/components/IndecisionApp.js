import React from 'react';
import ReactDOM from 'react-dom';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.addValueToOptions = this.addValueToOptions.bind(this);
        this.removeSingleOption = this.removeSingleOption.bind(this);

        this.state = {
            options : props.options,
            appName : 'Indecision',
            subTitle : 'Create your Application'
        }
    };

    removeSingleOption(opt) { //ths syntax is function assign to a object property
        const filtered = this.state.options.filter((val) => val !== opt);
        this.setState((prev) => ({options : filtered}));
        
    }

    removeAllOptions() {
        this.setState(() => ({options : []})); //prevState is not required as parameter
    };

    handlePick() {
        const random = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[random]);
    };

    addValueToOptions(optn) {
        if (!optn) {
            return `Please provide some valid value`;
        } else if (this.state.options.indexOf(optn) > -1) {
            return `This Value already present, Please provide some other value`;
        }

        this.setState((prev) => ({
            options : prev.options.concat([optn])
        }));
    }

    render() {
        return (
            <div>
                <Header appName={this.state.appName} subTitle={this.state.subTitle}/>
                <Action isOptionsEmpty={this.state.options.length > 0} handlePick={this.handlePick}/>
                <AddOption addValueToOptions={this.addValueToOptions}/>
                <Options options={this.state.options} removeAllOptions={this.removeAllOptions} 
                removeSingleOption={this.removeSingleOption}/>
            </div>
        );
    };
};

IndecisionApp.defaultProps = {
    options : []
}

export default IndecisionApp;