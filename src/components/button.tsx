import { useState } from "react"

export function Button() {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const handleLogIn = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    return (
        <div>
        <button className="bg-amber-950" onClick={handleLogIn}>Log In</button>
        <p>Status {isLoggedIn ? "Logged In" : "Logged Out"}</p>
        </div>
    )
}