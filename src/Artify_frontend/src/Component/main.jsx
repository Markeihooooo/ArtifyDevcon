// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import { FaSearch, FaHome, FaBell, FaUser, FaCoins } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./reuaesable/navbar";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // จำนวนรูปในแต่ละแถว
    slidesToScroll: 1,
    autoplay: true, // เปิดการเลื่อนอัตโนมัติ
    autoplaySpeed: 1500, // ความเร็วในการเลื่อน (หน่วย: มิลลิวินาที)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div

    >
      {/* Top bar */}
      <Navbar />

      {/* Main content */}
      <div className="flex flex-col items-center p-10">
        {/* Slider Section */}
        <Slider {...settings} className="w-[1100px]">
          {[
            /* ภาพใน Slider */
            { src: "/images/Tattoo Colour.jpg", alt: "Tattoo Colour" },
            { src: "/images/only monday.jpg", alt: "Only Monday" },
            { src: "/images/THE TOYS.jpg", alt: "The Toys" },
            { src: "/images/PUN.jpg", alt: "Pun" },
            { src: "/images/เรนิษรา.jpg", alt: "Renisra" },
          ].map((image, index) => (
            <div key={index} className="p-4">
              <div className="bg-gradient-to-t from-gray-700 to-gray-600 w-[200px] h-[200px] rounded-lg shadow-lg flex items-center justify-center hover:scale-105 hover:shadow-xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>

        {/* ข้อความพร้อมกรอบ */}
        <h2
          className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 bg-clip-text text-transparent shadow-lg animate-pulse p-4 border-2 border-gray-700 rounded-lg bg-gray-800 bg-opacity-90 text-center mt-20 ml-[-1000px]"
        >
          Looking for new artists?
        </h2>



        {/* กรอบรูปเพิ่มด้านล่าง */}
        <div className="grid grid-cols-5 gap-6 pb-20 mt-20">
          {[
            { src: "/images/Tattoo Colour.jpg", name: "Tattoo Colour" },
            { src: "/images/CORNBOI.jpg", name: "Cornboi" },
            { src: "/images/Bigass.jpg", name: "Bigass" },
            { src: "/images/cocktail.jpg", name: "Cocktail" },
            { src: "/images/lomosonic.jpg", name: "Lomosonic" },
            { src: "/images/NONT TANONT.jpg", name: "NONT TANONT" },
            { src: "/images/only monday.jpg", name: "Only Monday" },
            { src: "/images/paradox.jpg", name: "paradox" },
            { src: "/images/PURPEECH.jpg", name: "PURPEECH" },
            { src: "/images/Silly Fools.jpg", name: "Silly Fools" },

            { src: "/images/THE TOYS.jpg", name: "THE TOYS" },
            { src: "/images/TillyBirds.jpg", name: "TillyBirds" },
            { src: "/images/tin.jpg", name: "Tin" },
            { src: "/images/เรนิษรา.jpg", name: "เรนิษรา" },
            { src: "/images/25hours.jpg", name: "25hours" },
            { src: "/images/jetset.jpg", name: "Jetset'er" },
            { src: "/images/Labanoon.jpg", name: "Labanoon" },
            { src: "/images/Polycat.jpg", name: "Polycat" },
            { src: "/images/Slot Machine.jpg", name: "Slot Machine" },
            { src: "/images/potato.jpg", name: "Potato" },
            { src: "/images/Zeal.jpg", name: "Zeal" },
            { src: "/images/Palmy.jpg", name: "Palmy" },
            { src: "/images/sweet mullet.jpg", name: "sweet mullet" },
            { src: "/images/Moderndog.jpg", name: "Moderndog" },
            { src: "/images/Carabao.jpg", name: "Carabao" },
          ].map((artist, index) => (
            <div key={index} className="w-[200px]" onClick={() => window.location.href = '/artist'}>
              <div className="bg-gradient-to-t from-gray-700 to-gray-600 w-[200px] h-[200px] rounded-lg shadow-lg flex items-center justify-center hover:scale-105 hover:shadow-xl transition-all duration-300">
                <img
                  src={artist.src}
                  alt={artist.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="mt-2 px-4 py-2 border-2 border-gray-600 rounded-lg bg-gray-800 bg-opacity-90 text-center">
                <p className="text-sm font-bold text-white">{artist.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
