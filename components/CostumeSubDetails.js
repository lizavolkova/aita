import { PrismicText } from "@prismicio/react";

export const CostumeSubDetails = ({ materials, patterns, year }) => {
  const fields = [
    {
      name: "Year",
      value: year,
    },
    {
      name: "Materials",
      value: materials,
    },
    {
      name: "Patterns",
      value: patterns,
    },
  ];

  return (
    <div className="grid grid-cols-1 text-sm md:grid-cols-3">
      {fields.map((field) => {
        return (
          <div className="col-span-1 mb-5" key={field.name}>
            <h6>{field.name}:</h6>
            <p className="text-slate-400">
              <PrismicText field={field.value} />
            </p>
          </div>
        );
      })}
    </div>
  );
};
