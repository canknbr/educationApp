import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import TopicTreeCell from '../../components/TopicNode';
import TopicNodeRow from '../../components/TopicNodeRow/TopicNodeRow';
import { groupByLevel } from '../../utils/levels';
import topic from '../../assets/data/topic';
const levels = groupByLevel(topic);
const ModuleScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={levels}
        renderItem={({ item }) => (
          <TopicNodeRow>
            {item.map(node => (
              <TopicTreeCell key={node.id} {...node} />
            ))}
          </TopicNodeRow>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
});
export default ModuleScreen;
