import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

const BottomTab = createBottomTabNavigator();

const ScreenA = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Screen A</Text>
  </View>
);

const ScreenB = () => (
  <View style={styles.container2}>
    <Text style={styles.text}>Screen B</Text>
  </View>
);

const BottomTopTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={ScreenA} options={{ headerShown: false }} />
      <BottomTab.Screen name="Settings" component={ScreenB} options={{ headerShown: false }} />
    </BottomTab.Navigator>
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default BottomTopTabs;
