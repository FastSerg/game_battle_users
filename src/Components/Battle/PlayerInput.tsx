import {
    addPlayerOne,
    addPlayerOneImg,
    addUser,
    addPlayerTwo,
    addPlayerTwoImg,
} from 'Components/redux/battleReduser'
import { useAppSelector } from 'Components/redux/hooks'
import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

type Props = {
    label: string
    id: string
}

const PlayerInput = ({ label, id }: Props) => {
    const userName = useAppSelector((state) => state.battle)
    const dispatch = useDispatch()

    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSubmit(id, userName[id])
    }

    const handleSubmit = (id: string, userName: string) => {
        let img = `https://github.com/${userName}.png?size=200`
        if (id === 'playerOne') {
            dispatch(addPlayerOne(userName))
            dispatch(addPlayerOneImg(img))
        } else if (id === 'playerTwo') {
            dispatch(addPlayerTwo(userName))
            dispatch(addPlayerTwoImg(img))
        }
    }

    return (
        <div className="cart-player">
            <form className="column" onSubmit={onSubmit}>
                <label htmlFor={id} className="header">
                    {label}
                </label>
                <input
                    type="text"
                    id={id}
                    placeholder="Github Username"
                    autoComplete="off"
                    value={userName[id]}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        dispatch(addUser({ id: id, value: e.target.value }))
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
