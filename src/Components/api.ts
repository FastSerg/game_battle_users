import axios from "axios"

export type repositoriesProps = {
  owner: { avatar_url: string; login: string }
  stargazers_count: number
  id: number
  html_url:string 
  name:string
}

export const fetchPopularRepos = (language:string) => {
  return axios.get('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=dest&type=Repositories')
  .then(res => res.data.items)
}