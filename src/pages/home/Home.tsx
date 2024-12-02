import React from 'react';
import { Outlet } from 'react-router-dom';
import { FirstHeader } from './components';

const Home: React.FC = () => {
  return (
    <div className="w-full box-border" dir="rtl">
      <FirstHeader />
      <Outlet />
    </div>
  );
};

export default Home;
