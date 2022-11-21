import { useEffect, useState } from 'react'

type Props = {}

const Clock = (props: Props) => {
    const getTime = () => {
        let dateNow = new Date(),
            hours =
                dateNow.getHours() < 10
                    ? '0' + dateNow.getHours()
                    : dateNow.getHours(),
            minutes =
                dateNow.getMinutes() < 10
                    ? '0' + dateNow.getMinutes()
                    : dateNow.getMinutes(),
            seconds =
                dateNow.getSeconds() < 10
                    ? '0' + dateNow.getSeconds()
                    : dateNow.getSeconds()

        return { hours, minutes, seconds }
    }

    const [date, setDate] = useState<any>(getTime())

    useEffect(() => {
        setInterval(() => {
            setDate(getTime())
        }, 1000)
    }, [])
    return (
        <>
            <div className="clock">
                {' '}
                <h2 className="home-title">Time to game</h2>
                <span>{`${date.hours} : ${date.minutes} : ${date.seconds}`}</span>
            </div>
        </>
    )
}

export default Clock
