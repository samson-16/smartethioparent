import { Navigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";
import api from '../api'

import { REFRESH_TOKEN , ACCESS_TOKEN } from '../constants'
import { useState , useEffect } from "react";

function ProtectedRoute({ children }){
    const [isAuthorized , SetIsAuthorized] = useState(null)

    useEffect(() => {
        auth().catch(() => SetIsAuthorized(false))
    }, [])
    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try {
            const res = await api.post("api/token/refresh/" , {refresh: refreshToken}) 
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
            }
            else {
                SetIsAuthorized(false)
            }

        }catch (error) {
            console.log(error)
            SetIsAuthorized(false)
        }
    }
    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if(!token) {
            SetIsAuthorized(false)
            return 
        }
        const decoded = jwtDecode(token)
        const tokenExpiration = decoded.exp
        const now = Date.now() / 1000

        if (tokenExpiration < now) {
            await refreshToken()
        }else {
            SetIsAuthorized(true)
        }
    }
    if (isAuthorized === null) {
        return <div>Loading...</div>
    }
    return isAuthorized ? children : <Navigate to= "/login" />
}

export default ProtectedRoute