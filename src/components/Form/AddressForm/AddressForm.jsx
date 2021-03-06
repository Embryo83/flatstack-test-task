import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Select from '../../UI/Select/Select';
import Toast from '../../UI/Toast/Toast';
import Loader from '../../UI/Loader/Loader';

import { ReactComponent as Geo } from '../../../assets/svg/geolocation.svg';
import { mapObjectAndSetValues, getErrorMessage } from '../../../utils/utils';
import COUNTRIES from '../../../assets/constants';

import classes from './AddressForm.module.scss';

const AddressForm = ({ register, errors, onChange, setValue }) => {
  const { status, error, geolocation } = useSelector(
    ({ checkout }) => checkout
  );

  const onGeoButtonClick = () => {
    if (status === 'succeeded') mapObjectAndSetValues(geolocation, setValue);
    if (error) toast.error(error);
  };

  return (
    <div className={classes.form__address}>
      <Input
        type="text"
        name="address"
        placeholder="Street Address"
        register={register}
        onChange={onChange}
        message={getErrorMessage(errors, 'address')}
      />
      <Input
        type="text"
        name="apartment"
        placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
        register={register}
        onChange={onChange}
      />
      <div className={classes.geo__container}>
        <div className={classes.geo__container_type_btn}>
          {status === 'loading' && <Loader />}
          <Button onClick={onGeoButtonClick} geo>
            <Geo />
          </Button>
        </div>
        <Input
          type="text"
          name="city"
          placeholder="City"
          register={register}
          onChange={onChange}
          message={getErrorMessage(errors, 'city')}
        />
      </div>
      <div className={classes.form__input}>
        <Select
          name="country"
          options={COUNTRIES}
          register={register}
          onChange={onChange}
          message={getErrorMessage(errors, 'country')}
        />
        <Input
          type="number"
          name="postcode"
          placeholder="ZIP"
          register={register}
          onChange={onChange}
          message={getErrorMessage(errors, 'postcode')}
        />
      </div>
      {error && <Toast />}
    </div>
  );
};

AddressForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default AddressForm;
