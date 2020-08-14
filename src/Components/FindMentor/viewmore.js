import React, {useState, useEffect} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Viewmore(props) {
    const getMentors = async () => {
        try {
          const response = await fetch(`http://localhost:5000/mentors/${props.id}`);
          const jsonData = await response.json();
          console.log(jsonData);
          setMentors(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      }

    const [mentors, setMentors] = useState("");

      useEffect(() => {
        getMentors();
      }, []);

    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
      };
    
      return (
        <div>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Learn more
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="md"
            fullWidth
          >
            <div style={{margin:'auto', padding:'10px', fontSize:'42px', padding:'3%'}}>
                {mentors.fname} {mentors.lname}
            </div>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {mentors.fname}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }