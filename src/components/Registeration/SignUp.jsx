import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SignUp() {
    const [fName , setFName] = useState('')
    const [lName , setLName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [cPassword , setCPassword] = useState('')
    const [status , setStatus] = useState('')
    const [age , setAge] = useState('')
    const handleFName = (e) => {
        setFName(e.target.value)
    }
    const handleLName = (e) => {
        setLName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleCPassword = (e) => {
        setCPassword(e.target.value)
    }
    const handleStatus = (e) => {
        setStatus(e.target.value)
    }
    const handleAge = (e) => {
        setAge(e.target.value)
    }
    const handleForm = (e) => {
        e.preventDefault()
        // console.log(e.name);
        // console.log(fName,lName,email,password,cPassword,status,age);
        const data = new FormData(e.currentTarget);
        console.log({
          f_name: data.get('f_name'),
          l_name: data.get('l_name'),
          email: data.get('email'),
          password: data.get('password'),
          cpassword: data.get('cpassword'),
          status: data.get('status'),
          age: data.get('age'),
        });
    }
  return (
    <Form id="link-2" onSubmit={handleForm}>
        <Row>
      <Form.Group as={Col} className="mb-3" controlId="u_f_name">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='f_name' placeholder="First Name" onChange={handleFName} />
      </Form.Group>
      <Form.Group as={Col} className="mb-3" controlId="u_l_name">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='l_name' placeholder="Last Name" onChange={handleLName} />
      </Form.Group>
        </Row>
      <Form.Group className="mb-3" controlId="u_email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleEmail} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="u_password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" onChange={handlePassword} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="u_confirm_password">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name='cpassword' placeholder="Confirm Password" onChange={handleCPassword} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Row>

      <div className="col">
      <Form.Check
            className='mb-3'
            // inline
            value={'patient'}
            onChange={handleStatus}
            label="Patient"
            name="status"
            type='radio'
            id={`inline-radio-1`}
            />
            <Form.Check
            // className='col'
            // inline
            value={'doctor'}
            onChange={handleStatus}
            label="Doctor"
            name="status"
            type='radio'
            id={`inline-radio-2`}
            />
      </div>

        <Form.Group className="mb-3 col-8" controlId="u_age" >
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" name='age' placeholder="Enter Age" onChange={handleAge} />

      </Form.Group>
            </Row>
      <div className="d-grid gap-2">
      <Button variant="primary" type="submit" size='lg'>
        Submit
      </Button>
      </div>
    </Form>
  );
}
