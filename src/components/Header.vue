<script setup>
import Button from './Button';

defineProps({
  title: {
    type: String,
    default: 'Interesting button',
    required: true,
  },
  showAddTask: Boolean,
});

defineEmits(['toggle-add-task']);
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Свернуть' : 'Добавить'"
      color="purple"
    />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
