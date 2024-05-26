import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    friends: []
}

export const userFriendsSlice = createSlice({
    name: 'userFriends',
    initialState,
    reducers: {
        setFriends: (state, action) => {
            state.friends.push(action.payload)
        }
    }
})

export const { setFriends } = userFriendsSlice.actions

export default userFriendsSlice.reducer