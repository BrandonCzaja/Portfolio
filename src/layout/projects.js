import React from "react"
import { Link } from "gatsby"
import { useStaticQuery } from "gatsby"

import projects from "../styles/projects.css"

// Projects
import Digital_Shelfie from "../../static/Digital_Shelfie.png"
import Ubuntu from "../../static/images/Ubuntu.png"
import MTG_Search from "../../static/images/MTG_Search.png"

const Project_Images = props => {
  return (
    <div>
      <section id="project-images">
        <p class="project-description">
          <strong>
            <em>Digital Shelfie </em>
          </strong>
          is an application that lets board gamers show off their collection to
          the rest of the community. Users sign up, log in, and enter the game's
          information.In the next update users will be able to search for their
          games using the Board Game Atlas API. <br />
          <br /> Technologies used: MongoDB, Express, React, Node (MERN)
        </p>

        <Link>
          <img src={Digital_Shelfie} alt="Shelfie" class="projects" />
        </Link>

        <p class="project-description">
          <em>MTG Search </em>allows players to to search for individual card by
          sending fetch requests to the Scryfall API. Players can also view the
          symbols for each set by clicking through the carousel which accesses
          the Magic The Gathering API. The next update will allow users to view
          the entire Card Image Gallery for each set by clicking the set symbol.{" "}
          <br />
          <br /> Technologies used: HTML, CSS, JavaScript, jQuery
        </p>

        <Link>
          <img src={MTG_Search} alt="MTG Search" class="projects" />
        </Link>

        <p class="project-description ">
          <em>Ubuntu: I am because we are</em>, allows users to login with JWT
          authentication and create charitable events for their local community.
          The next update will allow users to search for events in their
          community using Google Maps. <br />
          <br /> Technologies used: MongoDB, Express, React, Node (MERN)
        </p>

        <Link>
          <img src={Ubuntu} alt="Ubuntu" class="projects ubuntu" />
        </Link>

        {/* 
        <p class="project-description">Landscaper Description</p>
        <img src={Landscaper} alt="Landscaper" class="projects" />
        <ul>
          <li class="github">
            <a href="">GitHub</a>
          </li>
          <li class="site">
            <a href="">Site</a>
          </li>
        </ul>

        <p class="project-description">Space Battle Description</p>
        <img src={Space_Battle} alt="Space Battle" class="projects" />
        <ul>
          <li class="github">
            <a href="">GitHub</a>
          </li>
          <li class="site">
            <a href="">Site</a>
          </li>
        </ul> */}
      </section>
    </div>
  )
}

export default Project_Images
