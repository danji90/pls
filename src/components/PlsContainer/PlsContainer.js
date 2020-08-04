import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  landingContainer: {
    position: 'relative',
    backgroundColor: (props) => props.color,
    padding: '40px 20px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: (props) => props.flexDirection,
  },
  bottomSlice: {
    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      right: 0,
      borderBottom: '80px solid #fff',
      borderLeft: '100vw solid transparent',
      width: 0,
    },
  },
  topSlice: {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      borderTop: '80px solid #fff',
      borderLeft: '100vw solid transparent',
      width: 0,
    }
  }
});

const PlsContainer = (props) => {
  const { children, color, topSlice, bottomSlice } = props;
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
}
  
PlsContainer.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  topSlice: PropTypes.bool,
  bottomSlice: PropTypes.bool,
  flexDirection: PropTypes.string,
};

PlsContainer.defaultProps = {
  children: undefined,
  color: '#fec44f',
  topSlice: false,
  bottomSlice: false,
  flexDirection: 'row',
};

export default PlsContainer;