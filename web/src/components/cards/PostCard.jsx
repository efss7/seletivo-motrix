import {
  Box, Card, CardContent, Grid, Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Motrix } from "../../global/State";

export function PostCard(props) {
  const { posts } = props;
  const { search } = useContext(Motrix);
  const navigate = useNavigate();

  function detailPost(postId) {
    navigate(`/posts/${postId}`);
  }

  return (
    <>
      <Grid container>
        {posts
          .filter((post) => post.title.toUpperCase().includes(search.toUpperCase()))
          .map((post) => (
            <Grid key={post.id} item xs={12} sm={6} md={3}>
              <Card
                sx={{ margin: 1, boxShadow: 0 }}
                onClick={() => detailPost(post.id)}
              >
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    <Typography color="accentColor" gutterBottom>
                      Título:
                    </Typography>
                    <Typography color="accentColor" component="data" gutterBottom>
                      {new Date(!post.updateDate ? post.creationDate : post.updateDate)
                        .toLocaleString()
                        .slice(0, 16)
                        .replace(" ", " às ")}
                    </Typography>
                  </Box>
                  <Typography variant="h6" component="h2" color="primary">
                    {post.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
}
