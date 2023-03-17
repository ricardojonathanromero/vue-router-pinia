import { defineStore } from 'pinia';
import {computed, ref} from "vue";

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)

    const increase = () => count.value++;

    const double = computed(() => count.value * 2);

   return {
       count,
       increase,
       double,
   }
});
