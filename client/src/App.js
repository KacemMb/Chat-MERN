import { useEffect, useState } from "react";
import Messages from "./Components/Messages";
import Navigation from "./Components/Navigation";
import Profile from "./Pages/Profile";
import './Styles/App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { Toaster } from 'react-hot-toast';
import { store } from "./Redux/Store";
import { Provider } from 'react-redux';

function App() {
  
  const token = localStorage.getItem('tokenmessanger');

  return (
    <div className="App">
      <Provider store={store}>
      {token && <Navigation />}
      <Routes>
        <Route path='/' element={token ? <Profile /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={token ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={token ? <Navigate to='/' /> : <Signup />} />
        <Route path='/profile' element={token ? <Profile/> : <Navigate to={'/'} />}/>
        <Route path='/messages/:id' element={token ? <Messages /> : <Navigate to={'/login'} />}/>
      </Routes>
      <Toaster/>
      </Provider>
    </div>
  );
}

export default App;
