import React from "react"

import skills from "../styles/skills.css"

import css3 from "../../static/images/Icons/css3.png"
import django from "../../static/images/Icons/django.png"
import html from "../../static/images/Icons/html.png"
import javascript from "../../static/images/Icons/javascript.png"
import mongo from "../../static/images/Icons/mongo.png"
import node from "../../static/images/Icons/node.png"
import postgres from "../../static/images/Icons/postgres.png"
import postman from "../../static/images/Icons/postman.png"
import python from "../../static/images/Icons/python.png"
import rails from "../../static/images/Icons/rails.png"
import react from "../../static/images/Icons/react.png"
import ruby from "../../static/images/Icons/ruby.png"
import jquery from "../../static/images/Icons/jquery.png"
import jira from "../../static/images/Icons/jira.png"
import git from "../../static/images/Icons/git.png"
import github from "../../static/images/Icons/github.png"

const Skills = props => {
  return (
    <div>
      <h1 id="tech-skills">Tech Skills</h1>

      <section id="skills">
        <img src={css3} alt="CSS 3" class="tech " />

        <img src={django} alt="Django" class="tech" />

        <img src={html} alt="HTML 5" class="tech" />

        <img src={javascript} alt="Javascript" class="tech" />

        <img src={mongo} alt="Mongo" class="tech" />

        <img src={node} alt="Node" class="tech" />

        <img src={postgres} alt="Postgres" class="tech" />

        <img src={postman} alt="Postman" class="tech" />

        <img src={python} alt="Python" class="tech" />

        <img src={rails} alt="Rails" class="tech" />

        <img src={react} alt="React" class="tech" />

        <img src={ruby} alt="Ruby" class="tech" />

        <img src={jquery} alt="jQuery" class="tech" />

        <img src={jira} alt="Jira" class="tech" />

        <img src={git} alt="Git" class="tech" />

        <img src={github} alt="Github" class="tech" />
      </section>
    </div>
  )
}

export default Skills
