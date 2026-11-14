import './partner-section.less';
import Slider from 'react-slick';

const PartnerSection = () => {
  const partners = [
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/life.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/chanel.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/unicity.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/fpt.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/tgdd.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/amway.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/ACFC.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/SupperSport.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/theface.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/loreal.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/hasaki.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/schenker.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/ceva.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/dhl.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/samsung.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/sony.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/acer.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/tcl.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/daikin.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/scavi.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/coats.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/avary.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/prudential.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/panasonic.svg',
    },
    {
      href: 'https://ntlogistics.vn/assets/svg/customer/tiktok.svg',
    },
  ];

  const settings = {
    infinite: false,
    slidesToShow: 10,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 3,
          slidesToShow: 3,
          slidesToScroll: 1,
          slidesPerRow: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 740,
        settings: {
          rows: 2,
          slidesToShow: 2,
          slidesToScroll: 1,
          slidesPerRow: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className='service'>
      <h2 className='service__heading'>Đối tác vận tải</h2>

      <div className='slider-container service__slice'>
        <Slider {...settings} className='service__settings'>
          {partners.slice(0, 10).map((partner) => (
            <div className='service__settings-wrap'>
              <img src={partner.href} className='service__settings-img' />
            </div>
          ))}
        </Slider>
      </div>

      <div className='slider-container service__slice'>
        <Slider {...settings} className='service__settings'>
          {partners.slice(10, 19).map((partner) => (
            <div className='service__settings-wrap'>
              <img src={partner.href} className='service__settings-img' />
            </div>
          ))}
        </Slider>
      </div>

      <div className='slider-container service__slice'>
        <Slider {...settings} className='service__settings'>
          {partners.slice(18, 25).map((partner) => (
            <div className='service__settings-wrap'>
              <img src={partner.href} className='service__settings-img' />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnerSection;
