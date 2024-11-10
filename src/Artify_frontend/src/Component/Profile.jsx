import React, { useState } from "react";
import { FaHome, FaUser, FaBell, FaSearch, FaCoins } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "./reuaesable/navbar";
const Profile = () => {
  const [ walletAddress, setWalletAddress ] = useState(localStorage.getItem('walletAddress') || null);

  return (
    <Box className="bg-gray-100 min-h-screen">
      {/* Top bar */}
      <Navbar />

      {/* Profile Section */}
      <Box className="flex flex-col items-center">
        <Box sx={{ position: 'relative' }}>
          <img src="emerge_web3_bg.jpeg" className="h-[300px] w-screen object-cover" />
          {/* Profile Picture */}

          <Box sx={{
            position: 'absolute', top: '60%', left: '10%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Box
              sx={{
                width: 220,
                height: 220,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #e0e0e0', // Light gray border for minimal look
                borderRadius: '50%', // Makes the frame circular
                padding: '10px', // Adds some spacing around the avatar
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
                backgroundColor: '#fff', // Optional white background for contrast
              }}
            >
              <Avatar
                alt="Profile Picture"
                src="https://as1.ftcdn.net/jpg/02/01/55/80/1000_F_201558038_mqa2vi2cyQhLnb4OHnVlpjC6DyhLcyoE.webp"
                sx={{ width: 200, height: 200 }}
              />
            </Box>
            <h5 className="text-2xl kanit-semibold">
              Hi, Saravut Hungsakunrat
            </h5>
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="mt-2 space-x-1"
          >
            <span className="kanit-light">Wallet:</span>
            <Button
              variant="text"
              color="primary"
              onClick={() =>
                navigator.clipboard.writeText(
                  walletAddress
                )
              }
              className="kanit-light"
              startIcon={<FaCoins className="text-yellow-500" />}
            >
              {walletAddress.slice(0, 15)}...
            </Button>
          </Box>
            {/* Profile Details */}
            <Box className="w-11/12 md:w-full mb-6 mt-4 bg-tranparent"
              sx={{
              }}>
              <Box className="grid grid-cols-4 gap-4 text-gray-700 text-sm">
                <Typography sx={{ fontWeight: 'bold', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyItems: 'center', padding: 2, borderRadius: 2, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', }}>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 48 48" version="1.1">

                    <title>Facebook-color</title>
                    <desc>Created with Sketch.</desc>
                    <defs>

                    </defs>
                    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0">
                        <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" id="Facebook">

                        </path>
                      </g>
                    </g>
                  </svg>
                </Typography>
                <Typography sx={{ fontWeight: 'bold', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyItems: 'center', padding: 2, borderRadius: 2, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 32 32" fill="none">
                    <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)" />
                    <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)" />
                    <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)" />
                    <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white" />
                    <defs>
                      <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
                        <stop stop-color="#B13589" />
                        <stop offset="0.79309" stop-color="#C62F94" />
                        <stop offset="1" stop-color="#8A3AC8" />
                      </radialGradient>
                      <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
                        <stop stop-color="#E0E8B7" />
                        <stop offset="0.444662" stop-color="#FB8A2E" />
                        <stop offset="0.71474" stop-color="#E2425C" />
                        <stop offset="1" stop-color="#E2425C" stop-opacity="0" />
                      </radialGradient>
                      <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
                        <stop offset="0.156701" stop-color="#406ADC" />
                        <stop offset="0.467799" stop-color="#6A45BE" />
                        <stop offset="1" stop-color="#6A45BE" stop-opacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </Typography>
                <Typography sx={{ fontWeight: 'bold', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyItems: 'center', padding: 2, borderRadius: 2, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)" />
                    <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white" />
                    <defs>
                      <linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#37BBFE" />
                        <stop offset="1" stop-color="#007DBB" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Typography>
                <Typography sx={{ fontWeight: 'bold', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyItems: 'center', padding: 2, borderRadius: 2, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', }}>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 -4 48 48" version="1.1">

                    <title>Twitter-color</title>
                    <desc>Created with Sketch.</desc>
                    <defs>

                    </defs>
                    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Color-" transform="translate(-300.000000, -164.000000)" fill="#00AAEC">
                        <path d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283" id="Twitter">

                        </path>
                      </g>
                    </g>
                  </svg>
                </Typography>
                <Typography sx={{ fontWeight: 'bold', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyItems: 'center', padding: 2, borderRadius: 2, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', }}>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 -7 48 48" version="1.1">

                    <title>Youtube-color</title>
                    <desc>Created with Sketch.</desc>
                    <defs>

                    </defs>
                    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Color-" transform="translate(-200.000000, -368.000000)" fill="#CE1312">
                        <path d="M219.044,391.269916 L219.0425,377.687742 L232.0115,384.502244 L219.044,391.269916 Z M247.52,375.334163 C247.52,375.334163 247.0505,372.003199 245.612,370.536366 C243.7865,368.610299 241.7405,368.601235 240.803,368.489448 C234.086,368 224.0105,368 224.0105,368 L223.9895,368 C223.9895,368 213.914,368 207.197,368.489448 C206.258,368.601235 204.2135,368.610299 202.3865,370.536366 C200.948,372.003199 200.48,375.334163 200.48,375.334163 C200.48,375.334163 200,379.246723 200,383.157773 L200,386.82561 C200,390.73817 200.48,394.64922 200.48,394.64922 C200.48,394.64922 200.948,397.980184 202.3865,399.447016 C204.2135,401.373084 206.612,401.312658 207.68,401.513574 C211.52,401.885191 224,402 224,402 C224,402 234.086,401.984894 240.803,401.495446 C241.7405,401.382148 243.7865,401.373084 245.612,399.447016 C247.0505,397.980184 247.52,394.64922 247.52,394.64922 C247.52,394.64922 248,390.73817 248,386.82561 L248,383.157773 C248,379.246723 247.52,375.334163 247.52,375.334163 L247.52,375.334163 Z" id="Youtube">

                        </path>
                      </g>
                    </g>
                  </svg>
                </Typography>
              </Box>
            </Box>
            <h6 className="kanit-semibold text-lg">
              Reward
            </h6>
            <Paper
              className="w-11/12 md:w-full p-3 bg-white rounded-lg mb-3 "
            //   sx={{
            //     backgroundImage :'url(https://img.pikbest.com/backgrounds/20191205/cute-dinosaur-unicorn-seamless-pattern-cartoon-drawing-with-pastel-colors-background--v_1608531jpg!w700wp)'
            //   }}
            >
              <Box className="grid grid-cols-2 gap-4 text-gray-700">
                {/* <EmojiEventsIcon className="w-6 h-6 text-yellow-500" /> */}
                <Box className="flex items-center flex-cols align-center justify-center">
                  <img
                    src="backend-reward.png" // Replace with actual path or URL
                    alt="Background Reward"
                    className="w-20 h-20"
                  />
                </Box>
                <Box className="flex items-center flex-cols align-center justify-center">
                  <img
                    src="backend-reward.png" // Replace with actual path or URL
                    alt="Background Reward"
                    className="w-20 h-20"
                  />
                </Box>
                <Box className="flex items-center flex-cols align-center justify-center">
                  <img
                    src="backend-reward.png" // Replace with actual path or URL
                    alt="Background Reward"
                    className="w-20 h-20"
                  />
                </Box>
                  
              </Box>
            </Paper>
          </Box>
          <Box 
            sx={{
              position: 'absolute', top: '115%', left: '35%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              className="w-11/12 md:w-full p-3 mb-3 "
            >
              <h6 className="kanit-semibold text-3xl">
                Artists
              </h6>
              <Box className="grid grid-cols-4 gap-4 items-center justify-left flex ">
                <img
                  src="https://s.isanook.com/jo/0/ud/476/2380601/7e676c08e45a266a916e04151be39891.jpg"
                  alt="Profile Picture"
                  className="w-52 h-52 m-1.5 rounded-xl object-cover"
                />
                <img
                  src="https://storage-wp.thaipost.net/2024/07/1-45.jpg"
                  alt="Profile Picture"
                  className="w-52 h-52 m-1.5 rounded-xl object-cover"
                />
                <img
                  src="https://i.ytimg.com/vi/-Plkae_yezo/maxresdefault.jpg"
                  alt="Profile Picture"
                  className="w-52 h-52 m-1.5 rounded-xl object-cover"
                />
                <img
                  src="https://i.ytimg.com/vi/-Plkae_yezo/maxresdefault.jpg"
                  alt="Profile Picture"
                  className="w-52 h-52 m-1.5 rounded-xl object-cover"
                />
                <img
                  src="https://i.ytimg.com/vi/-Plkae_yezo/maxresdefault.jpg"
                  alt="Profile Picture"
                  className="w-52 h-52 m-1.5 rounded-xl object-cover"
                />
                <img
                  src="https://i.ytimg.com/vi/-Plkae_yezo/maxresdefault.jpg"
                  alt="Profile Picture"
                  className="w-52 h-52 m-1.5 rounded-xl object-cover"
                />
                <img
                  src="https://i.ytimg.com/vi/-Plkae_yezo/maxresdefault.jpg"
                  alt="Profile Picture"
                  className="w-52 h-52 m-1.5 rounded-xl object-cover"
                />
                <img
                  src="https://i.ytimg.com/vi/-Plkae_yezo/maxresdefault.jpg"
                  alt="Profile Picture"
                  className="w-52 h-52 m-1.5 rounded-xl object-cover"
                />
              </Box>
            </Box>
          </Box>
        </Box>



      </Box>
    </Box>
  );
};

export default Profile;

// import React from 'react';
// import { FaHome, FaUser, FaBell, FaSearch, FaCoins } from 'react-icons/fa';

// const Profile = () => {
//     return (
//         <div className="bg-gray-100 min-h-screen">
//             {/* Top bar */}
//             <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300 sticky top-0 z-50">
//                 {/* Search bar */}
//                 <div className="flex items-center bg-gray-200 px-3 py-1 rounded-full w-1/3">
//                     <FaSearch className="w-5 h-5 text-gray-600" />
//                     <input
//                         type="text"
//                         placeholder="Search"
//                         className="ml-2 bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
//                     />
//                 </div>

//                 {/* Icon section */}
//                 <div className="flex items-center space-x-5">
//                     <FaHome className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
//                     <FaBell className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
//                     <FaUser className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />

//                     {/* Coin and counter */}
//                     <div className="flex items-center space-x-1">
//                         <FaCoins className="w-6 h-6 text-yellow-500" />
//                         <span className="text-gray-700 font-semibold">3,501</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Profile Section */}
//             <div className="flex justify-center items-center mt-8">
//                 {/* Profile Picture */}
//                 <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mr-5">
//                     <img
//                         src="https://as1.ftcdn.net/jpg/02/01/55/80/1000_F_201558038_mqa2vi2cyQhLnb4OHnVlpjC6DyhLcyoE.webp"
//                         alt="Profile"
//                         className="w-full h-full object-cover"
//                     />
//                 </div>

//                 {/* Profile Details */}
//                 <div className="flex flex-col w-2/3">
//                     <div className="bg-white shadow-md p-4 rounded-lg">
//                         <div className="grid grid-cols-2 gap-2">
//                             <div className="text-gray-700">
//                                 <p>Email: test123@gmail.com</p>
//                                 <p>Age: 26</p>
//                                 <p>Tel: 086-123456XXX</p>
//                             </div>
//                             <div className="text-gray-700">
//                                 <p>Facebook: <a href="#" className="text-blue-500">ลามะ</a></p>
//                                 <p>Instagram: <a href="#" className="text-blue-500">ลามะ</a></p>
//                                 <p>X: <a href="#" className="text-blue-500">ลาลี</a></p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Wallet and Name */}
//                     <div className="text-center mt-4">
//                         <h1 className="text-xl font-semibold">Saravut Hungsakunrat</h1>
//                         <p className="text-gray-600">Wallet: 0x28dbb63711AF5E796fa1183198893d74b13F8455</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Profile;
