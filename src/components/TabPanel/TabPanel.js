import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  tabBgImage: {
    position: 'fixed',
    width: '100%',
    height: '100vh',
    top: 0,
    zIndex: 0,
    opacity: 0.2,
    backgroundImage: props => `url(${props.backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat, repeat',
  },
  tabPanel: {},
}));

const TabPanel = props => {
  const { children, index, backgroundImage, backgroundColor } = props;
  const classes = useStyles(props);
  return (
    <>
      {backgroundImage && <div className={classes.tabBgImage} />}
      <div
        role="tabpanel"
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        className={classes.tabPanel}
        style={{ backgroundColor, paddingBottom: 350 }}
      >
        <Box p={3}>{children}</Box>
      </div>
    </>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
};

TabPanel.defaultProps = {
  children: undefined,
  backgroundColor: '#fec44f',
  backgroundImage: undefined,
};

export default TabPanel;
