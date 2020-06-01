// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

import Header from '../components/header/header'
import Title from '../components/header/title'
// import LandingColorbars
// import HeaderBio
// import Nav
console.log(location)

let path = location.pathname



function HomePage(){
    let containerStyle = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    }

    return (
        <Container 
            className='text-center align-items-center'
            style={containerStyle}
            >
            {/* 
            IMPORTANT: Nested rows must be inside of columns
            all components inside of a <Row> tag are wrapped 
            in a <Col> tag
            */}
            <Row>
                <Header></Header> 
            </Row>

            <Row className='align-middle'>
                <Title></Title>
            </Row>

            {/* SPACING DIVS TO WORK WITH FLEXBOX */}
            <div></div>
            <div></div>
            
        </Container>
      )
  }

export default HomePage