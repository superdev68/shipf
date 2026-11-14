import { Col, Row } from 'antd';
import './download-section.less';
import { Link } from 'react-router-dom';

const DownloadSection = () => {
  return (
    <div className='download'>
      <Row gutter={[12, 12]}>
        <Col lg={12} xs={24} sm={24}>
          <h2 className='download__heading'>SHIPF bên bạn mọi lúc mọi nơi</h2>
          <p className='download__description'>
            Tải ứng dụng ngay để tối ưu trải nghiệm
          </p>

          <Row>
            <Col lg={12} xs={24} sm={24}>
              <img
                src='/assets/images/qr-ios.jpg'
                alt='IOS Image'
                width={'50%'}
              />

              <Link to='#'>
                <img src='' alt='IOS Download' />
              </Link>
            </Col>

            <Col lg={12} xs={24} sm={24}>
              <img
                src='/assets/images/qr-ios.jpg'
                alt='IOS Image'
                width={'50%'}
              />
            </Col>
          </Row>

          {/* <img
            src="/assets/images/qr-android.jpg"
            alt="AnDroid Image"
            width={"20%"}
          /> */}
        </Col>

        <Col lg={12} xs={24} sm={24}>
          abc
        </Col>
      </Row>
    </div>
  );
};
export default DownloadSection;
