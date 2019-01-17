import './less/index.less'
import React from 'react';
import { enquireScreen } from 'enquire-js';
import Nav from './Nav';
import Footer from './Footer';
import {
  Nav00DataSource,
  Footer00DataSource,
} from './data.source';


let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <div>
        {this.props.children}
      </div>,
      <Footer
        id="Footer0_0"
        key="Footer0_0"
        dataSource={Footer00DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
// '
// import React from 'react';
// import { Menu, Icon, Layout, Breadcrumb } from 'antd';
//
//
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
// const { Header, Content, Footer } = Layout;
//
// class BasicLayout extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       current: 'home',
//     };
//   }
//
//   handleClick = (e) => {
//     console.log('click ', e);
//     this.setState({
//       current: e.key,
//     });
//     switch (e.key) {
//       case 'home':
//         this.props.history.push('/');
//         break;
//       case 'about':
//         this.props.history.push('/about');
//         break;
//       case 'industry':
//         this.props.history.push('/industry');
//         break;
//       case 'experience':
//         this.props.history.push('/experience');
//         break;
//       case 'contact':
//         this.props.history.push('/contact');
//         break;
//       default:
//         this.props.history.push('/');
//         break;
//     }
//   };
//
//   render() {
//     return (
//       <Layout className="layout">
//         <Header style={{ background: '#001529' }}>
//           <Menu
//             theme="dark"
//             onClick={this.handleClick}
//             selectedKeys={[this.state.current]}
//             mode="horizontal"
//           >
//             <Menu.Item key="home">
//               <Icon type="home"/>主页
//             </Menu.Item>
//             <Menu.Item key="industry">
//               <Icon type="compass"/>介绍
//             </Menu.Item>
//             <Menu.Item key="about">
//               <Icon type="appstore"/>关于
//             </Menu.Item>
//             <Menu.Item key="experience">
//               <Icon type="rocket"/>经验
//             </Menu.Item>
//             <Menu.Item key="contact">
//               <Icon type="paper-clip"/>联系我们
//             </Menu.Item>
//           </Menu>
//         </Header>
//         <Content style={{ padding: '0 50px', background: 'url("../assets/images/background.png")' }}>
//           {this.props.children}
//         </Content>
//         <Footer style={{ textAlign: 'center', color: '#fff', background: '#001529' }}>
//           Cyberhan.com ©2018 Created by Cyberhan
//         </Footer>
//       </Layout>
//     );
//   };
// }
//
// export default BasicLayout;
