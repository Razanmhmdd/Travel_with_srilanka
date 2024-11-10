import React, { useState } from "react";
import logo from "/assets/img/logo/LOGO.png";
import { NavLink, Link } from "react-router-dom";

export default function NavbarActionButton() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      {/*<!-- Navbar with CTA -->*/}
      <header className="relative z-20 w-full border-b shadow-lg border-slate-200 bg-white/90 shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700">
            <button>
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </button>
            {/* Mobile menu toggle */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0"
                  : ""
              }`}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
                <span className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
                <span className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
              </div>
            </button>
            {/* Navigation links */}
            <ul
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:bg-white/0 lg:px-0 lg:py-0 lg:opacity-100 ${
                isToggleOpen ? "visible opacity-100 backdrop-blur-sm" : "invisible opacity-0"
              }`}
            >
              <li className="flex items-stretch">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center gap-2 py-4 text-lg transition-colors duration-300 hover:text-amber-500 focus:text-amber-600 lg:px-8 ${
                      isActive ? "text-amber-600" : ""
                    }`
                  }
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="flex items-stretch">
                <NavLink
                  to="/destinations"
                  className={({ isActive }) =>
                    `flex items-center gap-2 py-4 text-lg transition-colors duration-300 hover:text-amber-500 focus:text-amber-600 lg:px-8 ${
                      isActive ? "text-amber-600" : ""
                    }`
                  }
                >
                  <span>Destinations</span>
                </NavLink>
              </li>
              <li className="flex items-stretch">
                <NavLink
                  to="/packages"
                  className={({ isActive }) =>
                    `flex items-center gap-2 py-4 text-lg transition-colors duration-300 hover:text-amber-500 focus:text-amber-600 lg:px-8 ${
                      isActive ? "text-amber-600" : ""
                    }`
                  }
                >
                  <span>Packages</span>
                </NavLink>
              </li>
              <li className="flex items-stretch">
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `flex items-center gap-2 py-4 text-lg transition-colors duration-300 hover:text-amber-500 focus:text-amber-600 lg:px-8 ${
                      isActive ? "text-amber-600" : ""
                    }`
                  }
                >
                  <span>Gallery</span>
                </NavLink>
              </li>
              <li className="flex items-stretch">
                <NavLink
                  to="/aboutus"
                  className={({ isActive }) =>
                    `flex items-center gap-2 py-4 text-lg transition-colors duration-300 hover:text-amber-500 focus:text-amber-600 lg:px-8 ${
                      isActive ? "text-amber-600" : ""
                    }`
                  }
                >
                  <span>About Us</span>
                </NavLink>
              </li>
            </ul>
            {/* Contact Us button */}
            <div className="flex items-center px-6 ml-auto lg:ml-0 lg:p-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-10 gap-2 px-5 text-lg font-bold tracking-wide text-white transition duration-300 rounded shadow-md whitespace-nowrap bg-amber-500 shadow-emerald-200 hover:bg-amber-600"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with CTA -->*/}
    </>
  );
}
