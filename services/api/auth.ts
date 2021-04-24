import axios, { AxiosResponse } from 'axios'

import { SIGNIN_URL, SIGNUP_URL, CHECK_USERNAME_URL } from '../../datatype/url'
import { signinData, signupData } from '../../datatype/type'
import { HEADERS } from '../../datatype/constant'


const signup = (payload: signupData) : Promise<AxiosResponse> => 
{
    return axios.post(SIGNUP_URL, payload, HEADERS)
}

const signin = (payload: signinData) : Promise<AxiosResponse> =>
{
    return axios.post(SIGNIN_URL, payload, HEADERS)
}

const checkUsernameExists = (username: string) : Promise<AxiosResponse> => {
    return axios.post(CHECK_USERNAME_URL, username, HEADERS)
}

export {
    signup,
    signin,
    checkUsernameExists
}