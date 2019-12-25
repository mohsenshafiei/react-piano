import React from "react";
import ReactDOM from "react-dom";
import { Piano } from './piano';
const App = () => <Piano />
const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
