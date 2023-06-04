import React from 'react'
import Banner from '../../components/Carousel/Carousel'
import AboutComp from '../../components/About/AboutComp'
import { Container } from 'react-bootstrap'
import Charity from '../../components/CharityCards/Charity'
const Home = () => {
  return (
    <React.Fragment>
      <Banner/>
      <Container>
        <AboutComp len="500"/>
        <Charity/>
      </Container>
    </React.Fragment>
  )
}

export default Home