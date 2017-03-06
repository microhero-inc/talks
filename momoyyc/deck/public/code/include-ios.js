import React from 'react'
import { View } from 'react-native'
import { Questions } from 'microhero-spandex'

const QuestionView = ({questionData}) => (
  <View>
    <Questions.ChooseOne
      question={questionData}
      readonly
    />
  </View>
)

export default QuestionView
