import React from "react";
import {useNavigate} from 'react-router-dom';



export function Login (){

    const navigate = useNavigate();
  const goToAdmPag = () =>{
    navigate("/login")
  }
  const goToListTrip = () =>{
    navigate("/trips/list")
  }
 

    return(

     <p>

          <h1>Home</h1>

         <button onClick={ goToAdmPag }>Login</button>
          <button onClick={goToListTrip}>ListTrips</button>
     </p>
    
    )
}

