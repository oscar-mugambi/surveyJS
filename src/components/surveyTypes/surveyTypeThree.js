import React, { useEffect, useState } from "react"
import "survey-react/survey.css"
import * as Survey from "survey-react"
import json from "../surveys/question3"
import "./index.css"

const MySurvey = (prop) => {
  const [theme, setTheme] = useState("saf")
  const survey = new Survey.Model(json)

  var defaultThemeColors = Survey.StylesManager.ThemeColors["default"]
  defaultThemeColors["$main-color"] = "red"
  defaultThemeColors["$body-background-color"] = "yellow"
  defaultThemeColors["$text-color"] = "#4a4a4a"
  defaultThemeColors["$header-color"] = "#7ff07f"

  defaultThemeColors["$header-background-color"] = "red"
  defaultThemeColors["$body-container-background-color"] = "#f8f8f8"

  // Survey.StylesManager.applyTheme("saf")

  Survey.StylesManager.ThemeColors["saf"] = {
    "$main-color": "#fff",
    "$body-background-color": "green",
  }

  Survey.StylesManager.ThemeColors["kcb"] = {
    "$main-color": "#fff",
    "$body-background-color": "#4E148C",
  }

  Survey.StylesManager.ThemeColors["java"] = {
    "$main-color": "#fff",
    "$body-background-color": "#F42272",
  }

  useEffect(() => {
    Survey.StylesManager.applyTheme("saf")
    console.log("running")
  }, [theme])

  const changeTheme = (e) => {
    const selectedTheme = e.target.value
    setTheme(selectedTheme)
    Survey.StylesManager.applyTheme(selectedTheme)
  }

  // Survey
  //     .StylesManager
  //     .applyTheme("MyCustomTheme3");

  // Survey.StylesManager.applyTheme("modern")

  // var myCss = {
  //   matrix: {
  //     root: "table table-striped",
  //   },
  //   navigationButton: "button btn-lg",
  // }

  // //Create showdown markdown converter
  // let converter = new showdown.Converter()
  // survey.onTextMarkdown.add(function (survey, options) {
  //   //convert the markdown text to html
  //   let str = converter.makeHtml(options.text)
  //   //remove root paragraphs <p></p>
  //   str = str.substring(3)
  //   str = str.substring(0, str.length - 4)
  //   //set html
  //   options.html = str
  // })

  survey.onUpdateQuestionCssClasses.add((survey, options) => {
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
      <select onChange={changeTheme}>
        <option value="saf">saf</option>
        <option value="kcb">java</option>
        <option value="java">kcb</option>
      </select>
      <Survey.Survey model={survey} />
    </div>
  )
}

export default MySurvey
