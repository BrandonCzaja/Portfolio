import React from "react"
import { Link } from "gatsby"
import { useStaticQuery } from "gatsby"

import my_resume from "../../static/images/my_resume.pdf"

const Resume_Layout = props => {
  return (
    <div>
      <embed
        src="../../static/images/my_resume.pdf"
        width="800px"
        height="2100px"
      />
    </div>
  )
}

export default Resume_Layout
