import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import SubscriptionsScreen from './src/SubscriptionsScreen';
import StatsScreen from './src/StatsScreen';
import GuidesScreen from './src/GuidesScreen';

const Tab = createBottomTabNavigator();
const PRIMARY = '#6366F1';

const TAB_ICONS = {
  '내 구독': ['card', 'card-outline'],
  '절약 현황': ['stats-chart', 'stats-chart-outline'],
  '취소 가이드': ['book', 'book-outline'],
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: PRIMARY,
            tabBarInactiveTintColor: '#9CA3AF',
            tabBarStyle: {
              borderTopColor: '#F3F4F6',
              paddingBottom: 4,
              height: 60,
            },
            tabBarIcon: ({ focused, color, size }) => {
              const [active, inactive] = TAB_ICONS[route.name];
              return <Ionicons name={focused ? active : inactive} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="내 구독" component={SubscriptionsScreen} />
          <Tab.Screen name="절약 현황" component={StatsScreen} />
          <Tab.Screen name="취소 가이드" component={GuidesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
