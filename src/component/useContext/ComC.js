import React, {useContext} from 'react'
import { BioData } from "./ComA";

const Comc = ({ name }) => {
    const channelName = useContext(BioData);
    return <h1>Hello ComC  { channelName } </h1>
}

export default Comc

// consumer