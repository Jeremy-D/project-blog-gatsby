// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

import Header from '../components/header/header'
// import LandingColorbars
// import HeaderBio
// import Nav
console.log(location)

let path = location.pathname

function HomePage(){
    return (
        <Container className='text-center'>
            <Header></Header>
            {/* title component */}
            {/* subtitle component w/ nonsense generator */}
            {/* color bars */}
        </Container>
      )
  }

export default HomePage