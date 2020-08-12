import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  tabBgImage: {
    position: 'fixed',
    width: '100%',
    height: '100vh',
    top: 0,
    zIndex: 0,
    backgroundImage: props => `url(${props.backgroundImage})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat, repeat',
  },
  tabPanel: {
    backgroundColor: (props) => props.backgroundColor,
  },
}));

const TabPanel = (props) => {
    const { children, index, propClasses, backgroundImage} = props;
    const classes = useStyles(props);
    console.log();
    return (
      <>
        {backgroundImage && <div className={classes.tabBgImage}></div>}
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
      </>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
  };

  TabPanel.defaultProps = {
    children: undefined,
    backgroundColor: '#fec44f',
  };

  export default TabPanel;