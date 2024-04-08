

import { UserContext } from "./UserContext"
import { useContext } from "react"

export const User = () => {

    const userContext = useContext(UserContext)
    const handleLogin = () => {

        if(userContext){
            userContext.setUser({

                name:"pramodh",
                email:"ramanayakapramodh@gmail.com"
            })

        }
    }
    const handleLogout = () => {

        if(userContext){

            userContext.setUser(null)

        }
    }

    return (

        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Log out</button>
            <div>User name is {userContext?.user?.name}</div>
            <div>User email is {userContext?.user?.email}</div>

        </div>



    )
}