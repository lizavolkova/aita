// https://github.com/tailwindtoolbox/Responsive-Header/blob/master/index.html
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { Logo } from "./Logo";
import React from "react";

const NavItem = ({ children }) => {
  return (
    <li className="font-sans uppercase text-md text-slate-800 p-5 lg:p-0 lg:mr-12">{children}</li>
  );
};

export const Header = ({ withLogo = true, navigation, settings }) => {
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  return (

      <div className="grid grid-cols-1 gap-5 flex flex-wrap">
        <nav className="flex items-center justify-between flex-wrap bg-white p-2 fixed w-full z-10 top-0">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Logo logoImg={settings.data.logoImg} />
          </div>

          <div className="block lg:hidden" onClick={() => setShowMobileNav(!showMobileNav)}>
            <button id="nav-toggle"
                    className="flex items-center px-3 py-2 text-black">
                <svg className="fill-current h-7 w-7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
          </div>

          <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0 ${showMobileNav ? '' : 'hidden'}`} id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center text-center lg:text-start">
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

      </div>

  );
};
