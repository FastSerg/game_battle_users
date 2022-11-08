import React, { ChangeEvent, useState } from 'react'

type Props = {
    label: string
    id: string
    onSubmit: (id: string, userName: string) => void
}

const PlayerInput = ({ label, id, onSubmit }: Props) => {
    const [userName, setUserName] = useState<string>('')

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(id, userName)
    }

    return (
        <div className="cart-player">
            <form className="column" onSubmit={handleSubmit}>
                <label htmlFor={id} className="header">
                    {label}
                </label>
                <input
                    type="text"
                    id={id}
                    placeholder="Github Username"
                    autoComplete="off"
                    value={userName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setUserName(e.target.value)
                    }
                />
                <button className="button" disabled={!userName} type={'submit'}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default PlayerInput
