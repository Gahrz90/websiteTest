import { useState } from "react";
import Sidebar from "../Header/Sidebar/Sidebar";
import Image from "next/image";
import hamburgerIcon from "../../../../public/assets/images/hamburger.png";
import "./menuSmallDevices.css";

/**
 *
 * @returns componente jsx del menu per risoluzioni < 1024
 */

export default function MenuSmallDevices() {
  const [isVisible, setIsVisible] = useState(false);
  /* Funzione per il toggling della sidebar */
  const handleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className="small-devices">
      <button onClick={handleSidebar}>
        <Image src={hamburgerIcon} width={20} height={20} alt="menu_icon" />
      </button>
      <div
        className="overlay-menu"
        style={{
          opacity: !!isVisible ? "1" : "0",
          visibility: !!isVisible ? "visible" : "hidden",
        }}
        onClick={handleSidebar}
      >
        <Sidebar handleSidebar={handleSidebar} isVisible={isVisible} />
      </div>
    </nav>
  );
}
