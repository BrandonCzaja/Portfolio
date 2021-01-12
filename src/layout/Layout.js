// Styling and Scripts go here

import React from "react"
import { Link } from "gatsby"
import { useStaticQuery } from "gatsby"

const Layout = props => {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width" initial-scale="1" />
      </head>
      <header>
        <div id="div-wrapper">
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link
                to="https://docs.google.com/document/d/e/2PACX-1vQpCC2u5cuHynbBBMXQWS33f5xg1S6dhZJ0yv0NMYVF8jGjafKbdG2paMQFJ3sLQuo5jg4BFCUuNcXk/pub"
                target="_blank"
              >
                Resume
              </Link>
            </li>
            {/* <li>
              <Link to="/resume" target="">
                Resume
              </Link> */}
            {/* </li> */}
            {/* <li>
              <Link to="/blogs">Blogs</Link>
            </li> */}
          </nav>
        </div>
      </header>
      <main>{props.children}</main>
    </>
  )
}

export default Layout
