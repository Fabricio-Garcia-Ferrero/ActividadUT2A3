import React from "react";
import { useSelector } from 'react-redux'
import { useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";

function Home() {
    const userData = useSelector(state => state.login)
    const navigate = useNavigate()
    const isLoggedin = userData.isAutenticated

    useEffect(() => {
        if(!isLoggedin){
            navigate('/')
        }
        }, [isLoggedin,navigate])
    
    const handleOnClick = (e) =>{
        navigate('/')
    }    

    console.log(userData)
    return<>
        <box 
        >
            <h1>Página home de Fabricio García Ferrero</h1>
            <h2>Nombre: {userData.userName} Rol: {userData.userRol}</h2>
            <button
                onClick={handleOnClick}
            >
                Volver
            </button>
        </box>
    </>
  }
  
  export default Home;