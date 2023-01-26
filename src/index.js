import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import News from "./news";
import Nav from "./nav";
import {BrowserRouter,Route,} from "react-router-dom"
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
  <>
  <Nav />
    <Route exact path="/Apple"><News newsName="iphone" /></Route>
    <Route path="/Tesla"><News newsName="tesla" /></Route>
    <Route path="/Bitcoin"><News newsName="bitcoin" /></Route>
    <Route path="/nasa"><News newsName="nasa" /></Route>
    
  </>
  </BrowserRouter>,
  document.getElementById("root")
);


reportWebVitals();
