import React from 'react'
import { Text, View, Slider } from 'react-native'
import styled from 'styled-components/native'
import Ui from './components/ui'

const WorkloadSettings = () => (
  <View>

    <Ui.ListItemSlider>
      <Ui.LabelRow>
        <Ui.ListItemLabel>Inspiration</Ui.ListItemLabel>
        <Ui.ListItemValue>1%</Ui.ListItemValue>
      </Ui.LabelRow>
      <Ui.ControlRow>
        <Slider value={0.01} disabled />
      </Ui.ControlRow>
    </Ui.ListItemSlider>

    <Ui.ListItemSlider>
      <Ui.LabelRow>
        <Ui.ListItemLabel>Perspiration</Ui.ListItemLabel>
        <Ui.ListItemValue>99%</Ui.ListItemValue>
      </Ui.LabelRow>
      <Ui.ControlRow>
        <Slider value={0.99} disabled />
      </Ui.ControlRow>
    </Ui.ListItemSlider>
  </View>
)

WorkloadSettings.propTypes = {}
WorkloadSettings.defaultProps = {}

export default WorkloadSettings
