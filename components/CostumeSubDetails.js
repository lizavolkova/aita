import { PrismicText } from "@prismicio/react";

export const CostumeSubDetails = ({ materials, patterns, year }) => {
    const fields = [
        {
            name: 'Year',
            value: year
        },
        {
            name: 'Materials',
            value: materials
        },
        {
            name: 'Patterns',
            value: patterns
        }
    ]

    return (
        <div className="text-sm grid grid-cols-1 md:grid-cols-3">
            {fields.map(field => {
                return (
                    <div className="mb-5 col-span-1">
                        <h6>{field.name}:</h6>
                        <p className="text-slate-400">
                            <PrismicText field={field.value} />
                        </p>
                    </div>
                )
            })}


        </div>

    );
};
