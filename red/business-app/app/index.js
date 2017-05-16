import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import Ui from './components/ui'
import AppHeader from './app-header'
import DevelopmentSettings from './development-settings'
import WorkloadSettings from './workload-settings'

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: stretch;
  background-color: #efeef4;
`

const Actions = styled.View`
  padding: 20;
  margin-top: 20;
  background-color: #f6f7f8;
  border-color: #e9e9eb;
  border-width: 1;
`

const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: #157efb;
  margin-top: 10;
`

const ButtonText = styled.Text`
  font-size: 20;
  padding: 16;
  color: white;
`

export default class App extends React.Component {

  render () {
    return (
      <Container>
        <AppHeader title='Business Generator' />
        <Ui.List>

          <Ui.SectionTitle>INPUT</Ui.SectionTitle>
          <WorkloadSettings />

          <Ui.SectionTitle>PRODUCT / SERVICE OUTPUT</Ui.SectionTitle>
          <DevelopmentSettings />

          <Actions>
            <Text style={{textAlign: 'center'}}>
              Get ready to generate your dream business. Configure the settings
              above to your liking and press this button to continue!
            </Text>
            <Button>
              <ButtonText>Generate!</ButtonText>
            </Button>
          </Actions>
        </Ui.List>
      </Container>
    )
  }
}
