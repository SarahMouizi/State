
import React, {Component} from 'react'

export class counter extends Component {
    

constructor(){
  super();
  this.state=({
   counter:0
  })
}

 increment=()=>{
    this.setState({ counter: this.state.counter + 1})
}

 decrese=()=>{
   this.setState({ counter: this.state.counter - 1})
}

 reset=()=>{
    this.setState({counter : 0 })
}


   render() {
     return (
       <div className="counter">
           <h1>React Counter</h1>
           <p>{this.state.counter}</p>
           <button className="plus" onClick={this.increment}>plus</button>
           <button className="Moins" onClick={this.decrese}>moins</button>
           <button className="reset" onClick={this.reset}>Reset</button>
       </div>

     )

   }

   }







export default counter
