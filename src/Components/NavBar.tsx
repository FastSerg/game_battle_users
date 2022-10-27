import React from 'react'
import { NavLink } from 'react-router-dom'

const navLinks: string[] = ['Home', 'Popular', 'Battle']

type Props = {}

const NavBar = (props: Props) => {
    return (
        <>
            <ul className="nav">
                {navLinks.map((item, i) => (
                    <li key={i}>
                        <NavLink
                            end
                            to={item === 'Home' ? '/' : item.toLowerCase()}
                        >
                            {item}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default NavBar
