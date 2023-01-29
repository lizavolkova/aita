import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({
  navigation,
  settings,
  withHeaderDivider,
  withLogo,
  withSignUpForm,
  children,
    fullWidth
}) => {
  return (
    <div className={`${fullWidth ? '' : 'max-w-[1300px]'} text-slate-700 mx-auto`}>
      <Header
        withLogo={withLogo}
        withDivider={withHeaderDivider}
        navigation={navigation}
        settings={settings}
      />
      <main>{children}</main>
      <Footer withSignUpForm={withSignUpForm} settings={settings} />
    </div>
  );
};
