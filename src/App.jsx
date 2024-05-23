const App = () => {
  const isLoggedin = true;
return(
  <div>
    {
      isLoggedin ? <h1>Welcome Back!</h1> : <h1>Please log in</h1> // if condion true right side statement will work else afte : should work
    }
  </div>
)
}

export default App

//Conditional rendering using terinary operator