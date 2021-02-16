import React, {useState, useEffect} from 'react'

const UseEffects1 = () => {

    const [coutn, setCoutn] = useState(0);

    useEffect(() => {
        console.log("I am first one");
        if (coutn >= 1) {
             document.title = `Chats (${coutn})`
        } else {
             document.title = `Chats `
        }
    }, [coutn]);

    useEffect(() => {
      console.log("I am fine");
    }, []);


    console.log("Hello outside");
    
    return (
        <div>
            <h1>{coutn}</h1>
            <button className="btn" onClick={
                () => setCoutn(coutn + 1)
            } >Click😀</button>
        </div>
    )
}

export default UseEffects1
