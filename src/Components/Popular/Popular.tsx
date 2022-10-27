import { fetchPopularRepos, repositoriesProps } from 'Components/api'
import React, { useState, useEffect } from 'react'
import RepoGrid from './RepoGrid'
import SelectedLanguages from './SelectedLanguages'
import './Popular.scss'

type Props = {}

const Popular = (props: Props) => {
    const [languageSate, setLanguageSate] = useState<string>('All')
    const [loading, setLoading] = useState<boolean>(false)
    const [repositories, setRepositories] = useState<repositoriesProps[]>([])

    useEffect(() => {
        fetchPopularRepos(languageSate).then((repos) => {
            setLoading(true)
            setRepositories(repos)
        })
    }, [languageSate])

    const onSelectLanguage = (language: string) => {
        setLanguageSate(language)
        // fetchPopularRepos(language).then((repos) => {
        //     setRepositories(repos)
        // })
    }

    return (
        <>
            <SelectedLanguages
                languageSate={languageSate}
                onSelectLanguage={onSelectLanguage}
            />
            <RepoGrid repositories={repositories} loading={loading} />
        </>
    )
}

export default Popular
