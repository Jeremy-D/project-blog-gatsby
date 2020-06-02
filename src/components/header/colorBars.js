import React from 'react'
import { Row, Col} from 'react-bootstrap'

import ColorBar from './colorBar'

//COLOR GUIDE
// yellow #FCFF2B	(224,227,0)
// pink #ff598f	(255,89,143)
// orange #fd8a5e	(253,138,94)
// turq #01dddd	(1,221,221)
// teal #00bfaf	(0,191,175)



const colorBarStyle = {
    margin: '15px'
  }

const ColorBars = props => {
    return (
        <Row className='justify-content-center' style={colorBarStyle}>
            <Col className='justify-content-center'>
                <Row>
                    <Col xs={3}></Col>
                    <Col> 
                        <ColorBar backgroundColor='#FCFF2B'></ColorBar>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col> 
                        <ColorBar backgroundColor='#ff598f'></ColorBar>
                    </Col>
                    <Col xs={3}></Col>
                </Row>
                <Row>
                    <Col xs={3}></Col>
                    <Col> 
                        <ColorBar backgroundColor='#fd8a5e'></ColorBar>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col> 
                        <ColorBar backgroundColor='#01dddd'></ColorBar>
                    </Col>
                    <Col xs={3}></Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ColorBars