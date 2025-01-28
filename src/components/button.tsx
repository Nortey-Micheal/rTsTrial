import { useState } from "react"

export function Button() {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const handleLogIn = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    return (
        <div>
        <button className="bg-amber-950 px-10 py-2 text-lg text-amber-100 font-extrabold rounded ml-36 my-16" onClick={handleLogIn}>Log In</button>
        <p>Status {isLoggedIn ? "Logged In" : "Logged Out"}</p>
        </div>
    )
}