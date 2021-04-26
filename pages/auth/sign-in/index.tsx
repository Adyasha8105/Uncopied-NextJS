import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useFormFields } from '../../../lib/hooks/formHook';
import LoaderButton from '../../../components/LoaderButton';
import {signin, checkUsernameExists} from '../../../services/api/auth'
import {Error} from '../../../components/Layout'
import { AuthContext } from "../../../lib/context/authContext";

const Signin : React.FC = () =>
{
    const [fields, handleFieldChange] = useFormFields({
        username:"",
        password:""
    })
    const [isLoginAllowed, setisLoginAllowed] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const authContext = useContext(AuthContext)
    const router = useRouter()

    const onUsernameFocus = () => {
        setError('')
    }
    const checkUsernameAvailability = () =>
    {
        setError('')
        const recentUsername = fields.username
        checkUsernameExists(recentUsername)
        .then(res => {
            let isUsernameExist = res.data.available;
            
            setisLoginAllowed(isUsernameExist); //Blocking the login button for username which already exist
            if(isUsernameExist && recentUsername!=='')
            {
                setError('Username already exsist!')
            }
        })
    }

    const handleLogin = (event) =>
    {
        if(event)
        {
            event.preventDefault();
        }
        setIsLoading(true)
		const data =  {
			"username": fields.username,
			"password": fields.password 
        }

        // signin(data).then( res => 
        //     {
                // const { access_token, refresh_token } = res.data //need to check
                const [ access_token, refresh_token ] = ['1234','1234'] 

                authContext.isLoggedIn = true
                authContext.token= {
                    "access_token": access_token,
                    "refresh_token": refresh_token
                }
                authContext.login(access_token, new Date(new Date().getTime() + 1000*60*60)) //set 1 hour for expiry after first login in
                
                router.push('/')
            // }).catch(err => {
            //     setIsLoading(false)
            //     console.log(err)
            // })
    }
    return (
        <div className="form-container-outer spacing">
        <div className="form-container-inner">
          <div>
            <div className="embossing">
              <Image src="/embossing.svg" width={60} height={60} className="img-fluid" alt="embossing"/>
            </div>
            <h2 align="center">LOG IN TO YOUR ACCOUNT</h2>
          </div>
            <Form onSubmit={handleLogin}>
                <Form.Group size="lg" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <br/>
                    <Error>{error}</Error>
                    <Form.Control
                        required
                        autoFocus
                        // onBlur={checkUsernameAvailability}
                        onFocus={onUsernameFocus}
                        type="username"
                        value={fields.username}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        autoComplete='true'
                        value={fields.password}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <LoaderButton
                    block
                    size="lg"
                    type="submit"
                    isLoading={isLoading}
                    disabled={!isLoginAllowed}
                >
                    Login
                </LoaderButton>
            </Form>
            
        </div>
    </div>
    )
}
export default Signin;

