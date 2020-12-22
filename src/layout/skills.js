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
      <h1>Technological Skills</h1>

      <section id="skills">
        <div class="tech wrap">
          <img src={css3} alt="CSS 3" class="tech " />
          <p class="img-text">CSS 3</p>
        </div>
        <div class="tech wrap">
          <img src={django} alt="Django" class="tech" />
          <p class="img-text">Django</p>
        </div>
        <div class="tech wrap">
          <img src={html} alt="HTML 5" class="tech" />
          <p class="img-text">HTML 5</p>
        </div>
        <div class="tech wrap">
          <img src={javascript} alt="Javascript" class="tech" />
          <p class="img-text">Javascript</p>
        </div>
        <div class="tech wrap">
          <img src={mongo} alt="Mongo" class="tech" />
          <p class="img-text">Mongo</p>
        </div>
        <div class="tech wrap">
          <img src={node} alt="Node" class="tech" />
          <p class="img-text">Node</p>
        </div>
        <div class="tech wrap">
          <img src={postgres} alt="Postgres" class="tech" />
          <p class="img-text">Postgres</p>
        </div>
        <div class="tech wrap ">
          <img src={postman} alt="Postman" class="tech" />
          <p class="img-text">Postman</p>
        </div>
        <div class="tech wrap">
          <img src={python} alt="Python" class="tech" />
          <p class="img-text">Python</p>
        </div>
        <div class="tech wrap">
          <img src={rails} alt="Rails" class="tech" />
          <p class="img-text">Ruby on Rails</p>
        </div>
        <div class="tech wrap">
          <img src={react} alt="React" class="tech" />
          <p class="img-text">React</p>
        </div>
        <div class="tech wrap">
          <img src={ruby} alt="Ruby" class="tech" />
          <p class="img-text">Ruby</p>
        </div>
        <div class="tech wrap">
          <img src={jquery} alt="jQuery" class="tech" />
          <p class="img-text">jQuery</p>
        </div>
        <div class="tech wrap">
          <img src={jira} alt="Jira" class="tech" />
          <p class="img-text">Jira</p>
        </div>
        <div class="tech wrap">
          <img src={git} alt="Git" class="tech" />
          <p class="img-text">Git</p>
        </div>
        <div class="tech wrap">
          <img src={github} alt="Github" class="tech" />
          <p class="img-text">GitHub</p>
        </div>
      </section>
    </div>
  )
}

export default Skills
