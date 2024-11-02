import React from "react";
import { useState } from "react";

const SignUpForm = ( {token, setToken} ) => {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit  = async (event)  => {
    event.preventDefault();

    try { 
      const postLogin = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: userPass
      }),
    });

    const  responseJSON = await postLogin.json();
    const token = responseJSON.token;
    setToken(token);

    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
    <h2>Sign Up</h2>
    {error && <p>Error: {error}</p>}
    <form onSubmit={(handleSubmit)}>
      <label>
        <input
        placeholder= "Username"
        value= {userName}
        onChange={(event) => setUserName(event.target.value)}
        />
      </label>
      <label>
        <input id="pass-input"
        placeholder="Password"
        type= "password"
        value= {userPass}
        onChange={(event) => setUserPass(event.target.value)}
        />
      </label>
      <button id="log-in-button">Log In</button>
    </form>
    </>
  )
}

export default SignUpForm;