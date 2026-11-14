import { Col, Row } from 'antd';
import './service-section.less';

const ServiceSection = () => {
  const services = [
    {
      href: '/assets/images/product.png',
      title: 'Giao hàng nhanh',
      subTitle:
        'Giao hàng nhanh, đảm bảo và giá tốt với dịch vụ phù hợp được tối ưu cho bạn.',
    },
    {
      href: '/assets/images/truck.png',
      title: 'Đa dạng phương tiện',
      subTitle:
        'Đa dạng phương tiện vận chuyển dành cho các mặt hàng lớn và cồng kềnh.',
    },
    {
      href: '/assets/images/shopping-basket.png',
      title: 'Mua sắm tiện lợi',
      subTitle:
        'Mua sắm hằng ngày thật đơn giản và tiện lợi. Bạn cần gì chúng tôi giao tận nhà.',
    },
    {
      href: '/assets/images/warehouse.png',
      title: 'Hệ thống nhà kho',
      subTitle:
        'Cung cấp nguồn hàng sỉ nhanh chóng và bảo đảm với mức giá vô cùng cạnh tranh.',
    },
  ];

  return (
    <div className='service'>
      <h2 className='service__heading'>Giải pháp khách hàng</h2>

      <Row gutter={[24, 24]}>
        {services.map((service) => (
          <Col lg={6} xs={24} sm={24} key={service.title}>
            <div className='service__item'>
              <img
                src={service.href}
                alt='Service'
                width={'80px'}
                height={'80px'}
              />
              <h3>{service.title}</h3>
              <p>{service.subTitle}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServiceSection;
