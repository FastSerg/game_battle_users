import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

type repositoriesProps = {
  owner: { avatar_url: string; login: string }
  stargazers_count: number
  id: number
  html_url:string 
  name:string
}

const initialState:repositoriesProps[] = []

export const fetchPopularRepos2 = createAsyncThunk(
  'repos/fetchPopularRepos2', 
  async (language:string) => {
    const response = await axios.get('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=dest&type=Repositories')
    return response.data.items
})

const popularReduser = createSlice({
  name:'repos',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder.addCase(fetchPopularRepos2.fulfilled, (state, action) => {
        return (state = action.payload)
    })
},
})

export default popularReduser.reducer