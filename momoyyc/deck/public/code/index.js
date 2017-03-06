import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Switch,
  Slider
} from 'react-native'

const App = () => {
  <View style='container'>
    <AppHeader title='Business Generator' />
    <Ui.List>

      <Ui.SectionTitle>
        INPUT
      </Ui.SectionTitle>
      <WorkloadSettings />

      <Ui.SectionTitle>
        PRODUCT / SERVICE OUTPUT
      </Ui.SectionTitle>
      <DevelopmentSettings />

    </Ui.List>
  </Container>
}

export default App
