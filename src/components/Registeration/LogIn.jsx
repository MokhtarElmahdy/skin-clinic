import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LogIn() {
    const handleForm = (e) => {
        e.preventDefault()
        // console.log(e.name);
        // console.log(fName,lName,email,password,cPassword,status,age);
        const data = new FormData(e.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password')
        });
    }
  return (
    <Form id="link-1" onSubmit={handleForm}>
      <Form.Group className="mb-3" controlId="l_email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="l_password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className="d-grid gap-2">
      <Button variant="primary" type="submit" size='lg'>
        Submit
      </Button>
      </div>

    </Form>
  );
}
