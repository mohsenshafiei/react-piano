import React from "react";
import ReactDOM from "react-dom";
import { Piano } from './piano';
import { Title } from './title';

const App = () => (
  <div>
    <Piano />
  </div>
)
const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
