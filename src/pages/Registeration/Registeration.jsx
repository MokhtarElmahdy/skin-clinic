import { Container } from 'react-bootstrap'
import Tab from '../../components/Registeration/Tabs'
import LogIn from '../../components/Registeration/LogIn'
import SignUp from '../../components/Registeration/SignUp'
import styles from './Registeration.module.css'
import { useState } from 'react'
import FormComp from '../../components/Registeration/FormComp'
function Registeration() {
    const [choose , setChoose] = useState('login');
    const handleChoose = (vl)=>{
        setChoose(vl)
    }
  return (
    <Container>
        <div className={styles.registeration}>
            <div className={styles.form}>
                <FormComp/>
            </div>
        </div>
    </Container>
  )
}

export default Registeration