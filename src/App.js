
import { useEffect, useState } from 'react';
import './App.css';
function App() {

  
  return (
    <div className="App">
    < Extarnaluser></Extarnaluser>
 
    </div>
  );
}

function Extarnaluser (){
  const [users, setUsers] = useState([])
  useEffect( () =>{
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h2>Extarnal user</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User user1={user.name} email ={user.email} company = {user.company.name}></User>)
      }
    </div>
  )
}
function User (props){
  return(
    <div className='card'>
      <h3>Name:{props.user1}</h3>
      <p>Email : {props.email}</p>
      <h4>company : {props.company} </h4>
    </div>
  )
}

export default App;
