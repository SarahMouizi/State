import './App.css';
import React, { useState,Component } from 'react';
import Counter from './counter'



export class App extends Component {


  

  constructor(props) {
    super(props)
    this.state = {
      fullName:'Oprah' , 
      bio:'is a talk show host' , 
      imgSrc:'./Oprah.jpg' , 
      profession:'Star', 
      toggleState:true ,
      date: new Date(),
     }}
     
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  

  render() {
    return (
      <div className='style'>
          <button  onClick={()=>{this.setState({toggleState:!this.state.toggleState})}}   >hide</button>

        {
          this.state.toggleState?( 
            <>
              <h1>{this.state.fullName}</h1>
              <h2>{this.state.profession}</h2>
              <h3>{this.state.bio}</h3>
              <h4>It is {this.state.date.toLocaleTimeString()}.</h4>
              
              <img className='photo' src= {this.state.imgSrc} alt='Oprah'/>
              <Counter/>
            </>
            
          ):(<> </>)
        }
       
      </div>
    )
    
    
  }
}


  
 

export default App