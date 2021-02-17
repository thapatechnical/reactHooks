import React, {useState, useEffect} from 'react'

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        setUsers(await response.json());
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h2>List of GitHub Users</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    
                {

                        users.map((curElem) => {
                        
                            const { url, id, title } = curElem;
                        return (
                              <div className="col-10 col-md-4 mt-5" key={id}>
                      <div className="card p-2">
                                <div className="d-flex align-items-center">
                                        <div className="image"> <img src={ url} className="rounded" width="155" /> </div>
                                    <div className="ml-3 w-100">
                                            <h4 className="mb-0 mt-0 textLeft">Thapa</h4>
                                            <span className="textLeft">{title }</span>
                                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column">
                                                    <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                        </div>
                                      
                                    </div>
                             </div>
                          </div>
                    </div>
                        )
                })        

                }

                  
                    
                </div>
            </div>
        </>
    )
}

export default UseEffectAPI
