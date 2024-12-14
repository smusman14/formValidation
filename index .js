import React from 'react';
import { makeStyles } from '@material-ui/styles';

// JSS styles
const useStyles = makeStyles({
  "*": {
    margin: 0,
    padding: 0,
  },
  formValidation: {
    width: '100%',
    height: '70vh',
    background: 'linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.63)), url(./assets/bg.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '350px',
    border: '2px solid orange',
    borderRadius: '10px',
    padding: '30px',
    textAlign: 'center',
    color: 'white',
    backdropFilter: 'blur(50px)',
  },
  h2: {
    color: 'white',
    marginBottom: '10px',
  },
  input: {
    width: '300px',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    fontSize: 'large',
    margin: '5px',
  },
  button: {
    width: '200px',
    backgroundColor: 'orange',
    padding: '10px',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    margin: '10px',
    cursor: 'pointer',
  },
  textarea: {
    width: '300px',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    fontSize: 'large',
    margin: '5px',
  },
});

// React component
const FeedbackForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.formValidation}>
      <div className={classes.content}>
        <form>
          <h2 className={classes.h2}><u>FEEDBACK MESSAGE</u></h2>
          <input className={classes.input} type="text" placeholder="enter username" pattern="[A-Z a-z]{3,20}" />
          <input className={classes.input} type="email" placeholder="email" />
          <textarea className={classes.textarea} cols="30" rows="5" placeholder="enter msg" />
          <button className={classes.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
