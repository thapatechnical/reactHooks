import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from "./nav";
import About from "./about";
import Index from "./index";


const Home = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Route path="/index">
                <Index />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </BrowserRouter>
    )
}

export default Home
