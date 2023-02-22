// https://github.com/tailwindtoolbox/Responsive-Header/blob/master/index.html
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { Logo } from "./Logo";
import React from "react";

const NavItem = ({ children }) => {
  return (
    <li className="text-md p-5 font-sans uppercase text-slate-800 lg:mr-12 lg:p-0">
      {children}
    </li>
  );
};

export const Header = ({ navigation, settings }) => {
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  return (
    <div className="flex grid grid-cols-1 flex-wrap gap-5">
      <nav className="fixed top-0 z-10 flex w-full flex-wrap items-center justify-between bg-white p-2">
        <div className="mr-6 flex flex-shrink-0 items-center text-white">
          <Logo logoImg={settings.data.logoImg} />
        </div>

        <div
          className="block lg:hidden absolute right-0"
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 text-black"
          >
            <svg
              className="h-7 w-7 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full flex-grow pt-6 lg:block lg:flex lg:w-auto lg:items-center lg:pt-0 ${
            showMobileNav ? "" : "hidden"
          }`}
          id="nav-content"
        >
          <ul className="list-reset flex-1 items-center justify-end text-center lg:flex lg:text-start">
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
