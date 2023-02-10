import * as React from "react"
import { Link } from "gatsby"
import Nav from '../components/nav'


const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
  <a href="/" >
    <img
      alt="Gatsby logo"
      height={20}
      style={{ margin: 0 }}
      src="https://spinsforsale.com/wp-content/uploads/2023/02/spinsforsale-logo1.png"
    />
  </a>

   <Nav />
  </header>
)

export default Header
