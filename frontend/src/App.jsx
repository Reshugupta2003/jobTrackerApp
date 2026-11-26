import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import {Header, Footer} from './components/index'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authSlice.js'
import AuthService from '../Backend_Connection/auth'

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // we not write async on useEffect directly, so we create a function inside useEffect to handle async operation and we also called it inside useEffect.
  useEffect(() => {
    const checkUser = async () => {
    try{
      const userData = await AuthService.getUserData();
      if(userData){
        dispatch(login({userData}))
      }
      else{
        navigate('/pre-login');
        dispatch(logout());
        console.error('No user data found');
      }
    }
    catch(err){
      navigate('/pre-login');
      dispatch(logout());
      console.error('Error checking user:', err);
    }
  };
 
  checkUser();
}, []);

  return (
    <>
      <Header/>
       <main>
        <Outlet/>
       </main>
      <Footer/>
    </>
  )
}

export default App
