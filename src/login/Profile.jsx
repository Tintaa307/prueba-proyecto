import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import './users.css'

export const ProfileUser = () => {
    const { user, isAuthenticated, isLoading } = useAuth0()

    if(isLoading) {
        return(
            <div className="container-profile">
                <h1>Loading<span className="loader"></span></h1>
            </div>
        )
    }

    return(
        isAuthenticated && (
            <div className="container-info-mail">
                <img className="img-mail" src={user.picture} alt={user.name} />
                <h2 className="name">Nombre: {user.name}</h2>
                <p className="email">
                    Email: {user.email}
                </p>
                <textarea 
                    name="textarea" 
                    placeholder="Descripcion..." 
                    className="textarea" 
                    cols="36" 
                    rows="10"
                >

                </textarea>
            </div>
        )
    )
}