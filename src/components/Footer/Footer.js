import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { ReactComponent as PLSNavbarLogo } from '../../utils/images/pls_navbar_logo.svg';

const useStyles = makeStyles({
  footer: {
    minHeight: 50,
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 10,
  },
  brand: {
    width: 300,
    padding: 10,
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
  brandLink: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  media:{
    padding: 10,
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
          <a href="/pls" className={classes.brandLink}>
            <PLSNavbarLogo />
            Pete's Language Services
          </a>
          <div className={classes.contact}>
            <p>
              <span>Via Castel Mareccio 2</span>
              <span>39100 Bolzano</span>
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
            >
            <FacebookIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/pete-marsh-hunn-7007a4129/"
            target="_blank"
            rel="noopener"
            >
            <LinkedInIcon />
          </IconButton>
        </div>
      </footer>
    );
  }

  export default Footer;