import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import ImageResults from './ImageResults';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    margin: 10
  },
  textField: {
    marginBottom: theme.spacing(2)
  },
  select: {
    width: 150
  }
}));

const Search = () => {
  const classes = useStyles();
  const [search, setSearch] = useState({
    searchText: '',
    amount: '',
    apiUrl: 'https://pixabay.com/api',
    apiKey: '10853125-b01d14bd9653fb17a1bdb50b6',
    images: []
  });

  const { searchText, amount, apiUrl, apiKey, images } = search;

  const searchPhotos = () => {
    axios
      .get(
        `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
      )
      .then(res => {
        setSearch({ ...search, images: res.data.hits });
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className={classes.container}>
        <TextField
          id='standard-name'
          className={classes.textField}
          placeholder='Search...'
          value={searchText}
          name='searchText'
          onChange={e =>
            setSearch({ ...search, [e.target.name]: e.target.value })
          }
          margin='normal'
          autoFocus
          fullWidth
        />
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='amount-simple'>Amount</InputLabel>
            <Select
              className={classes.select}
              value={amount}
              onChange={e => setSearch({ ...search, amount: e.target.value })}
              inputProps={{
                name: 'amount',
                id: 'amount-simple'
              }}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button
          variant='contained'
          color='primary'
          style={{ margin: '20px 0' }}
          onClick={searchPhotos}
        >
          Search
        </Button>
        <Typography variant='h3' gutterBottom>
          Images For {images.tags}
        </Typography>
      </div>
      {images.length > 0 ? <ImageResults images={images} /> : null}
    </div>
  );
};

export default Search;
