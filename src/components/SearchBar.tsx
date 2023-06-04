import {FormEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {Paper, IconButton} from "@mui/material";
import {Search} from "@mui/icons-material";


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    <Paper
      component={'form'}
      onSubmit={(event) => {handleSubmit(event)}}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: {sm: 5}
      }}
    >
      <input
        placeholder={"Search..."}
        className={"search-bar"}
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}
      />
      <IconButton
        type={'submit'}
        sx={{p:'10px', color: '#000'}}
      >
        <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;