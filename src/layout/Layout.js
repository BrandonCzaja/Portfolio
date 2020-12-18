// Styling and Scripts go here

import React from "react"

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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/resume">Resume</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
          </nav>
        </div>
      </header>
      <main>{props.children}</main>
    </>
  )
}

export default Layout
