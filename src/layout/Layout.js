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

      <div id="menu-wrap">
        <input type="checkbox" class="toggler" />
        <div class="hamburger">
          <div></div>
        </div>
        <div class="menu">
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
                  <a href="/resume">Resume</a>
                </li>
                <li>
                  <a href="/blogs">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*<nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
             <li>
              <Link to="/blogs">Blogs</Link>
            </li> 
          </nav>*/}

      <main>{props.children}</main>
    </>
  )
}

export default Layout
