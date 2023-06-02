import styles from './contact.module.css'

import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  const handleForm = (e) => {
    e.preventDefault()
    // console.log(e.name);
    // console.log(fName,lName,email,password,cPassword,status,age);
    const data = new FormData(e.currentTarget);
    console.log({
      f_name: data.get('f_name'),
      l_name: data.get('l_name'),
      // email: data.get('email'),
      // password: data.get('password'),
      // cpassword: data.get('cpassword'),
      // status: data.get('status'),
      // age: data.get('age'),
    });
}
  return (
    <Container>
    <div className={styles.contact}>
        <div className={styles.form}>
        <Form id="link-2" onSubmit={handleForm}>
          <Row>
            <h3 className='text-secondary text-center mb-5'>Contact us</h3>
          </Row>
        <Row>
      <Form.Group as={Col} className="mb-3" controlId="u_f_name">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='f_name' placeholder="First Name" />
      </Form.Group>
      <Form.Group as={Col} className="mb-3" controlId="u_l_name">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='l_name' placeholder="Last Name" />
      </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="u_email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter Message" />
      </Form.Group>
        <div className="d-grid gap-2">
      <Button variant="primary" type="submit" size='lg'>
        Submit
      </Button>
      </div>
        </Form>
        </div>
    </div>
    
    
</Container>
  )
}

export default Contact