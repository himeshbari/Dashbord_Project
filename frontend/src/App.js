import React from 'react';
import AppHeader from './Components/AppHeader/AppHeader';
import PageContent from './Components/PageContent/PageContent';
import AppFooter from './Components/AppFooter/AppFooter';
import "./App.css";
import {Space }from "antd"
import SideMenu from './Components/SideMenu/SideMenu';
const App = () => {

  return (
    <>
    <AppHeader />
    <Space className="SideMenuAndPageContent">
    <SideMenu></SideMenu>
      <PageContent></PageContent>
      
      </Space>
    <AppFooter />
    </>
  );
};

export default App;
