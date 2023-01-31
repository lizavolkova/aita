// https://github.com/tailwindtoolbox/Responsive-Header/blob/master/index.html
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";

import { Bounded } from "./Bounded";
import { Logo } from "./Logo";

const NavItem = ({ children }) => {
  return (
    <li className="font-sans uppercase text-md text-slate-800 mr-12">{children}</li>
  );
};

export const Header = ({ withLogo = true, navigation, settings }) => {
  return (

      <div className="grid grid-cols-1 gap-5 flex flex-wrap">
        <nav className="flex items-center justify-between flex-wrap bg-white p-2 fixed w-full z-10 top-0">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Logo logoImg={settings.data.logoImg} />
          </div>

          <div className="block lg:hidden">
            <button id="nav-toggle"
                    className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>

          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
               id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              {navigation.data?.links.map((item) => (
                  <NavItem key={prismicH.asText(item.label)}>
                    <PrismicLink field={item.link}>
                      <PrismicText field={item.label} />
                    </PrismicLink>
                  </NavItem>
              ))}
            </ul>
          </div>
        </nav>


        {/*<nav>*/}
        {/*  */}
        {/*</nav>*/}
        {/*<nav>*/}

        {/*</nav>*/}

      </div>

  );
};
