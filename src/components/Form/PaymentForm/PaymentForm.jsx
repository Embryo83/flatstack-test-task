import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

import { ReactComponent as Lock } from '../../../assets/svg/lock.svg';

import { paymentSchema } from '../../../utils/validation';
import { getErrorMessage } from '../../../utils/utils';

import classes from './PaymentForm.module.scss';

const PaymentForm = ({ onSubmit }) => {
  const { userInfo } = useSelector(({ checkout }) => checkout);
  const { register, handleSubmit, setValue, errors } = useForm({
    defaultValues: userInfo.payment,
    resolver: yupResolver(paymentSchema),
  });

  const onValueChange = ({ target }) => setValue(target.name, target.value);

  const renderInput = (type, name, label, placeholder) => (
    <>
      <p className={classes.label}>{label}</p>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        register={register}
        onChange={onValueChange}
        message={getErrorMessage(errors, name)}
      />
    </>
  );

  return (
    <form className={classes.form__payment} onSubmit={handleSubmit(onSubmit)}>
      <h2>Payment</h2>
      <div className={classes.form__payment_subtitle}>
        <Lock />
        <p>This is a secure 128-bit SSL encrypted payment</p>
      </div>
      {renderInput(
        'text',
        'cc-name',
        'Cardholder Name',
        'Name as it appears on your card'
      )}
      <div className={classes.card}>
      {renderInput(
        'number',
        'cc-number',
        'Cardholder Number',
        'XXXX XXXX XXXX XXXX XXXX'
      )}
      </div>
      <div className={classes.form__payment_input}>
        <div>{renderInput('text', 'cc-exp', 'Expire Date', 'MM / YY')}</div>
        <div>{renderInput('number', 'cc-csc', 'Security Cod', '')}</div>
      </div>
      <Button type="submit">Pay Securely</Button>
    </form>
  );
};

PaymentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PaymentForm;
