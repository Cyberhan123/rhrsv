import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper jr05mr231k-editor_css' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: '欢迎', href: '/' } },
      { name: 'item1', a: { children: '大数据', href: '/BigData' } },
      { name: 'item2', a: { children: '商城', href: '/Shop' } },
      { name: 'item3', a: { children: '关于', href: '/About' } },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Footer00DataSource = {
  wrapper: {
    className: 'home-page-wrapper footer0-wrapper jr05n8h18et-editor_css',
  },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: <span>©2019 Cyberhan&nbsp;All Rights Reserved</span>,
  },
};
