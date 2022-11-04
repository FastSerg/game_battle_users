import React from 'react'
import { NavLink } from 'react-router-dom'
import { useColorTheme } from './Theme'

const navLinks: string[] = ['Home', 'Popular', 'Battle']

type Props = {}
const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light'
console.log(defaultTheme)
const NavBar = (props: Props) => {
    const { colorTheme, setColorTheme } = useColorTheme('')

    const onChangeTheme = () => {
        colorTheme === 'dark' ? setColorTheme('light') : setColorTheme('dark')
    }

    return (
        <>
            <div className="nav-box">
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
                <div>
                    <button onClick={() => onChangeTheme()} className={'theme'}>
                        {colorTheme}
                    </button>
                </div>
            </div>
        </>
    )
}

export default NavBar
