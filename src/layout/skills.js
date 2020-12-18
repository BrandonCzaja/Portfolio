import React from "react"
import { Link } from "gatsby"

import skills from "../styles/skills.css"

import css3 from "../../public/images/icons/css3.png"
import django from "../../public/images/icons/django.png"
import html from "../../public/images/icons/html.png"
import javascript from "../../public/images/icons/javascript.png"
import mongo from "../../public/images/icons/mongo.png"
import node from "../../public/images/icons/node.png"
import postgres from "../../public/images/icons/postgres.png"
import postman from "../../public/images/icons/postman.png"
import python from "../../public/images/icons/python.png"
import rails from "../../public/images/icons/rails.png"
import react from "../../public/images/icons/react.png"
import ruby from "../../public/images/icons/ruby.png"
import jquery from "../../public/images/icons/jquery.png"
import jira from "../../public/images/icons/jira.png"
import git from "../../public/images/icons/git.png"
import github from "../../public/images/icons/github.png"

const Skills = props => {
  return (
    <div>
      <h1>Tech Skills</h1>

      <section id="skills">
        <Link>
          <img src={css3} alt="CSS 3" class="tech modal" id="css" />
          <img src={django} alt="Django" class="tech modal" />
          <img src={html} alt="HTML 5" class="tech modal" />
          <img src={javascript} alt="Javascript" class="tech modal" />
          <img src={mongo} alt="Mongo" class="tech modal" />
          <img src={node} alt="Node" class="tech modal" />
          <img src={postgres} alt="Postgres" class="tech modal" />
          <img src={postman} alt="Postman" class="tech modal" />
          <img src={python} alt="Python" class="tech modal" />
          <img src={rails} alt="Rails" class="tech modal" />
          <img src={react} alt="React" class="tech modal" />
          <img src={ruby} alt="Ruby" class="tech modal" />
          <img src={jquery} alt="jQuery" class="tech modal" />
          <img src={jira} alt="Jira" class="tech modal" />
          <img src={git} alt="Git" class="tech modal" />
          <img src={github} alt="Github" class="tech modal" />
        </Link>
      </section>
    </div>
  )
}

export default Skills
