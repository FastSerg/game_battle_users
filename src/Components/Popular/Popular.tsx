import { fetchPopularRepos, repositoriesProps } from 'Components/api'
import React, { useState, useEffect } from 'react'
import RepoGrid from './RepoGrid'
import SelectedLanguages from './SelectedLanguages'
import './Popular.scss'
import { useSearchParams } from 'react-router-dom'

type Props = {}

const Popular = (props: Props) => {
    const [languageSate, setLanguageSate] = useState<string>('All')
    const [loading, setLoading] = useState<boolean>(false)
    const [repositories, setRepositories] = useState<repositoriesProps[]>([])
    const [searchParam, setSearchParam] = useSearchParams()
    const [comparisonState, setComparisonState] = useState<boolean>(false)
    const categoryQuery = searchParam.get('category') || 'All'

    useEffect(() => {
        if (!comparisonState) {
            fetchPopularRepos(categoryQuery).then((repos) => {
                setLoading(true)
                setRepositories(repos)
            })
        }
    }, [comparisonState, categoryQuery])

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
            <RepoGrid repositories={repositories} loading={loading} />
        </>
    )
}

export default Popular
