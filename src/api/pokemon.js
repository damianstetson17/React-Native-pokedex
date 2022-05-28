import { BASE_URL_API } from "../utils/constants";

export async function getPokemonsApi() {
  try {
    const URL = `${BASE_URL_API}/pokemon?limit=20&offset=0`;
    const response = await fetch(URL);
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsApi(urlPokemon) {
  try {
    const response = await fetch(urlPokemon);
    return await response.json();
  } catch (error) {
    throw error;
  }
}
