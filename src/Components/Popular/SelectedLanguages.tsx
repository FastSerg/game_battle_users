import React from 'react'
const languages: string[] = [
    'All',
    'Javascript',
    'Ruby',
    'CSS',
    'Python',
    'Java',
]

type Props = {
    languageSate: string
    onSelectLanguage: (language: string) => void
}

const SelectedLanguages = ({ languageSate, onSelectLanguage }: Props) => {
    return (
        <ul className="languages">
            {languages.map((language, i) => (
                <li
                    key={i}
                    className={language === languageSate ? 'active' : ''}
                    onClick={() => onSelectLanguage(language)}
                >
                    {language}
                </li>
            ))}
        </ul>
    )
}

export default SelectedLanguages
