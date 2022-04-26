import React from "react";
import { Nav } from "react-bootstrap";
import { ReactComponent as CloseIcon } from "../assets/icon-close-menu.svg";
import "./MenuSlider.scss";
import {
  AboutCategory,
  CareersCategory,
  CompanyCategory,
  FeaturesCategory,
} from "./NavBarItems";

export default function MenuSlider() {
  return (
    <div className="menu-slider-overlay">
      <div className="menu-slider-container">
        <div className="menu-slider-container__close">
          <CloseIcon />
        </div>

        <Nav>
          <FeaturesCategory />
          <CompanyCategory />
          <CareersCategory />
          <AboutCategory />
        </Nav>
      </div>
    </div>
  );
}
