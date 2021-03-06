import React from "react"

const myResume = props => {
  return (
    <div>
      <div id="outer">
        <div name="resume" style={{ marginTop: "5%" }}>
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vQpCC2u5cuHynbBBMXQWS33f5xg1S6dhZJ0yv0NMYVF8jGjafKbdG2paMQFJ3sLQuo5jg4BFCUuNcXk/pub?embedded=true"
            style={{
              display: "block",
              margin: "auto",
              width: "60%",
              height: 700,
              overflow: "auto",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default myResume
