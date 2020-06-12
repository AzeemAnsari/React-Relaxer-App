import React from 'react';
import './App.css';
import Logo from './logo.png'


class App extends React.Component {

  state = {direction : "grow", text: "Breathe In!"}
  
   componentDidMount(){
     this.breathAnimation()
     setInterval(() => {
       this.breathAnimation()
     }, 7500)
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
    <h1>Relax</h1>
    <div className={'container ' + this.state.direction}>
      <div className="circle"></div>

      <p id="text">{this.state.text.toUpperCase()}</p>

      <div className="pointer-container">
        <span className="pointer"></span>
      </div>

      <div className="gradient-circle"></div>

    </div>
    </div>
  );
  }
}

export default App;
