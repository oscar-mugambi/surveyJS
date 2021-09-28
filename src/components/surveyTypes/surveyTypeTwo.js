import React from "react"
import "survey-react/survey.css"
import * as Survey from "survey-react"
import json from "../surveys/questions2"
// import "./index.css"

const MySurvey = (prop) => {
  const survey = new Survey.Model(json)

  // Survey.StylesManager.applyTheme("modern")

  var myCss = {
    matrix: {
      root: "table table-striped",
    },
    navigationButton: "button btn-lg",
  }

  return (
    <div>
      <Survey.Survey model={survey} css={myCss} />
    </div>
  )
}

export default MySurvey
