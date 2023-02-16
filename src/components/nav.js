import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { useState } from "react"

const MenuIcon = styled.button`
position: fixed;
top: 2rem;
right: 2rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 1.5rem;
height: 1.5rem;
background: transparent;
border: none;
cursor: pointer;
z-index: 5;

div {
  width: 1.5rem;
  height: 0.2rem;
  background: #fff;
  border-radius: 5px;
  transform-origin: 1px;
  position: relative;

  :first-child {
    transform: ${({nav}) => nav ? 'rotate(45deg)' : 'rotate(0)' }
  };

  :nth-child(2) {
    opacity : ${({nav}) => nav ? "0" : "1" }
  };

  :nth-child(3) {
    transform: ${({nav}) => nav ? 'rotate(-45deg)' : 'rotate(0)' }
  };

}

`

const MenuLinks = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: auto;
background: #260039;
position: absolute;
top:0;
right:0;
transform: ${({nav}) => (nav ? "translateX(0)": "translateX(100%)")};

ul {
  list-style-type: none;
}
li {
  text-decoration: none;
}
Link{
  text-decoration: none;
}
`


const Nav = () => {
 
    const pageMenu = useStaticQuery(graphql`
    {
      allWpMenuItem {
        edges {
          node {
            id
            label
            uri
          }
        }
      }
    }
    
  `)
const [nav , showNav] = useState(false)
return(
    <div>

    
      <MenuIcon nav= {nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>

      <div class="main-nav-bar">
        <ul style={{ listStyle: `none`, display: `flex`, margin: 0 }}>
              {pageMenu.allWpMenuItem.edges.map(item => (
                <li key={item.node.uri} style={{ margin: `0 10px` }}>
                  <Link
                    to={`${item.node.uri}`}
                    style={{
                      color: `black`,
                      textDecoration: `none`,
                      fontFamily: `sans-serif`,
                    }}
                  >
                    {item.node.label}
                  </Link>
                </li>
              ))}
            </ul>
        </div>


      <MenuLinks nav = {nav}>
        <div class="main-nav">
        <ul style={{ listStyle: `none`, display: `grid`, margin: `30px 1px 0px 0px` }}>
              {pageMenu.allWpMenuItem.edges.map(item => (
                <li key={item.node.uri} style={{ margin: `0 10px` }}>
                  <Link
                    to={`${item.node.uri}`}
                    style={{
                      color: `black`,
                      textDecoration: `none`,
                      fontFamily: `sans-serif`,
                    }}
                  >
                    {item.node.label}
                  </Link>
                </li>
              ))}
            </ul>
        </div>
      </MenuLinks>
      
    </div>
  )
 }
  
 export default Nav