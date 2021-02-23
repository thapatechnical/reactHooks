import React , {useState, useRef} from 'react'

const Uncontrolled = () => {

    // it like a useState only and its preserve the value. NO rerender. DOM
    const luckyName = useRef(null);
    const[show, setShow] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        const name = luckyName.current.value;
        name === "" ? alert("plz fill the data") : setShow(true);
    }

    return (
        <div>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="luckyName">enter your luckyName</label>
                    <input type="text" id="luckyName" ref={ luckyName }/>
                </div>
                <br/>
                <button>Submit</button>
            </form>
            <p> { show ? `your lucky name is ${luckyName.current.value}` : ""} </p>
        </div>
    )
}

export default Uncontrolled
