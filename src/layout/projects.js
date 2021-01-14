import React from "react"
import { Link } from "gatsby"
import { useStaticQuery } from "gatsby"

import projects from "../styles/projects.css"

// Projects
import Shelfie from "../../static/images/Shelfie.png"
import Ubuntu from "../../static/images/Ubuntu.png"
import MTG_Search from "../../static/images/MTG_Search.png"

const Project_Images = props => {
  return (
    <div id="container">
      <h1 id="projects-intro">Projects</h1>
      <section id="project-images">
        <div class="shelfie">
          <p class="project-description">
            <em>Digital Shelfie </em>
            is an application that lets board gamers show off their collection
            to the rest of the community. Users sign up, log in, and enter the
            game's information.In the next update users will be able to search
            for their games using the Board Game Atlas API. <br />
            <br /> Technologies used: MongoDB, Express, React, Node (MERN)
          </p>

          <img src={Shelfie} alt="Shelfie" class="projects" />

          <a
            href="https://github.com/BrandonCzaja/Digital-Shelfie"
            target="_blank"
          >
            GitHub
          </a>
          <a href="https://digital-shelfie.herokuapp.com/" target="_blank">
            Live Site
          </a>
        </div>

        <div class="mtg">
          <p class="project-description">
            <em>MTG Search </em>allows players to to search for individual card
            by sending fetch requests to the Scryfall API. Players can also view
            the symbols for each set by clicking through the carousel which
            accesses the Magic The Gathering API. The next update will allow
            users to view the entire Card Image Gallery for each set by clicking
            the set symbol. <br />
            <br /> Technologies used: HTML, CSS, JavaScript, jQuery
          </p>

          <img src={MTG_Search} alt="MTG Search" class="projects" />

          <a href="https://github.com/BrandonCzaja/MTGSearch" target="_blank">
            GitHub
          </a>
          <a
            href="https://magic-the-gathering-search.vercel.app/"
            target="_blank"
          >
            Live Site
          </a>
        </div>

        <div class="charity">
          <p class="project-description">
            <em>Ubuntu: I am because we are</em>, allows users to login with JWT
            authentication and create charitable events for their local
            community. The next update will allow users to search for events in
            their community using Google Maps. <br />
            <br /> Technologies used: MongoDB, Express, React, Node (MERN)
          </p>

          <img src={Ubuntu} alt="Ubuntu" class="projects ubuntu" />

          <a
            href="https://github.com/BrandonCzaja/Ubuntu-Backend"
            class="ubuntu-links"
            target="_blank"
          >
            Backend GitHub
          </a>
          <a
            href="https://github.com/BrandonCzaja/Ubuntu-Frontend"
            class="ubuntu-links"
            target="_blank"
          >
            Frontend GitHub
          </a>
          <a
            href="https://practical-jones-b55cd9.netlify.app/"
            class="ubuntu-links"
            target="_blank"
          >
            Live Site
          </a>
        </div>
      </section>
    </div>
  )
}

export default Project_Images
