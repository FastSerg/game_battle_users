import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PlayerInput from './PlayerInput'
import PlayerPreview from './PlayerPreview'

type Props = {}

const Battle = (props: Props) => {
    const [playerOne, setPlayerOne] = useState<string>('')
    const [playerTwo, setPlayerTwo] = useState<string>('')
    const [playerOneImg, setPlayerOneImg] = useState<string>('')
    const [playerTwoImg, setPlayerTwoImg] = useState<string>('')

    const location = useLocation()

    const handleSubmit = (id: string, userName: string) => {
        let img = `https://github.com/${userName}.png?size=200`
        if (id === 'playerOne') {
            setPlayerOne(userName)
            setPlayerOneImg(img)
        } else if (id === 'playerTwo') {
            setPlayerTwo(userName)
            setPlayerTwoImg(img)
        }
    }

    const handleReset = (id: string) => {
        if (id === 'playerOne') {
            setPlayerOne('')
            setPlayerOneImg('')
        } else {
            setPlayerTwo('')
            setPlayerTwoImg('')
        }
    }

    return (
        <div className="container">
            <div className="row">
                {!playerOneImg ? (
                    <PlayerInput
                        label={'Player 1'}
                        id={'playerOne'}
                        onSubmit={handleSubmit}
                    />
                ) : (
                    <PlayerPreview playerImg={playerOneImg} player={playerOne}>
                        <button
                            className="reset"
                            onClick={() => handleReset('playerOne')}
                        >
                            Reset
                        </button>
                    </PlayerPreview>
                )}

                {!playerTwoImg ? (
                    <PlayerInput
                        label={'Player 2'}
                        id={'playerTwo'}
                        onSubmit={handleSubmit}
                    />
                ) : (
                    <PlayerPreview playerImg={playerTwoImg} player={playerTwo}>
                        <button
                            className="reset"
                            onClick={() => handleReset('playerTwo')}
                        >
                            Reset
                        </button>
                    </PlayerPreview>
                )}
            </div>

            {playerOneImg && playerTwoImg && (
                <div className="row">
                    <Link
                        className="button"
                        to={{
                            pathname: `${location.pathname}/results`,
                            search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
                        }}
                    >
                        Battle
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Battle
