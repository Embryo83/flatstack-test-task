import { useSelector } from 'react-redux';

import Button from '../../UI/Button/Button';

import classes from './CompletedOrder.module.scss';

const CompletedOrder = () => {
  const { email } = useSelector(({ checkout }) => checkout.userInfo.billing);

  return (
    <div className={classes.form__completed}>
      <p className={classes.form__completed_title}>Thank you for your order!</p>
      <p className={classes.form__completed_orderNumber}>Your order number is: 188787788</p>
      <p className={classes.form__completed_email}>
        Your will recieve an email confirmation shortly to
        <span>{` ${email}`}</span>
      </p>
      <p>
        Estimated delivery Day is
        <span className={classes.form__completed_date}>Friday 1st April 2016</span>
      </p>
      <Button type="button" simple>
        Print Recipe
      </Button>
    </div>
  );
};

export default CompletedOrder;
