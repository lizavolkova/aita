import { Header } from "./Header";
import { Footer } from "./Footer";
import Head from "next/head";

export const Layout = ({
  navigation,
  settings,
  withHeaderDivider,
  withLogo,
  withSignUpForm,
  children,
  fullWidth,
    metaTitle,
    metaDescription,
    schema
}) => {
  return (
    <div>
        <Head>
            <title>{metaTitle}</title>
            {metaDescription && <meta name="description" content={metaDescription} />}
            {schema && <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />}
        </Head>
      <Header
        withLogo={withLogo}
        withDivider={withHeaderDivider}
        navigation={navigation}
        settings={settings}
      />
      <div
        className={`${
          fullWidth ? "" : "max-w-[1300px]"
        } mx-auto mt-28 text-slate-700`}
      >
        <main className="p-2">{children}
        </main>
        <Footer withSignUpForm={withSignUpForm} settings={settings} />
      </div>
    </div>
  );
};
