import React from "react"
import "survey-react/survey.css"
import * as Survey from "survey-react"
import { json } from "../surveys/questions"
import "./index.css"

const MySurvey = (prop) => {
  const survey = new Survey.Model(json)

  let defaultThemeColors = Survey.StylesManager.ThemeColors["default"]

  defaultThemeColors["$header-background-color"] = "red"
  defaultThemeColors["$body-container-background-color"] = "black"

  defaultThemeColors["$main-color"] = "yellow"
  defaultThemeColors["$main-hover-color"] = "lightblue"
  defaultThemeColors["$body-background-color"] = "#3D5A6C"
  defaultThemeColors["$inputs-background-color"] = "#8DE969"
  defaultThemeColors["$text-color"] = "black"
  defaultThemeColors["$header-color"] = "lime"
  defaultThemeColors["$border-color"] = "yellow"

  defaultThemeColors["$disable-color"] = "#dbdbdb"
  defaultThemeColors["$progress-text-color"] = "#9d9d9d"
  defaultThemeColors["$disabled-label-color"] = "rgba(64, 64, 64, 0.5)"
  defaultThemeColors["$slider-color"] = "white"
  defaultThemeColors["$disabled-switch-color"] = "#9f9f9f"
  defaultThemeColors["$disabled-slider-color"] = "#cfcfcf"
  defaultThemeColors["$header-background-color"] = "red"
  Survey.StylesManager.applyTheme()

  // Theme related CSS using CSS classes

  survey.onUpdateQuestionCssClasses.add(function (survey, options) {
    let classes = options.cssClasses
    classes.root = "sq-root"
    classes.title = "sq-title"
    classes.item = "sq-item"
    classes.label = "sq-label"
    classes.button = "sv_complete_btn"
    classes.header = "sv_header"

    if (options.question.isRequired) {
      classes.title += " sq-title-required"
      classes.root += " sq-root-required"
    }
    if (options.question.getType() === "checkbox") {
      classes.root += " sq-root-cb"
    }
  })

  return (
    <div>
      <Survey.Survey
        showCompletedPage={false}
        onComplete={(data) => prop.showCompletedPage(data.valuesHash)}
        model={survey}
      ></Survey.Survey>
    </div>
  )
}

export default MySurvey
