// Styling and Scripts go here

import React from "react"

const Layout = props => {
  return (
    <>
      {/* Bootstrap goes in the head */}
      {/* <Head></Head> */}
      <header>
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
      </header>
      <main>{props.children}</main>
    </>
  )
}

export default Layout
