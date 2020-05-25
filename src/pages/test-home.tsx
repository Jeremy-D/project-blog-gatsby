// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

// import LandingTitle
// import LandingColorbars
// import HeaderBio
// import Nav
console.log(location)

let path = location.pathname

function Hello(){
    return (
      <div>
        <p>{path}</p>
        <h1>Hello</h1>
      </div>
      )
  }

export default Hello