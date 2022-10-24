import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    setTasks([
      ...tasks,
      { id: tasks.length, title: newTaskTitle, done: false },
    ]);
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const newTasks = [...tasks];

    const taskFound = newTasks.find((task) => task.id === id);

    if (!taskFound) return;

    taskFound.done = !taskFound.done;

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const deleteTask = tasks.filter((tasks) => tasks.id !== id);

    setTasks(deleteTask);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
