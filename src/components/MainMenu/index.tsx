import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "col",
    key: "/home/col",
    icon: <FileOutlined />,
    children: [
      { label: "col1", key: "/home/col1", icon: <PieChartOutlined /> },
      { label: "col2", key: "/home/col2", icon: <DesktopOutlined /> },
    ],
  },
  {
    label: "系统管理",
    key: "home/system/manage",
    icon: <TeamOutlined />,
    children: [
      { label: "用户管理", key: "/home/users", icon: <UserOutlined /> },
      { label: "角色管理", key: "/home/roles", icon: <DesktopOutlined /> },
    ],
  },
];

const MainMenu: React.FC = () => {
  const navigate = useNavigate();

  // 设置展开的下拉菜单
  const [openKeys, setOpenKeys] = useState(["/home/col"]);

  // 菜单点击事件
  const menuClick = (e: { key: string }) => {
    console.log("点击了菜单", e.key);
    navigate(e.key);
  };

  // 展开/收缩
  const onOpenChange: MenuProps["onOpenChange"] = (keys: string[]) => {
    // 将展开数据的最后一项，也就是刚才点开的那项赋值给展开的数据，实现只能同时展开一个菜单
    setOpenKeys([keys[keys.length - 1]]);
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["/home/col1"]}
      mode="inline"
      items={items}
      openKeys={openKeys}
      onClick={menuClick}
      onOpenChange={onOpenChange}
    />
  );
};

export default MainMenu;
