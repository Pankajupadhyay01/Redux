import { createSlice} from '@reduxjs/toolkit'
const userSlice = createSlice({
    name: 'user',
    initialState: {
       name:"John",
       role:"front End Dev",
       type:"Intern"
    },
    reducers: {
      update: (state,action) => {
            state.name = action.payload.name;
            state.role = action.payload.role;
            state.type = action.payload.type;

      }
    }
  })

  export const { update } = userSlice.actions;
  export default userSlice.reducer;
