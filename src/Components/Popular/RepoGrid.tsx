import { repositoriesProps } from 'Components/api'
import React from 'react'

type Props = {
    repositories: repositoriesProps[]
    loading: boolean
}
const RepoGrid = ({ repositories, loading }: Props) => {
    return (
        <>
            <ul className="popular-list">
                {loading ? (
                    repositories.map((repo, i) => {
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
                    <li className="box-circle">
                        <img src={'/Img/loader.svg'} alt="" width={'50px'} />
                        ...Loading
                    </li>
                )}
            </ul>
        </>
    )
}

export default RepoGrid
