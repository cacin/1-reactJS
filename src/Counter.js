import React, {Component} from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Clock from './Clock';
import ClockFunctional from './ClockFunctional';
import Step from './Step';
import StepValue from './Step';


/* function Counter(props){

    let randomNumber = Math.floor(Math.random()*(108-1+1) + 1)

    return (
        <div className="counter">
            Counter:
            <span className="value">
                {props.initValue}
            </span>
        </div>
    );
}
 */

class Counter extends Component{

    constructor(props){
        super(props);

        this.state={
            counterValue: this.props.initValue,
            showClock: true,
            step: 1
        };
    }

    changeInput =(value) => {
        this.setState({ step: Number(value) })
      }

    changeValue=(action) =>{
  
      

        this.setState(
            (prevState, prevProps) =>{
                let currentCounterValue = prevState.counterValue;

                if(action==='add'){
                    currentCounterValue +=prevState.step;
                }else if(action==='reinit'){
                    currentCounterValue = prevProps.initValue;
                }else {
                    currentCounterValue=0;
                }

                return({
                    counterValue: currentCounterValue
                })
            } 
        );

        
    }

    toggleClock = () => {
        this.setState((prevState) => {
            return({
                showClock: !prevState.showClock
            });
        })
    }

    render(){
        //let randomNumber = Math.floor(Math.random()*(108-1+1) + 1)
        let clockElement = '';
        if (this.state.showClock){
            clockElement = <Clock toggleClockMethod={this.toggleClock}/>;
        }else{
            clockElement = <span onClick={this.toggleClock} className="show-clock">show clock</span>;
        }

        return(<div className="counter">
        Counter:
        <Display displayValue={this.state.counterValue}/>
        <ButtonsPanel buttonMethod={this.changeValue} step={this.state.step} />
        <Step step={this.state.step} changeInputMethod={this.changeInput}/>
        
        {clockElement}
    </div>)
    }
}

export default Counter;