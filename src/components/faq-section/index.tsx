import { Col, Row } from 'antd';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import './faq-section.less';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const itemsFAQ: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Khi gặp vấn đề cần thắc mắc, khiếu nại shop phải liên hệ ở đâu?',
      children: (
        <>
          <ul className='faq__list'>
            <li>Email: cskh@shipf.vn</li>
            <li>Inbox vào mục chat trên SHIPF App</li>
            <li>Fanpage: shipf.vn</li>
          </ul>
        </>
      ),
    },
    {
      key: '2',
      label: 'Cách tạo đơn hàng thu hộ 0đ như thế nào?',
      children: (
        <>
          <ul className='faq__list'>
            <li>
              Khi lên đơn, Shop điền chính xác “Giá trị hàng” và điền “Thu hộ”
              là 0đ
            </li>
            <li>
              Lưu ý: “Giá trị hàng” khác với “Tiền thu hộ”. Shop cần điền chính
              xác giá trị hàng để đảm bảo quyền lợi trong trường hợp không may
              xảy ra hư hỏng hoặc thất lạc hàng.
            </li>
          </ul>
        </>
      ),
    },
    {
      key: '3',
      label: 'Quên mật khẩu thì shop phải làm gì?',
      children: (
        <ul className='faq__list'>
          <li>Trên màn hình đăng nhập, Shop chọn Quên mật khẩu</li>
          <li>
            Nhập địa chỉ email đã đăng ký trên hệ thống SHIPF để SHIPF gửi mã
            OTP
          </li>
          <li>Nhập mã OTP xác nhận</li>
          <li>Đặt lại mật khẩu mới</li>
        </ul>
      ),
    },
    {
      key: '4',
      label:
        'Trong lần đầu tiên sử dụng dịch vụ vận chuyển tại SHIPF, khách hàng cần phải làm gì?',
      children: (
        <ul className='faq__list'>
          <li>
            Tạo tài khoản và tạo vận đơn trực tiếp trên website:{' '}
            <Link to='https://shipf.vn/'>https://shipf.vn/</Link>
          </li>
          <li>
            Liên hệ trực tiếp tổng đài, cung cấp thông tin hàng hóa, địa chỉ...
            Tổng đài sẽ báo giá vận chuyển và báo nhân viên qua lấy hàng cho quý
            khách.
          </li>
        </ul>
      ),
    },
  ];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div className='faq'>
      <Row>
        <Col lg={8} xs={24} sm={24}>
          <h2 className='faq__heading'>Câu hỏi thường gặp</h2>
          <p className='faq__description'>
            Dưới đây là những câu hỏi thường gặp về SHIPF
          </p>
        </Col>
        <Col lg={16} xs={24} sm={24}>
          <Collapse
            items={itemsFAQ}
            defaultActiveKey={['1']}
            onChange={onChange}
            accordion={true}
            bordered={false}
            style={{
              backgroundColor: '#fff',
              color: '#fff',
              fontSize: '16px',
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default FAQSection;
