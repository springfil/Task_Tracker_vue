<script setup>
import MyHeader from "./components/Header";
import MyTasks from "./components/Tasks";
import MyAddTask from "./components/AddTask";
import { ref, onMounted } from "vue";

const tasks = ref([]);

async function fetchTasks() {
  const res = await fetch("api/tasks");
  const data = await res.json();
  return data;
}

onMounted(async () => {
  tasks.value = await fetchTasks();
  // await fetchTask();
});

async function fetchTask(id) {
  const res = await fetch(`api/tasks/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}

const showAddTask = ref(false);

function toggleAddTask() {
  showAddTask.value = !showAddTask.value;
}

async function addTask(task) {
  const res = await fetch("api/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await res.json();
  tasks.value.push(data);
}

async function deleteTask(id) {
  const res = await fetch(`api/tasks/${id}`, {
    method: "DELETE",
  });
  res.status === 200
    ? (tasks.value = tasks.value.filter((task) => task.id !== id))
    : alert("Error deleting");
}

async function toggleReminder(id) {
  const taskToToggle = await fetchTask(id);
  const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

  const res = await fetch(`api/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updateTask),
  });

  const data = await res.json();

  tasks.value = tasks.value.map((task) =>
    task.id === id ? { ...task, reminder: data.reminder } : task
  );
}
</script>

<template>
  <div class="container">
    <my-header
      @toggle-add-task="toggleAddTask"
      title="Трекер Задач"
      :showAddTask="showAddTask"
    />
    <div v-show="showAddTask">
      <my-add-task @add-task="addTask" />
    </div>
    <my-tasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
