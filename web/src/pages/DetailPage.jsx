import { LinearProgress } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostDetailCard } from "../components/cards/PostDetailCard";
import { HeaderGoBack } from "../components/headers/HeaderGoBack";
import { Motrix } from "../global/State";
import { FindOne } from "../services/requests/FindOne";

function DetailPage() {
  const { id } = useParams();
  const {
    post, setPost, loading, setLoading,
  } = useContext(Motrix);

  useEffect(() => {
    FindOne(setPost, setLoading, id);
  }, []);

  return (
    <>
      <HeaderGoBack />
      {
        loading ? (<LinearProgress color="accentColor" />) : (
          <PostDetailCard post={post} setPost={setPost} />
        )
      }
    </>
  );
}

export default DetailPage;
