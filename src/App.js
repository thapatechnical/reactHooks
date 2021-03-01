import React from 'react';
import './App.css';
import UseEffects1 from "./component/useEffect/useEffects1"
import UseEffect2 from "./component/useEffect/useEffect2"
import UseEffectAPI from "./component/useEffect/useEffectAPI"
import Uncontrolled from "./component/forms/uncontrolled";
import UseReducer from "./component/useReducer/useReducer";
import ComA from "./component/useContext/ComA";
import Test from "./component/useEffect/github/test";
import Home from "./component/myapp/home";

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
  return (<Home />)
} 

export default App
