import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pic : '',
    friends : [],
    bio : '',
    id : ''
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.pic = action.payload.profilePhoto
            state.friends = action.payload.friends
            state.bio = action.payload.bio
            state.id = action.payload._id
        },
        getProfile: (state) => {
            return state
        }
    }
})

export const { setProfile, getProfile } = profileSlice.actions

export default profileSlice.reducer