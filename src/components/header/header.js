import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Row, Col, Nav } from 'react-bootstrap'


const Header = () => {
  //GRAPHQL query
    const data = useStaticQuery(graphql`
    query HeaderQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)
  //pull variables off of query
  const { author } = data.site.siteMetadata


  //declare CSS overwrites,
  //not sure why nav items are getting a box-shadow
  const noBoxShadow = {
    boxShadow: 'none'
  };

  return (
    // <Col> tag used as wrapper so that we can use nested rows with bootstrap
    <Col className='text-center'>
      <Row className='justify-content-center'>
      <Col xs={12} sm={12} md={12} className='text-center'>
          <h1>{author.name}</h1>
      </Col>
      </Row>

      <Row className="justify-content-center">
          <Col xs={12} sm={12} md={12} className='text-center'>
              <Image
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={author.name}
                  className='rounded-circle'
              />
          </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col >
          <Nav variant="pills" defaultActiveKey="/home" className='justify-content-center'>
            <Nav.Item>
                <Nav.Link style={noBoxShadow}  href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={noBoxShadow} href="/projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={noBoxShadow} href="/blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={noBoxShadow} href="/github">Github</Nav.Link>
            </Nav.Item>
            </Nav>
        </Col>
      </Row>
    </Col>
    )

}

export default Header