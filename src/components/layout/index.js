import React from "react"
import Header from "../header"
import { S } from "./layout.style"
import "@wordpress/block-library/build-style/style.css"
import Footer from "../footer"
const Layout = ({ children }) => {
  return (
    <S.Container>
      <Header />
      {children}
      <Footer />
    </S.Container>
  )
}

export default Layout
