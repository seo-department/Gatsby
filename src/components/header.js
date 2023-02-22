import { Link } from "gatsby"
import * as React from "react"
import Nav from '../components/nav'

import { StaticImage } from "gatsby-plugin-image"


const Header = () => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
  <Link to="/">
    <StaticImage src="../images/spinsforsale-logo1.png" fluid alt="Spins for sale Logo" title="Spins for sale Logo" />
    
  </Link>
 
   
   <Nav />



  </header>
)

export default Header
