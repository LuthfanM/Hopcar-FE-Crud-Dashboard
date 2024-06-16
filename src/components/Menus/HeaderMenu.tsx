import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const HeaderMenu: React.FC = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={items}
      style={{ flex: 1, minWidth: 0 }}
    />
  );
};

export default HeaderMenu;
