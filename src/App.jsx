import { Component } from "react";

 class Hello extends Component {
  //In class rendur will work in function return will work
  render() {
    return(
      <h1>Hello world</h1>
    )
  }
 }



class App extends Component {
  render(){
    return(
      <div>
     <Hello/>
      </div>
    )
  }
}
export default App;