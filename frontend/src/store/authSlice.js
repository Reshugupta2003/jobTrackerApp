import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null
}

const authSlice = createSlice({
    name : "auth",
    initialState : initialState,
    reducers:{

        login : (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },

        logout: (state) => {
           state.status = false;
           state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;

/*
 step 1: dispatch(login({
    userData: {
        name: "Reshu",
        email: "reshu@gmail.com"
    }
}));

step 2: Redux Toolkit internally calls your reducer approximately like this: login(currentState, action);
 
step 3: dispatch create action object like :

    action : {
      type: "auth/login", (name of slice - auth, reducer - login)
      payload: {
        userData: {
            name: "Reshu",
            email: "reshu@gmail.com"
        }
    }
}
 to access this userData we use - "action.payload.userData"


 */