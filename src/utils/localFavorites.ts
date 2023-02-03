export interface FavoritePokemon {
    id: number,
    name: string
}


const getFavorites = (): FavoritePokemon[] => JSON.parse(localStorage?.getItem("favorites") || "[]")

const toggleFavorite = (poke: FavoritePokemon) => {
    let favorites = getFavorites();
    const { id } = poke;
    const ids = favorites.map(({ id }) => (id))

    if (ids.includes(id)) {
        favorites = favorites.filter(({ id: pokeId }) => pokeId !== id);
    } else {
        favorites.push(poke);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites))
}

const isPokemonFavorite = (id: number): boolean => {
    if (typeof window === "undefined") return false;
    const ids = getFavorites().map(({ id }) => (id))
    return ids.includes(id)
}

export default {
    toggleFavorite,
    getFavorites,
    isPokemonFavorite
}