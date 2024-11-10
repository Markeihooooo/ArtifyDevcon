import { Box, IconButton, TextField, Typography, Tooltip } from "@mui/material";
import { FaHome, FaBell, FaUser, FaCoins, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Navbar() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [ balance, setBalance ] = useState(localStorage.getItem('balance') ? localStorage.getItem('balance') : 0);

    const notifications = [
        {
            image: 'images/Labanoon.jpg',
            artistName: 'Labanoon',
            message: 'liked your post',
            time: '2h ago',
        },
        {
            image: 'images/Labanoon.jpg',
            artistName: 'Labanoon',
            message: 'liked your post',
            time: '2h ago',
        },
        {
            image: 'images/Labanoon.jpg',
            artistName: 'Labanoon',
            message: 'liked your post',
            time: '2h ago',
        },
        {
            image: 'images/Labanoon.jpg',
            artistName: 'Labanoon',
            message: 'liked your post',
            time: '2h ago',
        },
        {
            image: 'images/Labanoon.jpg',
            artistName: 'Labanoon',
            message: 'liked your post',
            time: '2h ago',
        },
        {
            image: 'images/Labanoon.jpg',
            artistName: 'Labanoon',
            message: 'liked your post',
            time: '2h ago',
        },
        {
            image: 'images/Labanoon.jpg',
            artistName: 'Labanoon',
            message: 'liked your post',
            time: '2h ago',
        },
    ]
    return <>
        <Box className="flex justify-between items-center p-4 px-20 bg-gray-100 border-b border-gray-300 sticky top-0 z-40">
            {/* Search bar */}
            <Box className="flex items-center bg-gray-200 px-3 py-1 rounded-full w-1/3 shadow-sm">
                <FaSearch className="w-5 h-5 text-gray-600" />
                <TextField
                    variant="standard"
                    placeholder="Search"
                    InputProps={{ disableUnderline: true }}
                    className="ml-2 bg-transparent text-gray-700 placeholder-gray-500 w-full"
                />
            </Box>

            {/* Icon section */}
            <Box className="flex items-center space-x-5">
                <Tooltip title="Home">
                    <IconButton onClick={() => window.location.href = "/"}>
                        <FaHome className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Notifications">
                    <IconButton sx={{ position: "relative" }} onClick={() => setShowNotifications(!showNotifications)} >
                        <FaBell className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                        <Box sx={{ position: "absolute", top: 0, right: 0, width: 8, height: 8, borderRadius: "50%", backgroundColor: "red" }} />
                        {
                            showNotifications && (
                                <Box sx={{
                                    position: "absolute", zIndex: 999, top: 40, left: -380, width: 400, height: 400, borderRadius: 5, "&::-webkit-scrollbar": {
                                        display: "none",
                                    },
                                    msOverflowStyle: "none",
                                    scrollbarWidth: "none", backgroundColor: "white", overflow: 'auto', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                                }}>
                                    {
                                        notifications.map((notification, index) => (
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, padding: 3, borderBottom: "1px solid #e0e0e0" }}>
                                                <img src={notification.image} alt="Profile" className="w-16 h-16 object-cover rounded-full" />
                                                <Box className="flex gap-2 items-center align-center">
                                                    <span className="kanit-light text-sm">
                                                        {notification.artistName}
                                                    </span>
                                                    <span className="kanit-light text-sm">{notification.message}</span>
                                                    <span className="kanit-light text-sm">{notification.time}</span>
                                                </Box>
                                            </Box>
                                        ))
                                    }
                                </Box>
                            )
                        }
                    </IconButton>
                </Tooltip>
                <Tooltip title="Profile">
                    <IconButton onClick={() => {
                        if (!localStorage.getItem('principalId')) {
                            window.location.href = "/login"
                        } else {
                            window.location.href = "/profile"
                        }
                    }}>
                        <FaUser className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                    </IconButton>
                </Tooltip>
                {/* Coin and counter */}
                <Box className="flex items-center space-x-1">
                    <FaCoins className="w-6 h-6 text-yellow-500" />
                    <h6 className="text-gray-700 kanit-semibold">
                        { balance }
                    </h6>
                </Box>
            </Box>
        </Box>
    </>
}