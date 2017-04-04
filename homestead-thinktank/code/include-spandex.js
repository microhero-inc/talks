import React from 'react'
import { Questions } from 'microhero-spandex'

const QuestionView = ({questionData}) => (
  <Questions.ChooseOne
    question={questionData}
    readonly
  />
)

export default QuestionView
