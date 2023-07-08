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

<script setup>
import MyHeader from "./components/Header";
import MyTasks from "./components/Tasks";
import MyAddTask from "./components/AddTask";
import { ref } from "vue";

const tasks = ref([
  {
    id: 1,
    text: "Сделать роуты",
    day: "5 июля в 23:00",
    reminder: true,
  },
  {
    id: 2,
    text: "Почитать доку",
    day: "6 июля в 00:00",
    reminder: true,
  },
  {
    id: 3,
    text: "Посмотреть про Vuex",
    day: "7 июля в 10:00",
    reminder: false,
  },
]);
const showAddTask = ref(false);
// export default {
//   name: "App",
//   components: {
//     Header,
//     Tasks,
//     AddTask
//   },
// data() {
//   return {
//     tasks: [],
//     showAddTask: false,
//   };
// },

function toggleAddTask() {
  showAddTask.value = !showAddTask.value;
}

function addTask(task) {
  tasks.value.push(task);
}

function deleteTask(id) {
  // this.tasks = this.tasks.filter((task) => task.id !== id);
  tasks.value = tasks.value.filter((task) => task.id !== id);
}

function toggleReminder(id) {
  for (let i = 0; i < tasks.value.length; i++) {
    if (tasks.value[i].id === id) {
      tasks.value[i].reminder = !tasks.value[i].reminder;
      break;
    }
  }
}
// methods: {
//   toggleAddTask() {
//     this.showAddTask = !this.showAddTask
//   },
//   addTask(task) {
//     this.tasks = [...this.tasks, task]
//   },
//   deleteTask(id) {
//     this.tasks = this.tasks.filter((task) => task.id !== id);
//     // console.log("task", id);
//   },
//   toggleReminder(id) {
//     // this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
//     for (let i = 0; i < this.tasks.length; i++) {
//       if (this.tasks[i].id === id) {
//         this.tasks[i].reminder = !this.tasks[i].reminder;
//         break;
//       }
//     }
//     // console.log("toggle", id);
//   },
// },
// tasks.value = [
//   {
//     id: 1,
//     text: "Сделать роуты",
//     day: "5 июля в 23:00",
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: "Почитать доку",
//     day: "6 июля в 00:00",
//     reminder: true,
//   },
//   {
//     id: 3,
//     text: "Посмотреть про Vuex",
//     day: "7 июля в 10:00",
//     reminder: false,
//   },
// ];
</script>

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
