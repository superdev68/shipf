import { Col, Row } from 'antd';
import './footer.less';
import { Link } from 'react-router-dom';
import { FaYoutubeSquare, FaFacebookSquare, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const Infos = [
    { id: 1, href: '#', text: 'Giới thiệu' },
    { id: 2, href: '#', text: 'Liên hệ' },
    { id: 3, href: '#', text: 'Quy định khiếu nại' },
    { id: 4, href: '#', text: 'Chính sách bồi thường' },
  ];

  const Infos2 = [
    { id: 1, href: '#', text: 'Dịch vụ gửi hàng hoả tốc' },
    { id: 2, href: '#', text: 'Kho' },
    { id: 3, href: '#', text: 'Ecommerce' },
    { id: 4, href: '#', text: 'Phần mềm quản lý' },
  ];

  const Infos3 = [
    { id: 1, href: '#', text: 'Câu hỏi thường gặp' },
    { id: 2, href: '#', text: 'Điều khoản dịch vụ' },
    { id: 3, href: '/privacy', text: 'Chính sách bảo mật' },
    { id: 4, href: '#', text: 'Liên hệ' },
  ];

  const Infos4 = [
    { id: 1, href: '#', text: 'Email: shipfvn@gmail.com' },
    { id: 2, href: '#', text: 'Điện thoại: 0564032888' },
  ];

  return (
    <div className='footer'>
      <Row>
        <Col lg={8} sm={24} xs={24}>
          <div className='footer__column'>
            <Link to='/'>
              <img
                src='/assets/images/logo_s1.png'
                alt='logo'
                className='footer__column-img'
              />
            </Link>
          </div>

          <ul className='footer__contact'>
            <li className='footer__contact-item'>
              <p className='footer__contact-heading'>Điện thoại: </p>
              <Link to='#' className='footer__info-link'>
                0564032888
              </Link>
            </li>

            <li className='footer__contact-item'>
              <p className='footer__contact-heading'>Email: </p>
              <Link to='#' className='footer__info-link'>
                shipfvn@gmail.com
              </Link>
            </li>

            <li className='footer__contact-item'>
              <p className='footer__contact-heading'>Địa chỉ: </p>
              <Link to='#' className='footer__info-link'>
                Số 1 Mỹ Đình, Nam Từ Liêm, Hà Nội
              </Link>
            </li>
          </ul>
        </Col>

        <Col lg={4} sm={24} xs={24}>
          <div className='footer__info'>
            <div className='footer__info-heading'>Công ty</div>
            <ul>
              {Infos.map((link) => (
                <li key={link.id} className='footer__info-item'>
                  <Link to={link.href} className='footer__info-link'>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>

        <Col lg={4} sm={24} xs={24}>
          <div className='footer__info'>
            <div className='footer__info-heading'>Dịch vụ</div>
            <ul>
              {Infos2.map((link) => (
                <li key={link.id} className='footer__info-item'>
                  <Link to={link.href} className='footer__info-link'>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>

        <Col lg={4} sm={24} xs={24}>
          <div className='footer__info'>
            <div className='footer__info-heading'>CSKH</div>
            <ul>
              {Infos3.map((link) => (
                <li key={link.id} className='footer__info-item'>
                  <Link to={link.href} className='footer__info-link'>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>

        <Col lg={4} sm={24} xs={24}>
          <div className='footer__info'>
            <div className='footer__info-heading'>LIÊN HỆ</div>
            <ul>
              {Infos4.map((link) => (
                <li key={link.id} className='footer__info-item'>
                  <Link to={link.href} className='footer__info-link'>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={20} sm={24} xs={24}>
          <p className='footer__bottom'>
            © 2018 - 2024 ShipF. Kết nối tạo thịnh vượng
          </p>
        </Col>

        <Col lg={4} sm={24} xs={24}>
          <Link to='#' className='footer__bottom-item'>
            <FaYoutubeSquare size={32} color='#eb2c3b' />
          </Link>

          <Link to='#' className='footer__bottom-item'>
            <FaFacebookSquare size={32} color='#4867aa' />
          </Link>

          <Link to='#' className='footer__bottom-item'>
            <FaTiktok size={32} color='#cccccc' />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
