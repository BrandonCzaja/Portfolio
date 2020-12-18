import React from "react"
import { Link } from "gatsby"
import { useStaticQuery } from "gatsby"

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
      <h1>Tech Skills</h1>

      <section id="skills">
        <Link>
          <img src={css3} alt="CSS 3" class="tech modal" id="css" />
        </Link>
        <Link>
          <img src={django} alt="Django" class="tech modal" />
        </Link>
        <Link>
          <img src={html} alt="HTML 5" class="tech modal" />
        </Link>
        <Link>
          <img src={javascript} alt="Javascript" class="tech modal" />
        </Link>
        <Link>
          <img src={mongo} alt="Mongo" class="tech modal" />
        </Link>
        <Link>
          <img src={node} alt="Node" class="tech modal" />
        </Link>
        <Link>
          <img src={postgres} alt="Postgres" class="tech modal" />
        </Link>
        <Link>
          <img src={postman} alt="Postman" class="tech modal" />
        </Link>
        <Link>
          <img src={python} alt="Python" class="tech modal" />
        </Link>
        <Link>
          <img src={rails} alt="Rails" class="tech modal" />
        </Link>
        <Link>
          <img src={react} alt="React" class="tech modal" />
        </Link>
        <Link>
          <img src={ruby} alt="Ruby" class="tech modal" />
        </Link>
        <Link>
          <img src={jquery} alt="jQuery" class="tech modal" />
        </Link>
        <Link>
          <img src={jira} alt="Jira" class="tech modal" />
        </Link>
        <Link>
          <img src={git} alt="Git" class="tech modal" />
        </Link>
        <Link>
          <img src={github} alt="Github" class="tech modal" />
        </Link>
      </section>
    </div>
  )
}

export default Skills
