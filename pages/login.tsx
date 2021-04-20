import { useState } from "react";
import Form from "react-bootstrap/Form";
import Image from 'next/image';
// import Link from 'next/link'
import { useFormFields } from '../lib/helpers';
import { notifySuccess, notifyError } from '../components/Notification';
import LoaderButton from '../components/LoaderButton';
import axios from "axios";

function Login()
{
    const [fields, handleFieldChange] = useFormFields({
        username:"",
        password:""
    })
    const [isLoading, setIsLoading] = useState(false);

    function handleLogin()
    {
        setIsLoading(true);
        const url = process.env.NEXT_APP_UNCOPIED_API + "api/v1.0/auth/login";
		const headers = {
			headers: {
                "Content-Type": "application/json"
            }
		}
		const data =  JSON.stringify({
			"username": fields.username,
			"password": fields.password 
		})
		axios.post(url, data, headers).
            then((res) => {
                notifySuccess("Login Successfull");
                console.log(res)
                setIsLoading(false)
		    })
            .catch((err) => 
            {
                notifyError("Logged in failed");
                setIsLoading(false)
                console.error(err)
		    })
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
                    <Form.Control
                        required
                        autoFocus
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
                        value={fields.password}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <LoaderButton
                    block
                    size="lg"
                    type="submit"
                    isLoading={isLoading}
                >
                    Login
                </LoaderButton>
            </Form>
        </div>
    </div>
    )
}
export default Login;