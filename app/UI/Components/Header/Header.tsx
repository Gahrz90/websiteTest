"use client";

import facebookIcon from "../../../../public/assets/images/facebook.png";
import instagramIcon from "../../../../public/assets/images/instagram.png";
import mailIcon from "../../../../public/assets/images/email.png";

import "./header.css";

/**
 * componente che renderizza l'header della pagina
 * @returns jsx element
 */

import Link from "next/link";
import Image from "next/image";
import MenuSmallDevices from "../MenuSmallDevices/MenuSmallDevices";

export default function Header() {
  return (
    <header>
      <h1 className="header-logo-text">Surfers Co</h1>
      <MenuSmallDevices />
      <nav className="desktop-devices"></nav>
      <div className="socials desktop-devices">
        <Link href={"#"}>
          <Image
            src={facebookIcon}
            alt="facebook_icon"
            width={32}
            height={32}
          />
        </Link>
        <Link href={"#"}>
          <Image
            src={instagramIcon}
            alt="instagram_icon"
            width={32}
            height={32}
          />
        </Link>
        <Link href={"#"}>
          <Image src={mailIcon} alt="contact_icon" width={32} height={32} />
        </Link>
      </div>
    </header>
  );
}
