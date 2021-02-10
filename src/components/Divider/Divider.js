/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const getRotation = (position, idx) => {
  if (position === 'bottom') {
    return idx % 2 ? 'rotateX(180deg) rotateY(180deg)' : 'rotateX(180deg)';
  }
  return idx % 2 && 'rotateY(180deg)';
};

const useStyles = makeStyles(theme => ({
  dividerContainer: props => ({
    position: 'relative',
    height: 150,
    width: '100%',
    zIndex: 700,
    marginBottom: props.position === 'bottom' ? 50 : -40,
    '& div': {
      position: 'absolute',
      bottom: 0,
      right: 0,
      height: '100%',
      width: '100vw',
      transform: getRotation(props.position, props.idx),
    },
    [theme.breakpoints.down('sm')]: {
      height: 50,
    },
  }),
  polygon1: {
    backgroundColor: '#f9f9f9',
    clipPath: 'polygon(0 70%, 100% 0, 100% 100%, 0 100%)',
  },
  polygon2: {
    backgroundColor: 'rgb(254, 235, 79, 0.5)',
    clipPath: 'polygon(100% 0, 50% 35%, 100% 100%)',
  },
}));

const Divider = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.dividerContainer}>
      <div className={classes.polygon1} />
      <div className={classes.polygon2} />
    </div>
  );
};

Divider.propTypes = {
  position: PropTypes.string,
  idx: PropTypes.number,
};

Divider.defaultProps = {
  position: 'top',
  idx: 1,
};

export default Divider;
