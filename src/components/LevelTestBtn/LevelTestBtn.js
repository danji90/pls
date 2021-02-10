import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  levelTestBtn: {
    textAlign: 'center',
    position: 'sticky',
    backgroundColor: '#f55',
    zIndex: 800,
    borderRadius: '50%',
    height: 100,
    width: 100,
    top: '88vh',
    left: '95vw',
    margin: 10,
    textDecoration: 'none',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.4s ease 0s',
    '&:hover': {
      fontWeight: 'bold',
      '-webkit-box-shadow': '0px 8px 15px rgba(0,0,0,0.4)',
      '-moz-box-shadow': '0px 8px 15px rgba(0,0,0,0.4)',
      boxShadow: '0px 8px 15px rgba(0,0,0,0.4)',
      transition: 'all 0.4s ease 0s',
      backgroundColor: '#f55',
    },
    [theme.breakpoints.down('sm')]: {
      height: 90,
      width: 90,
      top: '87vh',
      left: '95vw',
    },
  },
}));

const LevelTestBtn = () => {
  const classes = useStyles();
  return (
    <Button
      className={classes.levelTestBtn}
      href="https://docs.google.com/forms/d/e/1FAIpQLSfa7XH3bafMVuNxRcI2wyu1CnndZvz9MUdSw-sJtBbepVIn6Q/viewform"
      target="_blank"
    >
      Free level test!
    </Button>
  );
};

export default LevelTestBtn;
