import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Tab({ch}) {
    const [choose , setChoose] = useState('login');
    // const handleChoose = ()=>{

    // }
    useEffect(()=>{
        ch(choose)
    },[choose])
  return (
    <Nav fill variant="tabs" defaultActiveKey="link-1">
      <Nav.Item>
        <Nav.Link href="#" eventKey="link-1" onClick={() => setChoose('login')}>Sign In</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" eventKey="link-2" onClick={() => setChoose('signup')}>Sign Up</Nav.Link>
      </Nav.Item>

    </Nav>
  );
}
