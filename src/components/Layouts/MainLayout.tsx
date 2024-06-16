import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { theme } from 'antd';
import ContentLayout from './ContentLayout';
import HeaderMenu from '../Menus/HeaderMenu';
import MainHeader from '../Header/MainHeader';

const { Header, Content, Footer } = Layout;

const MainLayout: React.FC = () => {
  return (
    <Layout>
      <MainHeader />
      <Content>
        <ContentLayout />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout;
