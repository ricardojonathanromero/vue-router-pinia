<script setup>
import { onMounted } from 'vue';
import { useGetData } from '@/hooks/getData';
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const { loading, data, getData, currentUrl } = useGetData();


onMounted(async () => {
  await getData('https://pokeapi.co/api/v2/pokemon');
})

</script>

<template>
  <h1>Pokemons</h1>
  <LoadingSpinner v-if="loading" />
  <div v-else>
    <div v-if="data">
      <ul class="list-group">
        <li class="list-group-item" v-for="poke in data.results" :key="poke">
          <RouterLink :to="`/pokemons/${poke.name}`">{{ poke.name }}</RouterLink>
        </li>
      </ul>
      <br>
      <button class="btn btn-outline-secondary me-2" @click="getData(data.previous)" :disabled="!data.previous">Previous</button>
      <button class="btn btn-outline-secondary" @click="getData(data.next)" :disabled="!data.next">Next</button>
    </div>
    <div v-else>
      <h1>No se encontraron datos</h1>
    </div>
  </div>
</template>
