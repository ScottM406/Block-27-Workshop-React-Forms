import React from 'react';
import { useState } from 'react';
import SignUpForm from './Components/SignUpForm.jsx';
import Authenicate from './Components/Authenticate.jsx';
import './index.css';

const App = () => {

  const [token, setToken] = useState(null);

 return (
  <>
  <h1>Welcome to the Login Page Demo!</h1>
  {<SignUpForm token={token} setToken={setToken} />}
  {<Authenicate token={token} setToken={token} />}
  </>
 )
}

export default App
