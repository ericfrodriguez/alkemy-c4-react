import { useState } from "react"
import UserContext from "./UserContext.jsx"

function UserProvider({ children }) {

    const [user, setUser] = useState({
        name: 'Usuario',
        image: 'https://www.softzone.es/app/uploads/2018/04/guest.png?x=480&quality=40'
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider