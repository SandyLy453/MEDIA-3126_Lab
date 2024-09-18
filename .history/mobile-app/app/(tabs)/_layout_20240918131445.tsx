import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Mochi"
        options={{
          title: 'mochi',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="dot-circle" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Sandwich"
        options={{
          title: 'sandwich',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="smileo" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
    
    
  );
}



