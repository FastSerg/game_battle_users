import React from 'react'

type Props = {}

const Preloader = (props: Props) => {
    return (
        <li className="box-circle">
            <img src={'/Img/loader.svg'} alt="" width={'50px'} />
            ...Loading
        </li>
    )
}

export default Preloader
