import './App.css';
import { useState } from 'react';

function App() {
  let [colorState, setColorState] = useState([]);

  function handleClick(event) {
    if (colorState.length <= 1) {
      setColorState([...colorState, event.target.className]);
    } else {
      colorState.shift();
      setColorState([...colorState, event.target.className]);
    }
  }

  function addRedColor() {}

  return (
    <div
      onClick={(event) => {
        handleClick(event);
      }}
      className="box-container"
    >
      <div className="box box-1"></div>
      <div className="box box-2"></div>
      <div className="box box-3"></div>
      <div className="box box-4"></div>
      <div className="box box-5"></div>
      <div className="box box-6"></div>
      <div className="box box-7"></div>
      <div className="box box-8"></div>
      <div className="box box-9"></div>
      <div className="box box-10"></div>
      <div className="box box-11"></div>
      <div className="box box-12"></div>
      <div className="box box-13"></div>
      <div className="box box-14"></div>
      <div className="box box-15"></div>
      <div className="box box-16"></div>
    </div>
  );
}

export default App;
