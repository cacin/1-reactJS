import React from 'react';
import './ButtonsPanel.css';

function ButtonsPanel(props){

    let checkStep = true;
        if(props.step>0 && props.step<=5)
        {
            checkStep=true;
        }else{
            checkStep=false;
        }

    return(
        <div className="buttons-panel">
            <button onClick={()=>{props.buttonMethod('add');}} 
                    disabled={checkStep===true?false:true}
                    className={checkStep===true?'':'disable'}
                    >
                    Add {checkStep===true?props.step:'0'}
            </button>
            <button  onClick={()=>{props.buttonMethod('reinit');}}>    ReInit</button>
            <button onClick={()=>{props.buttonMethod('reset');}}>     Reset</button>
            <p>{checkStep===true?'':'Wpisz liczby z zakresu 1 - 5'}</p>
        </div>
    );
}


export default ButtonsPanel;