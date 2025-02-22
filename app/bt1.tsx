import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator();

const ScreenA: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Trang chủ</Text>
  </View>
);

const ScreenB: React.FC = () => (
  <View style={styles.container2}>
    <Text style={styles.text}>Bạn bè</Text>
  </View>
);

const ScreenC: React.FC = () => (
  <View style={styles.container3}>
    <Text style={styles.text}>Chat</Text>
  </View>
);

const ScreenD: React.FC = () => (
  <View style={styles.container4}>
    <Text style={styles.text}>Tài khoản</Text>
  </View>
);

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
      <BottomTab.Screen name="Trang chủ" component={ScreenA} />
      <BottomTab.Screen name="Bạn bè" component={ScreenB} />
      <BottomTab.Screen name="Chat" component={ScreenC} />
      <BottomTab.Screen name="Tài khoản" component={ScreenD} />
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
    backgroundColor: 'red',
  },
  container4: {
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

export default BottomTopTabs;
