import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const ScreenA: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Cho Bạn</Text>
  </View>
);

const ScreenB: React.FC = () => (
  <View style={styles.container2}>
    <Text style={styles.text}>Trực tiếp</Text>
  </View>
);

const ScreenC: React.FC = () => (
  <View style={styles.container3}>
    <Text style={styles.text}>Trò chơi</Text>
  </View>
);

const TopTabs: React.FC = () => {
  return (
    <TopTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: string;

          switch (route.name) {
            case 'Cho Bạn':
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            case 'Trực tiếp':
              iconName = focused ? 'videocam' : 'videocam-outline';
              break;
            case 'Trò chơi':
              iconName = focused ? 'game-controller' : 'game-controller-outline';
              break;
            default:
              iconName = 'help-circle-outline';
          }

          return <Ionicons name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarShowIcon: true,
        tabBarStyle: { backgroundColor: 'white', height: 60 },
        tabBarItemStyle: { flexDirection: 'row', justifyContent: 'center' }, // Xếp icon và text ngang
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', marginLeft: 5 }, // Đẩy text sang phải
      })}
    >
      <TopTab.Screen name="Cho Bạn" component={ScreenA} />
      <TopTab.Screen name="Trực tiếp" component={ScreenB} />
      <TopTab.Screen name="Trò chơi" component={ScreenC} />
    </TopTab.Navigator>
  );
};

const BottomTopTabs: React.FC = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Trang chủ':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Bạn bè':
              iconName = focused ? 'people' : 'people-outline';
              break;
            case 'Chat':
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              break;
            case 'Tài khoản':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'help-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <BottomTab.Screen name="Trang chủ" component={TopTabs} />
      <BottomTab.Screen name="Bạn bè" component={TopTabs} />
      <BottomTab.Screen name="Chat" component={TopTabs} />
      <BottomTab.Screen name="Tài khoản" component={TopTabs} />
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
