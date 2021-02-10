import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <>{children}</>;
};

ScrollToTop.propTypes = {
  history: PropTypes.shape(historyPropTypes).isRequired,
  children: PropTypes.node,
};

ScrollToTop.defaultProps = {
  children: undefined,
};

export default withRouter(ScrollToTop);
