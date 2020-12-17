import React from "react"

import skills from "../styles/skills.css"

import css3 from "../images/icons/css3.png"
import django from "../images/icons/django.png"
import html from "../images/icons/html.png"
import javascript from "../images/icons/javascript.png"
import mongo from "../images/icons/mongo.png"
import node from "../images/icons/node.png"
import postgres from "../images/icons/postgres.png"
import postman from "../images/icons/postman.png"
import python from "../images/icons/python.png"
import rails from "../images/icons/rails.png"
import react from "../images/icons/react.png"
import ruby from "../images/icons/ruby.png"
import jquery from "../images/icons/jquery.png"
import jira from "../images/icons/jira.png"
import git from "../images/icons/git.png"
import github from "../images/icons/github.png"

const Skills = props => {
  return (
    <div>
      <h1>Tech Skills</h1>
      <section id="skills">
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
      </section>
    </div>
  )
}

export default Skills
