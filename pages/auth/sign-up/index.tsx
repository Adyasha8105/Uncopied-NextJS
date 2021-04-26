import {useState} from "react";
import Form from "react-bootstrap/Form";
import Link from 'next/link';
import Image from 'next/image';

import { useFormFields } from '../../../lib/hooks/formHook';
import LoaderButton from '../../../components/LoaderButton';
import {signup} from '../../../services/api/auth'
import { useRouter } from "next/router";
import { notifyError } from "../../../components/Notification";

const Signup: React.FC = () =>
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
    const router = useRouter()

    function handleSignup(event)
    {
        if(event)
        {
            event.preventDefault();
        }
        setIsLoading(true)
        
        const data = {
            display_name: fields.display_name,
            email:fields.email,
            language: fields.language,
            password: fields.password,
            phone: fields.phone,
            role: fields.role,
            username: fields.username
        }

        //sending request
        signup(data)
            .then(res => {
                notifyError("Successfully Signed Up")
                router.push('/auth/sign-in')
            })
            .catch(err => {
                setIsLoading(false);
                console.error(err);
                console.log(err.response);
                console.log(JSON.stringify(err));
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
                required
                />
              </Form.Group>
              <Form.Group controlId="display_name" size="lg">
                <Form.Label>Display Name</Form.Label>
                <Form.Control
                autoFocus
                type="text"
                value={fields.display_name}
                onChange={handleFieldChange}
                required
                />
              </Form.Group>
              <Form.Group controlId="email" size="lg">
                <Form.Label>Email</Form.Label>
                <Form.Control
                autoFocus
                type="email"
                value={fields.email}
                onChange={handleFieldChange}
                required
                />
              </Form.Group>
              <Form.Group controlId="password" size="lg">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  autoComplete='true'
                  value={fields.password}
                  onChange={handleFieldChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="language" size="lg">
                <Form.Label>Language</Form.Label>
                <Form.Control as="select" onChange={handleFieldChange} value={fields.language} required>
                  <option value="EN" defaultValue>English</option>
                  <option value="FR">French</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="phone" size="lg">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                autoFocus
                type="tel"
                value={fields.phone}
                onChange={handleFieldChange}
                />
              </Form.Group>
              <Form.Group controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" onChange={handleFieldChange} value={fields.role} required>
                  <option value="artist" defaultValue>Artist</option>
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