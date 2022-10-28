import {
  Box, Card, CardContent, Typography,
} from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Motrix } from '../../global/State';
import { FindHistoryById } from '../../services/requests/FindHistoryById';

export function HistoryCard(props) {
  const { history } = props;
  const { id } = useParams();
  const { setHistory } = useContext(Motrix);

  async function getHistoryById() {
    try {
      const postResult = await FindHistoryById(id);

      if (!Array.isArray(postResult.data)) {
        throw new Error("Ocorreu um erro");
      }

      const resultData = await postResult.data;
      setHistory(resultData);
    } catch (err) {
      console(err);
    }
  }

  useEffect(() => {
    getHistoryById(id);
  }, []);

  return (
    <>
      {history && history.map((h) => (
        <Card
          key={h.id}
          sx={{
            margin: 1, boxShadow: 0, minWidth: 380, maxWidth: 700, gap: 2,
          }}
        >
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Typography color="secondary">
                Título:
              </Typography>
              <Typography color="secondary" component="data">
                {new Date(!h.updateDate ? h.creationDate : h.updateDate)
                  .toLocaleString()
                  .slice(0, 16)
                  .replace(" ", " às ")}
              </Typography>
            </Box>
            <Typography variant="h6" component="h2" color="primary">
              {h.title}
            </Typography>
            <Typography color="secondary" gutterBottom>
              Corpo:
            </Typography>
            <Typography variant="h6" component="h2" color="primary">
              {h.body}
            </Typography>
          </CardContent>
        </Card>
      ))}

    </>
  );
}
