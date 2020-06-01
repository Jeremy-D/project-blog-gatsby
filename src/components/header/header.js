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

  //================================
  //declare CSS in JS objects,
  //================================
  const headerTitleStyle = {
    minWidth: '270px'
  }
  
  //not sure why nav items are getting a box-shadow


  const navLinkStyle = {
    boxShadow: 'none'
  };

  return (
    // <Col> tag used as wrapper so that we can use nested rows with bootstrap
    <Col 
      className='text-center'
      style={headerTitleStyle}>

        {/* CSS OVERWRITE FOR ACTIVE NAV LINK  */}
        <style type="text/css">
          {`
          .nav-pills .nav-link.active, 
          .nav-pills .show > .nav-link {
            color: #fff;
            background-color: #6c757d;
          }

          .nav-pills .nav-link.active:hover, 
          .nav-pills .show > .nav-link:hover {
            background-color: #343a40;
          }

          a {
            color: #6c757d;
            text-decoration: none;
            background-color: transparent;
          }

          a:hover {
            color: #343a40;
            text-decoration: underline;
          }

          `}
        </style>

      {/* HEADER TITLE */}
      <Row className='justify-content-center'>
        <Col className='text-center'>
            <h1>{author.name}</h1>
        </Col>
      </Row>

      {/* ICON */}
      <Row className="justify-content-center">
          <Col className='text-center'>
              <Image
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={author.name}
                  className='rounded-circle'
              />
          </Col>
      </Row>

      {/* NAV */}
      <Row className='justify-content-center'>
        <Col >
          <Nav variant="pills" defaultActiveKey="/home" className='justify-content-center'>
            <Nav.Item className=''>
                <Nav.Link style={navLinkStyle}  href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className=''>
                <Nav.Link style={navLinkStyle} href="/projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item className=''>
                <Nav.Link style={navLinkStyle} href="/blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item className=''>
                <Nav.Link style={navLinkStyle} href="/github">Github</Nav.Link>
            </Nav.Item>
            </Nav>
        </Col>
      </Row>
    </Col>
    )

}

export default Header