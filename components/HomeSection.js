import React from 'react'
import {PrismicRichText} from "@prismicio/react";

export const HomeSection = ({ children, title }) => (
    <section className="container mx-auto pb-40">
        <div className="text-center mb-10">
            <PrismicRichText field={title} />
        </div>
        {children}
    </section>
)
