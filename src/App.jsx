const Hello = () => {
return <h1>Hello,World!</h1>
}



const App = ()=>{   //App is a component
  return (         //multiple h1 can be created inside the () and div tag
    <div>   
      <Hello/> 
      <Hello/> 
      <Hello/> 
    </div>
  )
}
export default App;