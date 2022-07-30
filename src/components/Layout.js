import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  max-width: 980px;
  margin: 0 auto;
  padding: 72px 5px 30px;
`;
