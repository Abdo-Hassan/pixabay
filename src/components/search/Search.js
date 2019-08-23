import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';

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
    apiUrl: 'https://pixabay/com/api',
    apiKey: '10853125-b01d14bd9653fb17a1bdb50b6',
    images: []
  });
  const { searchText, amount, apiUrl, apiKey, images } = search;
  console.log(amount);
  return (
    <div className={classes.container}>
      <TextField
        id='standard-name'
        label='Name'
        className={classes.textField}
        value={searchText}
        onChange={e => setSearch({ searchText: e.target.value })}
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
            onChange={e => setSearch({ amount: e.target.value })}
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
    </div>
  );
};

export default Search;
