import {defineStore} from 'pinia'
import {computed, ref} from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
    const favorites = ref([]);

    const items = localStorage.getItem('favorites');

    if (items) {
        favorites.value = JSON.parse(items);
    }

    const addFavorite = (favorite) => {
        const pokemon = {id: favorite.id, name: favorite.name, img: favorite.sprites.front_default};

        if (favorites.value.length === 0) {
            favorites.value.push(pokemon);
            localStorage.setItem('favorites', JSON.stringify(favorites.value));
            return;
        }

        if (favorites.value.find(item => item.id === pokemon.id)) {
            return;
        }

        favorites.value.push(pokemon);
        localStorage.setItem('favorites', JSON.stringify(favorites.value));
    }

    const existsFavorite = (id) => favorites.value.find(item => item.id === id);

    const removeFavorite = (id) => {
        favorites.value = favorites.value.filter(fav => fav.id !== id);
        localStorage.setItem('favorites', JSON.stringify(favorites.value));
    }

    return {
        favorites,
        addFavorite,
        existsFavorite,
        removeFavorite,
    }
});
