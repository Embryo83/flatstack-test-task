import PropTypes from 'prop-types';
import classes from './ValidationMessage.module.scss';

const ValidationMessage = ({ children }) => (
  <div className={classes.message}>{children}</div>
);

ValidationMessage.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ValidationMessage;
