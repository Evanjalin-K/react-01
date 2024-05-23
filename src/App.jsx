const App = () => {

  const friends = [
    {id:1,name: "Peter",age: 20},
    {id:2,name: "John",age: 23},
    {id:3,name: "lia",age: 29},
    {id:4,name: "Fana",age: 25}
  ]
  const listFriends = [];
  for (let i =0; i < friends.length; i++){
    listFriends.push(
      <li key={friends[i].id}>{friends[i].name} {friends[i].age}</li>
    )
  }
  console.log(listFriends)

  return (
    <div>
      <h1>Friends</h1>
      <ul>
      {
      listFriends  
      }
      </ul>
    </div>
  )
}

export default App

//Another method by using for loop - map() is the best way to do.