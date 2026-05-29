import { useEffect, useState } from "react";
import axios from "axios";
function ApiUsingAxios() {
  const [users, setUsers] = useState([{id:"",name:"",email:""}]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);
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
export default ApiUsingAxios;