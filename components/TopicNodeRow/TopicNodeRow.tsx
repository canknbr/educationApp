import { View, Text } from 'react-native';
import React from 'react';
interface TopicNodeRowProps {
  children: React.ReactNode;
}
const TopicNodeRow = ({ children }: TopicNodeRowProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      {children}
    </View>
  );
};

export default TopicNodeRow;
