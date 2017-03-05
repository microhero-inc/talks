import React from 'react'
import { Text, View, Button } from 'react-native'
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

export default class App extends React.Component {

  render () {
    return (
      <Container>
        <AppHeader title='@MoMoYYC App Generator' />
        <Ui.List>
          <Ui.SectionTitle>DEVELOPMENT</Ui.SectionTitle>
          <DevelopmentSettings />

          <Ui.SectionTitle>WORKLOAD</Ui.SectionTitle>
          <WorkloadSettings />

          <Actions>
            <Text>Generate Your App</Text>
            <Text>
              All you have to do is press this button and you will generate
              an high-quality, productive, money-earning app that you can launch
              on the App Store or Google Play store. You're just one tap away
              from being a big success!
            </Text>
            <Button
              onPress={() => null}
              title='Generate App!'
              color='#841584'
              disabled
            />
          </Actions>
        </Ui.List>
      </Container>
    )
  }
}
