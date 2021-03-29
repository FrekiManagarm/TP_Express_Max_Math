import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../../../components/Navbar/Navbar';
import { AroundTheWorldPageWrapper } from './AroundTheWorld.style';

const AroundTheWorld = () => {

    const [data, setdata] = useState(initialState)

    useEffect(async () => {
        const result = await axios.get('')
        setdata(result.data);
    }, [])


    return (
        <AroundTheWorldPageWrapper>
            <Navbar />
            <pre>{JSON.stringify(data)} </pre>
        </AroundTheWorldPageWrapper>
    );
}

export default AroundTheWorld
