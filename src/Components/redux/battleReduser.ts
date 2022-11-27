import { createSlice } from "@reduxjs/toolkit";

type usersInfo = {
  playerOne:string,
  playerTwo:string,
  playerOneImg:string,
  playerTwoImg:string, 
  [id:string]:string
}

const initialState:usersInfo = {
  playerOne:'',
  playerTwo:'',
  playerOneImg:'',
  playerTwoImg:'', 
}

export const battleReduser = createSlice({
  name:'battle',
  initialState,
  reducers: {
      addUser:(state,action) => ({
        ...state,
         [action.payload.id] : action.payload.value || ''
      }),
      addPlayerOne:(state,action) => {
        state.playerOne = action.payload 
      },
      addPlayerTwo:(state,action) => {
        state.playerTwo = action.payload 
      },
      addPlayerOneImg: (state,action) => {
        state.playerOneImg = action.payload
      },
      addPlayerTwoImg:(state,action) => {
        state.playerTwoImg = action.payload
      },
      resetUsers:(state) => {
        state.playerOne = ''
        state.playerTwo = ''
        state.playerOneImg = ''
        state.playerTwoImg = ''
      }
    
  }
})

export const {addUser,addPlayerOne,addPlayerTwo,addPlayerOneImg,addPlayerTwoImg,resetUsers} = battleReduser.actions
export default battleReduser.reducer