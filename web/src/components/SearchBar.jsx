import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { Motrix } from '../global/State';

export function SearchBar() {
  const { search, handleSearch } = useContext(Motrix);
  return (

    <TextField
      sx={{ bgcolor: "#ffffff", borderRadius: "5px" }}
      fullWidth
      text
      label="Posts"
      variant="outlined"
      value={search}
      placeholder="Buscar..."
      onChange={handleSearch}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
}
