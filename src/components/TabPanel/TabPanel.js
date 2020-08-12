import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  tabPanel: {
    backgroundColor: (props) => props.backgroundColor,
  },
});

const TabPanel = (props) => {
    const { children, index, propClasses } = props;
    const classes = useStyles(props);
    return (
      <div
        role="tabpanel"
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        className={propClasses || classes.tabPanel}
        style={{paddingBottom: 350}}
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
    backgroundColor: PropTypes.string,
  };

  TabPanel.defaultProps = {
    children: undefined,
    backgroundColor: '#fec44f',
  };

  export default TabPanel;