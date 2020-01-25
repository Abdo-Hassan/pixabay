import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import ImageResults from './ImageResults';

const useStyles = makeStyles(theme => ({
  container: {
    marginLeft: 10
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

  const searchPhotos = (term, amount) => {
    setSearch(search => ({ ...search, searchText: term }));
    if (term === '') {
      setSearch(search => ({ ...search, images: [] }));
    } else {
      axios
        .get(
          `${apiUrl}/?key=${apiKey}&q=${term}&image_type=photo&per_page=${amount}&safesearch=true`
        )
        .then(res => {
          setSearch(search => ({ ...search, images: res.data.hits }));
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <div className={classes.container}>
        <TextField
          id='standard-name'
          className={classes.textField}
          style={{ width: '98%' }}
          placeholder='Search...'
          value={searchText}
          onChange={e => searchPhotos(e.target.value)}
          margin='normal'
          autoFocus
        />
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='amount-simple'>Amount</InputLabel>
            <Select
              className={classes.select}
              value={amount}
              onChange={e => {
                setSearch(search => ({ ...search, amount: e.target.value }));
                searchPhotos(searchText, e.target.value);
              }}
              inputProps={{
                name: 'amount',
                id: 'amount-simple'
              }}
            >
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={60}>60</MenuItem>
              <MenuItem value={90}>90</MenuItem>
              <MenuItem value={120}>120</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      {images.length > 0 ? (
        <ImageResults images={images} search={search} />
      ) : null}
    </div>
  );
};

export default Search;
