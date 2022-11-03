import { Breadcrumb, Layout, Button } from "antd";
import React, { useState } from "react";
import style from "./index.module.scss";
import { Outlet } from "react-router-dom";
import MainMenu from "src/components/MainMenu";
import { useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const quitLogin = () => {
    navigate("/login");
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={style.logo}>
          
        </div>
        <MainMenu></MainMenu>
      </Sider>
      <Layout className={style["site-layout"]}>
        <Header className={style["site-layout-header"]}>
          <Button type="link" onClick={quitLogin}>
            退出登录
          </Button>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <Outlet></Outlet>
        </Content>
        <Footer className={style["layout-footer"]}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
