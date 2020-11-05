import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import MenuItem from "./menu-item"

const getData = graphql`
  query MainMenu {
    wp {
      generalSettings {
        url
        title
      }
    }
    allWpMenuItem {
      nodes {
        url
        id
        title
        path
        label
      }
    }
  }
`
const Header = () => {
  const data = useStaticQuery(getData)
  if (data.allWpMenuItem) {
    const menuItems = data.allWpMenuItem.nodes
    const wordPressUrl = data.wp.generalSettings.url
    const siteTitle = data.wp.generalSettings.title
    return (
      <>
        <h2>{siteTitle}</h2>
        {menuItems &&
          menuItems.length > 0 &&
          menuItems.map(menuItem => (
            <MenuItem
              key={menuItem.id}
              menuItem={menuItem}
              wordPressUrl={wordPressUrl}
            />
          ))}
      </>
    )
  }
  return null
}

export default Header
