
import React, { useReducer } from 'react'
import './reducers.css';

const initialState = 0;

const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
        return state + 1;
    }
    if (action.type === "DECREMENT") {
        return state - 1;
    }
    return state;
}

const UseReducer = () => {

    const [state, dispatch]  = useReducer(reducer, initialState);

    return (
    <>
        <div>
                <p>{state}</p>
                <div className='btnStylePosition'>
                    <button onClick={() => dispatch({type: "INCREMENT"})}> Inc </button>    
                    <button onClick={() => dispatch({type: "DECREMENT"})}> Dec </button>   
                </div>
                 
        </div>
    </>
        
   )
}
export default UseReducer










/*  In JavaScript Reduce method :- The first and most important thing to understand about a reducer is that 
it will always only return one value. The job of a reducer is to reduce. 
That one value can be a number, a string, an array or an object, 
but it will always only be one. Reducers are really great for a lot of things,
but they’re especially useful for applying a bit of logic to a 
group of values and ending up with another single result. */

/* But in React useReducer having seen the way reduce fires a function against an initial value. 
It’s the same sort of concept, but returns two elements as an array,
the current state and a dispatch function. */
/*differences 
 1: Js reduce method returns only one value 
 1: react useReducer return two elements as an array  */



//  import React, { useState } from 'react'
// import './reducers.css';

// const UseReducer = () => {
//     const [count, setCount] = useState(0);
//     return (
//     <>
//         <div>
//                 <p>{count}</p>
//                 <div className='btnStylePosition'>
//                     <button onClick={() => setCount(count + 1)}> Inc </button>    
//                     <button onClick={() => setCount(count - 1)}> Dec </button>   
//                 </div>
                 
//         </div>
//     </>
        
//    )
// }
// export default UseReducer