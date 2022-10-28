/* eslint-disable no-unused-expressions */
import { Delete, Edit, History } from "@mui/icons-material";
import {
  Box, Button, Card, CardContent, Chip, Divider, Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Motrix } from "../../global/State";
import { DeletePost } from "../../services/requests/DeletePost";
import { FormEdit } from "../form/FormEdit";
import { HistoryCard } from "./HistoryCard";

export function PostDetailCard(props) {
  const navigate = useNavigate();
  const { id } = useParams();

  const { history } = useContext(Motrix);
  const { post, setPost } = props;

  const [edit, setEdit] = useState(false);
  const [handleHistory, setHandleHistory] = useState(false);

  function handleEdit() {
    edit ? setEdit(false) : setEdit(true);
  }

  async function handleDelete() {
    await DeletePost(id);
    navigate("/");
  }

  function clickHandleHistory() {
    handleHistory ? setHandleHistory(false) : setHandleHistory(true);
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Card
        key={post.id}
        sx={{
          margin: 1, boxShadow: 0, minWidth: 380, maxWidth: 700,
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
              onClick={() => clickHandleHistory()}
            >
              <History />
            </Button>
            <Button
              variant="contained"
              color="accentColor"
              onClick={() => handleDelete()}
            >
              <Delete />
            </Button>
          </Box>
        </CardContent>
      </Card>
      {edit && <FormEdit setPost={setPost} />}
      {handleHistory && <HistoryCard history={history} />}
    </Box>
  );
}
