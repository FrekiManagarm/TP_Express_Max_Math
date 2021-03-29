import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../../components/Navbar/Navbar';
import { Game301PageWrapper } from './Game301.style';

const Game301 = () => {

    const [data, setdata] = useState([])
    useEffect(async = () => {
        const result = await axios.get('');
        setdata(result.data);
    }, [])

    return (
        <Game301PageWrapper>
            <Navbar />
            <pre>{JSON.stringify(data)}</pre>
        </Game301PageWrapper>
    )
}

export default Game301
