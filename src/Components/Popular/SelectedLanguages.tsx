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
    onSelectLanguage: (language: string) => void
    categoryQuery: string
}

const SelectedLanguages = ({ onSelectLanguage, categoryQuery }: Props) => {
    return (
        <ul className="languages">
            {languages.map((language, i) => (
                <li key={i} onClick={() => onSelectLanguage(language)}>
                    <Link
                        to={language}
                        className={language === categoryQuery ? 'active' : ''}
                    >
                        {language}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default SelectedLanguages
