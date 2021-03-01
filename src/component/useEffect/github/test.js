import React, {useState} from 'react'
import useTitleCount from "../useTitleCount";

const Test = () => {

    const [count, setCount] = useState(0);

    //* custom hook
    useTitleCount(count);

   console.log("Hello outside");
    
    return (
        <div>
            <h1>{count}</h1>
            <button className="btn" onClick={
                () => setCount(count + 1)
            } >Click Test😀</button>
        </div>
    )
}

export default Test
