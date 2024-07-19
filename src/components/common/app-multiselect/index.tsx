import React from "react";
import isEqual from "react-fast-compare";
import { MultiSelect, Option } from "react-multi-select-component";

import AppIcon from "@/components/common/app-icon";

import { cn } from "@/lib/utils";

import styles from "./custom-style.module.scss";

interface IDefaultItemRendererProps {
  checked: boolean;
  option: Option;
  disabled?: boolean;
  onClick: () => void;
}

function ItemRenderer({
  checked,
  option,
  onClick,
  disabled,
}: IDefaultItemRendererProps) {
  return (
    <button
      type="button"
      className={cn("item-renderer", disabled && "disabled")}
      onClick={onClick}
    >
      {checked && (
        <AppIcon
          src="/src/assets/react.svg#id"
          className="w-4"
          width={256}
          height={228}
          viewBox="0 0 256 228"
        />
      )}

      <span className={cn(checked ? "ml-2" : "ml-6")}>{option.label}</span>
    </button>
  );
}

interface IAppMultiselectProps {
  options: Option[];
  placeholder: string;
  searchPlaceholder: string;
  value: Option[];
  onChange: (value: Option[]) => void;
}

function AppMultiselect(props: IAppMultiselectProps) {
  const { options, value, onChange, placeholder, searchPlaceholder } = props;

  return (
    <MultiSelect
      options={options}
      value={value}
      onChange={onChange}
      labelledBy="Select"
      className={styles.customMultiselect}
      ItemRenderer={ItemRenderer}
      overrideStrings={{
        allItemsAreSelected: "All items are selected.",
        clearSearch: "Clear Search",
        clearSelected: "Clear Selected",
        noOptions: "No options",
        search: searchPlaceholder,
        selectAll: "Select All",
        selectAllFiltered: "Select All (Filtered)",
        selectSomeItems: placeholder,
        create: "Create",
      }}
    />
  );
}

export default React.memo(AppMultiselect, isEqual);
