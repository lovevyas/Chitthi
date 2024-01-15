import { useState } from "react";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NearMeIcon from "@mui/icons-material/NearMe";
import { ExpandMoreOutlined } from "@mui/icons-material";
// import LikeButton from "./LikeButton";

function Post({ profilePic, message, timestamp, username, image }) {
  const formattedTime = timestamp
    ? timestamp.toLocaleString("en-US", { hour: "numeric", minute: "numeric" })
    : "";
  const [post__option, setPostOption] = useState("post__option");
  // handle Click

  const [likeCount, setLikeCount] = useState(0); // State to store the like count
  const [isLiked, setIsLiked] = useState(true); // State to track if the post is liked

  const handleLikeClick = () => {
    setIsLiked(!isLiked); // Toggle the like state

    // Perform the actual like/unlike action (this would usually involve an API call)
    // For this example, we'll just simulate it:
    if (isLiked) {
      setPostOption("post__option like--active");
      setLikeCount(likeCount + 1);
    } else {
      setPostOption("post__option");
      setLikeCount(likeCount - 1);
    }
  };
  // handle click end.

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p style={{ color: "#777" }}>{formattedTime}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className={post__option} onClick={handleLikeClick}>
          <ThumbUpIcon isLiked={isLiked} />
          <p>
            {likeCount} {likeCount === 1 ? "Like" : "Likes"}
          </p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
