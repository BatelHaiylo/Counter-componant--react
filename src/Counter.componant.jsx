import { Component } from "react";

export default class Counter extends Component{
    constructor(props){
        super()
        this.state = {counter: +props.counter};
        this.changeCountToFive = this.changeCountToFive.bind(this)
        this.countUp = this.countUp.bind(this)
        this.countDown = this.countDown.bind(this)
        this.setCountToZero = this.setCountToZero.bind(this)
    }
    changeCountToFive(){
        this.setState({counter: 5})
    }
    countUp(){
        this.state.counter % 7 == 0 ? this.setState({counter:"Boom"}) : this.setState({counter: this.state.counter+1})
    }
    countDown(){
        this.setState({counter: this.state.counter-1})
    }
    setCountToZero(){
        this.setState({counter: 0})
    }

    render(){
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.changeCountToFive}>press</button>
                <button onClick={this.countUp}>Up</button>
                <button onClick={this.countDown}>Down</button>
                <button onClick={this.setCountToZero}>StartOver</button>
            </div>
        )
    }
}