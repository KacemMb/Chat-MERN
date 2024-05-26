import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './UserSlice'
import { profileSlice } from './ProfileSlice'
import { userFriendsSlice } from './UserFriendsSlice'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    profile: profileSlice.reducer,
    userFriends: userFriendsSlice.reducer
  },
})