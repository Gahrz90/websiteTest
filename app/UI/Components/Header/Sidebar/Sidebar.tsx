import Link from "next/link";
import Image from "next/image";

import facebookIcon from "../../../../../public/assets/images/facebook.png";
import instagramIcon from "../../../../../public/assets/images/instagram.png";
import mailIcon from "../../../../../public/assets/images/email.png";
import closeIcon from "../../../../../public/assets/images/close.png";

import "./sidebar.css";

/**
 * @returns componente jsx che renderizza la sidebar per le viewport mobile e tablet
 */

interface SidebarProps {
  handleSidebar: () => void;
  isVisible: boolean;
}

export default function Sidebar({ handleSidebar, isVisible }: SidebarProps) {
  return (
    <ul
      className="sidebar-menu"
      style={{
        right: !!isVisible ? "0" : "-200px",
        visibility: !!isVisible ? "visible" : "hidden",
      }}
    >
      <button onClick={handleSidebar}>
        <Image
          src={closeIcon}
          alt="close_sidebar_icon"
          width={20}
          height={20}
        />
      </button>
      <li className="self-start uppercase">boards</li>
      <li className="self-start uppercase">accessories</li>
      <li className="self-start uppercase">blog</li>
      <li className="self-start uppercase">technology</li>
      <li className="self-start uppercase">team</li>
      <li className="self-start uppercase">dealers</li>
      <div className="social-sidebar">
        <a
          href={"https://www.facebook.com"}
          aria-label="facebook_link"
          target="_self"
          rel="noopener noreferrer"
        >
          <Image
            src={facebookIcon}
            alt="facebook_icon"
            width={32}
            height={32}
            aria-label="facebook_icon"
          />
        </a>
        <a
          href={"https://www.instagram.com"}
          aria-label="instagram_link"
          target="_self"
          rel="noopener noreferrer"
        >
          <Image
            src={instagramIcon}
            alt="instagram_icon"
            width={32}
            height={32}
            aria-label="instagram_icon"
          />
        </a>
        <Link href={"#"}>
          <Image
            src={mailIcon}
            alt="contact_icon"
            width={32}
            height={32}
            aria-label="email_icon"
          />
        </Link>
      </div>
    </ul>
  );
}
