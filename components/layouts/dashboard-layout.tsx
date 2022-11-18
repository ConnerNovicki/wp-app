'use client';

import { Layout, Menu, } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { createElement } from 'react';
import type { ReactNode } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import usePostLogout from '../../api/usePostLogout';
import { useRouter } from 'next/navigation';

interface MenuItem<T extends string> {
  key: T;
  icon?: ReactNode;
  label?: string;
}

type HeaderMenuItemKey = 'home' | 'logout';

const headerMenutItems: MenuItem<HeaderMenuItemKey>[] = [
  {
    key: 'home',
    icon: createElement(HomeOutlined),
    label: 'Home'
  },
  {
    key: 'logout',
    icon: createElement(LogoutOutlined),
    label: 'Logout'
  }
]

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { post: postLogout } = usePostLogout();
  const router = useRouter()

  function handleSideMenuClick(item: { key: string }) {
    console.log('side item', item)
  }

  function handleHeaderMenuClick(item: MenuItem<HeaderMenuItemKey>) {
    console.log('header item', item)

    if (item.key === 'logout') {
      postLogout({ payload: {} })
        .then(() => {
          router.push('/login');
        })
        .catch((e) => {
          console.log('ERR:', e)
        })
    }
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['2']}
          onClick={handleSideMenuClick}
          items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: createElement(icon),
              label: `nav ${index + 1}`,
            })
          )}
        />

      </Sider>
      <Layout>
        <Layout.Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            onClick={handleHeaderMenuClick as ((item: MenuItem<string>) => void)}
            items={headerMenutItems}
          />
        </Layout.Header>
        <Layout.Content style={{ margin: '30px 20px 0' }}>
          {children}
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>WP - a Chege & Novicki app</Layout.Footer>
      </Layout>
    </Layout>
  )
}