import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PlayerPreview from './PlayerPreview'

type Props = {}

const Results = (props: Props) => {
    // const [playerOne, setPlayerOne] = useState<string>('')
    // const [playerTwo, setPlayerTwo] = useState<string>('')
    // const [playerOneImg, setPlayerOneImg] = useState<string>('')
    // const [playerTwoImg, setPlayerTwoImg] = useState<string>('')

    const location = useLocation()
    useEffect(() => {
        const searshParams = new URLSearchParams(location.search)
        // setPlayerTwo(searshParams.get('playerOne') || '')
        console.log(
            searshParams.get('playerOne'),
            searshParams.get('playerTwo'),
            'searshParams'
        )
    }, [])

    return (
        <div>
            {/* <PlayerPreview
                playerOneImg={playerTwoImg}
                playerOne={playerTwo}
            ></PlayerPreview> */}
        </div>
    )
}

export default Results
