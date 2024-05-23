const App = () => {

const handleChange = (e) =>{
  console.log(e.target.value);
}


  return (
    <div>
      <h1>React App</h1>
      <input 
      type="text"
      onChange={handleChange} />
    </div>
  )
}
export default App

//event handling
// Twitter counter
// To get the count of the character
// Password length