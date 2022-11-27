import {createSlice} from '@reduxjs/toolkit';

type ProfileProps = {
  winner:{profile: {
      login: string
      avatar_url: string
      location: string
      name: string
      company: string
      public_repos: string
      following: number
      followers: number
      blog: string
  },
  score: number},
  loser:{profile: {
    login: string
    avatar_url: string
    location: string
    name: string
    company: string
    public_repos: string
    following: number
    followers: number
    blog: string
  },
  score: number},
  error:string,
  loading: boolean
}

const initialState :ProfileProps = {
  winner: { profile: {
    login: '',
    avatar_url: '',
    location: '',
    name: '',
    company: '',
    public_repos: '',
    following: 0,
    followers: 0,
    blog: 'string',
},
  score: 0,},
  loser: { profile: {
    login: '',
    avatar_url: '',
    location: '',
    name: '',
    company: '',
    public_repos: '',
    following: 0,
    followers: 0,
    blog: 'string',
},
  score: 0,},
  error:'',
  loading:false
}

export const resultReduser = createSlice({
  name:'result',
  initialState,
  reducers:{
    addWinner: (state,action) => {
      state.winner = action.payload
    },

    addLoser: (state,action) => {
      state.loser = action.payload
    },
    catchError: (state,action) => {
      state.error = action.payload
    },
    isLoading:(state,action) => {
      state.loading = action.payload
    }
  }
})

export const {addWinner,addLoser,catchError,isLoading} = resultReduser.actions
export default resultReduser.reducer