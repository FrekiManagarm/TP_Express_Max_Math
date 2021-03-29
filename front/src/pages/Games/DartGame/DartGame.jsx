import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../../../components/Navbar/Navbar';
import { DartGameWrapper } from './DarteGame.style';

const DartGame = () => {


    const [data, setdata] = useState(initialState)
    useEffect(async = () => {
        const result = await axios.get('');
        setdata(result.data);
    }, [])

    return (
        <DartGameWrapper>
            <Navbar />
            <pre>{JSON.stringify(data)}</pre>
        </DartGameWrapper>
    )
}

export default DartGame
