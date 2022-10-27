/* eslint-disable no-unused-expressions */
import { Delete, Edit, History } from "@mui/icons-material";
import {
  Box, Button, Card, CardContent, Chip, Divider, Typography,
} from "@mui/material";
import React, { useState } from "react";
import { FormEdit } from "../form/FormEdit";
// import { HistoryCard } from "./HistoryCard";

export function PostDetailCard(props) {
  const { post } = props;
  const [edit, setEdit] = useState(false);
  const [history, setHistory] = useState(false);

  function handleEdit() {
    edit ? setEdit(false) : setEdit(true);
  }
  function handleHistory() {
    history ? setHistory(false) : setHistory(true);
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
          <Box display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              color="accentColor"
              onClick={() => handleEdit()}
            >
              <Edit />
            </Button>
            <Button
              variant="contained"
              color="accentColor"
              onClick={() => handleHistory()}
            >
              <History />
            </Button>
            <Button
              variant="contained"
              color="accentColor"

            >
              <Delete />
            </Button>
          </Box>
        </CardContent>
      </Card>
      {edit && <FormEdit />}
      {/* {history && <HistoryCard />} */}
    </Box>
  );
}
