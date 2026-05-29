import { useState } from "react";

function Counter() {
//this is for state 
  const [count, setCount] = useState("a");
  var abc = () => {
    if (count < "z") {
      setCount(String.fromCharCode(count.charCodeAt(0) + 1));
    } else {
      setCount("a");
    }
  };

  // this is for event handling
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("hello "+name);
  };

//   this for conditional rendering 

   const isLoggedIn = true;


  return (
    <div>

        {/* this for state */}
      <h1>{count}</h1>
      <button onClick={abc}>next</button>

       {/* event handling with mouse */}
      <div
        onMouseEnter={() => console.log("Hover")}
        onMouseLeave={() => console.log("Leave")}
      ><br />
        Hover Me
        <br />
      </div>
      <br />

      {/* this for event with submit */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

{/* this for conditional rendering using if else  */}
        <div>
      {isLoggedIn ? (<h1>Dashboard</h1>) : (<button>Login</button>)}
    </div>

    </div>
  );
}

export default Counter;
