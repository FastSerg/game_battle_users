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

    useEffect(() => {
        if (!comparisonState) {
            fetchPopularRepos(languageSate).then((repos) => {
                setLoading(true)
                setRepositories(repos)
            })
        }
    }, [languageSate, comparisonState])

    const onSelectLanguage = (language: string) => {
        languageSate === language
            ? setComparisonState(true)
            : setComparisonState(false)
        setLanguageSate(language)
        setSearchParam(language)
    }

    console.log(searchParam)

    return (
        <>
            <SelectedLanguages
                languageSate={languageSate}
                onSelectLanguage={onSelectLanguage}
                searchParam={searchParam}
            />
            <RepoGrid repositories={repositories} loading={loading} />
        </>
    )
}

export default Popular
