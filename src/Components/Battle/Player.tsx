import React from 'react'
import PlayerPreview from './PlayerPreview'

type Props = {
    title: string
    winnerOrLoser: {
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
}

const Player = ({ winnerOrLoser, title }: Props) => {
    return (
        <PlayerPreview
            player={winnerOrLoser.profile.login}
            playerImg={winnerOrLoser.profile.avatar_url}
        >
            <ul className="space-list-items">
                {<h2 className="text-message"> {title}</h2>}
                {winnerOrLoser.profile.name && (
                    <li>Profile name: {winnerOrLoser.profile.name}</li>
                )}
                {winnerOrLoser.profile.location && (
                    <li>Location: {winnerOrLoser.profile.location}</li>
                )}
                {winnerOrLoser.profile.company && (
                    <li>Company: {winnerOrLoser.profile.company}</li>
                )}
                <li>Followers: {winnerOrLoser.profile.followers}</li>
                <li>Following: {winnerOrLoser.profile.following}</li>
                <li>Public Repos: {winnerOrLoser.profile.public_repos}</li>
                {winnerOrLoser.profile.blog && (
                    <li>
                        <a href={winnerOrLoser.profile.blog}>
                            Blog: {winnerOrLoser.profile.blog}
                        </a>
                    </li>
                )}
            </ul>
            <h2 className="text-message">Score: {winnerOrLoser.score}</h2>
        </PlayerPreview>
    )
}

export default Player
