import React from "react"

import projects from "../styles/projects.css"

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
        <p class="project-description">
          <strong>
            <em>Digital Shelfie </em>
          </strong>
          is an application that lets board gamers show off their collection to
          the rest of the community. Users sign up, log in, and enter the game's
          information.In the next update users will be able to search for their
          games using the Board Game Atlas API. Technologies used:
        </p>
        <ul>
          <li></li>
        </ul>
        <img src={Digital_Shelfie} alt="Shelfie" class="projects" />
        <ul>
          <li class="github">
            <a href="">GitHub</a>
          </li>
          <li class="site">
            <a href="">Site</a>
          </li>
        </ul>

        <p class="project-description">
          MTG Search allows players to to search for individual card by sending
          fetch requests to the Scryfall API. Players can also view the symbols
          for each set by clicking through the carousel which accesses the Magic
          The Gathering API. The next update will allow users to view the entire
          Card Image Gallery for each set by clicking the set symbol.
          Technologies used:
        </p>
        <ul>
          <li></li>
        </ul>
        <img src={MTG_Search} alt="MTG Search" class="projects" />
        <ul>
          <li class="github">
            <a href="">GitHub</a>
          </li>
          <li class="site">
            <a href="">Site</a>
          </li>
        </ul>

        <p class="project-description">
          <em>Ubuntu: I am because we are</em>, allows users to login with JWT
          authentication and create charitable events for their local community.
          The next update will allow users to search for events in their
          community using Google Maps. Technologies used:
        </p>
        <img src={Ubuntu} alt="Ubuntu" class="projects" />
        <ul>
          <li class="github">
            <a href="">GitHub</a>
          </li>
          <li class="site">
            <a href="">Site</a>
          </li>
        </ul>
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
