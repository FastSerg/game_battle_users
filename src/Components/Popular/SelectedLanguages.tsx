import { Link } from 'react-router-dom'
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
    searchParam: any
}

const SelectedLanguages = ({
    languageSate,
    onSelectLanguage,
    searchParam,
}: Props) => {
    return (
        <ul className="languages">
            {languages.map((language, i) => (
                <li key={i} onClick={() => onSelectLanguage(language)}>
                    <Link
                        to={searchParam}
                        className={language === languageSate ? 'active' : ''}
                    >
                        {language}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default SelectedLanguages
