import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col} from 'react-bootstrap'

import ColorBars from './colorBars'
import ColorBar from './colorBar'


const Title = () => {
    //GRAPHQL query
      const data = useStaticQuery(graphql`
      query TitleQuery {
        site {
          siteMetadata {
            title           
          }
        }
      }
    `)

  //pull variables off of static query
  const { title } = data.site.siteMetadata

  //COLOR GUIDE
    // yellow #FCFF2B	(224,227,0)
    // pink #ff598f	(255,89,143)
    // orange #fd8a5e	(253,138,94)
    // turq #01dddd	(1,221,221)
    // teal #00bfaf	(0,191,175)
  

  let titleStyle = {

  }

  return (
    // <Col> tag used as wrapper so that we can use nested rows with bootstrap
    <Col 
    className='text-center justify-content-center'>
        <Row className='justify-content-center'>
            <h2>{title}</h2>
        </Row>
        <Row>
            <Col className='justify-content-center'>   
                <ColorBars></ColorBars>
            </Col>
        </Row>
    </Col>
    )

}

export default Title