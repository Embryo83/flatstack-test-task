import SummaryItem from './SummaryItem/SummaryItem';
import OrderReport from './OrderReport/OrderReport';
import Button from '../UI/Button/Button';

import shoe from '../../assets/images/shoe.png';
import backpack from '../../assets/images/backpack.png';
import bag from '../../assets/images/bag.png';

import { calcArrayTotalItemValue } from '../../utils/utils';

import classes from './OrderSummary.module.scss';

const cartItems = [
  {
    name: 'The Chelsea Boot',
    img: shoe,
    type: 'Black',
    quantity: 1,
    price: 235,
  },
  {
    name: 'The Twill Snap Backpack',
    img: backpack,
    type: 'Reverse Denim + Brown leather',
    quantity: 1,
    price: 65,
  },
  {
    name: 'The Twill Zip Tote',
    img: bag,
    type: 'Reverse Denim + Black leather',
    quantity: 1,
    price: 48,
  },
];

const taxes = 12.12;

const OrderSummary = () => {
  const totalPrice = calcArrayTotalItemValue(cartItems, 'price');

  return (
    <div className={classes.order_summary_wrapper}>
    <div className={classes.order_summary}>
      <div className={classes.title_container}>
        <h2>Order Summary</h2>
        <Button simple>edit order</Button>
      </div>
      <ul className={classes.items_list}>
        {cartItems.map((item) => (
          <SummaryItem
            key={item.name}
            name={item.name}
            img={item.img}
            type={item.type}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
      </ul>
      <OrderReport
        subtotal={totalPrice}
        total={totalPrice + taxes}
        taxes={taxes}
      />
    </div>
    <p className={classes.order_summary_text}>All purchases are subject to our <span className={classes.order_summary_terms}>Terms and Conditions</span>.</p>
  </div>
  );
};

export default OrderSummary;
