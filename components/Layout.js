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
      <div>
          <Header
              withLogo={withLogo}
              withDivider={withHeaderDivider}
              navigation={navigation}
              settings={settings}
          />
          <div className={`${fullWidth ? '' : 'max-w-[1300px]'} text-slate-700 mx-auto mt-28`}>
              <main>{children}</main>
              <Footer withSignUpForm={withSignUpForm} settings={settings} />
          </div>
      </div>

  );
};
