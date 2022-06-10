import React from 'react'
import './users.css'
import { LoginButton } from './Login'
import { LogoutButton } from './Logout'
import { ProfileUser } from './Profile'
import { useAuth0 } from "@auth0/auth0-react"

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
        : <LoginButton />
      }
    </div>
  )
}

export default Users