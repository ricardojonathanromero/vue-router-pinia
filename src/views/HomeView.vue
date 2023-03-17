<script setup>
import { useCounterStore } from '@/store/counter';
import {storeToRefs} from "pinia";

const useCounter = useCounterStore();
const { increase } = useCounter;
const { count, double } = storeToRefs(useCounter);
</script>

<template>
  <h1>Home</h1>
  <h3>Counter: {{ count }}</h3>
  <h4>Double: {{ double }}</h4>
  <button @click="increase()">Increase</button>
</template>
