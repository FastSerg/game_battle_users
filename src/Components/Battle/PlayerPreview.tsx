import React from 'react'

type Props = {
    playerImg: string
    player: string
    children?: React.ReactNode
}

const PlayerPreview = ({ playerImg, player, children }: Props) => {
    return (
        <div className="cart-player">
            <div className="column">
                <img src={playerImg} alt="Avatar" className="avatar" />
                <h2 className="userName">{player}</h2>
            </div>
            {children}
        </div>
    )
}

export default PlayerPreview
