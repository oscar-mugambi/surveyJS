import React, { useCallback, useState } from "react"
import MySurvey from "../surveyTypes/surveyTypeOne"

const SurveyOne = () => {
  const [showPage, setShowPage] = useState(true)
  const onCompletePage = useCallback(
    (data) => {
      setShowPage(!showPage)
    },
    [showPage]
  )

  // Set Completed Page

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
      {!showPage && <h1>Thats all folks</h1>}
    </div>
  )
}

export default SurveyOne
