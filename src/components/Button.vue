<script setup>
defineProps({
  text: {
    type: String,
  },
  color: {
    type: String,
  },
});

defineEmits(['btn-click']);
</script>

<template>
  <button
    @click="$emit('btn-click')"
    :style="{ background: color }"
    class="btn"
  >
    {{ text }}
  </button>
</template>
