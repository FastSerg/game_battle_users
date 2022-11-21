import { useAppDispatch, useAppSelector } from 'Components/redux/hooks'
import { fetchPopularRepos } from 'Components/redux/fetchReposReduser'
import {
    comparison,
    languageChoice,
    loading,
} from 'Components/redux/optionsSelectedReduser'
import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
const languages: string[] = [
    'All',
    'Javascript',
    'Ruby',
    'CSS',
    'Python',
    'Java',
]

type Props = {}

const SelectedLanguages = (props: Props) => {
    const [searchParam, setSearchParam] = useSearchParams()
    const categoryQuery = searchParam.get('category') || 'All'

    const comparisonState = useAppSelector(
        (state) => state.optionsSelected.comparison
    )
    const languageSate = useAppSelector(
        (state) => state.optionsSelected.language
    )
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!comparisonState) {
            dispatch(loading(true))
            dispatch(fetchPopularRepos(languageSate))
        }
    }, [dispatch, comparisonState, languageSate])

    const onSelectLanguage = (language: string) => {
        languageSate === language
            ? dispatch(comparison(true))
            : dispatch(comparison(false))
        dispatch(languageChoice(categoryQuery))
        setSearchParam(`?category=${language}`)
    }

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
