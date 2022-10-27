import { Add } from "@mui/icons-material";
import {
  Box, Button, LinearProgress,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostCard } from "../components/cards/PostCard";
import { HeaderSimple } from "../components/headers/HeaderSimple";
import { SearchBar } from "../components/SearchBar";
import { Motrix } from "../global/State";
import { FindAll } from "../services/requests/FindAll";

function HomePage() {
  const {
    posts, setPosts, loading, setLoading,
  } = useContext(Motrix);
  const navigate = useNavigate();

  useEffect(() => {
    FindAll(setPosts, setLoading);
  }, [setPosts]);

  return (
    <>
      <HeaderSimple />

      {
        loading ? (
          <LinearProgress color="accentColor" />
        ) : (
          <Box>
            <Box display="flex" sx={{ margin: 1, gap: 1 }}>
              <SearchBar />
              <Button
                variant="contained"
                color="accentColor"
                margin="normal"
                size="large"
                onClick={() => navigate("/add-post")}
              >
                <Add />
              </Button>

            </Box>
            {posts.length > 0 && <PostCard posts={posts} />}
          </Box>
        )
      }
    </>
  );
}

export default HomePage;
