import React from 'react';

class Step extends React.Component {
    constructor(props) {
      super(props);
    }

render(){
    return (
      <form>
       <label id="krok">Krok: </label>
       <input ref={(data) => { this._inputStep = data }} type="number" id="krok" min="1" max="5" defaultValue={this.props.step} 
       onChange={() => this.props.changeInputMethod(this._inputStep.value)}  />
       </form>
    );
}
}


export default Step; 