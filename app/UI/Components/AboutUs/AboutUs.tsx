import Image from "next/image";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section className="aboutus-container">
      <span className="uppercase aboutus-title">about us</span>
      <Image src={""} alt="surfer" fill={true} className="desktop-devices" />

      <h4 className="uppercase mb-3">We are surfers co.</h4>
      <Image
        src={"/assets/images/close.png"}
        alt="close_icon"
        width={16}
        height={16}
      />
      <p className="playfair-display italic mt-3 mb-4 text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, illo
        minima alias necessitatibus quasi distinctio rem aperiam vel cupiditate
        dignissimos molestias amet voluptatum est quos nesciunt suscipit porro
        veritatis architecto?
      </p>
      <button className="text-[#00b0ff] underline self-start">Read more</button>
    </section>
  );
}
