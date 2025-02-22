import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet } from 'react-native';

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const ScreenA = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Cho Bạn</Text>
  </View>
);

const ScreenB = () => (
  <View style={styles.container2}>
    <Text style={styles.text}>Trục tiếp</Text>
  </View>
);

const ScreenC = () => (
  <View style={styles.container3}>
    <Text style={styles.text}>Trò chơi</Text>
  </View>
);

const TopTabs = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Cho Bạn" component={ScreenA} />
      <TopTab.Screen name="Trục tiếp" component={ScreenB} />
      <TopTab.Screen name="Trò chơi" component={ScreenC} />
    </TopTab.Navigator>
  );
};

const BottomTopTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={TopTabs} options={{ headerShown: false }}/>
      <BottomTab.Screen name="Settings" component={ScreenC} options={{ headerShown: false }}/>
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
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc0cb',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default BottomTopTabs;
