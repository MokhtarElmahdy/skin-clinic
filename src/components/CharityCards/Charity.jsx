import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Card from './Card'

function Charity() {
  return (
        <Row>
          <Card title="Give Today" body="Make a secure donation via credit card or PayPal."/>
          <Card title="Give Monthly" body="Provide meals year-round to hungry families."/>
          <Card title="Fundraise" body="Create a personal fundraising campaign."/>
          <Card title="Volunteer" body="Give your time and serve your community."/>
        </Row>
  )
}

export default Charity