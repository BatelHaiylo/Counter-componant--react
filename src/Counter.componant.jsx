import { Component } from "react";

export default class Counter extends Component{
    constructor(props){
        super()
        this.state = {counter: +props.counter, previous: +props.startNum};
        this.changeCountToFive = this.changeCountToFive.bind(this)
        this.countUp = this.countUp.bind(this)
        this.countDown = this.countDown.bind(this)
        this.setCountToZero = this.setCountToZero.bind(this)
    }
    changeCountToFive(){
        this.setState({counter: 5})
    }
    countUp(){
        this.state.counter += 1;
        if (this.state.counter % 7 === 0) {
          this.setState({ previous: this.state.counter, counter: "Boom" });
        } else {
          this.setState({
            previous: this.state.counter,
            counter: this.state.counter,
          });
        }
    }
    countDown(){
        this.state.counter -= 1;
        if (this.state.counter % 7 === 0) {
          this.setState({ previous: this.state.counter, counter: "Boom" });
        } else {
          this.setState({
            previous: this.state.counter,
            counter: this.state.counter,
          });
        }
    }
    setCountToZero(){
        this.setState({ counter: 0, previous: 0 });
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
