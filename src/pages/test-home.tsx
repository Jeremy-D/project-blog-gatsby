// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

// import LandingTitle
// import LandingColorbars
// import HeaderBio
// import Nav
console.log(location)

let path = location.pathname

function Hello(){
    return (
        <Container>
          <h1 className='text-center'>Jeremy DeCarvalho</h1>
        </Container>
      )
  }

export default Hello