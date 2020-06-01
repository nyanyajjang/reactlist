// import React, { Component } from 'react';
const React = require('react');
const { Component } = React;

class ResponseCheck extends Component {
    state = {
        state: 'waiting',
        message: 'click',
        result: []
    }

timeout;
startTime;
endTime;
    onClickScreen = () => {
        const { state, message, result } = this.state;
        if (state === 'waiting') {
            this.setState({
                state: 'ready',
                message: 'click when it is brown color'
            });
            this.timeout = setTimeout(()=> {
                this.setState({
                    state: 'now',
                    message: 'now click'
                })
                this.startTime = new Date();
            }, Math.floor(Math.random()*1000) + 2000);
        } else if (state === 'ready') { 
            clearTimeout(this.timeout);
            this.setState({
            state: 'waiting',
            message: 'too hurry. Click again'
        })  
        } else if (state === 'now') {
            this.endTime = new Date();
            this.setState((prevState) => {
                return { 
                state: 'waiting',
                message: 'Click to re-start',
                result: [...prevState.result, this.endTime - this.startTime]
            }
            })
        }
    };

    renderAverage = () => {
        const { result } = this.state;
        return result.length === 0 
        ? null
        : <div>Average time: {result.reduce((a,c) => a + c) / result.length}ms</div>
        
    }

    render(){
        const { state, message } = this.state;
        return (
        <>
        <div 
        id="screen"
        className={state}
        onClick={this.onClickScreen}>
        
        {message}

        </div>
        {this.renderAverage()}
        {/* {this.state.result.length !== 0 
        && <div>average time: {this.state.result.reduce((a,c) => a + c) / this.state.result.length}ms</div>
        } */}
        
     </>
        )
    }
}

export default ResponseCheck;