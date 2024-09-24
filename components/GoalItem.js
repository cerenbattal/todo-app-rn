import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = ({ itemObject, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={() => {
          onDeleteItem(itemObject.item.id);
        }}
        style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.goalItemText}>{itemObject.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalItemText: {
    padding: 8,
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
});
