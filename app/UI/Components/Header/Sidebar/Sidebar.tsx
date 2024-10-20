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
    <ul className="sidebar-menu" style={{ right: !!isVisible ? "0" : "" }}>
      <button onClick={handleSidebar}>
        <Image
          src={closeIcon}
          alt="close_sidebar_icon"
          width={20}
          height={20}
        />
      </button>
      <li>boards</li>
      <li>accessories</li>
      <li>blog</li>
      <li>technology</li>
      <li>team</li>
      <li>dealers</li>
      <div>
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
    </ul>
  );
}
