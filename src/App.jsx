const App = () => {

const handleClick = () =>{
  console.log("Button Clicked")
}

  return (
    <div>
      <h1>React App</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App

//event handling