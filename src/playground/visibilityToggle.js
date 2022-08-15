class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            isVisible : false
        }
    }

    toggleVisibility() {
        this.setState((prevState) => ({isVisible : !prevState.isVisible}));
    }

    render() {
        return (
            <div>
                {this.state.isVisible && <p>I am Sujeet kumar working since last friday</p>}
                <button onClick={this.toggleVisibility}>{this.state.isVisible ? 'Hide Detail ' : 'Show Detail'}</button>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById("appRoot"));