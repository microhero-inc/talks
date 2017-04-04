import React from 'react'
import { Questions } from 'microhero-spandex'

const QuestionView = ({questionData}) => (
  <div>
    <Questions.ChooseOne
      question={questionData}
      readonly
    />
  </div>
)

export default QuestionView
