import {useState} from "react";
import Form from "react-bootstrap/Form";
import Link from 'next/link';
import Image from 'next/image';
import { useFormFields } from '../lib/helpers';
import LoaderButton from '../components/LoaderButton';
import axios from "axios";

function Signup()
{
    const [fields, handleFieldChange] = useFormFields({
        display_name: "",
        email:"",
        language:"",
        password:"",
        phone:"",
        role:"",
        username:""
    })
    const [isLoading, setIsLoading] = useState(false);


    function handleSignup(e)
    {
        e.preventDefault();
        setIsLoading(true)
        const url = process.env.NEXT_APP_UNCOPIED_API + "api/v1.0/auth/register";
        const data = JSON.stringify({
            display_name: fields.display_name,
            email:fields.email,
            language: fields.language,
            password: fields.password,
            phone: fields.phone,
            role: fields.role,
            username: fields.username
        });
        const headers = {
            headers: {"Content-Type": "application/json"}
        }

        //sending request
        axios.post(url, data, headers )
            .then(res => {
                console.log("Hi");
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div className="form-container-outer spacing">
          <div className="form-container-inner">
            <div>
              <div className="embossing">
                <Image src="/embossing.svg" width={60} height={60} className="img-fluid" alt="embossing"/>
              </div>
              <h2 align="center">CREATE YOUR ACCOUNT</h2>
            </div>
            <Form onSubmit={handleSignup}>
              <Form.Group controlId="username" size="lg">
                <Form.Label>Username</Form.Label>
                <Form.Control
                autoFocus
                type="text"
                value={fields.username}
                onChange={handleFieldChange}
                />
              </Form.Group>
              <Form.Group controlId="displayName" size="lg">
                <Form.Label>Display Name</Form.Label>
                <Form.Control
                autoFocus
                type="text"
                value={fields.display_name}
                onChange={handleFieldChange}
                />
              </Form.Group>
              <Form.Group controlId="email" size="lg">
                <Form.Label>Email</Form.Label>
                <Form.Control
                autoFocus
                type="email"
                value={fields.email}
                onChange={handleFieldChange}
                />
              </Form.Group>
              <Form.Group controlId="password" size="lg">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={fields.password}
                  onChange={handleFieldChange}
                />
              </Form.Group>
              <Form.Group controlId="password" size="lg">
                <Form.Label>Language</Form.Label>
                <Form.Control as="select" onChange={handleFieldChange} value={fields.language} >
                  <option value="en">English</option>
                  <option value="fr">French</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="password" size="lg">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                autoFocus
                type="number"
                value={fields.phone}
                onChange={handleFieldChange}
                />
              </Form.Group>
              <Form.Group controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" onChange={handleFieldChange} value={fields.role} >
                  <option value="artist">Artist</option>
                  <option value="collector">Collector</option>
                  <option value="museum">Museum</option>
                  <option value="other">Other</option>
                </Form.Control>
              </Form.Group>
            By registering, you agree to our <a href="/" target="top">Terms and Conditions</a>.
            <LoaderButton
                block
                size="lg"
                type="submit"
                variant="success my-3"
                isLoading={isLoading}
            >
                Create account
            </LoaderButton>
            </Form>
            <p align="center">
              <Link href="/login">
                I already have an account
              </Link>
            </p>
          </div>
        </div>)
}

export default Signup;