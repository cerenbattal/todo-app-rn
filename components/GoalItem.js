import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = ({ itemObject, onDeleteItem }) => {
  return (
    <Pressable
      onPress={() => {
        onDeleteItem(itemObject.item.id);
      }}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{itemObject.item.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalItemText: {
    color: 'white',
  },
});
