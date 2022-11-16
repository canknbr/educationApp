import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
interface TopicNodeProps {
  id: string;
  title: string;
  icon: string;
  progress: number;
  level: number;
}
const TopicNode = ({ title, icon, level, progress }: TopicNodeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          style={styles.image}
          source={{
            uri: icon,
          }}
        />
      </View>
      <Text style={styles.title}>Variables</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
    width: '30%',
    maxWidth: 150,
  },
  circle: {
    width: '100%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    backgroundColor: Colors.light.tertiary,
  },
  image: {
    width: '50%',
    aspectRatio: 1,
  },
  title: {
    marginVertical: 10,
    fontsize: 16,
    fontweight: '600',
  },
});
export default TopicNode;
