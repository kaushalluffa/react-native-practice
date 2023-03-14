import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

function GoalInput({ onAddGoal, visible, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredValue) {
    setEnteredGoalText(enteredValue);
  }
  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.jpeg")} style={styles.image} />
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#f31282" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              // disabled={!enteredGoalText.trim().length}
              title="Add Goal"
              onPress={addGoalHandler}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
    flex: 1,
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    color: "white",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
