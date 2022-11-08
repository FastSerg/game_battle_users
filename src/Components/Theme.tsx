import { useState, useLayoutEffect } from 'react'

type Props = {}
const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light'

export const useColorTheme = (props: Props) => {
    const [colorTheme, setColorTheme] = useState<string>(
        localStorage.getItem('app-theme') || defaultTheme
    )

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', colorTheme)
        localStorage.setItem('app-theme', colorTheme)
    }, [colorTheme])
    return { colorTheme, setColorTheme }
}
