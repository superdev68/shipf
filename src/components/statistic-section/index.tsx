import './statistic-section.less';
import { Col, Row } from 'antd';

const StatisticSection = () => {
  return (
    <div className='statistic'>
      <div className='grid'>
        <Row>
          <Col lg={12} xs={24} sm={24}>
            <ul className='statistic__list'>
              <Row gutter={[12, 6]}>
                <Col lg={12} xs={12} sm={24}>
                  <li className='statistic__item statistic__item-videos'>
                    <h3 className='statistic__item-quantity'>18</h3>
                    <div className='statistic__item-heading'>Bưu cục</div>
                  </li>
                </Col>

                <Col lg={12} xs={12} sm={24}>
                  <li className='statistic__item statistic__item-views'>
                    <h3 className='statistic__item-quantity'>200K</h3>
                    <div className='statistic__item-heading'>Đơn hàng</div>
                  </li>
                </Col>

                <Col lg={12} xs={12} sm={24}>
                  <li className='statistic__item statistic__item-members'>
                    <h3 className='statistic__item-quantity'>40K</h3>
                    <div className='statistic__item-heading'>Thành viên</div>
                  </li>
                </Col>

                <Col lg={12} xs={12} sm={24}>
                  <li className='statistic__item statistic__item-partners'>
                    <h3 className='statistic__item-quantity'>120</h3>
                    <div className='statistic__item-heading'>Đối tác</div>
                  </li>
                </Col>
              </Row>
            </ul>
          </Col>

          <Col lg={12} xs={24} sm={24}>
            <div className='statistic__content'>
              <h2 className='statistic__content-title'>
                Tại sao bạn chọn SHIPF!
              </h2>

              <p className='statistic__content-description'>
                Chúng tôi cung cấp đa dạng các giải pháp logistics tối ưu khắp
                63 tỉnh thành, đáp ứng mọi nhu cầu của Đối tác Doanh nghiệp &
                Khách hàng Cá nhân với văn hóa phục vụ Thân thiện - Nhiệt tình -
                Tận tâm.
              </p>

              <ul>
                <li className='statistic__content-description'>
                  ♻️ Uy tín và độ tin cậy: Shipf có lịch sử hoạt động đáng tin
                  cậy, đảm bảo hàng hóa được giao đúng thời gian và an toàn.
                </li>

                <li className='statistic__content-description'>
                  ♻️ Mạng lưới rộng khắp: Công ty có mạng lưới vận chuyển rộng,
                  phủ sóng nhiều khu vực, giúp giao hàng nhanh chóng và tiện
                  lợi.
                </li>

                <li className='statistic__content-description'>
                  ♻️ Dịch vụ khách hàng tốt: Shipf cung cấp dịch vụ khách hàng
                  chuyên nghiệp, hỗ trợ kịp thời khi có vấn đề phát sinh
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StatisticSection;
