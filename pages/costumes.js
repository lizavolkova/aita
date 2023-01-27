import {Layout} from "../components/Layout";
import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import {Bounded} from "../components/Bounded";
import {createClient} from "../prismicio";
import {components} from "../slices";
import {SliceZone} from "@prismicio/react";
import { CostumePreviewComponent } from "../components/CostumePreview";
import { ImageGalleryComponent } from "../components/ImageGallery";
import CostumeDetails from "../slices/CostumeDetails";

const Costumes = ({ page, costumes, navigation, settings }) => {
    return (
        <Layout
            withHeaderDivider={false}
            navigation={navigation}
            settings={settings}
        >
            <Head>
                <title>{prismicH.asText(settings.data.name)}</title>
            </Head>
            <Bounded size="widest">
                <SliceZone slices={page.data.slices} components={components} />

                <ImageGalleryComponent>
                    {costumes.map(costume => {
                        return (
                            <CostumePreviewComponent {...costume} />
                        )
                    })}
                </ImageGalleryComponent>

            </Bounded>
        </Layout>
    );
};

export default Costumes;

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });

    const page = await client.getByUID("page", "costumes");

    const costumes = await client.getAllByType("costume", {
        orderings: [
            { field: "my.costume.year", direction: "desc" }
        ],
    });
    const navigation = await client.getSingle("navigation");
    const settings = await client.getSingle("settings");

    return {
        props: {
            page,
            costumes,
            navigation,
            settings,
        },
    };
}
