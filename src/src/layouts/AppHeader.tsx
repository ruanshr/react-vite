import React from "react";
import { Menu, Dropdown, Layout, Avatar, Badge } from "antd";
import Icon from "../components/Icon";
const { Header } = Layout;

const AppHeader = (props: any) => {
  let { menuClick, avatar, menuToggle, loginOut } = props;
  const menu = (
    <Menu>
      <Menu.ItemGroup title="用户设置">
        <Menu.Divider />
        <Menu.Item>
          <Icon type="EditOutlined" />
          个人设置
        </Menu.Item>
        <Menu.Item>
          <Icon type="SettingOutlined" />
          系统设置
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.Item>
        <span onClick={loginOut}>
          <Icon type="LogoutOutlined" /> 退出登录
        </span>
      </Menu.Item>
    </Menu>
  );
  return (
    <Header className="header">
      <div className="left">
        <Icon onClick={menuClick} type={menuToggle ? "MenuUnfoldOutlined" : "MenuFoldOutlined"} />
      </div>
      <div className="right">
        <div className="mr15">
          <a
            rel="noopener noreferrer"
            href="https://github.com/ruanshr/antd-react-admin-ts"
            target="_blank"
          >
            <Icon type="GithubOutlined" style={{ color: "#000" }} />
          </a>
        </div>
        <div className="mr15">
          <Badge dot={true} offset={[-2, 0]}>
            <a href="https://github.com/ruanshr/antd-react-admin-ts" style={{ color: "#000" }}>
              <Icon type="BellOutlined" />
            </a>
          </Badge>
        </div>
        <div>
          <Dropdown overlay={menu} overlayStyle={{ width: "20rem" }}>
            <div className="ant-dropdown-link">
              <Avatar
                icon={<Icon type="UserOutlined" />}
                src={avatar}
                alt="avatar"
                style={{ cursor: "pointer" }}
              />
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default React.memo(AppHeader);
