import React from 'react'
import './users.css'
import { LoginButton } from './Login'
import { LogoutButton } from './Logout'
import { ProfileUser } from './Profile'
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from 'react-router-dom'

const Users = () => {
  const { isAuthenticated } = useAuth0()
  return (
    <div className="container-info">
      {
        isAuthenticated ? 
        <>
          <ProfileUser />
          <LogoutButton />
        </>
        : 
        <>
        <div className="container-back">
          <div className="container-card">
            <h1>Inicia sesion</h1>
              <h3>Si ustedes se loguea tendra muchos beneficios como por ejemplo:</h3>
              <ul>
                <li>
                  - Podra crear sus rutinas personalizadas.
                </li>
                <li>
                  - Tendra acceso a una dieta adaptada a su gusto.
                </li>
                <li>
                  - Explicaciones de los ejercicios.
                </li>
              </ul>
            <LoginButton />
            <Link className='back-to' to={"/"}><i class="ri-arrow-left-line"></i>Volver</Link>
          </div>
          <div className="back-color">

          </div>
        </div>
        </>
      }
    </div>
  )
}

export default Users