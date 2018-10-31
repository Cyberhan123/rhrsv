//import styles from './index.css';
import React from 'react';
import { Menu, Icon, Layout, Breadcrumb } from 'antd';
import about from '../pages/about';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer } = Layout;

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'home',
    };
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
    switch (e.key) {
      case 'home':
        this.props.history.push('/');
        break;
      case 'about':
        this.props.history.push('/about');
        break;
      case 'industry':
        this.props.history.push('/industry');
        break;
      case 'experience':
        this.props.history.push('/experience');
        break;
      case 'contact':
        this.props.history.push('/contact');
        break;
      default:
        this.props.history.push('/');
        break;
    }
  };

  render() {
    return (
      <Layout className="layout">
        <Header style={{ background: '#000' }}>
          <Menu
            theme="dark"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="home">
              <Icon type="home"/>主页
            </Menu.Item>
            <Menu.Item key="industry">
              <Icon type="compass"/>介绍
            </Menu.Item>
            <Menu.Item key="about">
              <Icon type="appstore"/>关于
            </Menu.Item>
            <Menu.Item key="experience">
              <Icon type="rocket"/>经验
            </Menu.Item>
            <Menu.Item key="contact">
              <Icon type="paper-clip"/>联系我们
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', background: 'url("../assets/images/background.png")' }}>
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: 'center', color: '#fff', background: '#001529' }}>
          Cyberhan.com ©2018 Created by Cyberhan
        </Footer>
      </Layout>
    );
  };
}

export default BasicLayout;
