import {
  Box, Card, CardContent, Typography,
} from "@mui/material";
import moment from "moment";
import React from "react";

export function PostCard(props) {
  const { posts } = props;
  // const { } = useContext(Motrix);

  return (
    <>
      {posts.map((post) => (
        <Card
          key={post.id}
          sx={{
            display: { xs: "flex", md: "grid" },
            flexDirection: { xs: "column", md: "row" },
            margin: 1,
          }}
        >
          <CardContent>
            <Box display="flex" alignItens="end">
              {/* <Typography color="textSecondary" gutterBottom>
                Title:
              </Typography> */}
              <Typography color="textSecondary" gutterBottom>
                Postado:
                {moment(post.creationDate).locale("pt-br").format('llll')}

              </Typography>
            </Box>

            <Typography variant="h6" component="h2" color="primary">
              {post.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
