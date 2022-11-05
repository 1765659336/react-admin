import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const MainMenu: React.FC<{ items: MenuItem[] }> = (state) => {
  const { items } = state;
  const navigate = useNavigate();

  // 当前的路由信息，在一开始来到home时，菜单选中样式对应路由路径
  const location = useLocation();

  // 首次渲染匹配动态递归应该展开的菜单
  let openKey: Array<string> = [];
  const recursion = (menuItemArray: Array<MenuItem>) => {
    for (const iterator of menuItemArray) {
      if (iterator?.key === location.pathname) {
        return true;
      }
      if (
        iterator &&
        "children" in iterator &&
        iterator.children &&
        iterator.children.length !== 0
      ) {
        if (recursion(iterator.children)) {
          // 将当前的菜单项展开
          openKey.push(iterator.key as string);
          // 递归回调传一个true可以将其父级也展开
          return true;
        }
      }
    }
  };
  recursion(items);

  // 所有一级菜单key的集合
  const levelOneArr: Array<string> = [];

  for (const iterator of items) {
    if (iterator) {
      levelOneArr.push(iterator.key as string);
    }
  }

  // 设置展开的下拉菜单
  const [openKeys, setOpenKeys] = useState<Array<string>>(openKey);

  // 菜单点击事件
  const menuClick = (e: { key: string }) => {
    console.log("点击了菜单", e.key);
    navigate(e.key);
  };

  // 展开/收缩
  const onOpenChange: MenuProps["onOpenChange"] = (keys: string[]) => {
    if (levelOneArr.includes(keys[keys.length - 1])) {
      // 如果点击的是一级菜单，将展开当前点击的一级菜单，关闭其它所有的展开，实现只能同时展开一个一级菜单
      setOpenKeys([keys[keys.length - 1]]);
    } else {
      setOpenKeys(keys);
    }
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[location.pathname]}
      mode="inline"
      items={items}
      openKeys={openKeys}
      onClick={menuClick}
      onOpenChange={onOpenChange}
    />
  );
};

export default MainMenu;
