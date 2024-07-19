import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import AppIcon from "@/components/common/app-icon";
import AppMultiselect from "@/components/common/app-multiselect";
import PokemonList from "@/components/pokemon-list";
import { Button } from "@/components/ui/button";

import LOCAL_STORAGE_KEYS from "@/constants/local-storage-keys";
import i18n from "@/languages";
import { Language } from "@/types/locales";

function Homepage() {
  const { t } = useTranslation();

  const onChangeLocale = useCallback(() => {
    const locale = localStorage.getItem(LOCAL_STORAGE_KEYS.LANG);
    let lng = "";
    if (locale === Language.EN) {
      lng = Language.VI;
    } else {
      lng = Language.EN;
    }

    localStorage.setItem(LOCAL_STORAGE_KEYS.LANG, lng);
    i18n.changeLanguage(lng);
  }, []);

  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
    { label: "Apple 🍎", value: "apple" },
    { label: "Banana 🍌", value: "banana" },
    { label: "Blueberry 🔵", value: "blueberry" },
    { label: "Peach 🍑", value: "peach" },
    { label: "Pomegranate 🍇", value: "pomegranate" },
    { label: "Watermelon 🍉", value: "watermelon" },
    { label: "Pineapple 🍍", value: "pineapple" },
  ];

  const [selected, setSelected] = useState<{ label: string; value: string }[]>(
    [],
  );

  return (
    <section className="space-y-10 bg-neutral-300 p-10">
      <div>
        <p>{t("Made by BauTD")}</p>

        <Button
          type="button"
          variant="secondary"
          tabIndex={-1}
          onClick={onChangeLocale}
        >
          Change Locale
        </Button>
      </div>

      <PokemonList />

      <AppIcon
        src="/src/assets/react.svg#id"
        className="w-4"
        width={256}
        height={228}
        viewBox="0 0 256 228"
      />

      <div className="space-y-2">
        <h1 className="text-xl font-bold">Select Fruits</h1>

        <AppMultiselect
          options={options}
          value={selected}
          onChange={setSelected}
          placeholder="Select fruits"
          searchPlaceholder="Search fruits"
        />

        <ul>
          {selected.map((option) => (
            <li key={option.value} className="block">
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Homepage;
