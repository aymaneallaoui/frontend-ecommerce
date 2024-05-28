"use client";

import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import { cn } from "@/utils/lib";
import qs from "query-string";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

export const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const SearchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = SearchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(SearchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };
  return (
    <div className=" mb-8">
      <h3 className=" text-lg font-semibold">{name}</h3>
      <hr className=" my-4" />

      <div className=" flex flex-wrap gap-2">
        {data.map((item) => (
          <div key={item.id} className=" flex items-center">
            <Button
              className={cn(
                " rounded-md text-sm text-gray-800 bg-white border-gray-400 border",
                selectedValue === item.id && "bg-gray-800 text-white"
              )}
              onClick={() => onClick(item.id)}
            >
              {item.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
