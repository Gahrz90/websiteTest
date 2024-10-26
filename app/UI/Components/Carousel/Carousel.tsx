"use client";

import Image from "next/image";
import "./Carousel.css";
import { useEffect, useState } from "react";
/**
 * @returns elemento jsx che fetcha dal be i prodotti e mostra le caratteristiche sotto forma di carosello
 */

type dataFields = {
  product_name: string;
  product_description: string;
  product_features: string;
  product_dimensions: string;
  product_rating: number;
  product_price: number;
};

export default function Carousel() {
  const [data, setData] = useState<dataFields[]>([]);
  const [page, setPage] = useState(0);
  const [text, setText] = useState("description");
  useEffect(() => {
    fetch("/mock_data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("Received non-JSON response");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error while fetching data", error));
  }, []);

  if (!data) {
    return <p>loading...</p>;
  }

  const handleNext = () => {
    setPage((prevPage) => (prevPage + 1) % data.length);
  };

  const handlePrev = () => {
    setPage((prevPage) => (prevPage - 1 + data.length) % data.length);
  };

  const selectTextToShow = (section: string) => {
    switch (section) {
      case "description":
        setText("description");
        break;
      case "features":
        setText("features");
        break;
      case "dimensions":
        setText("dimensions");
        break;
    }
  };

  return (
    <section className="carousel-container pb-7">
      {/* Container immagini */}
      <div className="triangle-container">
        <div className="triangle"></div>
        <div className="img-principale-container">
          <Image
            src={"/assets/images/exportSurfer/Board.png"}
            alt="img_principale"
            fill={true}
            className="img-principale"
          />
        </div>
      </div>
      <div className="flex w-full justify-around mb-6">
        <div className="img-thumbnail-container">
          <Image
            src={"/assets/images/exportSurfer/Photothumb--1.png"}
            alt="thumbnail_image1"
            fill={true}
            className="img-thumbnail"
          />
        </div>
        <div className="img-thumbnail-container">
          <Image
            src={"/assets/images/exportSurfer/Photothumb--2.png"}
            alt="thumbnail_image2"
            fill={true}
            className="img-thumbnail"
          />
        </div>
        <div className="img-thumbnail-container">
          <Image
            src={"/assets/images/exportSurfer/Photothumb--3.png"}
            alt="thumbnail_image3"
            fill={true}
            className="img-thumbnail"
          />
        </div>
        <div className="img-thumbnail-container">
          <Image
            src={"/assets/images/exportSurfer/Photothumb-.png"}
            alt="thumbnail_image4"
            fill={true}
            className="img-thumbnail"
          />
        </div>
      </div>
      {/* Container nome, pulsanti, chips, prezzo, button e guarda tutte */}
      <div className="w-full">
        <div className="flex w-full flex-wrap px-[16px] items-center justify-between">
          <h3 className="font-bold text-left text-base capitalize w-3/4">
            {data[page]?.product_name}
          </h3>
          <div className="flex w-1/4 justify-end">
            <button
              onClick={handlePrev}
              aria-label="button_prev"
              className="bg-yellow-400 mr-2"
            >
              <Image
                src={"/assets/images/left-chevron.png"}
                alt="freccia_sx"
                width={32}
                height={32}
              />
            </button>
            <button
              onClick={handleNext}
              aria-label="button_next"
              className="bg-yellow-400"
            >
              <Image
                src={"/assets/images/chevron.png"}
                alt="freccia_dx"
                width={32}
                height={32}
              />
            </button>
          </div>
          <div className="flex items-center justify-center my-2">
            <p className="m-0">{data[page]?.product_rating}</p>
            <Image
              src={"/assets/images/exportSurfer/Star 4@2x.png"}
              alt="star_rating"
              width={20}
              height={10}
            />
          </div>
          <div>
            {page + 1}/{data.length}
          </div>
        </div>
        <ul className="flex justify-around mt-5">
          <li className="font-bold">
            <button
              style={{
                borderBottom:
                  text === "description" ? "2px solid #00aeef" : "none",
              }}
              onClick={() => selectTextToShow("description")}
            >
              Description
            </button>
          </li>
          <li className="font-bold">
            <button
              style={{
                borderBottom:
                  text === "features" ? "2px solid #00aeef" : "none",
              }}
              onClick={() => selectTextToShow("features")}
            >
              Features
            </button>
          </li>
          <li className="font-bold">
            <button
              style={{
                borderBottom:
                  text === "dimensions" ? "2px solid #00aeef" : "none",
              }}
              onClick={() => selectTextToShow("dimensions")}
            >
              Dimensions
            </button>
          </li>
        </ul>
        <p className="mt-5 text-center">
          {text === "description" && data[page]?.product_description}
        </p>
        <p className="mt-5 text-center">
          {text === "features" && data[page]?.product_features}
        </p>
        <p className="mt-5 text-center">
          {text === "dimensions" && data[page]?.product_dimensions}
        </p>

        <div className="flex justify-evenly px-[16px] mt-10 items-center">
          <p className="text-left font-bold text-3xl">
            ${data[page]?.product_price}
          </p>
          <button className="bg-[#00aeff] p-3 rounded-lg capitalize text-white text-lg">
            buy now
          </button>
        </div>
      </div>
    </section>
  );
}
