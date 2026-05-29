import { useEffect, useState } from "react";
import axios from "axios";

function ApiUsingAsyncAwait() {
  const [users, setUsers] = useState([{id:"",name:"",email:""}]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/users/all"
        );
        setUsers(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
        <table border={1}>
            
                <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Email</th>
                </tr>
      {users.map((user) => (
        // <div key={user.id}>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
        // </div>
      ))}
       </table>
    </div>
  );
}

export default ApiUsingAsyncAwait;