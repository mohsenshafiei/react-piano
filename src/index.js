import React from "react";
import ReactDOM from "react-dom";
import { Piano } from './piano';
import { Title } from './title';
import { Controller } from './controller';
import { Teacher } from './teacher';

const App = () => {
  const [start, setStart] = React.useState(false);
  return (
    <div>
      {
        !start ?
        <>
          <Title />
          <Controller click={(e) => setStart(true)}/>
        </> :
        <Teacher />
      }
      <Piano />
    </div>
  )
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
