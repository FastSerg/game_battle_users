import { startBattle } from 'Components/api'
import Preloader from 'Components/Popular/Preloader'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ErrorMessage from './ErrorMessage'
import Player from './Player'

type Props = {}

type ProfileProps = {
    profile: {
        login: string
        avatar_url: string
        location: string
        name: string
        company: string
        public_repos: string
        following: number
        followers: number
        blog: string
    }
    score: number
}

const objPlayer = {
    profile: {
        login: '',
        avatar_url: '',
        location: '',
        name: '',
        company: '',
        public_repos: '',
        following: 0,
        followers: 0,
        blog: 'string',
    },
    score: 0,
}

const Results = (props: Props) => {
    const [winner, setWinner] = useState<ProfileProps>(objPlayer)
    const [loser, setLoser] = useState<ProfileProps>(objPlayer)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState('')

    const location = useLocation()

    useEffect(() => {
        const searshParams = new URLSearchParams(location.search)
        let playerOne = searshParams.get('playerOne')
        let playerTwo = searshParams.get('playerTwo')

        if (playerOne && playerTwo) {
            startBattle([playerOne, playerTwo]).then(([winner, loser]: any) => {
                setWinner(winner)
                setLoser(loser)
                setLoading(true)
            })
        } else {
            setError('No value winner or loser!')
            setLoading(false)
        }
    }, [location.search])

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
