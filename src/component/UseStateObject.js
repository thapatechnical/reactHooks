import React from 'react'

const UseStateObject = () => {
    const [myObject, setMyObject] = React.useState({
        myName:"vinod thapa", myAge:27, degree:"MCS", rollNo: 55, channel:"thapa tecnical" 
    });

    const changeObject = () => {
        setMyObject({...myObject, myAge:26});
    }

    return (
        <div>
            <h1 className="h1style">Name: {myObject.myName} & Age: {myObject.myAge}
            & Degree: {myObject.degree}</h1>
            <button className="btn" onClick={changeObject}>Update</button>
        </div>
    )
}

export default UseStateObject
