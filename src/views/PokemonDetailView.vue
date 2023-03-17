<template>
  <LoadingSpinner v-if="loading" />
  <div class="container" v-else>
    <template v-if="data">
      <h1>{{ data.name }}</h1>
      <img :src="data.sprites.front_default" alt="poke_img">
      <br>
      <button class="btn btn-outline-success mb-3" @click="addFavorite(data)" :disabled="existsFavorite(data.id)">Add Fav</button>
    </template>
    <template v-else>
      <h1>Pokemon not found</h1>
    </template>
    <br>
    <BackButton path="/pokemons" icon="bi bi-arrow-left-circle-fill" text="Pokemons" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { useGetData } from "@/hooks/getData";
import BackButton from "@/components/BackButton.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { useFavoritesStore } from '@/store/favorites';

const { loading, data, getData } = useGetData();
const route = useRoute();
const useFavorites = useFavoritesStore();
const { addFavorite, existsFavorite } = useFavorites;

onMounted(async () => {
  await getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
})
</script>
