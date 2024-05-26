import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddFriend = () => {
  const userId = localStorage.getItem('userId');
  const [friend, setFriend] = useState('');

  const handleChange = (e) => {
    setFriend(e.target.value);
  };
  // patch method for add friend 
  const addFriend = async () => {
    try {
      const res = await axios.patch(`http://localhost:4060/api/profile/addfriend/${friend}`, {friendId : userId});
      if (res.status === 200) {
        toast.success("Friend added successfully");
      }
    } catch (error) {
      console.log("Error in addFriend: ", error);
      toast.error("Something went wrong while adding friend");
    }
  };

  const handleClick = () => {
    addFriend();
  };

  return (
    <div className='Search'>
      <input
        type="text"
        name='addFriend'
        placeholder='Put Friend Id'
        onChange={handleChange}
        value={friend}
      />
      <button onClick={handleClick}>
        <img src="./images/addFriend.png" alt="Add Friend" />
      </button>
    </div>
  );
};

export default AddFriend;
