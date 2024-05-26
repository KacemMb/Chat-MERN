import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstname : '',
    lastname : '',
    email : '',
    id : '',
    gender : ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
            state.email = action.payload.email
            state.id = action.payload._id
            state.gender = action.payload.gender
        },
        getUser: (state) => {
            return state
        }
    }
})

export const { setUser, getUser } = userSlice.actions
export default userSlice.reducer