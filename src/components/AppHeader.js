import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Menu } from "../assets/icon-menu.svg";
import "./AppHeader.scss";

export default function AppHeader() {
  return (
    <div className="app-header-container">
      <div className="app-header-container__logo">
        <Logo />
      </div>

      <div className="app-header-container__menu">
        <Menu />
      </div>
    </div>
  );
}
