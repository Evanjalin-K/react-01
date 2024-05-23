const App = () => {
  const isLoggedin = false;
return(
  <div>
    {isLoggedin && <h1>Welcome User!</h1>}
    {!isLoggedin && <h1>Please log in</h1>}
  </div>
)
}

export default App

//Conditional rendering using terinary(?) operator