<template>
  <button @click="$emit('btn-click')" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>


<script setup>
import { ref } from "vue";

const props = defineProps({
  text: {
    type: String,
  },
  color: {
    type: String,
  },
});

const emit = defineEmits(["btn-click"])
  
</script>

<!-- <script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
};
</script> -->