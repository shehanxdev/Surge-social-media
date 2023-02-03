//MODULES
import React, { useEffect, useState } from "react";
import axios from "axios";
//HELPER FUNCTIONS
import formatDate from "../helpers/formatDate";

//MUI icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CircularProgress, Skeleton } from "@mui/material";
import { Avatar } from "@mui/material";
import SubMenuForPosts from "./SubMenuForPosts";
import FoldableParagraph from "./FoldableParagraph";

function ListingSection() {
  const [posts, setPosts] = useState([]);
  //useEffect hook
  useEffect(() => {
    async function fetchData() {
      axios
        .get(process.env.REACT_APP_API_URL + "/posts")
        .then((result) => {
          console.log(result.data);
          console.log(formatDate(result.data[0].createdAt));
          setPosts(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setTimeout(fetchData, 3000);
  }, []);
  //formatPosts
  const formatPosts = posts.map((post, key) => {
    return (
      <div
        key={key}
        className="row flex-column align-items-center mb-5 mt-5 custom-post-card "
      >
        {" "}
        <span>{`Post No  ${key + 1} 
        `}</span>
        <div className="d-flex mb-2 align-items-center justify-content-between">
          <section className="d-flex align-items-center  ">
            <Avatar src={post.userPicturePath} className="custom-avatar mx-2" />
            <span>
              <em>
                <b>{post.userName}</b>
              </em>
            </span>
          </section>

          <SubMenuForPosts />
        </div>
        <img
          className="custom-post-img"
          src={post.picturepath}
          alt="Image placeholder"
        />
        <div className="row flex-row justify-content-between mt-2 mb-2">
          <span className="w-25">
            <FavoriteIcon sx={{ color: "#ff3841" }} />
            {post.likes}
          </span>
          <span className="w-25">
            <em>
              <b>{post.userName}</b>
            </em>
          </span>
          <span className="w-25">{formatDate(post.createdAt)}</span>
        </div>
        <FoldableParagraph description={post.description} />
        <hr />
      </div>
    );
  });

  //Conditional rendering of the componenet
  if (posts.length != 0) {
    return <div>{formatPosts}</div>;
  } else {
    return (
      <div className="d-flex justify-content-center flex-column align-items-center h-100">
        <CircularProgress />
      </div>
    );
  }
}

export default ListingSection;
