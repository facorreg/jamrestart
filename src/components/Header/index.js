import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import SearchBar from './SearchBar';
import capitalize from 'lodash/capitalize';
import HeaderStyle from './header.style';

const Header = () => {
  const router = useRouter();
  const currentType = router.pathname.slice(1) || 'all';
  const isConnected = false;
  const usrIntKeys = ['all', 'clothes', 'accessories'];

  const buildUrl = (key) => {
    if (key === 'all') return '/';
    return `/${key}`;
  }

  // const handleClick = (key) => (e) => {
  //   e.preventDefault();
  //   const url = buildUrl(key)
  //   router.push(url);
  // }

  return (
    <HeaderStyle>
      <div className="logo">
        <Image
          src="/platylogo.png"
          width={60}
          height={60}
          alt="logo"
        />
      </div>
      <div className="header-categories">
        {
          usrIntKeys
            .map((key) => (
              <Link href={buildUrl(key)} key={key}>
                <a className={key === currentType ? 'currentCat' : ''}>
                  {capitalize(key)}
                </a>
              </Link>
            ))
        }
      </div>
      {
        !isConnected &&
        <div className="usr-interactions header-disconnected">
          <div>About</div>
          <div>Login</div>
          <div>Sign up</div>
        </div>
      }
      <SearchBar />
    </HeaderStyle >
  )
};

export default Header;
