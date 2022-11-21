import React from 'react'
import PlayerPreview from './PlayerPreview'

type Props = {
    winnerOrLoser: string
    login: string
    avatarImg: string
    blog: string
    reposPublic: string
    followers: number
    following: number
    profileName: string
    company: string
    location: string
    scorePlayer: number
}

const Player = ({
    winnerOrLoser,
    login,
    avatarImg,
    blog,
    reposPublic,
    followers,
    following,
    profileName,
    company,
    location,
    scorePlayer,
}: Props) => {
    return (
        <PlayerPreview player={login} playerImg={avatarImg}>
            <ul className="space-list-items">
                {<h2 className="text-message"> {winnerOrLoser}</h2>}
                {profileName && <li>Profile name: {profileName}</li>}
                {location && <li>Location: {location}</li>}
                {company && <li>Company: {company}</li>}
                <li>Followers: {followers}</li>
                <li>Following: {following}</li>
                <li>Public Repos: {reposPublic}</li>
                {blog && (
                    <li>
                        <a href={blog}>Blog: {blog}</a>
                    </li>
                )}
            </ul>
            <h2 className="text-message">Score: {scorePlayer}</h2>
        </PlayerPreview>
    )
}

export default Player
