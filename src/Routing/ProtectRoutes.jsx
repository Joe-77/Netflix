import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { Outlet , Navigate } from 'react-router-dom'

const ProtectRoutes = () => {

  const {isAuth} = useContext(Context)

  return  isAuth ? <Outlet/> : <Navigate to={'/login'}/>
}

export default ProtectRoutes