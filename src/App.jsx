const App = () => {

  const friends = [
    {id:1,name: "Peter",age: 20},
    {id:2,name: "John",age: 23},
    {id:3,name: "lia",age: 29},
    {id:4,name: "Fana",age: 25}
  ]
  return (
    <div>
      <h1>Friends</h1>
      <ul>
      {
        friends.map(friend=> //call back function
          <li key={friend.id}>{friend.name} {friend.age}</li>
        )
      }
      </ul>
    </div>
  )
}

export default App

//Using map function we can get dynamic data