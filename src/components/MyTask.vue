<script setup>
defineProps({
  task: Object,
});
const emit = defineEmits(['toggle-reminder', 'delete-task']);

const handleDelete = (id) => {
  emit('delete-task', id);
};

const handleToggleReminder = (id) => {
  emit('toggle-reminder', id);
};
</script>

<template>
  <div
    @dblclick="handleToggleReminder(task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <i @click="handleDelete(task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<style scope>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid purple;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
