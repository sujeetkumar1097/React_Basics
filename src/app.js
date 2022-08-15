class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.addValueToOptions = this.addValueToOptions.bind(this);
        this.state = {
            options : ['one', 'two', 'three'],
            appName : 'Indecision',
            subTitle : 'Create your Application'
        }
    };

    removeAllOptions() {
        this.setState(() => ({options : []})); //prevState is not required as parameter
    };

    handlePick() {
        const random = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[random]);
    };

    addValueToOptions(optn) {
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
                <Options options={this.state.options} removeAllOptions={this.removeAllOptions}/>
            </div>
        );
    };
};

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.appName}</h1>
                <h3>{this.props.subTitle}</h3>
            </div>
        )
    }
}

class Action extends React.Component {
    // handleClick() {
    //     alert('clicked');
    // }
    render() {
        return (
            <div>
                <button disabled={!this.props.isOptionsEmpty} 
                onClick={this.props.handlePick}>
                what should I do
                </button>
            </div>
        )
    }
}

class Options extends React.Component {
    render () {
        return (
            <div>
                <button onClick={this.props.removeAllOptions}>Remove All</button>
                {this.props.options.map(option => { return <Option key={option} option={option}/> })}   
            </div>
        )
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
                <h4>{this.props.option}</h4>
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
    }
    formSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option) {
            console.log("form Submited !");
            this.props.addValueToOptions(option);
        }
        
    }
    render () {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <input type='text' name='option'/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("appRoot"));