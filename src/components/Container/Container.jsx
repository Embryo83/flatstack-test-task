import Main from '../Main/Main';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Form from '../Form/Form';
import OrderSummary from '../OrderSummary/OrderSummary';

import classes from './Container.module.scss';

const steps = [
  {
    step: 0,
    name: 'Shipping',
    path: '/',
    exact: true,
  },
  {
    step: 1,
    name: 'Billing',
    path: '/billing',
    exact: false,
  },
  {
    step: 2,
    name: 'Payment',
    path: '/payment',
    exact: false,
  },
  {
    step: 3,
    name: 'Completed Order',
    path: '/completed-order',
    exact: false,
  },
];

const Container = () => (
  <Main>
    <section className={classes.container}>
      <div className={classes.container_type_left}>
        <BreadCrumbs steps={steps.slice(0, -1)} />
        <Form steps={steps} />
      </div>
      <div className={classes.container_type_right}>
        <OrderSummary />
      </div>
    </section>
  </Main>
);

export default Container;
