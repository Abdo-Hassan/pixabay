import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const ImageZoom = ({ open, image, handleClose }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogContent>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet laboriosam recusandae vero fugit nam temporibus enim voluptatum ipsum fuga error.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary' autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ImageZoom;
