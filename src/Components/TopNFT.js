import React from "react";
import OwlCarousel from "react-owl-carousel";
import Heading from "./Heading";
const TopNfts = [
  {
    id: "1",
    name: " Abstract Cat",
    price: "ETH 9.31",
    image: "/Images/cat.png",
  },
  {
    id: "2",
    name: " Abstract Cover",
    price: "ETH 12.31",
    image: "/Images/meow.jpg",
  },
  {
    id: "3",
    name: "pink",
    price: "ETH 00.31",
    image: "/Images/2.jpg",
  },
  {
    id: "4",
    name: "Melt",
    price: "ETH 0.41",
    image: "/Images/main.png",
  },
  {
    id: "5",
    name: "Chill Dawg!",
    price: "ETH 9.31",
    image: "/Images/5.jpg",
  },
  {
    id: "6",
    name: "pink",
    price: "ETH 00.31",
    image: "/Images/2.jpg",
  },
  {
    id: "7",
    name: "Album",
    price: "ETH 00.09",
    image: "/Images/7.jpg",
  },
  {
    id: "8",
    name: "pimp",
    price: "ETH 0.21",
    image: "/images/8.jpg",
  },
];
function TopNFT() {
  return (
    <div className="my-12">
      <Heading title={"TOP NFTs"} />
      <OwlCarousel
        className="owl-theme"
        loop
        autoplay={true}
        autoplaySpeed={2000}
        smartSpeed={1000}
        autoplayTimeout={3000}
        responsive={{
          0: {
            margin: 2,
            items: 1,
          },
          640: {
            items: 2,
            margin: 10,
          },
          1024: {
            items: 3,
            margin: 20,
          },
          1536: {
            items: 4,
            margin: 30,
          },
        }}
      >
        {TopNfts.map((t) => (
          <div
            key={t.id}
            className="top-hover relative border-8 border-subLightMain pb-5 bg-subMain flex-colo"
          >
            <div className="relative w-full">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-64 object-cover"
              />
              <div className="top-hidden absolute transitione top-1 bottom-1 left-1 right-1 bg-overlay flex-colo">
                <h2 className="font-semibold text-whites">{t.name}</h2>
                <div className="mt-2 text-lg font-black tracking-wider text-whites">
                  {t.price}
                </div>
              </div>
            </div>
            <button className="px-6 text-whites tracking-wide py-3 mt-5 bt-linear font-bold text-sm rounded">
              Read More
            </button>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}
export default TopNFT;

