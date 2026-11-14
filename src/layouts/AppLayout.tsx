import Footer from '@/components/footer';
import Header from '@/components/header';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const AppLayout = () => {
  return (
    <Layout>
      <Header />

      <Content>
        <Outlet />
      </Content>

      <Footer />
    </Layout>
  );
};

export default AppLayout;
