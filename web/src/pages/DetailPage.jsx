import { LinearProgress } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostDetailCard } from "../components/cards/PostDetailCard";
import { HeaderGoBack } from "../components/headers/HeaderGoBack";
import { Motrix } from "../global/State";
import { FindOne } from "../services/requests/FindOne";

function DetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const { loading, setLoading } = useContext(Motrix);
  const [error, setError] = useState("");

  async function getPostById() {
    try {
      setLoading(true);
      const postResult = await FindOne(id);

      if (!Array.isArray(postResult.data)) {
        throw new Error("Ocorreu um erro");
      }

      const resultData = await postResult.data[0];
      setPost(resultData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPostById();
  }, []);

  return (
    <>
      <HeaderGoBack />
      {
        loading && <LinearProgress color="accentColor" />
      }
      {
        (!loading && !error) && (
        <>
          <PostDetailCard post={post} setPost={setPost} />
        </>
        )
      }
      {
        error && <p>{error}</p>
      }
    </>
  );
}

export default DetailPage;
