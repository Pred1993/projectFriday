import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../pages/Pages';
import s from './Header.module.css';

const Header = () => {
  const classActive = ({ isActive }: any) => (isActive ? `${s.active}` : s.item);
  return (
    <div className={s.container}>
      {/*// add NavLinks*/}
      <NavLink className={classActive} to={PATH.LOGIN}>
        Login
      </NavLink>
      <NavLink className={classActive} to={PATH.PROFILE}>
        Profile
      </NavLink>
      <NavLink className={classActive} to={PATH.REGISTER}>
        Register
      </NavLink>
      <NavLink className={classActive} to={PATH.TEST}>
        SuperButton
      </NavLink>
    </div>
  );
};

export default Header;
