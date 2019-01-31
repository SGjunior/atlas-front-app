import React, { Component } from 'react';

class MyFirstComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stateValueOne: "Hello World"
        }
    }
    
    componentDidMount() {
        this.setState({ "componentDidMount": true })
    }

    componentWillMount() {
        this.setState({ "componentWillMount": true })
    }

    render() {

        return (
            <React.Fragment>
                <span>{this.state.stateValueOne}</span>    
                <span>{ this.state.componentDidMount && "Component successfully mounted" }</span>
                <span>{ this.state.componentWillMount && "Component will mounted success" }</span>
                <br/>
                <p>
                    {this.props && "We received props, check console"}
                    <br/>
                    {this.props && this.props.aProp}
                </p>
            </React.Fragment>
        )
    }
}

export default MyFirstComponent;