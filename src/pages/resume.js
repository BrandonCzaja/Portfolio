import React from "react"

import Layout from "../layout/Layout"
import MyResume from "../layout/resume"

const Resume = () => {
  return (
    <>
      <Layout>
        <div id="resume" name="resume">
          <MyResume />
        </div>
      </Layout>
    </>
  )
}

export default Resume
