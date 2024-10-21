import Image from "next/image";
import "./InstagramGrid.css";

export default function InstagramGrid() {
  return (
    <div className="instagram-grid-container">
      <span className="uppercase instagram-grid-title">instagram</span>
      <div className="relative block h-[320px]">
        <Image
          src={"/assets/images/instagram1.jpg"}
          alt="instagram_image_1"
          fill
          objectFit="cover"
        />
      </div>
      <div className="relative block h-[320px]">
        <Image
          src={"/assets/images/instagram2.jpg"}
          alt="instagram_image_1"
          fill
          objectFit="cover"
        />
      </div>
      <div className="relative block h-[320px]">
        <Image
          src={"/assets/images/instagram3.jpg"}
          alt="instagram_image_1"
          fill
          objectFit="cover"
        />
      </div>
      <div className="relative block h-[320px]">
        <Image
          src={"/assets/images/instagram4.jpg"}
          alt="instagram_image_1"
          fill
          objectFit="cover"
        />
      </div>
      <div className="flex w-full justify-around pt-5 items-center">
        <Image
          src={"/assets/images/instagram-blu.png"}
          alt="instagram_blu_icon"
          width={32}
          height={32}
        />
        <span className="text-[#00b0ff] uppercase text-[24px] font-bold roboto-condensed">
          follow us
        </span>
        <span>@surfersco</span>
      </div>
    </div>
  );
}
