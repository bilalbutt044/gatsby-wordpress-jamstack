import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`
const Header = () => {
  const data = useStaticQuery(getData)
  console.log(data)
  return (
    <React.Fragment>
      <Link to="/">HomePage</Link>
      <Link to="/aboutus">About US</Link>
    </React.Fragment>
  )
}

export default Header
