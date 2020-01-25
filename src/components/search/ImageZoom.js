import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const ImageZoom = ({ open, image, handleClose }) => {
  return (
    <Dialog
      open={open}
      maxWidth='sm'
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      PaperProps={{
        style: {
          margin: 10
        }
      }}
    >
      <DialogContent style={{ padding: 0 }}>
        <img src={image} alt='pic' style={{ maxWidth: '100%' }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary' autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageZoom;
