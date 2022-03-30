import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { AddTodo } from "./src/AddTodo";
import { Navbar } from "./src/Navbar";
import { Todo } from "./src/Todo";

const App = () => {
  const [todos, setTodos] = useState<any>([
    // {
    //   id: 1,
    //   title: "Test1",
    // },
    // {
    //   id: 2,
    //   title: "Test2",
    // },
    // {
    //   id: 3,
    //   title: "Test3",
    // },
    // {
    //   id: 4,
    //   title: "Test4",
    // },
    // {
    //   id: 5,
    //   title: "Test5",
    // },
    // {
    //   id: 6,
    //   title: "Test6",
    // },
    // {
    //   id: 7,
    //   title: "Test7",
    // },
    // {
    //   id: 8,
    //   title: "Test8",
    // },
    // {
    //   id: 9,
    //   title: "Test9",
    // },
    // {
    //   id: 10,
    //   title: "Test10",
    // },
  ]);

  const addTodo = (title: string) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title,
    // };
    setTodos((prevTodos: any) => [
      ...prevTodos,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  };
  const removeTodo = (id: number) => {
    setTodos((perv: any) => perv.filter((todo: any) => todo.id !== id));
  };
  return (
    <ScrollView>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  todo: {
    paddingTop: 30,
  },
});

export default App;
