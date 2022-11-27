import {
    addPlayerOne,
    addPlayerOneImg,
    addPlayerTwo,
    addPlayerTwoImg,
    resetUsers,
} from 'Components/redux/battleReduser'
import { useAppSelector } from 'Components/redux/hooks'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import PlayerInput from './PlayerInput'
import PlayerPreview from './PlayerPreview'

type Props = {}

const Battle = (props: Props) => {
    const playerOne = useAppSelector((state) => state.battle.playerOne)
    const playerTwo = useAppSelector((state) => state.battle.playerTwo)
    const playerOneImg = useAppSelector((state) => state.battle.playerOneImg)
    const playerTwoImg = useAppSelector((state) => state.battle.playerTwoImg)

    const dispatch = useDispatch()
    const location = useLocation()

    const handleReset = (id: string) => {
        if (id === 'playerOne') {
            dispatch(addPlayerOne(''))
            dispatch(addPlayerOneImg(''))
        } else {
            dispatch(addPlayerTwo(''))
            dispatch(addPlayerTwoImg(''))
        }
    }

    return (
        <div className="container">
            <div className="row">
                {!playerOneImg ? (
                    <PlayerInput label={'Player 1'} id={'playerOne'} />
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
                    <PlayerInput label={'Player 2'} id={'playerTwo'} />
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
                        onClick={() => dispatch(resetUsers())}
                    >
                        Battle
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Battle
