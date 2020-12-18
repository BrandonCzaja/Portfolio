import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/Layout"
import Projects_Images from "../layout/projects"

const Projects = () => {
  return (
    <>
      <Layout>
        <div id="projects" name="projects">
          <Projects_Images />
        </div>
      </Layout>
    </>
  )
}

export default Projects
