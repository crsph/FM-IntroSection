import React from "react";
import { Nav } from "react-bootstrap";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { LoginButton, RegisterButton } from "./Buttons";
import "./NavBar.scss";
import {
  AboutCategory,
  CareersCategory,
  CompanyCategory,
  FeaturesCategory,
} from "./NavBarItems";

export default function NavBar() {
  return (
    <>
      <div className="nav-bar-container">
        <div className="logo-container">
          <Logo />
        </div>

        <Nav>
          <FeaturesCategory />
          <CompanyCategory />
          <CareersCategory />
          <AboutCategory />
        </Nav>

        <div className="button-container">
          <LoginButton />
          <RegisterButton />
        </div>
      </div>
    </>
  );
}
