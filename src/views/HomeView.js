import React from "react";
import { ReactComponent as AudiophileLogo } from "../assets/client-audiophile.svg";
import { ReactComponent as DatabizLogo } from "../assets/client-databiz.svg";
import { ReactComponent as MakerLogo } from "../assets/client-maker.svg";
import { ReactComponent as MeetLogo } from "../assets/client-meet.svg";
import ImageHeroDesktop from "../assets/image-hero-desktop.png";
import ImageHeroMobile from "../assets/image-hero-mobile.png";
import NavBar from "../components/NavBar";
import "./HomeView.scss";

export default function HomeView() {
  return (
    <>
      <NavBar />

      <div className="home-content-container">
        <div className="left-content-container">
          <h1>Make remote work</h1>

          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <button>Learn more</button>

          <div className="client-logo-container">
            <DatabizLogo />
            <AudiophileLogo />
            <MeetLogo />
            <MakerLogo />
          </div>
        </div>

        <div className="right-content-container">
          <img className="right-content-container__image-hero-desktop" src={ImageHeroDesktop} alt="Hero Desktop" />
          <img className="right-content-container__image-hero-mobile" src={ImageHeroMobile} alt="Hero Mobile" />
        </div>
      </div>
    </>
  );
}
