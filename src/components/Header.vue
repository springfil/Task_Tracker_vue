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

<script setup>
import Button from "./Button";

const props = defineProps({
  title: {
    type: String,
    default: "Interesting button",
  },
  showAddTask: Boolean,
});

const emit = defineEmits(["toggle-add-task"]);
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
