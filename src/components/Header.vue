<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text="Добавить" color="purple" />
    <!-- <Button text = 'Zopa' color = 'purple'/>
        <Button text = 'Nani' color = 'blue'/> -->
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Interesting button",
    },
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
