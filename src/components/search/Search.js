import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
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
  const { searchText } = search;
  console.log(searchText);
  return (
    <div>
      <TextField
        id='standard-name'
        label='Name'
        className={classes.textField}
        value={searchText}
        onChange={e => setSearch({ searchText: e.target.value })}
        margin='normal'
      />
    </div>
  );
};

export default Search;
