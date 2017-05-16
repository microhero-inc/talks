import styled from 'styled-components/native'

const List = styled.View``

const SectionTitle = styled.Text`
  color: #717076;
  padding-left: 10;
  padding-right: 10;
  margin-top: 20;
  margin-bottom: 5;
  font-size: 13;
`

const ListItem = styled.View`
  padding: 10;
  background-color: white;
  border-top-width: 1;
  border-color: #e6e6e6;
`

const ListItemLabel = styled.Text`
  font-size: 16;
  color: #333333;
  flex: 1;
`

const ListItemValue = styled(ListItemLabel)`
  color: #007aff;
  text-align: right;
  font-weight: bold;
`

const ListItemSwitch = styled(ListItem)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ListItemSlider = styled(ListItem)`
`

const LabelRow = styled.View`
  flex-shrink: 0;
  flex-direction: row;
  justify-content: space-between;
`

const ControlRow = styled.View``

export default {
  List,
  SectionTitle,
  ListItem,
  ListItemLabel,
  ListItemValue,
  ListItemSwitch,
  ListItemSlider,
  LabelRow,
  ControlRow
}
