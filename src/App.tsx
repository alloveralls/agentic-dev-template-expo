import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <>
      <Text accessibilityRole="header" style={styles.title} testID="greeting">
        Expo template is ready
      </Text>
      <Text style={styles.subtitle}>Edit App.tsx to start building.</Text>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#E2E8F0',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 16,
  },
});
