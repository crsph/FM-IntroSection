import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { ReactComponent as CloseIcon } from "../assets/icon-close-menu.svg";
import { ReactComponent as MenuIcon } from "../assets/icon-menu.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "./AppHeader.scss";
import {
  AboutCategory,
  CareersCategory,
  CompanyCategory,
  FeaturesCategory,
} from "./NavBarItems";

export default function AppHeader() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <div className="app-header-container">
        <div className="app-header-container__logo">
          <Logo />
        </div>

        <div className="app-header-container__menu">
          <MenuIcon onClick={toggleMenu} />
        </div>
      </div>

      <div
        className={
          isMenuVisible ? "menu-slider-overlay active" : "menu-slider-overlay"
        }
      />

      <div
        className={
          isMenuVisible
            ? "menu-slider-container active"
            : "menu-slider-container"
        }
      >
        <div className="menu-slider-container__close">
          <CloseIcon onClick={toggleMenu} />
        </div>

        <Nav>
          <FeaturesCategory />
          <CompanyCategory />
          <CareersCategory />
          <AboutCategory />
        </Nav>
      </div>
    </>
  );
}
