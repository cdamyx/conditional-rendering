import React from "react";
import Login from "./Login";

let isLoggedIn = false;

const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        // isLoggedIn ? <h1>Hello</h1> : <Login />
        currentTime > 17 && <h1>why are you still working</h1>
      }
    </div>
  );
}

export default App;
