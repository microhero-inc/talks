import React from 'react'
import {
  Text,
  View,
  ScrollView,
  Switch,
  Slider,
  TouchableOpacity
} from 'react-native'

const App = () => {
  <View>
    <Text>Business Generator</Text>
    <ScrollView>

      <View>
        <Text>INPUT</Text>
        <View>
          <View>
            <Text>Inspiration</Text>
            <Text>1%</Text>
          </View>
          <Slider value={0.01} />
        </View>
        <View>
          <View>
            <Text>99%</Text>
          </View>
          <Slider value={0.99} />
        </View>
      </View>

      <View>
        <Text>PRODUCT / SERVICE OUTPUT</Text>
        <View>
          <Text>Cheap</Text>
          <Switch />
        </View>
        <View>
          <Text>Good</Text>
          <Switch />
        </View>
        <View>
          <Text>Fast</Text>
          <Switch />
        </View>
      </View>

      <View>
        <Text>
          Get ready to generate your dream business. Configure the settings
          above to your liking and press this button to continue!
        </Text>
        <TouchableOpacity>
          <Text>Generate!</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  </View>
}

export default App
