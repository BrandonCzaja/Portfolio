import React from "react"
// Styles
import bootstrap from "bootstrap"
import Layout from "../layout/Layout"
import Skills from "../layout/skills"
import Style from "../styles/style.css"

import Portfolio_Image from "../images/Portfolio_Image.jpg"
import Digital_Shelfie from "../images/Digital_Shelfie.png"
import Ubuntu from "../images/Ubuntu.png"
import MTG_Search from "../images/MTG_Search.png"
import Landscaper from "../images/Landscaper.png"
import Space_Battle from "../images/Space_Battle.png"

const Home = () => {
  return (
    <>
      <html>
        <Layout> </Layout>

        <body>
          <div id="introduction">
            <img src={Portfolio_Image} id="intro-pic" />
            <p class="bio" id="bio">
              <span id="greeting">Welcome! I'm Brandon Czaja.</span> <br />
              <br /> I am a team-oriented, goal-driven, full stack developer
              experienced in JavaScript, Ruby on Rails, Django, and React, with
              a side passion for history. I love programming because it is a lot
              like history; individual lines of code may seem small and
              insignificant, but each line has a unique impact on the larger
              program, similar to events in our own lives. Those events develop
              us into who we are, just like each line of code shapes the
              program.
            </p>

            <ul>
              <li class="contact" id="contact-information">
                Contact Information:
              </li>
              <li class="contact">Brandon.Czaja@gmail.com</li>
              <li class="contact">603-540-3182</li>
              <li class="contact">
                <a href="https://github.com/BrandonCzaja">GitHub</a>
              </li>
              <li class="contact">
                <a href="https://www.linkedin.com/in/brandon-czaja/">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>

          <br />

          <div>
            <br />
            <section>
              <Skills />
            </section>
          </div>
        </body>
      </html>
    </>
  )
}

export default Home
