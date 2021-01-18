import React from "react"

import skills from "../styles/skills.css"

import css from "../../static/images/Icons/css.png"
import django from "../../static/images/Icons/django.png"
import html5 from "../../static/images/Icons/html5.png"
import javascript from "../../static/images/Icons/js.png"
import mongo from "../../static/images/Icons/mongo.png"
import node from "../../static/images/Icons/node2.png"
import postgres from "../../static/images/Icons/postgres.png"
import postman from "../../static/images/Icons/postman2.png"
import python from "../../static/images/Icons/python.png"
import rails from "../../static/images/Icons/rails2.png"
import react from "../../static/images/Icons/react2.png"
import ruby from "../../static/images/Icons/ruby3.png"
import jquery from "../../static/images/Icons/jquery2.png"
import jira from "../../static/images/Icons/jira2.png"
import git from "../../static/images/Icons/git.png"
import github from "../../static/images/Icons/github.png"

const Skills = props => {
  return (
    <div>
      <h1 id="tech-skills">Tech Skills</h1>

      <section id="skills">
        <img src={html5} alt="HTML 5" class="tech" />

        <img src={css} alt="CSS 3" class="tech " />

        <img src={javascript} alt="Javascript" class="tech" />

        <img src={jquery} alt="jQuery" class="tech" />

        <img src={node} alt="Node" class="tech" />

        <img src={react} alt="React" class="tech" />

        <img src={ruby} alt="Ruby" class="tech" />

        <img src={rails} alt="Rails" class="tech" />

        <img src={python} alt="Python" class="tech" />

        <img src={django} alt="Django" class="tech" />

        <img src={mongo} alt="Mongo" class="tech" />

        <img src={postgres} alt="Postgres" class="tech" />

        <img src={postman} alt="Postman" class="tech" />

        <img src={jira} alt="Jira" class="tech" />

        <img src={git} alt="Git" class="tech" />

        <img src={github} alt="Github" class="tech" />
      </section>
    </div>
  )
}

export default Skills
