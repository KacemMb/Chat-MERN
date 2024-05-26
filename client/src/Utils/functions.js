import axios from 'axios';

export const addFriendToState = (friend) => {

    try {
        const res = axios.get(`http://localhost:4060/api/profile/friend`, { id: friend });
        console.log(res.data);
    } catch (error) {
        console.log("error in addFriendToState: ", error);
    }
}