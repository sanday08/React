import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function formHandle(event) {
    const { value, name } = event.target;

    console.log(name + " : " + value);
    console.log(user);
    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <form onChange={formHandle}>
        <h1>
          Hello {user.fName} {user.lName}
        </h1>
        <p>{user.email}</p>
        <input type="text" placeholder="First Name" name="fName" />
        <input type="text" placeholder="Laast Name" name="lName" />
        <input type="text" placeholder="Email" name="email" />
        <button type="submit" name="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
