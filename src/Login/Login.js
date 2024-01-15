import { Button } from '@mui/material';
import React from 'react';
import './Login.css';
import logo from "../Asset/logoss.png";
import { auth, provider } from '../firebase.js';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';


function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img className="log" src={logo} alt="" />
      </div>

      <Button className="btn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
 }

export default Login;
