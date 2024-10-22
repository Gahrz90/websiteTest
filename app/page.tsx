import AboutUs from "./UI/Components/AboutUs/AboutUs";
import Carousel from "./UI/Components/Carousel/Carousel";
import Footer from "./UI/Components/Footer/Footer";
import Form from "./UI/Components/Form/Form";
import Header from "./UI/Components/Header/Header";
import InstagramGrid from "./UI/Components/InstagramGrid/InstagramGrid";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Sezione del testo principale */}
        <section className="my-[40%] flex flex-col items-center justify-center w-full px-[16px]">
          <h1 className="text-[32px] text-center mb-4 italic playfair-display">
            Ride every wave as if it&apos;s your last
          </h1>
          <h2 className="playfair-display">We love the motion of the ocean</h2>
        </section>
        {/* Sezione carosello con prezzi */}
        <Carousel />
        {/* Sezione about us */}
        <AboutUs />
        {/* video */}
        <section className="w-full">
          <iframe
            className="w-full h-[300px]"
            src="https://www.youtube.com/embed/MTAYchtrfXo?si=D9Aj0MsnZhX9UUXW"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </section>
        <section className="my-[120px]">
          {/* contenitore della parte instagram e del form */}
          <InstagramGrid />
          <Form />
        </section>
      </main>
      <Footer />
    </>
  );
}
