import {createSlice,} from '@reduxjs/toolkit';

type ProfileProps = {
  loading: boolean
  comparison:boolean
  language:string
}
const initialState:ProfileProps = {
  loading: false,
  comparison: false,
  language:'All'
}

export const optionsSelectedReduser = createSlice({
  name:'load',
  initialState,
  reducers:{ 
    loading: (state,action) => {state.loading = action.payload},
    comparison:(state,action) => {state.comparison = action.payload},
    languageChoice:(state,action) => {state.language = action.payload}
},
 
})

export const { loading,comparison,languageChoice } = optionsSelectedReduser.actions
export default optionsSelectedReduser.reducer
