import { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    // set the initial state
    this.state = {
      counter:0
    }
  }


handleDecrement = () => {
  this.setState ({
    counter: this.state.counter -1
  });
}
handleIncrement = () => {
  this.setState ({
    counter: this.state.counter +1
  });
}
render() {
  console.log(this.state)
return (
    <div>
      <p>count: {this.state.counter}</p>
      <button onClick={this.handleIncrement}>Increment</button>
      <button onClick={this.handleDecrement}>Decrement</button>
    </div>
  )
}
}
export default App;
