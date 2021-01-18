// Styling and Scripts go here

import React from "react"

const Layout = props => {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width" initial-scale="1" />
      </head>

      <div id="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/projects">Projects</a>
                </li>
                <li>
                  {/* <a href="/resume">Resume</a> */}
                  <a href="https://docs.google.com/document/d/e/2PACX-1vQpCC2u5cuHynbBBMXQWS33f5xg1S6dhZJ0yv0NMYVF8jGjafKbdG2paMQFJ3sLQuo5jg4BFCUuNcXk/pub">
                    Resume
                  </a>
                </li>
                {/* <li>
                  <a href="/blogs">Blog</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <main>{props.children}</main>
    </>
  )
}

export default Layout
