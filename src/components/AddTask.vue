<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Задание</label>
      <input
        type="text"
        v-model="text"
        name="text"
        placeholder="Напишите задание"
      />
    </div>
    <div class="form-control">
      <label>День & Время</label>
      <input type="text" v-model="day" name="day" placeholder="Введите дату" />
    </div>
    <div class="form-control form-control-check">
      <label>Установить напоминание</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Сохранить" class="btn btn-block" />
  </form>
</template>

<script setup>
import { ref } from "vue";

const text = ref("");
const day = ref("");
const reminder = ref(false);

const emit = defineEmits(["add-task"]);

const onSubmit = (e) => {
  e.preventDefault();

  if (!text.value) {
    alert("Пожалуйста добавьте задание");
    return;
  }

  const newTask = {
    text: text.value,
    day: day.value,
    reminder: reminder.value,
  };

  emit("add-task", newTask);

  text.value = "";
  day.value = "";
  reminder.value = false;
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
