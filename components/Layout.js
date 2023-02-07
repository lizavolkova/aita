import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({
  navigation,
  settings,
  withHeaderDivider,
  withLogo,
  withSignUpForm,
  children,
  fullWidth,
}) => {
  return (
    <div>
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
        <main className="p-2">{children}</main>
        <Footer withSignUpForm={withSignUpForm} settings={settings} />
      </div>
    </div>
  );
};
