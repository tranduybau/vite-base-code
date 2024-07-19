import React, { useState } from "react";
import isEqual from "react-fast-compare";
import { useTranslation } from "react-i18next";

import { Input } from "@/components/ui/input";

import { QueryParams, usePokemon } from "@/hooks/use-pokemon";

function PokemonList() {
  const [queryParams, setQueryParams] = useState<QueryParams>({
    limit: 10,
    offset: 0,
  });

  const { data, error, isLoading } = usePokemon(queryParams);

  const { t } = useTranslation();

  const onChangeParam = (param: keyof QueryParams, value: number | string) => {
    setQueryParams((prevParams) => ({
      ...prevParams,
      [param]: value,
    }));
  };

  if (error)
    return (
      <div>
        {t("Error")}: {error.message}
      </div>
    );

  return (
    <div className="space-y-2">
      <h1 className="text-xl font-bold">{t("Pokemon List")}</h1>

      <div className="flex items-center gap-x-1">
        <p>{t("Limit")}:</p>

        <Input
          type="number"
          className="w-20"
          value={queryParams.limit}
          onChange={(e) => onChangeParam("limit", Number(e.target.value))}
        />
      </div>

      {isLoading ? (
        <div>{t("Loading")}...</div>
      ) : (
        <ul>
          {data?.results.map((pokemon) => (
            <li key={pokemon.name} className="list-inside list-decimal">
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default React.memo(PokemonList, isEqual);
