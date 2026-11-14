import path from '@/constants/path';
import './header.less';
import { MdClose, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {
  const viteAppOriginUrl = import.meta.env.VITE_APP_ORIGIN_URL;

  return (
    <div className='header'>
      <div className='header__logo'>
        <Link to='/' className='header__logo-link'>
          <img
            src='/assets/images/logo.png'
            alt='Shipf Logo'
            className='header__logo-img'
          />
          <h2 className='header__logo-heading'>Kết nối tạo thịnh vượng</h2>
        </Link>
      </div>

      <div className='header__body'>
        <div className='header__search'>
          <MdSearch size={24} color='#ccc' />

          <input
            className='header__search-input'
            placeholder='Tìm kiếm mã vận đơn...'
            spellCheck={false}
          />
          <div className='header__search-clear'>
            <MdClose />
          </div>
        </div>
      </div>

      <div className='header__actions'>
        <Link
          to={`${viteAppOriginUrl}${path.login}`}
          className='header__actions-login'
        >
          Tạo vận đơn
        </Link>
      </div>
    </div>
  );
};

export default Header;
