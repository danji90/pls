import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';

import { moveToSection } from '../../utils/appUtils.js';

const useStyles = makeStyles(() => ({
  serviceItem: {
    padding: '5px 25px',
    fontWeight: 'normal',
  },
}));

const Dropdown = props => {
  const classes = useStyles();
  const { menuItems, onClick } = props;

  return (
    <List>
      {menuItems.map(item => {
        return (
          <ListItem
            className={classes.serviceItem}
            key={item.id}
            button
            onClick={() => {
              onClick();
              return moveToSection(item.id);
            }}
          >
            {item.title}
          </ListItem>
        );
      })}
    </List>
  );
};

Dropdown.defaultProps = {
  menuItems: [],
  onClick: () => {},
};

Dropdown.propTypes = {
  menuItems: PropTypes.isRequired,
  onClick: PropTypes.func,
};

export default Dropdown;
