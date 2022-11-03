import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {}

const Results = (props: Props) => {
    const location = useLocation()
    useEffect(() => {
        const searshParams = new URLSearchParams(location.search)
        console.log(
            searshParams.get('playerOne'),
            searshParams.get('playerTwo'),
            'searshParams'
        )
    }, [])

    return <div>Results</div>
}

export default Results
