import React from 'react';
import './App.css';
import Logo from './logo.png';


class App extends React.Component {

  state = {direction : '', text:'', pointer: ''}
  
   startNow = () => {
     this.breathAnimation()
     setInterval(() => {
       this.breathAnimation()
     }, 7500)
   }

   stop = () => {
    clearInterval(this.myInterval)
   }



   breatheIn(){
     this.setState({
       direction: 'grow',
       text: 'Breathe In'
     })
   }

   breatheHold(){
     this.setState({
       text: 'Hold',
       direction: 'grow'
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

  render(){
    
  return (
    <div className="main">
    <div><img src={Logo} alt="Azeem Ansari" /></div>
    <button onClick={this.startNow}>Start Now</button>
    <button onClick={this.stop}>Stop</button>
    <h1>Relax</h1>
    <div className={`container ${this.state.direction}`}>
      <div className="circle"></div>

      <p id="text">{this.state.text.toUpperCase()}</p>

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
