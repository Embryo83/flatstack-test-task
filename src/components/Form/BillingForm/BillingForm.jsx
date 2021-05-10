import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import AddressForm from '../AddressForm/AddressForm';

import { mapObjectAndSetValues, getErrorMessage } from '../../../utils/utils';
import { billingSchema } from '../../../utils/validation';

import classes from './BillingForm.module.scss';

const BillingForm = ({ onSubmit }) => {
  const { userInfo } = useSelector(({ checkout }) => checkout);
  const { register, handleSubmit, setValue, errors } = useForm({
    defaultValues: userInfo.billing,
    resolver: yupResolver(billingSchema),
  });

  const onSameAsShippingClick = () =>
    mapObjectAndSetValues(userInfo.shipping, setValue);

  const onValueChange = ({ target }) => setValue(target.name, target.value);

  return (
    <form className={classes.form__billing} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.form__billing_title}>
        <h2>Billing Information</h2>
        <Button onClick={onSameAsShippingClick} simple>
          Same as shipping
        </Button>
      </div>
      <p className={classes.form__billing_label}>Billing Contact</p>
      <Input
        type="text"
        name="name"
        placeholder="Full Name"
        register={register}
        onChange={onValueChange}
        message={getErrorMessage(errors, 'name')}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email Address"
        register={register}
        onChange={onValueChange}
        message={getErrorMessage(errors, 'email')}
      />
      <p className={classes.label}>Billing Address</p>
      <AddressForm
        register={register}
        errors={errors}
        onChange={onValueChange}
        setValue={setValue}
      />
      <Button type="submit">Continue</Button>
    </form>
  );
};

BillingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BillingForm;
