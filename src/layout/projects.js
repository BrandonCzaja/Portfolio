import React from "react"

// Projects
import Digital_Shelfie from "../images/Digital_Shelfie.png"
import Ubuntu from "../images/Ubuntu.png"
import MTG_Search from "../images/MTG_Search.png"
import Landscaper from "../images/Landscaper.png"
import Space_Battle from "../images/Space_Battle.png"

const Project_Images = props => {
  return (
    <div>
      <section id="project-images">
        <img src={Digital_Shelfie} alt="Shelfie" class="projects" />
        <img src={MTG_Search} alt="Django" class="projects" />
        <img src={Ubuntu} alt="HTML 5" class="projects" />
        <img src={Landscaper} alt="Javascript" class="projects" />
        <img src={Space_Battle} alt="Mongo" class="projects" />
      </section>
    </div>
  )
}

export default Project_Images
