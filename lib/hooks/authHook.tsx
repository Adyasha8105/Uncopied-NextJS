import { useContext, useState, useCallback, useEffect} from 'react'

import { AuthContext } from '../context/authContext'

let logoutTimer

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null)
    const [expTime, setExpTime] = useState(null)

    const login = useCallback((token, expTime) => {
        console.log(token, expTime);
        const exp = expTime || new Date(new Date().getTime() + 1000*60*60)

        setToken(token)
        setExpTime(exp)

        localStorage.setItem("userData", JSON.stringify({
            "token":token,
            "expTime": expTime
        }))

    }, [])

    const logout = useCallback(() => {
        setToken(null),
        localStorage.removeItem("userData");

    },[])

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("userData"))
        console.log("useEffect 1 called");
        if(storedData && storedData.token && new Date(storedData.expTime) > new Date())
        {
            login(storedData.token, new Date(storedData.expTime))
        }
    }, [login])

    useEffect(() => {
        console.log("useEffect 2 called");
        if(token && expTime)
        {
            const remainingTime = expTime.getTime() - new Date().getTime()
            logoutTimer = setTimeout(logout, remainingTime)
        }
        else {
            clearTimeout(logoutTimer)
        }
    }, [token, logout, expTime])

    return (
        <AuthContext.Provider value={{isLoggedIn: !!token, token: token, login:login, logout:logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
