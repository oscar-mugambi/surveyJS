import React, { useCallback, useState } from "react"
import MySurvey from "../surveyTypes/surveyTypeThree"

const SurveyThree = () => {
  const [showPage, setShowPage] = useState(true)
  const onCompletePage = useCallback(
    (data) => {
      console.log(data)
      setShowPage(!showPage)
    },
    [showPage]
  )

  // Completed Page

  const setFinalPage = () => {
    return (
      <main>
        <h1>That's all folks!</h1>
      </main>
    )
  }

  return (
    <div className="App">
      {showPage && <MySurvey showCompletedPage={(data) => onCompletePage(data)} />}
      {!showPage && setFinalPage()}
    </div>
  )
}

export default SurveyThree
