import './blog-section.less';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogsList = [
    {
      id: 'blog-1',
      description:
        'Cửa hàng của tôi luôn ưu tiên lựa chọn SHIPF để đảm bảo giao nhận nhanh chóng và chất lượng hàng hóa. Đặc biệt là khi khách hàng cần giao gấp để tặng quà sinh nhật hoặc chuẩn bị cho dịp lễ đặc biệt.',
      date: '20/12/2023',
      title: '[SỰ KIỆN GIÁNG SINH] SĂN TẤT ĐỔI QUÀ',
      imgUrl: '/assets/images/blog-1.jpg',
    },
    {
      id: 'blog-2',
      description:
        'Cửa hàng của tôi luôn ưu tiên lựa chọn SHIPF để đảm bảo giao nhận nhanh chóng và chất lượng hàng hóa. Đặc biệt là khi khách hàng cần giao gấp để tặng quà sinh nhật hoặc chuẩn bị cho dịp lễ đặc biệt.',
      date: '20/12/2023',
      title: '[XE TẢI] BÙNG NỔ ĐƠN HÀNG',
      imgUrl: '/assets/images/blog-2.jpg',
    },
    {
      id: 'blog-3',
      description:
        'Cửa hàng của tôi luôn ưu tiên lựa chọn SHIPF để đảm bảo giao nhận nhanh chóng và chất lượng hàng hóa. Đặc biệt là khi khách hàng cần giao gấp để tặng quà sinh nhật hoặc chuẩn bị cho dịp lễ đặc biệt.',
      date: '20/12/2023',
      title: 'HƯỚNG DẪN BÁO CÁO SỰ CỐ ĐƠN HÀNG GIAO HÀNG LIÊN TỈNH',
      imgUrl: '/assets/images/blog-3.jpg',
    },
  ];

  return (
    <div className='blog'>
      <h2 className='blog__title'>Tin tức mới nhất</h2>

      <Row gutter={[24, 24]}>
        {blogsList.map((blog) => {
          return (
            <Col lg={8} xs={24} sm={24}>
              <div className='blog__item' key={blog.id}>
                <Link to='/blog' className='blog__item-thumb'>
                  <img
                    src={blog.imgUrl}
                    width='0'
                    height='0'
                    alt='Blog Photo'
                    className='blog__item-img'
                  />
                  <div className='blog__item-date'>
                    <div className='date__day'>15th</div>
                    <div className='date__month'>June</div>
                  </div>
                </Link>

                <div className='blog__item-main'>
                  <Link to='/blog' className='blog__item-name'>
                    {blog.title}
                  </Link>
                  <div className='blog__item-des'>{blog.description}</div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default BlogSection;
