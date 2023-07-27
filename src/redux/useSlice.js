import { createSlice} from '@reduxjs/toolkit'  
import { userList } from '../data/User';
const userSlice = createSlice({
    name: 'user',
    initialState:userList,
    reducers: {
      update: (state,action) => {   
            state.push(action.payload) 
      }
    }
  })

  export const { update } = userSlice.actions;
  export default userSlice.reducer;
