import React from "react";
import ReactDOM from "react-dom";
import classes from "./index.scss";
import Logo from './content/logo_lemoncode.png';

console.log(`API_BASE: ${process.env.API_BASE}`);

ReactDOM.render(
  <div>
    <img src={Logo} />
    <h1 className={classes.helloWorld}>Hola mundo</h1>
  </div>,
  document.getElementById("root")
);
