export interface PokemonListResponse {
    count: number;
    next?: string;
    previous?: string;
    results: PokemonResponse[];
}

export interface PokemonResponse {
    name: string;
    url: string;
}


export interface SmallPokemon extends PokemonResponse {
    id: string;
    img: string;
}