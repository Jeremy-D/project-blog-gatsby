import React from "react"
import { Container, Row, Col } from 'react-bootstrap'

const Nav = () => {
    return(
                <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                        <Nav.Link href="https://github.com/Jeremy-D">Github</Nav.Link>
                    </Nav.Item>
                </Nav>
    )
}

export default Nav