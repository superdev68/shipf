import { Col, Row, Collapse } from 'antd';
import type { CollapseProps } from 'antd';
import './privacy.less';

const Privacy = () => {
  const itemsFAQ: CollapseProps['items'] = [
    {
      key: '1',
      label: '1. Thu thập thông tin cá nhân',
      children: (
        <ul className='privacy__list'>
          <li>
            SHIPF sẽ thu thập thông tin của Khách hàng bao gồm: Tên đầy đủ; Địa
            chỉ liên lạc; Email; Số điện thoại; Tên đăng nhập; Mật khẩu đăng
            nhập để thiết lập hồ sơ cá nhân.
          </li>
          <li>
            Nội dung bao gồm các thông tin bắt buộc khai báo của Khách hàng khi
            đăng ký tài khoản trên SHIPF;
          </li>
          <li>
            Khi thu thập các thông tin cá nhân của Khách hàng, SHIPF mong muốn
            cung cấp những tiện ích thiết thực nhất tới Khách hàng, bảo vệ quyền
            lợi và đảm bảo tôn trọng sự riêng tư cho Khách hàng.
          </li>
          <li>
            Trong phạm vi điều khoản, SHIPF cam kết sẽ không bán, cho thuê hay
            trao đổi dữ liệu thông tin Khách hàng đã thu thập cho các đối tượng
            nào khác ngoài đối tượng được liệt kê trong Quy chế này.
          </li>
        </ul>
      ),
    },
    {
      key: '2',
      label: '2. Sử dụng thông tin cá nhân',
      children: (
        <ul className='privacy__list'>
          <li>
            Cung cấp dịch vụ tư vấn cho Khách hàng theo thông tin Khách hàng
            cung cấp;
          </li>
          <li>
            Gửi Khách hàng các thông báo về hoạt động trao đổi thông tin giữa
            SHIPF và thành viên;
          </li>
          <li>
            Đảm bảo an toàn cho Khách hàng khi có nguy cơ phá hủy, chiếm đoạt
            tài khoản của Khách hàng và hoạt động giả mạo Khách hàng;
          </li>
          <li>
            Liên lạc với Khách hàng để cung cấp hàng hóa/dịch vụ khi Khách hàng
            mua các sản phẩm hàng hóa/dịch vụ trên website của SHIPF. Xác nhận
            thông tin khi thực hiện hoạt động mua, giao hàng;
          </li>
          <li>
            Thực hiện các cuộc khảo sát; các hoạt động quảng bá, cung cấp các
            thông tin cập nhật về điều khoản hoạt động của website có ảnh hưởng
            đến Khách hàng; Bảo mật thông tin Khách hàng là ưu tiên hàng đầu của
            SHIPF khi thu thập dữ liệu thông tin Khách hàng. SHIPF luôn cố gắng
            bắt kịp các tiêu chuẩn bảo vệ thông tin các nhân của khách hàng;
            SHIPF yêu cầu xác nhận lại mật khẩu khi đăng nhập để chống lại những
            truy cập trái phép vào hệ thống thông tin cá nhân Khách hàng. Trong
            trường hợp Khách hàng rời máy tính và chưa đăng xuất trên website,
            hệ thống sẽ tự động đăng xuất sau một khoảng thời gian.
          </li>
        </ul>
      ),
    },
    {
      key: '3',
      label: '3. Thời gian lưu trữ thông tin',
      children: (
        <ul className='privacy__list'>
          <li>
            SHIPF sẽ lưu trữ thông tin thu thập từ Khách hàng từ thời điểm Khách
            hàng khai báo thông tin đến khi tài khoản của Khách hàng ngừng hoạt
            động.
          </li>
          <li>
            SHIPF sẽ lưu giữ và sử dụng thông tin của khách hàng khi cần tuân
            theo nghĩa vụ pháp lý, giải quyết tranh chấp và thực thi các thoả
            thuận của SHIPF.
          </li>
          <li>
            Khách hàng cũng có thể rút lại sự đồng ý cho phép thu thập, sử dụng
            và/hoặc tiết lộ dữ liệu cá nhân của khách hàng mà SHIPF đang lưu giữ
            hoặc kiểm soát bằng cách gửi email cho Bộ phận Chăm sóc khách hàng
            của ban quản trị SHIPF tại địa chỉ email contact@shipf.com.vn hoặc
            qua số điện thoại, và chúng tôi sẽ xử lý các yêu cầu này theo Chính
            Sách Bảo Mật cũng như quy định pháp luật có liên quan. Tuy nhiên,
            việc khách rút lại sự đồng ý có thể có nghĩa là SHIPF sẽ không thể
            tiếp tục cung cấp Các Dịch Vụ cho khách hàng, và ban quản trị SHIPF
            có thể cần phải chấm dứt quan hệ hiện tại của bạn và/hoặc hợp đồng
            của bạn với SHIPF
          </li>
        </ul>
      ),
    },
    {
      key: '4',
      label: '4. Thay đổi hoặc loại bỏ thông tin cá nhân',
      children: (
        <ul className='privacy__list'>
          <li>
            Khách hàng có thể tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ
            thông tin cá nhân của mình bằng các cách sau đây:
          </li>
          <li>
            Khách hàng tự đăng nhập vào tài khoản của mình, vào mục cài đặt và
            chỉnh sửa thông tin cá nhân;
          </li>
          <li>
            Khách hàng gọi điện đến số điện thoại hỗ trợ/email hỗ trợ của Ban
            quản trị SHIPF và yêu cầu được chỉnh sửa thông tin cá nhân.
          </li>
        </ul>
      ),
    },
    {
      key: '5',
      label: '5. Chính sách bảo vệ thông tin cá nhân',
      children: (
        <ul className='privacy__list'>
          <li>
            Ban quản trị SHIPF cam kết bảo mật thông tin cá nhân của Khách hàng
            theo những nội dung sau:
          </li>
          <li>
            Cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân
            của SHIPF;
          </li>
          <li>
            Cam kết bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của
            Khách hàng bao gồm các thông tin về lịch sử giao dịch; thông tin về
            chứng từ số hóa tại khu vực dữ liệu trung tâm an toàn;
          </li>
          <li>
            Cam kết không sử dụng, không chuyển giao, không cung cấp hay tiết lộ
            cho bên thứ ba nào khác về thông tin cá nhân của Khách hàng khi
            không có sự cho phép từ Khách hàng ngoại trừ điều khoản khác được
            quy định trong Quy chế này và theo quy định của Pháp luật;
          </li>
          <li>
            Trong trường hợp phát sinh các lỗi kỹ thuật hoặc bị tấn công dữ
            liệu, Ban quản trị SHIPF có trách nhiệm thông báo cho cơ quan chức
            năng và Khách hàng trong thời gian 03 ngày kể từ khi có sự cố xảy
            ra.
          </li>
        </ul>
      ),
    },
    {
      key: '6',
      label: '6. Chính sách bảo vệ thông tin thanh toán',
      children: (
        <ul className='privacy__list'>
          <li>
            SHIPF cam kết đảm bảo thực hiện nghiêm túc các biện pháp bảo mật cần
            thiết cho mọi hoạt động thanh toán thực hiện trên website/ứng dụng
            của SHIPF
          </li>
          <li>
            Khách hàng tự đăng nhập vào tài khoản của mình, vào mục cài đặt và
            chỉnh sửa thông tin cá nhân;
          </li>
          <li>
            Khách hàng gọi điện đến số điện thoại hỗ trợ/email hỗ trợ của Ban
            quản trị SHIPF và yêu cầu được chỉnh sửa thông tin cá nhân.
          </li>
        </ul>
      ),
    },
    {
      key: '7',
      label: '7. Đối tượng chia sẻ thông tin cá nhân',
      children: (
        <ul className='privacy__list'>
          <li>
            Ban quản trị SHIPF có thể chia sẻ, tiết lộ thông tin cá nhân của
            Khách hàng khi tin rằng việc làm đó là cần thiết để bảo vệ các quyền
            lợi của Khách hàng, đảm bảo sự an toàn giao dịch cho Khách hàng và
            theo yêu cầu của bên thứ 3 có thẩm quyền.
          </li>
          <li>
            Ban quản trị SHIPF có thể chia sẻ thông tin cá nhân của Khách hàng
            tới nhóm các Công ty nằm trong Tổ hợp Công nghệ Giáo dục SHIPF Group
            để nghiên cứu và giới thiệu tới Khách hàng những sản phẩm hàng hóa
            và dịch vụ tốt hơn tới từng cá nhân Khách hàng.Trong trường hợp
            Khách hàng không muốn chia sẻ thông tin, SHIPF hoàn toàn đồng ý khi
            nhận được yêu cầu từ Khách hàng.
          </li>
          <li>
            SHIPF có thể tiết lộ thông tin cá nhân của khách hàng theo yêu cầu
            của luật sư cũng như cơ quan chức năng có thẩm quyền.
          </li>
        </ul>
      ),
    },
    {
      key: '8',
      label: '8. Yêu Cầu Xóa Dữ Liệu Cá Nhân',
      children: (
        <ul className='privacy__list'>
          <li>
            Chúng tôi tôn trọng và chấp hành quyền riêng tư của người dùng, bao
            gồm quyền yêu cầu xóa dữ liệu cá nhân. Dưới đây là hướng dẫn chi
            tiết về cách người dùng có thể yêu cầu xóa dữ liệu của họ:
          </li>
          <li>Gửi email đến địa chỉ email: contact@shipf.com.vn</li>
          <li>Gọi số điện thoại: 0902.032.999</li>
          <li>Gửi thư đến địa chỉ: Số 1 Mỹ Đình, Nam Từ Liêm, Hà Nội</li>
        </ul>
      ),
    },
  ];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div className='privacy'>
      <Row>
        <Col lg={8} xs={24} sm={24}>
          <h2 className='privacy__heading'>Chính sách bảo vệ thông tin</h2>
          <p className='privacy__description'>Chính sách bảo mật</p>
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

export default Privacy;
