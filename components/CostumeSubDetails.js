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
        <div className="text-sm">
            {fields.map(field => {
                return (
                    <div className="mb-5">
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
