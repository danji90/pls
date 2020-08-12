import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import logo from '../../utils/images/pls_navbar_logo.png';

const useStyles = makeStyles({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    minHeight: 50,
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    backgroundColor: '#fec44f',
    zIndex: 999,
  },
  brand: {
    width: 340,
    padding: 10,
    '& a': {
      color: 'inherit',
    },
  },
  brandLink: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    textDecoration: 'none',
    '& img': {
      height: 40,
      width: 40,
      padding: 10,
    }
  },
  media:{
    padding: 10,
  },
  iconButton: {
    '& svg': {
      width: 40,
      height: 40,
    },
  },
  contact: {
    padding: '5px 0 5px 60px',
    '& p': {
      display: 'flex',
      flexDirection: 'column',
    },
  }
});

const Footer = (props) => {
    const classes = useStyles(props);
    return (
      <footer className={classes.footer}>
        <div className={classes.brand}>
          <a href="/pls/" className={classes.brandLink}>
            <img src={logo} alt="pls-logo" />
            Pete's Language Services
          </a>
          <div className={classes.contact}>
            <p>
              <span>Via Castel Mareccio/Maretschgasse 2</span>
              <span>39100 Bolzano/Bozen</span>
              <span>Italy</span>
            </p>
            <p>
              <span>Phone: +39 0471 978112</span>
              <span>Mobile: +39 328 483 0917</span>
            </p>
            <p>
              <span>e-mail: <a href="mailto:petemarshhunn@yahoo.com">petemarshhunn@yahoo.com</a></span>
            </p>
          </div>
        </div>
        <div className={classes.media}>
          <IconButton
            href="https://www.facebook.com/marsh.peter"
            target="_blank"
            rel="noopener"
            className={classes.iconButton}
            >
            <FacebookIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/pete-marsh-hunn-7007a4129/"
            target="_blank"
            rel="noopener"
            className={classes.iconButton}
            >
            <LinkedInIcon />
          </IconButton>
        </div>
      </footer>
    );
  }

  export default Footer;