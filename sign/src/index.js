import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from './components/sign-in/sign-in';
import SignUpContainer from "./components/sign-up/SignUpContainer"

// import Signup from './components/sign-up/sign-up'

ReactDOM.render(
  <React.StrictMode>
  <SignUpContainer />
    <SignIn />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
