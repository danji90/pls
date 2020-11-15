/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  landingContainer: {
    position: 'relative',
    backgroundColor: props => props.backgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: props => props.flexDirection,
  },
  bottomSlice: {
    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      right: 0,
      borderBottom: '80px solid #fff',
      borderLeft: props =>
        props.orientation === 'left' ? '90vw solid transparent' : 'unset',
      borderRight: props =>
        props.orientation === 'right' ? '90vw solid transparent' : 'unset',
      width: 0,
    },
  },
  topSlice: {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      borderTop: '80px solid white',
      borderLeft: props =>
        props.orientation === 'left' ? '90vw solid transparent' : 'unset',
      borderRight: props =>
        props.orientation === 'right' ? '90vw solid transparent' : 'unset',
      width: 0,
    },
  },
});

const PlsContainer = props => {
  const { children, topSlice, bottomSlice } = props;
  const classes = useStyles(props);

  return (
    <div
      className={`${classes.landingContainer}
      ${bottomSlice ? classes.bottomSlice : ''}
      ${topSlice ? classes.topSlice : ''}`}
    >
      {children}
    </div>
  );
};

PlsContainer.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  topSlice: PropTypes.bool,
  bottomSlice: PropTypes.bool,
  flexDirection: PropTypes.string,
  orientation: PropTypes.string,
};

PlsContainer.defaultProps = {
  children: undefined,
  backgroundColor: undefined,
  topSlice: false,
  bottomSlice: false,
  flexDirection: 'row',
  orientation: 'left',
};

export default PlsContainer;
