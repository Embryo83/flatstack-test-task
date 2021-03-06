import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, useHistory } from 'react-router';
import PropTypes from 'prop-types';

import ShippingForm from './ShippingForm/ShippingForm';
import BillingForm from './BillingForm/BillingForm';
import PaymentForm from './PaymentForm/PaymentForm';
import CompletedOrder from './CompletedOrder/CopletedOrder';

import { setUserInfo } from '../../redux/checkoutSlice';

const Form = ({ steps }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { activeStep } = useSelector(({ checkout }) => checkout);

  const onFormSubmit = (data) => {
    dispatch(setUserInfo(data));
    history.push(steps[activeStep + 1].path);
  };

  const renderRoute = (step, component) => (
    <Route key={step} path={steps[step].path}>
      {activeStep !== step ? <Redirect to="/" /> : component}
    </Route>
  );

  const formSteps = [
    <ShippingForm onSubmit={onFormSubmit} key={0} />,
    <BillingForm onSubmit={onFormSubmit} key={1} />,
    <PaymentForm onSubmit={onFormSubmit} key={2} />,
    <CompletedOrder key={3} />,
  ];

  return formSteps.map((component, i) => renderRoute(i, component));
};

Form.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Form;
