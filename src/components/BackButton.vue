<template>
  <button class="btn btn-outline-primary" @click="pushPath">
    <i :class="props.icon" class="me-2"></i>{{ props.text }}
  </button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  path: {
    type: String,
    default: '/',
  },
  icon: {
    type: String,
    default: 'bi bi-house-fill',
  },
  text: {
    type: String,
    default: 'Go Home'
  }
});

const pushPath = () => router.push(props.path);
</script>

<style scoped>

</style>
