import React from "react"
import styled from "styled-components"

const Text = styled.p`
  font-size: 1.2rem;

  a {
    font-weight: Bold;
    text-decoration: none;
  }
`

const Footer = () => {
  return (
    <Text>
      Design and develop by{" "}
      <a
        href="https://github.com/bilalbutt044"
        title="muhammad Bilal"
        target="_blank"
        rel="noreferrer"
      >
        Muhammad Bilal
      </a>
    </Text>
  )
}

export default Footer
