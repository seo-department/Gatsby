import { Link } from "gatsby"
import * as React from "react"
import Nav from '../components/nav'
import LogoImage from '../images/spinsforsale-logo1.png'
import { Image } from "react-bootstrap"


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
    <Image src={ LogoImage } fluid alt="Spins for sale Logo" title="Spins for sale Logo" />
    
  </Link>
 
   
   <Nav />



  </header>
)

export default Header
