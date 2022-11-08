import React from 'react'
import { Link } from 'react-router-dom'

type Props = { error: string }

const ErrorMessage = ({ error }: Props) => {
    return (
        <div className="container">
            <p className="text-message">{error}</p>
            <Link className="button" to="/battle">
                Reset
            </Link>
        </div>
    )
}

export default ErrorMessage
