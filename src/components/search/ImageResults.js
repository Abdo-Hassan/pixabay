import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import ImageZoom from './ImageZoom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%'
  },
  image: {
    position: 'relative',
    height: 200,
    cursor: 'zoom-in',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15
      },
      '& $imageMarked': {
        opacity: 0
      },
      '& $imageTitle': {
        border: '4px solid currentColor'
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
}));
const ImageResults = ({ images, search }) => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(false);

  const handleClickOpen = image => {
    setOpen(true);
    setCurrentImage(image);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  let imageListContent;
  if (images) {
    imageListContent = (
      <Fragment>
        <Divider />
        <p className={classes.title}>
          Images For{' '}
          <span style={{ color: '#3F51B5' }}>{search.searchText}</span>
        </p>
        <Grid container>
          {images.map(image => {
            return (
              <Grid item md={4} sm={6} xs={12} key={image.id}>
                <ButtonBase
                  onClick={() => handleClickOpen(image.largeImageURL)}
                  focusRipple
                  className={classes.image}
                  focusVisibleClassName={classes.focusVisible}
                  style={{
                    width: '100%'
                  }}
                >
                  <span
                    className={classes.imageSrc}
                    style={{
                      backgroundImage: `url(${image.largeImageURL})`
                    }}
                  />
                  <span className={classes.imageBackdrop} />
                  <span className={classes.imageButton}>
                    <Typography
                      component='span'
                      variant='subtitle1'
                      color='inherit'
                      className={classes.imageTitle}
                    >
                      {image.tags}
                      <span className={classes.imageMarked} />
                    </Typography>
                  </span>
                </ButtonBase>
              </Grid>
            );
          })}
        </Grid>
      </Fragment>
    );
  } else {
    imageListContent = <p>no images here</p>;
  }
  return (
    <div>
      {imageListContent}
      <ImageZoom
        image={currentImage}
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
      />
    </div>
  );
};

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};
export default ImageResults;
