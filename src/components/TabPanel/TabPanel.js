import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  tabPanel: {
    marginTop: 60,
    padding: '0 40px 0',
  },
}));

const TabPanel = (props) => {
    const { children, index } = props;
    const classes = useStyles();
  
    return (
      <div
        role="tabpanel"
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        className={classes.tabPanel}
      >
        {
          <Box p={3}>
            {children}
          </Box>
          }
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
  };

  export default TabPanel;