import React from "react";
import { Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import HeaderMenu from "../Menus/HeaderMenu";
import AppLogo from "../../assets/svg/AppLogo.svg";
import Image from "next/image";

const { Header } = Layout;

const MainHeader: React.FC = () => {
  return (
    <Header>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={AppLogo}
            alt="Logo"
            style={{ width: "40px", height: "40px", marginRight: "20px" }}
          />
          <h1 style={{ color: "white", marginRight: "20px" }}>Kuruma</h1>
          <div
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: "white",
              marginRight: "20px",
            }}
          />
          {/* <HeaderMenu /> */}
        </div>
        <Avatar icon={<UserOutlined />} />
      </div>
    </Header>
  );
};

export default MainHeader;
