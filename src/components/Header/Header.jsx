import { NavLink } from 'react-router-dom';

import Main from '../Main/Main';

import { ReactComponent as Cart } from '../../assets/svg/cart.svg';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import classes from './Header.module.scss';

const Header = () => (
  <header className={classes.header}>
    <Main>
      <div className={classes.header__wrapper}>
        <div className={classes.header_type_left}>
          <div className={classes.header__logo}>
            <NavLink to="/" exact>
              <Logo />
            </NavLink>
          </div>
          <h1 className={classes.header__title}>Front-end Developer Test Task</h1>
        </div>
        <div className={classes.header_type_right}>
          <span className={classes.header__cart}>cart</span>
          <div className={classes.header__cart_pic}>
            <Cart />
            <div className={classes.header__cart_counter}>3</div>
          </div>
        </div>
      </div>
    </Main>
  </header>
);

export default Header;
