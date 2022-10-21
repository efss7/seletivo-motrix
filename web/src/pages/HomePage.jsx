import { Box, LinearProgress } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { PostCard } from "../components/cards/CardPost";
import { HeaderSimple } from "../components/headers/HeaderSimple";
import { Motrix } from "../global/State";
import { FindAll } from "../services/requests/FindAll";

function HomePage() {
  const {
    posts, setPosts, loading, setLoading,
  } = useContext(Motrix);

  useEffect(() => {
    FindAll(setPosts, setLoading);
  }, [setPosts]);
  return (
    <>
      <HeaderSimple />
      {loading ? (
        <LinearProgress color="secondary" />
      ) : (
        <Box>{posts.length > 0 && <PostCard posts={posts} />}</Box>
      )}
    </>
  );
}

export default HomePage;
