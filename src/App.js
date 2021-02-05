import React, { useState } from 'react';
import './App.css';

const App = () => {

  // console.log(useState('thapa technical'));
  // let myfirstVal = useState('thapa')[0];
  // console.log(myfirstVal);

  // var val = 'thapa technical';

  const [myName, setMyName] = useState('thapa techncial Subs');

  const changeName = () => {
    // val = "vinod thapa";
    // console.log(val);
    let val = myName;

    if (val === "thapa techncial Subs") {
      setMyName('vinod thapa');
    } else {
      setMyName('thapa techncial Subs');
    }
  }
    console.log(myName);
  return (
    <div>
      <h1>{ myName }</h1>
      <button className="btn" onClick={changeName} >click me plz</button>
    </div>
  )
}

export default App
