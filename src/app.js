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

var Options = (props) => {
    return (
        <div>
            <button onClick={props.removeAllOptions}>Remove All</button>
            {props.options.map(option => { return <Option key={option} option={option} 
                removeSingleOption={props.removeSingleOption}/> })}   
        </div>
    )
}

var Option = (props) => {
    return (
        <div>
            {props.option}
            <button onClick={(e) => props.removeSingleOption(props.option)}>Remove</button>
        </div>
    )
}

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

ReactDOM.render(<IndecisionApp />, document.getElementById("appRoot"));