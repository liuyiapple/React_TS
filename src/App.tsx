import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import {
  Layout,
  Typography,
  Input,
  Menu,
  Button,
  Dropdown
} from "antd"
import { GlobalOutlined } from '@ant-design/icons'
const {Header,Footer} = Layout
function App() {
  return (
    <div className={styles.App}>
      <div className={styles['app-header']}>
        {/* top-header */}
        <div className={styles['top-header']}>
          <div className={styles.inner}>
            <Typography.Text>让旅游更幸福</Typography.Text>
            <Dropdown.Button
              style={{marginLeft:15}}
              overlay={
                <Menu >
                  <Menu.Item>中文</Menu.Item>
                  <Menu.Item>English</Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined/>}
            >
              语言
            </Dropdown.Button>
            <Button.Group className={styles['button-group']}>
              <Button>注册</Button>
              <Button>登录</Button>
            </Button.Group>
          </div>
        </div>
        <Header className={styles['main-header']}>
          <img src={logo} alt="" className={styles['App-logo']}/>
          <Typography.Title level={3} className={styles.title}>React旅游网</Typography.Title>
          <Input.Search
            placeholder='请输入旅游目的地、主题或关键字'
            className={styles['search-input']}
          />
        </Header>
        <Menu mode={"horizontal"} className={styles['main-menu']}>
          <Menu.Item key={1}>旅游首页 </Menu.Item>
          <Menu.Item key={2}>周末游 </Menu.Item>
          <Menu.Item key={3}>跟团游 </Menu.Item>
          <Menu.Item key={4}>自由行 </Menu.Item>
          <Menu.Item key={5}>XXXX </Menu.Item>
          <Menu.Item key={6}>XXXX </Menu.Item>
          <Menu.Item key={7}>XXXX </Menu.Item>
          <Menu.Item key={8}>XXXX </Menu.Item>
          <Menu.Item key={9}>XXXX </Menu.Item>
          <Menu.Item key={10}>XXXX </Menu.Item>
          <Menu.Item key={11}>XXXX </Menu.Item>
        </Menu>
      </div>
      <Footer>
        <Typography.Title level={3} style={{textAlign:'center'}}>
          版权所有 @ React旅游网
        </Typography.Title>
      </Footer>
    </div>
  );
}

export default App;
