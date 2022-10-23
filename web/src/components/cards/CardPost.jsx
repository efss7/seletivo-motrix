import {
  Box, Card, CardContent, Grid, Typography,
} from "@mui/material";
import moment from "moment";
import React, { useContext } from "react";
import { Motrix } from "../../global/State";

export function PostCard(props) {
  const { posts } = props;
  const { search } = useContext(Motrix);

  return (
    <>
      <Grid container>
        {posts
          .filter((post) => post.title.toUpperCase().includes(search.toUpperCase()))
          .map((post) => (
            <Grid item xs={12} sm={6} md={3}>
              <Card
                key={post.id}
                sx={{ margin: 1, boxShadow: 0 }}
              >
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    <Typography color="accentColor" gutterBottom>
                      Title:
                    </Typography>
                    <Typography color="accentColor" component="data" gutterBottom>
                      {moment(post.creationDate).format('lll')}
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
