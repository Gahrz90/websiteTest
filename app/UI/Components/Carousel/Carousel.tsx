import Image from "next/image";
import "./Carousel.css";
/**
 * @returns elemento jsx che fetcha dal be i prodotti e mostra le caratteristiche sotto forma di carosello
 */

export default function Carousel() {
  return (
    <section className="carousel-container">
      {/* Container immagini */}
      <div className="triangle-container">
        <div className="triangle"></div>
        <div className="absolute z-[8]">una bella immagine</div>
      </div>
      <div className="">una lista di thumbnail</div>
      {/* Container nome, pulsanti, chips, prezzo, button e guarda tutte */}
      <div className="w-full">
        <div className="flex w-full">
          <h3>JR Surfboards The Donny Stoker Yellow/Green Rail Fade</h3>
          <div className="flex">
            <button>
              <Image
                src={"/assets/images/left-chevron.png"}
                alt="freccia_"
                width={32}
                height={32}
              />
            </button>
            <button>
              <Image
                src={"/assets/images/chevron.png"}
                alt="freccia_"
                width={32}
                height={32}
              />
            </button>
          </div>
          <p>il rating</p>
          <div>parziale/totale</div>
        </div>
        <ul className="flex">
          <li>Description</li>
          <li>Features</li>
          <li>Dimensions</li>
        </ul>
        <p>testo del link</p>
        <div className="flex justify-between">
          <p>prezzo</p>
          <button>buy now</button>
        </div>
      </div>
    </section>
  );
}
