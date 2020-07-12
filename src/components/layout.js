import React from "react"
// import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

import Header from '../components/header/header'
// import Title from '../components/header/title'
import ColorBars from '../components/header/colorBars'

const mainStyles = {
  display: 'flex', 
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignContent: 'space-around',
  // backgroundColor: `purple`
  }

const bodyContainerStyles = {
  marginLeft: `auto`,
  marginRight: `auto`,
  maxWidth: `60rem`,
  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
}


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <>
        <Header />
        <ColorBars/>
      </>
    )
  } else {
    header = (
      <>
        <Header />
        <ColorBars/>
      </>
    )
  }
  return (
    <div style={bodyContainerStyles}>
      <div>{header}</div>
      <main 
        style={mainStyles}
        >{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
