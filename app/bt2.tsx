import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet} from 'react-native';

const TopTab = createMaterialTopTabNavigator();

const ScreenA = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Screen Yêu thích</Text>
  </View>
);

const ScreenB = () => (
  <View style={styles.container2}>
    <Text style={styles.text}>Screen Phổ biến</Text>
  </View>
);
const ScreenC = () => (
  <View style={styles.container3}>
    <Text style={styles.text}>Trực tiếp</Text>
  </View>
);
const TopTabs = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Yêu thích" component={ScreenA} />
      <TopTab.Screen name="Phổ biến" component={ScreenB} />
      <TopTab.Screen name="Trực tiếp" component={ScreenC} />
    </TopTab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#72deaf',
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default TopTabs;
