import React from 'react'
import styles from './Card.module.css'
import { Col } from 'react-bootstrap'
function Card({title,body}) {
  return (
    <Col>
    <div className={styles.card}>
      <p className='fs-4'>{title}</p>
      <p className='text-secondary'>{body}</p>
    </div>
    </Col>
  )
}

export default Card