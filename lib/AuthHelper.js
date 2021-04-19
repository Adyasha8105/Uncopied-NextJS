// import { useContext, createContext, useState } from "react";

// import { userInfo } from "node:os";

// const authContext = createContext(null);

// export function AuthProvider({ children }) 
// {
//     const auth = useProviderAuth();
//     return <authContext.Provider value={auth}>{children}</authContext.Provider>
// }
// export const useAuth = () =>
// {
//     return useContext(authContext);
// }

// function useProviderAuth()
// {

// }

export function authHeader()
{
    let token = JSON.parse(localStorage.getItem('jwtoken'));
    if(token)
        return {'Authorization': 'Bearer '+ token };
    else {
        return {};
    }
}

export function contentHeader()
{
    return {
        "Content-Type": "application/json"
    }
}