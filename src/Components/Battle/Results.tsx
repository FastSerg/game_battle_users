import { startBattle } from 'Components/api'
import Preloader from 'Components/Popular/Preloader'

import { useAppSelector } from 'Components/redux/hooks'
import {
    addLoser,
    addWinner,
    catchError,
    isLoading,
} from 'Components/redux/resultReduser'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import ErrorMessage from './ErrorMessage'
import Player from './Player'

type Props = {}

const Results = (props: Props) => {
    const winner = useAppSelector((state) => state.result.winner)
    const loser = useAppSelector((state) => state.result.loser)
    const error = useAppSelector((state) => state.result.error)
    const loading = useAppSelector((state) => state.result.loading)
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        const searshParams = new URLSearchParams(location.search)
        let playerOne = searshParams.get('playerOne')
        let playerTwo = searshParams.get('playerTwo')

        if (playerOne && playerTwo) {
            startBattle([playerOne, playerTwo]).then(([winner, loser]: any) => {
                dispatch(addWinner(winner))
                dispatch(addLoser(loser))
                dispatch(isLoading(true))
            })
        } else {
            catchError('No value winner or loser!')
            dispatch(isLoading(false))
        }
    }, [location.search, dispatch])

    return (
        <div>
            {error ? (
                <ErrorMessage error={error} />
            ) : (
                <>
                    <div className="row">
                        {loading ? (
                            <Player
                                winnerOrLoser={'Winner'}
                                login={winner.profile.login}
                                avatarImg={winner.profile.avatar_url}
                                profileName={winner.profile.name}
                                company={winner.profile.company}
                                reposPublic={winner.profile.public_repos}
                                following={winner.profile.following}
                                followers={winner.profile.followers}
                                blog={winner.profile.blog}
                                location={winner.profile.location}
                                scorePlayer={winner.score}
                            />
                        ) : (
                            <Preloader />
                        )}
                        {loading ? (
                            <Player
                                winnerOrLoser={'Loser'}
                                login={loser.profile.login}
                                avatarImg={loser.profile.avatar_url}
                                profileName={loser.profile.name}
                                company={loser.profile.company}
                                reposPublic={loser.profile.public_repos}
                                following={loser.profile.following}
                                followers={loser.profile.followers}
                                blog={loser.profile.blog}
                                location={loser.profile.location}
                                scorePlayer={loser.score}
                            />
                        ) : (
                            <Preloader />
                        )}
                    </div>
                    {loading && (
                        <div className="row">
                            <Link className="button" to="/battle">
                                Try again
                            </Link>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default Results
