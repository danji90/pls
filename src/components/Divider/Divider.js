import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import dividerTopEven from '../../utils/images/pls_divider_top_even.png';
import dividerBottomEven from '../../utils/images/pls_divider_bottom_even.png';
import dividerTopOdd from '../../utils/images/pls_divider_top_odd.png';
import dividerBottomOdd from '../../utils/images/pls_divider_bottom_odd.png';

const getImageUrl = (position, idx) => {
  if (position === 'bottom') {
    return idx % 2 ? dividerBottomEven : dividerBottomOdd;
  }
  return idx % 2 ? dividerTopEven : dividerTopOdd;
};

const useStyles = makeStyles(() => ({
  divider: props => ({
    width: '100%',
    marginBottom: props.position === 'bottom' ? 50 : -50,
  }),
}));

const Divider = props => {
  const classes = useStyles(props);
  const { position, idx } = props;

  return (
    <img
      className={classes.divider}
      src={getImageUrl(position, idx)}
      alt="divider"
    />
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
