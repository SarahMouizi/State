
import React, {Component} from 'react'

export class counter extends Component {
    

constructor(){
  super();
  this.state={
   counter:0,
   timer : 0,
   intervall : null
  }
}

componentDidMount(){
  console.log("HELLO")
  this.setState({
    intervall: setInterval(()=>this.setState({timer: this.state.timer + 1}), 1000 )
  });
}

componentDidUpdate(){
  console.log("update")
}

componentWillUnmount(){
  console.log("dead")
  clearInterval(this.state.intervall);
}

 increment=()=>{
    this.setState({ counter: this.state.counter + 1})
}

 decrese=()=>{
   if(this.state.counter > 0)
    {this.setState({ counter: this.state.counter - 1})}
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
           <hr/>
           <p>{this.state.timer}</p>
           <p>timer</p>
       </div>

     )

   }

   }







export default counter
