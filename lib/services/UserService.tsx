import {authHeader, contentHeader} from '../AuthHelper'

export const userService = {
    signin,
    signout,
    signup
}

function signin(user: {username: string; password: string})
{
    const requestOptions = {
        method: 'POST',
        headers: contentHeader(),
        body: JSON.stringify(user)
    }
}