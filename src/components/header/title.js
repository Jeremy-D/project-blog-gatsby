import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col} from 'react-bootstrap'

import ColorBars from './colorBars'


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


  return (
    // <Col> tag used as wrapper so that we can use nested rows with bootstrap
    <Col className='text-center '>
        <h2>{title}</h2>
        <ColorBars></ColorBars>
    </Col>
    )

}

export default Title