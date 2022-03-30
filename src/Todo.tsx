import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export const Todo = ({ todo, onRemove }: any) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onRemove(todo.id)}>
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
        <Image
          style={styles.tinyLogo}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    paddingTop: 20,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
});
