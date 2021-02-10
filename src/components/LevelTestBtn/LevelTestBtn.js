import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Slide, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  hidden: {
    right: -100,
  },
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
    transition: 'right 0.4s ease 0s',
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

const LevelTestBtn = props => {
  const classes = useStyles();
  const { visibleAt } = props;
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const listenScroll = () => {
      const maxScroll = document.body.offsetHeight - window.innerHeight;
      setScrollY(window.scrollY);
      setVisible(
        window.scrollY >= visibleAt && window.scrollY <= maxScroll - 185,
      );
    };
    window.addEventListener('scroll', listenScroll, { passive: true });
    return () =>
      window.removeEventListener('scroll', listenScroll, { passive: true });
  }, [scrollY, visibleAt]);

  return (
    <Slide in={visible} direction="left">
      <Button
        className={classes.levelTestBtn}
        href="https://docs.google.com/forms/d/e/1FAIpQLSfa7XH3bafMVuNxRcI2wyu1CnndZvz9MUdSw-sJtBbepVIn6Q/viewform"
        target="_blank"
      >
        Free level test!
      </Button>
    </Slide>
  );
};

LevelTestBtn.propTypes = {
  visibleAt: PropTypes.number,
};

LevelTestBtn.defaultProps = {
  visibleAt: 250,
};

export default LevelTestBtn;
