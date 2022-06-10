import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import './users.css'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className="container-all-login">
      <div className="container-btn">
        <button className="login-button" onClick={() => loginWithRedirect()}>Login</button>
      </div>
    </div>
  )  
}
