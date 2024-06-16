import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { theme } from 'antd';
import SidebarMenu from '../Menus/SidebarMenu';
import CarTable from '../Tables/CarTable';

const { Content, Sider } = Layout;

const ContentLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}>
      <Sider style={{ background: colorBgContainer }} width={200}>
        <SidebarMenu />
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <div>
            <CarTable />
        </div>
      </Content>
    </Layout>
  );
};

export default ContentLayout;
