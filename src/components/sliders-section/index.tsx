import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './sliders-section.less';
import { Button, Col, Row } from 'antd';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '60px',
  autoplaySpeed: 8000,
  autoplay: true,
  rows: 1,
  dots: true,
};

const SlidersSection = () => {
  const slidersList = [
    {
      id: 1,
      title: 'Vận chuyển nhanh chóng, đang tin cậy',
      description:
        'Tối ưu hóa việc giao nhận hàng hóa với dịch vụ vận chuyển nhanh chóng và đáng tin cậy của SHIPF. Chúng tôi đảm bảo hàng hóa của bạn đến nơi an toàn và đúng hẹn.',
      img: 'photo.jpg',
      link: '/html',
      btnLink: '',
      btnContent: 'Xem chi tiết',
      styleSlide: {
        backgroundImage:
          "url('https://images.pexels.com/photos/880873/pexels-photo-880873.jpeg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
    },
    {
      id: 2,
      title: 'Giải pháp vận tải toàn diện',
      description:
        'SHIPF cung cấp giải pháp vận tải toàn diện từ kho bãi đến giao nhận, giúp bạn quản lý chuỗi cung ứng một cách hiệu quả',
      img: 'photo.jpg',
      link: '/html',
      btnLink: '',
      btnContent: 'Xem chi tiết',
      styleSlide: {
        backgroundImage:
          "url('https://images.pexels.com/photos/379419/pexels-photo-379419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
    },
    {
      id: 3,
      title: 'Giao hàng toàn quốc dễ dàng',
      description:
        'Với SHIPF giao hàng quốc tế trở nên dễ dàng hơn bao giờ hết. Chúng tôi mang đến giải pháp logistics toàn cầu với sự hỗ trợ địa phương, đảm bảo hàng hóa của bạn luôn thông quan thuận lợi.',
      img: 'photo.jpg',
      link: '/html',
      btnLink: '',
      btnContent: 'Xem chi tiết',
      styleSlide: {
        backgroundImage:
          "url('https://images.pexels.com/photos/12742592/pexels-photo-12742592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
    },
    {
      id: 5,
      title: 'Công nghệ tiên tiến, tối ưu',
      description:
        'SHIPF áp dụng công nghệ tiên tiến để tối ưu hóa quy trình vận chuyển, giảm thiểu chi phí và nâng cao hiệu suất. Chúng tôi mang đến giải pháp logistics thông minh cho doanh nghiệp của bạn.',
      img: 'photo.jpg',
      link: '/html',
      btnLink: '',
      btnContent: 'Xem chi tiết',
      styleSlide: {
        backgroundImage:
          "url('https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
    },
    {
      id: 6,
      title: 'Dịch vụ hậu cần đáng tin cậy',
      description:
        'SHIPF là đối tác hậu cần đáng tin cậy của bạn. Với dịch vụ chất lượng cao và đội ngũ chuyên nghiệp, chúng tôi đảm bảo quản lý hàng hóa của bạn một cách an toàn và hiệu quả',
      img: 'photo.jpg',
      link: '/html',
      btnLink: '',
      btnContent: 'Xem chi tiết',
      styleSlide: {
        backgroundImage:
          "url('https://images.pexels.com/photos/20313496/pexels-photo-20313496/free-photo-of-binh-minh-hoang-hon-h-i-c-ng-n-c-d-c.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
    },
  ];

  return (
    <Slider {...settings}>
      {slidersList?.map((slider) => {
        return (
          <div className='sliders' key={slider.id}>
            <div className='sliders__content' style={slider.styleSlide}>
              <Row>
                <Col lg={16} xs={12} sm={24}>
                  <div className='sliders__left'>
                    <Link to='#' className='sliders__left-title'>
                      {slider.title}
                    </Link>
                    <p className='sliders__left-description'>
                      {slider.description}
                    </p>
                    <Button shape='round' className='sliders__left-btn'>
                      {slider.btnContent}
                    </Button>
                  </div>
                </Col>

                <Col lg={16} xs={12} sm={24}>
                  <div className='sliders__right'>
                    <Link to=''>
                      <div
                        style={{
                          width: '600px',
                          height: '270px',
                          position: 'relative',
                        }}
                      >
                        <img
                          alt='Avatar'
                          src={slider.img}
                          width='0'
                          height='0'
                          sizes='100vw'
                        />
                      </div>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SlidersSection;
