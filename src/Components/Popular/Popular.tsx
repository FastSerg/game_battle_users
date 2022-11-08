import { fetchPopularRepos, repositoriesProps } from 'Components/api'
import React, { useState, useEffect } from 'react'
import RepoGrid from './RepoGrid'
import SelectedLanguages from './SelectedLanguages'
import './Popular.scss'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'Components/redux/hooks'
import { fetchPopularRepos2 } from 'Components/redux/popularReduser'

type Props = {}

const Popular = (props: Props) => {
    const [languageSate, setLanguageSate] = useState<string>('All')
    const [loading, setLoading] = useState<boolean>(false)
    const [searchParam, setSearchParam] = useSearchParams()
    const [comparisonState, setComparisonState] = useState<boolean>(false)
    const categoryQuery = searchParam.get('category') || 'All'

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!comparisonState) {
            setLoading(true)
            dispatch(fetchPopularRepos2(languageSate))
        }
    }, [dispatch, comparisonState, languageSate])

    const onSelectLanguage = (language: string) => {
        languageSate === language
            ? setComparisonState(true)
            : setComparisonState(false)
        setLanguageSate(categoryQuery)
        setSearchParam(`?category=${language}`)
    }

    return (
        <>
            <SelectedLanguages
                onSelectLanguage={onSelectLanguage}
                categoryQuery={categoryQuery}
            />
            <RepoGrid loading={loading} />
        </>
    )
}

export default Popular
