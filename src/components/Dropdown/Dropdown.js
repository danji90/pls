import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { moveToSection } from '../../utils/appUtils.js';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Dropdown = (props) => {
  const {tabTitle, menuItems, onClick} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Typography
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        {tabTitle}
      </Typography>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map(item => {
          return (
          <StyledMenuItem onClick={() => {
            onClick();
            setAnchorEl(null);
            return moveToSection(item.id);
          }}>
            {item.title}
          </StyledMenuItem>)
        })}
      </StyledMenu>
    </div>
  );
}

Dropdown.defaultProps = {
  tabTitle: undefined,
  menuItems: [],
  onClick: () => {},
};

Dropdown.propTypes = {
  tabTitle: PropTypes.string,
  menuItems: PropTypes.isRequired,
  onClick: PropTypes.func,
};

export default Dropdown;