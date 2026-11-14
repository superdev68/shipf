import { Button, Result, Typography } from 'antd';

const NotFoundApp = () => {
  return (
    <Result
      status='404'
      title='404'
      subTitle={
        <>
          <Typography.Title level={2}>
            Không tìm thấy nội dung 😓
          </Typography.Title>
          <Typography.Paragraph>
            Hãy thử truy cập lại từ trang chủ
          </Typography.Paragraph>
        </>
      }
      extra={
        <Button type='primary' href='/'>
          Quay lại trang chủ
        </Button>
      }
    />
  );
};

export default NotFoundApp;
