import { Component } from "react";
import Hello from "./components/Hello"
 
class App extends Component {
  render(){
    return(
      <div>
     <Hello
     name = "John"/>

      </div>
    )
  }
}
export default App;