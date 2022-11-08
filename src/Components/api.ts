import axios from "axios"

export type repositoriesProps = {
  owner: { avatar_url: string; login: string }
  stargazers_count: number
  id: number
  html_url:string 
  name:string
}

const id = 'YOUR_CLIENT_ID';
const sec = 'YOUR_SECRET_ID';
const params = '?client_id=' + id + '?client_secret=' + sec;

const handleError = (error:string) => console.error(error);

export const fetchPopularRepos = (language:string) => {
  return axios.get('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=dest&type=Repositories')
  .then(res => res.data.items);
}

const getProfileUser = (username:string) => {
  return axios.get(` https://api.github.com/users/${username}${params}`)
  .then(user => user.data)
  .catch(handleError);
}

const getRepos = (username:string) => {
  return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
  .then(repos => repos.data)
  .catch(handleError);
}

const sumStars = (repos:any[]) => {
  return repos.reduce((acc,repo) => {
    return acc + repo.stargazers_count
  },0)
}

const calculete = (profile:any,repos:[]) => {
  const followers = profile.followers;
  const totalStars = sumStars(repos);
  return followers + totalStars;
}



const getUserData = (userName:string) => {
  return Promise.all([getProfileUser(userName),getRepos(userName)])
  .then(([profile,repos]) => {
    return {
      profile:profile,
      score:calculete(profile,repos)
    }
  })
}

const sortPlayers = (players:any[]) => {
  return players.sort((a,b) => b.score - a.score)
}

export const startBattle = (players:string[]) => {
  return Promise.all(players.map(getUserData))
  .then(sortPlayers)
  .catch(handleError)
}
