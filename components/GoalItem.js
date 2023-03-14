import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ item, onDeleteItem, id }) {
  return (
    <Pressable onPress={onDeleteItem.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{item?.text}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goalText: {
    color: "#fff",
  },
});
