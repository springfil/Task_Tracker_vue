<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" title="Трекер Задач" />
    <div v-show="showAddTask">
      <AddTask @add-task="addTask"/>
    </div>
    <Tasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
    addTask(task) {
      this.tasks = [...this.tasks, task]
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      // console.log("task", id);
    },
    toggleReminder(id) {
      // this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === id) {
          this.tasks[i].reminder = !this.tasks[i].reminder;
          break;
        }
      }
      // console.log("toggle", id);
    },
  },
  created() {
    this.tasks = [
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
    ];
  },
};
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
