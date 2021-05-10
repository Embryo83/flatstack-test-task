import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import AddressForm from '../AddressForm/AddressForm';

import { shippingSchema } from '../../../utils/validation';
import { getErrorMessage } from '../../../utils/utils';

import classes from './ShippingForm.module.scss';

const ShippingForm = ({ onSubmit }) => {
  const { userInfo } = useSelector(({ checkout }) => checkout);
  const { register, handleSubmit, setValue, errors } = useForm({
    defaultValues: userInfo.shipping,
    resolver: yupResolver(shippingSchema),
  });

  const onValueChange = ({ target }) => setValue(target.name, target.value);

  return (
    <form className={classes.form__shipping} onSubmit={handleSubmit(onSubmit)}>
      <h2>Shipping Info</h2>
      <p className={classes.form__shipping_label}>Recipient</p>
      <Input
        type="text"
        name="name"
        placeholder="Full Name"
        register={register}
        onChange={onValueChange}
        message={getErrorMessage(errors, 'name')}
      />
      <div className={classes.form__shipping_phone}>
        <Input
          type="tel"
          name="phone"
          placeholder="Daytime Phone"
          register={register}
          onChange={onValueChange}
          message={getErrorMessage(errors, 'phone')}
        />
        <p>
          For delivery
          <br />
          questions only
        </p>
      </div>
      <p className={classes.form__shipping_label}>Address</p>
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

ShippingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ShippingForm;
