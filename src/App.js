import React, { useState } from 'react';
import './App.css';
// import RulesHook from './component/RulesHook';
import UseStateArray from "./component/UseStateArray";
// import UseStateObject from './component/UseStateObject';

const App = () => {

  // console.log(useState('thapa technical'));
  // let myfirstVal = useState('thapa')[0];
  // console.log(myfirstVal);

  // var val = 'thapa technical';

  // const [myName, setMyName] = useState('thapa techncial Subs');

  // const changeName = () => {
  //   // val = "vinod thapa";
  //   // console.log(val);
  //   let val = myName;

    // (val === 'thapa techncial Subs') ?
    //   setMyName('vinod thapa') : setMyName('thapa techncial Subs');
  
  //   console.log(myName);
  return (
    <div>
      {/* <RulesHook /> */}
      <UseStateArray />
      {/* <UseStateObject /> */}
    </div>
  )
}

export default App
