import PropTypes from 'prop-types';

import classes from './Main.module.scss';

const Main = ({ children }) => (
  <div className={classes.main}>{children}</div>
);

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
