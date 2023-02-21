import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
  return (
    <>
     <div>Home Section</div>
     <button onClick={()=> navigate('nextPage' , {replace : true})}>Next Page</button>
    </>
  )
}
