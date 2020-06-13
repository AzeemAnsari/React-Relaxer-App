import React from 'react';

import './App.css';
import Logo from './logo.png';


class App extends React.Component {

	state = {direction : '',
					text:'',
					pointer: '',
					intervalID: '',
					toggle: false,
					clearBH: '',
					clearBO: ''
				}

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

		const bhtimeOut = setTimeout(() => {
			this.breatheHold()


		const botimeOut =	setTimeout(() => {
				this.breatheOut()		
			}, holdTime);
		}, breatheTime);
		// this.setState({clearBO: botimeOut});
		this.setState({clearBH: bhtimeOut});
		
	}

startNow = () => {
		this.setState({toggle: true})
		 this.breathAnimation()
		 const myInterval = setInterval(() => {
			 this.breathAnimation()
		 }, 7500)
		 this.setState({intervalID: myInterval})
	}

stopFunction = () => {
		clearTimeout(this.state.clearBH);
		clearInterval(this.state.intervalID);
		 this.setState({direction : '', text:'', toggle: false, pointer: ''})
	 }

	render(){
		
	return (
		<div className="main">
		<div className="logo"><img src={Logo} alt="Azeem Ansari" /></div>
		<h1>Relax</h1>
		<div className={`container ${this.state.direction}`}>
			<div className="circle"></div>

			<p>{this.state.text.toUpperCase()}</p>

			<div className={`pointer-container ${this.state.pointer}`}>
				<span className="pointer"></span>
			</div>

			<div className="gradient-circle"></div>

		</div>
		{this.state.toggle ? <button type="button" onClick={this.stopFunction}>Stop</button> : <button type="button" onClick={this.startNow}>Start Now</button>}
		</div>
	);
	}
}

export default App;
