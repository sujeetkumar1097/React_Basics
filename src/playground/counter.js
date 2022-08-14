class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count : 0
        };
    }
    add() {
        this.setState((prevState) => ({count : prevState.count + 1}))
        console.log('Add');
    }
    sub() {
        this.setState((prevState) => ({count : prevState.count - 1}))
        console.log('Sub');
    }
    reset() {
        this.setState(() => ({count : 0}))
       console.log('Reset');
    }
    render() {
        return (
            <div>
                Count : {this.state.count} <br/><br/>
                <button onClick={this.add}>+1</button>
                <button onClick={this.sub}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById("appRoot"));