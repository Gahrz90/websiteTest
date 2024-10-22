import Image from "next/image";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="flex items-center justify-start">
        <Image
          src={"/assets/images/exportSurfer/list.png"}
          alt="wave_icon"
          width={20}
          height={5}
        />
        <span className="raleway text-white ml-3 capitalize">about</span>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src={"/assets/images/exportSurfer/list.png"}
          alt="wave_icon"
          width={20}
          height={5}
        />
        <span className="raleway text-white ml-3 capitalize">technology</span>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src={"/assets/images/exportSurfer/list.png"}
          alt="wave_icon"
          width={20}
          height={5}
        />
        <span className="raleway text-white ml-3 capitalize">boards</span>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src={"/assets/images/exportSurfer/list.png"}
          alt="wave_icon"
          width={20}
          height={5}
        />
        <span className="raleway text-white ml-3 capitalize">team</span>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src={"/assets/images/exportSurfer/list.png"}
          alt="wave_icon"
          width={20}
          height={5}
        />
        <span className="raleway text-white ml-3 capitalize">accessories</span>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src={"/assets/images/exportSurfer/list.png"}
          alt="wave_icon"
          width={20}
          height={5}
        />
        <span className="raleway text-white ml-3 capitalize">dealers</span>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src={"/assets/images/exportSurfer/list.png"}
          alt="wave_icon"
          width={20}
          height={5}
        />
        <span className="raleway text-white ml-3 capitalize">blog</span>
      </div>
      <div className="flex items-center justify-start">
        <Image
          src={"/assets/images/exportSurfer/list.png"}
          alt="wave_icon"
          width={20}
          height={5}
        />
        <span className="raleway text-white ml-3 capitalize">contact us</span>
      </div>
      <p className="text-[#d3d3d3] w-full col-span-2 text-center mt-4 text-bold text-sm">
        © Surfers & Co 2024 - P. IVA XX xxxxxxxxxxx
      </p>
    </footer>
  );
}
