import './operation-section.less';
import { Col, Row } from 'antd';

const OperationSection = () => {
  return (
    <div className='operation'>
      <div className='operation__introduce'>
        <h2 className='operation__introduce-title'>
          Phương thức hoạt động của SHIPF
        </h2>
      </div>

      <Row gutter={[24, 24]}>
        <Col lg={6} xs={12} sm={24}>
          <div className='operation__content'>
            <h3>Tiếp nhận đơn hàng</h3>
            <p className='operation__content-description'>
              Shop đăng nhập và đăng đơn hàng cho trung tâm điều vận qua hệ
              thống quản lý riêng. Khi khách hàng đặt đơn hàng qua các kênh như
              website, ứng dụng di động, điện thoại hoặc email, đơn hàng sẽ được
              hệ thống tiếp nhận
            </p>
          </div>
        </Col>

        <Col lg={6} xs={12} sm={24}>
          <div className='operation__content'>
            <h3>Lấy hàng</h3>
            <p className='operation__content-description'>
              Tại trung tâm vận chuyển, quá trình lấy hàng từ cửa hàng và đóng
              gói hàng hóa là một phần quan trọng trong chuỗi cung ứng. Ở đây,
              các nhân viên điều vận nhận yêu cầu từ các cửa hàng đối tác và xác
              nhận thông tin đơn hàng, bao gồm cả số lượng và loại hàng hóa cần
              lấy
            </p>
          </div>
        </Col>

        <Col lg={6} xs={12} sm={24}>
          <div className='operation__content'>
            <h3>Vận chuyển</h3>
            <p className='operation__content-description'>
              Tại Trung tâm vận chuyển, quá trình vận chuyển hàng hóa đến địa
              chỉ khách hàng là bước cuối cùng trong chuỗi cung ứng, nhưng cũng
              là một bước quan trọng. Tại đây, các đơn hàng đã được xác nhận và
              đóng gói sẵn sàng để giao đến địa chỉ được chỉ định.
            </p>
          </div>
        </Col>

        <Col lg={6} xs={12} sm={24}>
          <div className='operation__content'>
            <h3>Đối soát</h3>
            <p className='operation__content-description'>
              Tại Trung tâm điều vận, quá trình đối soát với các cửa hàng đối
              tác và thanh toán tiền vận chuyển là một phần quan trọng trong
              quản lý tài chính và kế toán. Sau khi các đơn hàng được giao đến
              địa chỉ khách hàng, trung tâm điều vận sẽ bắt đầu quá trình đối
              soát
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OperationSection;
