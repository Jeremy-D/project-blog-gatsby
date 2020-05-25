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
    <div className='text-center'>
      <Row className='justify-content-md-center'>
          <h1>{author.name}</h1>
      </Row>

      <Row className="justify-content-md-center">
          <Col xs={12} sm={4} md={4} className='text-center'>
              <Image
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={author.name}
                  className='rounded-circle'
              />
          </Col>
      </Row>

      <Row className='justify-content-md-center'>
        <Nav variant="pills" defaultActiveKey="/home">
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
      </Row>
    </div>
    )

}

export default Header