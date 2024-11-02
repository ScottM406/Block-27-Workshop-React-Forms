import React from "react";
import { useState } from "react"

const Authenticate = ( {token, setToken, userName} ) => {

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loggedUser, setLoggedUser] = useState("");

  const buttonHandler = async () => {
    try {
      const getAuth = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: "GET",
        headers: {"Contenet-Type": "application/json", Authorization: `Bearer ${token}`,
      }
      })

      const auth = await getAuth.json();
      console.log(auth)
      setSuccess(auth.message);
      setLoggedUser(auth.data.username)

    } catch (error) {
        setError(error.message);
    }
  };

  return (
    <>
    <h2>Authenticate</h2>
    {error && <p>`Error: {error}`</p>}
    {success && <p>{success}</p>}
    <button onClick= {buttonHandler}>Authenticate Login Token</button>
    {success && <h1 id="welcome-message">WELCOME {loggedUser}!!!</h1>}
    
    </>
  )
};

export default Authenticate;