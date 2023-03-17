<template>
  <h1>Favoritos</h1>
  <br>
  <div class="container" v-if="favorites.length > 0">
    <ul class="list-group">
      <li v-for="favorite in favorites" :key="favorite.id" class="list-group-item">
        <span>{{ favorite.name }}</span>
        <img :src="favorite.img" alt="poke_img">
        <RouterLink :to="`/pokemons/${favorite.name}`" class="btn btn-secondary me-2">info</RouterLink>
        <button class="btn btn-danger" @click="removeFavorite(favorite.id)">remove</button>
      </li>
    </ul>
  </div>
  <div class="container" v-else>
    <h3>No hay favoritos</h3>
  </div>
</template>

<script setup>
import { useFavoritesStore } from '@/store/favorites';
import { storeToRefs } from 'pinia';

const useFavorites = useFavoritesStore();
const { removeFavorite } = useFavorites;
const { favorites } = storeToRefs(useFavorites);
</script>

<style scoped>
</style>
