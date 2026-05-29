import { useEffect, useState } from 'react'
function Apiusingfatch() {
    const [users, setUsers]= useState([{id:"", name:"", email:""}])
    useEffect (()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((Response)=> Response.json())
        .then((data)=>{
            setUsers(data);
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
    },[]);
   return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
export default Apiusingfatch