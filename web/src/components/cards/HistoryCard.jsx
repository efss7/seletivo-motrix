import {
  Card, CardContent, Chip, Divider, Typography,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Motrix } from '../../global/State';
import { FindHistoryById } from '../../services/requests/FindHistoryById';

export function HistoryCard() {
  const { id } = useParams();
  const [
    post,
    setPost] = useState([]);
  const {
    // loading,
    setLoading,
  } = useContext(Motrix);
  const [
    // error,
    setError] = useState("");
  async function getHistoryById() {
    try {
      setLoading(true);
      const postResult = await FindHistoryById(id);

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
    getHistoryById();
  }, []);

  return (
    <Card
      key={post.id}
      sx={{
        margin: 1, boxShadow: 0,
      }}
    >
      <CardContent sx={{ margin: 1 }}>
        <Typography variant="h3" color="primary">
          {post.title}
        </Typography>
        <Divider sx={{ margin: 2 }}>
          <Chip label={
            new Date(!post.updateDate ? post.creationDate : post.updateDate)
              .toLocaleString()
              .slice(0, 16)
              .replace(" ", " às ")
          }
          />
        </Divider>
        <Typography variant="h6" component="h2" color="secondary">
          {post.body}
        </Typography>
        <Divider sx={{ margin: 2 }} />
      </CardContent>
    </Card>
  );
}
