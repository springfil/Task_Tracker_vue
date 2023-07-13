<script setup>
import Task from './Task';

defineProps({
  tasks: Array,
});

const emit = defineEmits(['toggle-reminder', 'delete-task']);

const handleToggleReminder = (id) => {
  emit('toggle-reminder', id);
};

const handleDeleteTask = (id) => {
  emit('delete-task', id);
};
</script>

<template>
  <div :key="task.id" v-for="task in tasks">
    <Task
      @toggle-reminder="handleToggleReminder(task.id)"
      @delete-task="handleDeleteTask(task.id)"
      :task="task"
    />
  </div>
</template>
