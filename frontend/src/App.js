
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Post from './pages/Post';
import Login from "./pages/Login"
import {Routes,Route,Navigate} from "react-router-dom"
import {useContext, useEffect,useState} from 'react';
import {AuthContext} from "./contexts/Auth"


function App() {
  const {user,handleAuth}=useContext(AuthContext)

 
  const f=(value)=>{
   return handleAuth(value)
  }

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          f(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  // console.log(user)
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={user?<Navigate to="/" />:<Login />}/>
        <Route path='/post/:id' element={user?<Post />:<Navigate to="/login" />}/>
       

      </Routes>
    </div>
  );
}

export default App;
