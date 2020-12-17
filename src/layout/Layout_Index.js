// Styling and Scripts go here
import tech from "../styles/tech.css"

import React from "react"
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

const Index_Layout = props => {
  return (
    <div>
      <img src={css3} alt="CSS 3" class="tech" />
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
    </div>
  )
}

export default Index_Layout
