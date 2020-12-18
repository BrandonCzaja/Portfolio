import React from "react"

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

{
  /* <Layout>
      <h1>My Projects Page</h1>
    </Layout>
      <div id="projects" name="projects">
        <h1>My Projects</h1>

        <img src={Digital_Shelfie} id="shelfie" class="project-images" />
        <button id="shelfie-live-site">
          <a href="https://digital-shelfie.herokuapp.com/" target="_blank">
            Shelfie
          </a>
        </button>

        <img src={MTG_Search} id="mtg" class="project-images" />
        <button id="mtg-live-site">
          <a
            href="https://magic-the-gathering-search.vercel.app/"
            target="_blank"
          >
            MTG
          </a>
        </button>

        <img src={Ubuntu} id="ubuntu" class="project-images" />
        <button id="mtg-live-site">
          <a
            href="https://practical-jones-b55cd9.netlify.app/"
            target="_blank"
          >
            Ubuntu
          </a>
        </button>

        <img src={Landscaper} id="mtg" class="project-images" />
        <img src={Space_Battle} id="mtg" class="project-images" />
      </div> */
}
