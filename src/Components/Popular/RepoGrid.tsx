import { useAppSelector } from 'Components/redux/hooks'
import React from 'react'
import Preloader from './Preloader'

type Props = {}
const RepoGrid = (props: Props) => {
    const repos = useAppSelector((state) => state.popularReposState)
    const loading = useAppSelector((state) => state.optionsSelected.loading)
    return (
        <>
            <ul className="popular-list">
                {loading ? (
                    repos.map((repo, i) => {
                        return (
                            <li key={repo.id} className="popular-item">
                                <div className="popular-rank">#{i + 1}</div>
                                <ul className="space-list-items">
                                    <li>
                                        <img
                                            src={repo.owner.avatar_url}
                                            alt="avatar"
                                            className="avatar"
                                        />
                                    </li>
                                    <li>
                                        <a href={repo.html_url}>{repo.name}</a>
                                    </li>
                                    <li>@{repo.owner.login}</li>
                                    <li>{repo.stargazers_count}</li>
                                </ul>
                            </li>
                        )
                    })
                ) : (
                    <Preloader />
                )}
            </ul>
        </>
    )
}

export default RepoGrid
