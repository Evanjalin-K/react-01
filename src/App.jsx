const App = () => {
  const isLoggedin = false;

  if(isLoggedin){
    return <h1>Welcome Back!</h1>
  }
  else{
    return <h1>Please Log in</h1>
}
}
export default App