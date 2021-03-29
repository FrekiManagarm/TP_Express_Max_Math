import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { PlayersPageWrapper } from './Players.style'

const Players = () => {

    const [data, setdata] = useState([])
    useEffect(async () => {
        const result = await axios.get('');
        setdata(result.data);
    }, [])

    return (
        <PlayersPageWrapper>
            <Navbar />
            <pre>{JSON.stringify(data)}</pre>
        </PlayersPageWrapper>
    )
}

export default Players
