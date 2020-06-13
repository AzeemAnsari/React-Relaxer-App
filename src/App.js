import React from 'react';

import './App.css';
import Logo from './logo.png';


class App extends React.Component {

  state = {direction : '', text:'', pointer: ''}

   breatheIn(){
     this.setState({
       direction: 'grow',
       text: 'Breathe In'
     })
   }

   breatheHold(){
     this.setState({
       direction: 'grow',
       text: 'Hold'
     })
   }

   breatheOut(){
     this.setState({
       direction: 'shrink',
       text: 'Breathe Out'
     })
   }
 
  breathAnimation = () => {
    const totalTime = 7500;
    const breatheTime = (totalTime / 5) * 2;
    const holdTime = totalTime / 5;
    this.setState({pointer: 'start'})
    this.breatheIn()

    setTimeout(() => {
      this.breatheHold()

      setTimeout(() => {
        this.breatheOut()
      }, holdTime);
    }, breatheTime);
  }

startNow = () => {
     this.breathAnimation()
     const myInterval = setInterval(() => {
       this.breathAnimation()
     }, 7500)
  }

stopFunction = () => {
     this.setState({direction : '', text:'', pointer: ''})
   }

  render(){
    
  return (
    <div className="main">
    <div><img src={Logo} alt="Azeem Ansari" /></div>
    <button type="button" onClick={this.startNow}>Start Now</button>
    <button type="button" onClick={this.stopFunction}>Stop</button>
    <h1>Relax</h1>
    <div className={`container ${this.state.direction}`}>
      <div className="circle"></div>

      <p>{this.state.text.toUpperCase()}</p>

      <div className={`pointer-container ${this.state.pointer}`}>
        <span className="pointer"></span>
      </div>

      <div className="gradient-circle"></div>

    </div>
    </div>
  );
  }
}

export default App;
