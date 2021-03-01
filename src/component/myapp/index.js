import React from 'react'
import { useLocation, useHistory } from "react-router-dom";

const Index = () => {
    const location = useLocation();
    const history = useHistory();

    console.log(history);
    return (
        <div>
            <h1>Hello {location.pathname.replace("/", '')} page</h1>
            <button className="btn-primary btn"
                onClick={history.goBack}
            >
                Go Back
            </button>
        </div>
    )
}

export default Index
