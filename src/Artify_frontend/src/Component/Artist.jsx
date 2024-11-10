import React, { useState } from "react";
import { FaCoins, FaSearch, FaHome, FaBell, FaUser, FaThumbsUp, FaComment } from "react-icons/fa";
import * as Tabs from "@radix-ui/react-tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Avatar, Button } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Navbar from "./reuaesable/navbar";
import Artist from "./Artist/artist";
import Donate from "./Artist/donate";
import Media from "./Artist/media";
import Product from "./Artist/products";

// Sample data for avatars in "Top Donate" section
const avatarUrls = [
  "https://as1.ftcdn.net/jpg/02/01/55/80/1000_F_201558038_mqa2vi2cyQhLnb4OHnVlpjC6DyhLcyoE.webp",
  "https://example.com/avatar2.jpg",
  "https://example.com/avatar3.jpg",
  "https://example.com/avatar4.jpg",
  "https://example.com/avatar5.jpg",
  "https://example.com/avatar6.jpg",
  "https://example.com/avatar7.jpg",
  "https://example.com/avatar8.jpg",
  "https://example.com/avatar9.jpg",
  "https://example.com/avatar10.jpg",
];

// Names of top donors
const donorNames = [
  "Saravut Hungsakunrat",
  "Araya Sirivong",
  "Napat Kaewmanee",
  "Chalermchai Thavorn",
  "Kamol Chanpradit",
  "Thanaporn Sae-tang",
  "Woranat Phutong",
  "Chayanin Promsuk",
  "Pongpat Yuthavong",
  "Nattapong Sathian",
];

// Sample data for posts in the main content area


// Function to determine border color for top donors
const getBorderColor = (index) => {
  if (index === 0) return "gold";
  if (index >= 1 && index <= 4) return "purple";
  return "red";
};

const Artists = () => {
  const [ selectPage, setSelectPage ] = useState("Artist");




  return (
    <>
      {/* Top bar */}
      <Navbar />

      <div
        className="w-full h-[400px] bg-black bg-opacity-50 relative"
        style={{
          backgroundImage: "url('images/tattocolour-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      ></div>

      <Box className="flex justify-center gap-10 pb-2 sticky top-[70px] z-40 bg-white p-5">
        <Box onClick={() => setSelectPage("Artist")}>
          <h6
            className={`text-lg kanit-semibold ${selectPage === "Artist"
                ? "text-red-600"
                : "text-gray-500 hover:text-red-600 duration-300"
              } flex-1 text-center`}
          >
            Artist
          </h6>
        </Box>
        <Box onClick={() => setSelectPage("Media")}>
          <h6
            className={`text-lg kanit-semibold ${selectPage === "Media"
              ? "text-red-600"
              : "text-gray-500 hover:text-red-600 duration-300"
            } flex-1 text-center`}
          >
            Media
          </h6>
        </Box>
        <Box onClick={() => setSelectPage("Products")}>
          <h6
            className={`text-lg kanit-semibold ${selectPage === "Products"
              ? "text-red-600"
              : "text-gray-500 hover:text-red-600 duration-300"
            } flex-1 text-center`}
          >
            Products
          </h6>
        </Box>
        <Box onClick={() => setSelectPage("Donate")}>
          <h6
            className={`text-lg kanit-semibold ${selectPage === "Donate"
              ? "text-red-600"
              : "text-gray-500 hover:text-red-600 duration-300"
            } flex-1 text-center`}
          >
            Donate
          </h6>
        </Box>
      </Box>
      {/* Content */}
      <div className="pt-4 text-gray-600 w-full flex">
        {/* Left column for Top Donate avatars */}
        <Box
          sx={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
            gap: 2,
          }}
        >
          {/* Section header */}
          <div className="flex items-center space-x-2">
            <EmojiEventsIcon fontSize="large" />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "24px",
                textAlign: "center",
              }}
            >
              Top Donate
            </Typography>
            <EmojiEventsIcon fontSize="large" />
          </div>

          {/* Top Donor Avatars */}
          {avatarUrls.map((url, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: `${index === 0 ? 60 : index === 1 ? 50 : index === 2 ? 40 : 30}`,
                  height: `${index === 0 ? 60 : index === 1 ? 50 : index === 2 ? 40 : 30}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `2px solid ${getBorderColor(index)}`,
                  borderRadius: "50%",
                  padding: "5px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                }}
              >
                <Avatar
                  alt={`Top Donor ${index + 1}`}
                  src={url}
                  sx={{ width: `${index === 0 ? 60 : index === 1 ? 50 : index === 2 ? 40 : 30}px`, height: `${index === 0 ? 60 : index === 1 ? 50 : index === 2 ? 40 : 30}px` }}
                />
              </Box>
              <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
                {donorNames[index]}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            width: "60%",
            padding: 4,
            backgroundColor: "#f9f9f9",
            overflowY: "auto",
            minHeight: "80vh",
          }}
        >
          {
            selectPage === "Artist" ? <Artist />
            : selectPage === "Media" ? <Media />
            : selectPage === "Donate" ? <Donate />
            : selectPage === "Products" ? <Product />
            : null
          }
        </Box>

        {/* Right column for image */}
        <Box
          sx={{
            width: "20%",
            padding: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <img
            src="https://f.btwcdn.com/store-14694/product/56004975-53b0-7244-b4d3-6606618ce8eb.jpg"
            alt="Main Artwork"
            style={{
              width: "100%",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}

          />
          <img
            src="images/event1.jpg"
            alt="Main Artwork"
            style={{
              width: "100%",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}

          />
          <img
            src="images/event2.jpg"
            alt="Main Artwork"
            style={{
              width: "100%",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}

          />
          <img
            src="images/event3.jpg"
            alt="Main Artwork"
            style={{
              width: "100%",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}

          />
        </Box>
      </div>
    </>
  );
};

export default Artists;
