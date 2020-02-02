import React from 'react';
import './header.scss';

class Header extends React.Component {
  render() {
    return (
        <header className="header">
          <div>
            <h1>
              <a href="/">
                <img
                  src="/images/logo.png"
                  alt="배달의민족"
                />
              </a>
            </h1>

            <ul className="login-box">
              <li>
                <a href="">
                  로그인
                </a>
              </li>
              <li>
                <a href="">
                  회원가입
                </a>
              </li>
            </ul>
          </div>
        </header>
    );
  }
}

export default Header;