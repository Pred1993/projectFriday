import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Error404 from './p1-error404/Error404';
import Login from './p2-login/Login';
import Profile from './p3-profile/Profile';
import Register from './p4-register/Register';
import SuperButton from '../common/c1-superButton/SuperButton';

export const PATH = {
  LOGIN: '/login',
  PROFILE: '/profile',
  REGISTER: '/register',
  TEST: '/test',
  // // add paths
};

const Pages = () => {
  return (
    <div>
      {/*Routes выбирает первый подходящий роут*/}

      {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
      <Routes>
        <Route path={'/'} element={<Navigate to={PATH.TEST} />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.PROFILE} element={<Profile />} />
        <Route path={PATH.REGISTER} element={<Register />} />
        <Route path={PATH.TEST} element={<SuperButton />} />
        <Route path={'/*'} element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default Pages;
