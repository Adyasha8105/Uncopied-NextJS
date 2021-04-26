import { createContext } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    token: null,
    login: (token, expTime) => {},
    logout: () => {}
})