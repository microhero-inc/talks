import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

const Header = styled.View`
  background-color: white;
  border-bottom-color: #ccc;
  border-bottom-width: 1;
`

const Title = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10;
  margin-top: 40;
`

const AppHeader = ({title}) => (
  <Header>
    <Title>{title}</Title>
  </Header>
)

AppHeader.propTypes = {}
AppHeader.defaultProps = {}

export default AppHeader
