import React from 'react'
import { useLocation, useHistory } from "react-router-dom";

const Index = () => {
    const location = useLocation();
    const history = useHistory();

    return (
        <div>
            <h1>Hello {location.pathname.replace("/", '')} page</h1>
            {
                location.pathname === '/about/thapa' ? 
                    <p>Hii, Thapa Good to see you again</p> : 
                    <p>Login to see your files</p>
            }

            <button className="btn btn-primary"
            onClick={() => history.push('/index')}>
                Home Page
            </button>
           
        </div>
    )
}

export default Index
