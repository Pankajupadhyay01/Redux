import { createSlice } from '@reduxjs/toolkit'
// import { userList } from '../data/User';
const userSlice = createSlice({
  name: 'user',
  initialState: {
    userList: []
  },
  reducers: {
    update: (state, action) => {
      state.userList = [
        ...state.userList, {
          ...action.payload
        }
      ]
    },
    deleteUser: (state, action) => {

      let remaining = state.userList.filter((elem) => elem.name !== action.payload)
      state.userList = remaining
    }
  }
})

export const { update, deleteUser } = userSlice.actions;
export default userSlice.reducer;
