import React from "react"
import { Link } from "gatsby"
import { useStaticQuery } from "gatsby"

import skills from "../styles/skills.css"

import css3 from "../../static/images/icons/css3.png"
import django from "../../static/images/icons/django.png"
import html from "../../static/images/icons/html.png"
import javascript from "../../static/images/icons/javascript.png"
import mongo from "../../static/images/icons/mongo.png"
import node from "../../static/images/icons/node.png"
import postgres from "../../static/images/icons/postgres.png"
import postman from "../../static/images/icons/postman.png"
import python from "../../static/images/icons/python.png"
import rails from "../../static/images/icons/rails.png"
import react from "../../static/images/icons/react.png"
import ruby from "../../static/images/icons/ruby.png"
import jquery from "../../static/images/icons/jquery.png"
import jira from "../../static/images/icons/jira.png"
import git from "../../static/images/icons/git.png"
import github from "../../static/images/icons/github.png"

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
