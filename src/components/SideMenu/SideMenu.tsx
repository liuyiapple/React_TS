import React from "react";
import styles from "./SideMenu.module.css";
import { sideMenuList } from "./mockup";
import { Menu } from "antd";
import { GifOutlined } from "@ant-design/icons";
export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles['side-menu']}>
      {sideMenuList.map((item, index) => {
        return (
          <Menu.SubMenu
            key={`side-menu${index}`}
            title={
              <span>
                <GifOutlined />
                {item.title}
              </span>
            }
          >
            {item.subMenu.map((subItem, index) => {
              return (
                <Menu.Item key={`side-menu-submenu${index}`}>
                  {
                    <span>
                      <GifOutlined />
                      {item.title}
                    </span>
                  }
                </Menu.Item>
              );
            })}
          </Menu.SubMenu>
        );
      })}
    </Menu>
  );
};
