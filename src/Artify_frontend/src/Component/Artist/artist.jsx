import React, { useState } from "react";
import { FaCoins, FaSearch, FaHome, FaBell, FaUser, FaThumbsUp, FaComment } from "react-icons/fa";
import * as Tabs from "@radix-ui/react-tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Avatar, Button } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function Artist() {
    const posts = [
        {
          id: 1,
          username: "TATTOO COLOUR",
          time: "27 ตุลาคม เวลา 12:04 น.",
          content: "The Artist Vs The Art\nไม่เคยหายไปอยู่กับใครดีเท่าเธอ",
          likes: 5,
          comments: 2,
        },
        {
          id: 2,
          username: "TATTOO COLOUR",
          time: "26 ตุลาคม เวลา 13:11 น.",
          content: "ที่คอมพ์ของเราเล่น แล้วคนอื่นบอกว่ามันดีกว่าฉันไม่ยอมว่าง่ายๆ... ",
          likes: 15,
          comments: 4,
        },
        {
          id: 3,
          username: "SARAVUT HUNGSAKUNRAT",
          time: "26 ตุลาคม เวลา 13:11 น.",
          content: "พี่ๆเท่มากเลยค่า",
          likes: 10,
          comments: 4,
        },
        {
          id: 4,
          username: "TATTOO COLOUR",
          time: "26 ตุลาคม เวลา 13:11 น.",
          content: "สวัสดีครับ FC ทุกคน ",
          likes: 15,
          comments: 4,
        },
      ];


    const [postLikes, setPostLikes] = useState(
        posts.reduce((acc, post) => {
        acc[post.id] = post.likes;
        return acc;
        }, {})
    );

    const handleLike = (id) => {
        setPostLikes((prevLikes) => ({
          ...prevLikes,
          [id]: prevLikes[id] + 1,
        }));
      };

      return (
        <>
            <Box className="flex flex-col items-center justify-center mb-4 space-y-4">
                <textarea className="w-full border border-gray-300 rounded-md p-2 h-52"/>
                <Button variant="contained" className="bg-[#FFC107] w-full">Post</Button>
            </Box>
            {posts.map((post) => (
            <Box
              key={post.id}
              sx={{
                backgroundColor: "#fff",
                padding: 3,
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                mb: 3,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar alt={post.username} src="" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    {post.username}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {post.time}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body2" sx={{ mb: 2 }}>
                {post.content}
              </Typography>

              {/* Like and Comment Buttons */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Button
                  variant="outlined"
                  startIcon={<FaThumbsUp />}
                  onClick={() => handleLike(post.id)}
                >
                  Like ({postLikes[post.id]})
                </Button>
                <Button variant="outlined" startIcon={<FaComment />}>
                  Comment ({post.comments})
                </Button>
              </Box>
            </Box>
          ))}
        </>
      )
}