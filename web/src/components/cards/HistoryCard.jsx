import {
  Box, Card, CardContent, Typography,
} from '@mui/material';
import React from 'react';

export function HistoryCard(props) {
  const { history } = props;
  return (
    <>
      {history && history.map((h) => (
        <Card
          sx={{ margin: 1, boxShadow: 0, minWidth: 350 }}
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
              Conteúdo:
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
