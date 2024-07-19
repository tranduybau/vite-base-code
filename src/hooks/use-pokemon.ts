import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";

interface Pokemon {
  name: string;
}

interface PokemonResponse {
  results: Pokemon[];
}

export interface QueryParams {
  [key: string]: number | string;
}

const getPokemonList = async (
  params: QueryParams,
): Promise<PokemonResponse> => {
  let apiUrl = import.meta.env.VITE_API_ENDPOINT;

  const queryParams = new URLSearchParams(
    params as Record<string, string>,
  ).toString();

  if (queryParams) {
    apiUrl += `?${queryParams}`;
  }

  const { data } = await axios.get<PokemonResponse>(apiUrl);
  return data;
};

export const usePokemon = (
  params: QueryParams,
): UseQueryResult<PokemonResponse, Error> => {
  return useQuery<PokemonResponse, Error>({
    queryKey: ["pokemon", params],
    queryFn: () => getPokemonList(params),
  });
};
