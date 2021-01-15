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
            <span class="project-title">
              <em>Digital Shelfie </em>
            </span>
            is an application that lets board gamers show off their collection
            to the rest of the community. Users sign up, log in, and enter the
            game's information.In the next update users will be able to search
            for their games using the Board Game Atlas API. <br />
            <br />{" "}
            <span class="tech-used">
              Technologies used: MongoDB, Express, React, Node (MERN)
            </span>
          </p>

          <img src={Shelfie} alt="Shelfie" class="projects" />

          {/* <iframe src="https://digital-shelfie.herokuapp.com/" name="digital-shelfie">
            <p>
              <a href="https://digital-shelfie.herokuapp.com/" target="digital-shelfie"></a>
            </p>
          </iframe> */}
          <div class="project-sites">
            <a
              href="https://github.com/BrandonCzaja/Digital-Shelfie"
              target="_blank"
              class="site-buttons"
            >
              GitHub
            </a>
            <a
              href="https://digital-shelfie.herokuapp.com/"
              target="_blank"
              class="site-buttons"
            >
              Live Site
            </a>
          </div>
        </div>

        <div class="mtg">
          <p class="project-description">
            <span class="project-title">
              <em>MTG Search </em>
            </span>
            allows players to to search for individual card by sending fetch
            requests to the Scryfall API. Players can also view the symbols for
            each set by clicking through the carousel which accesses the Magic
            The Gathering API. The next update will allow users to view the
            entire Card Image Gallery for each set by clicking the set symbol.{" "}
            <br />
            <br />{" "}
            <span class="tech-used">
              Technologies used: HTML, CSS, JavaScript, jQuery
            </span>
          </p>

          <img src={MTG_Search} alt="MTG Search" class="projects" />

          {/* <iframe
            src="https://magic-the-gathering-search.vercel.app/"
            name="mtg"
          >
            <p>
              <a href="https://magic-the-gathering-search.vercel.app/"></a>
            </p>
          </iframe> */}
          <div class="project-sites">
            <a
              href="https://github.com/BrandonCzaja/MTGSearch"
              target="_blank"
              class="site-buttons"
            >
              GitHub
            </a>
            <a
              href="https://magic-the-gathering-search.vercel.app/"
              target="_blank"
              class="site-buttons"
            >
              Live Site
            </a>
          </div>
        </div>

        <div class="charity">
          <p class="project-description">
            <span class="project-title">
              <em>Ubuntu: I am because we are</em>
            </span>
            , allows users to login with JWT authentication and create
            charitable events for their local community. The next update will
            allow users to search for events in their community using Google
            Maps. <br />
            <br />{" "}
            <span class="tech-used">
              Technologies used: MongoDB, Express, React, Node (MERN)
            </span>
          </p>

          <img src={Ubuntu} alt="Ubuntu" class="projects ubuntu" />

          <div class="project-sites">
            <a
              href="https://github.com/BrandonCzaja/Ubuntu-Backend"
              class="ubuntu-links"
              target="_blank"
              class="site-buttons"
            >
              Backend GitHub
            </a>
            <a
              href="https://github.com/BrandonCzaja/Ubuntu-Frontend"
              class="ubuntu-links"
              target="_blank"
              class="site-buttons"
            >
              Frontend GitHub
            </a>
            <a
              href="https://practical-jones-b55cd9.netlify.app/"
              class="ubuntu-links"
              target="_blank"
              class="site-buttons"
            >
              Live Site
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project_Images
