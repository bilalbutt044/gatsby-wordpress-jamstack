import React from "react"

import { Link as GatsbyLink } from "gatsby"

const UniversalLink = ({
  children,
  to,
  activeClassName,
  partialllyClassName,
  ...other
}) => {
  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partialllyClassName={partialllyClassName}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={to} {...other}>
      {" "}
      {children}
    </a>
  )
}

export default UniversalLink
