import React from 'react'
import { Text, View, Switch } from 'react-native'
import styled from 'styled-components/native'
import Ui from './components/ui'

class DevelopmentSettings extends React.Component {
  state = {
    quality: false,
    speed: false,
    cost: false,
    attributes: []
  }

  addAttribute = (attribute) => {
    const { attributes } = this.state
    attributes.push(attribute)
    this.setState({ attributes: attributes })
  }

  deleteAttribute = (attribute) => {
    const { attributes } = this.state
    const index = attributes.indexOf(attribute);
    if (index > -1) attributes.splice(index, 1);
    this.setState({attributes: attributes})
  }

  handleToggle = (attribute, on) => {
    const { attributes } = this.state
    if (!on) return this.deleteAttribute(attribute)
    if (attributes.length > 1) attributes.shift()
    this.addAttribute(attribute)
  }

  render(){

    const { attributes } = this.state

    return (
      <View>
        <Ui.ListItemSwitch>
          <Ui.ListItemLabel>Quality</Ui.ListItemLabel>
          <View>
            <Switch
              onValueChange={(value) => this.handleToggle('quality', value)}
              value={attributes.includes('quality')}
            />
          </View>
        </Ui.ListItemSwitch>
        <Ui.ListItemSwitch>
          <Ui.ListItemLabel>Speed</Ui.ListItemLabel>
          <Switch
            onValueChange={(value) => this.handleToggle('speed', value)}
            value={attributes.includes('speed')}
          />
        </Ui.ListItemSwitch>
        <Ui.ListItemSwitch>
          <Ui.ListItemLabel>Cost</Ui.ListItemLabel>
          <Switch
            onValueChange={(value) => this.handleToggle('cost', value)}
            value={attributes.includes('cost')}
          />
        </Ui.ListItemSwitch>
      </View>
    );
  }
}

DevelopmentSettings.propTypes = {}
DevelopmentSettings.defaultProps = {}

export default DevelopmentSettings
