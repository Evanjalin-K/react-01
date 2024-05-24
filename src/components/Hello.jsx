import { Component } from "react";

class Hello extends Component {
    //In class rendur will work in function return will work
    render() {
        console.log(this.props)

      return(
        <h1>Hello {this.props.name}</h1>
      )
    }
   }
export default Hello;