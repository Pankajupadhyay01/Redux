import { createSlice} from '@reduxjs/toolkit'
const userSlice = createSlice({
    name: 'user',
    initialState: {
       user:{ 
        name:[],
        role:[],
        type:[]}
    },
    reducers: {
      update: (state,action) => {  
            state.user.name.push(action.payload.name)   
            state.user.role.push(action.payload.role)   
            state.user.type.push(action.payload.type)    
      }
    }
  })

  export const { update } = userSlice.actions;
  export default userSlice.reducer;
