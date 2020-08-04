import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  landingContainer: {
    position: 'relative',
    backgroundColor: props => props.color,
    display: 'flex',
    justifyContent: 'center',
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
      right: 0,
      borderTop: '80px solid #fff',
      borderRight: '100vw solid transparent',
      width: 0,
    }
  }
});

const PlsContainer = (props) => {
  const { children, color, topSlice, bottomSlice } = props;
  const classes = useStyles(props);

  return (
    <div
      className={`${classes.landingContainer} ${bottomSlice ? classes.bottomSlice : ''}`}
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
};

PlsContainer.defaultProps = {
  children: undefined,
  color: '#fec44f',
  topSlice: false,
  bottomSlice: false,
};

export default PlsContainer;