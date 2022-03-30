import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Button,
  Pressable,
  Alert,
} from "react-native";

export const AddTodo = ({ onSubmit }: any) => {
  const [value, setValue] = useState("");
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Title do cannot be empty");
    }
  };
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Enter name do..."
      />
      <Pressable style={styles.button} onPress={() => pressHandler()}>
        <Text style={styles.text}>AddTodo</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "80%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
  button: {
    backgroundColor: "#3949ab",
    borderRadius: 10,
    width: "30%",
    height: 40,
  },
  text: {
    paddingTop: 8,
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
