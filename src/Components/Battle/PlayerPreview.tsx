import React from 'react'

type Props = {
    playerOneImg: string
    playerOne: string
    children?: React.ReactNode
}

const PlayerPreview = ({ playerOneImg, playerOne, children }: Props) => {
    return (
        <div>
            <div className="column">
                <img src={playerOneImg} alt="Avatar" className="avatar" />
                <h2 className="userName">{playerOne}</h2>
            </div>
            {children}
        </div>
    )
}

export default PlayerPreview
