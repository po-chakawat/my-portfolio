import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const toggleBtnRef = useRef(null); // เพิ่ม ref สำหรับปุ่ม toggle

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // ปิดเมนูเมื่อคลิกเมนู
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // สลับสถานะเมนู
  };

  const handleClickOutside = (event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target) && // ตรวจสอบว่าไม่ใช่คลิกในเมนู
      toggleBtnRef.current &&
      !toggleBtnRef.current.contains(event.target) // ตรวจสอบว่าไม่ใช่คลิกที่ปุ่ม toggle
    ) {
      setIsMenuOpen(false); // ปิดเมนู
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="navmenu no-padding">
      <div className="container">
        {/* Mobile Navbar */}
        <div className="navmenu__mobile">
          <img src="../images/icon/logo.svg" alt="Logo" />
          <span
            className="navmenu__mobile-btn"
            ref={toggleBtnRef} // ผูก ref กับปุ่ม toggle
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M28 16C28 16.2652 27.8946 16.5196 27.7071 16.7071C27.5196 16.8946 27.2652 17 27 17H17V27C17 27.2652 16.8946 27.5196 16.7071 27.7071C16.5196 27.8946 16.2652 28 16 28C15.7348 28 15.4804 27.8946 15.2929 27.7071C15.1054 27.5196 15 27.2652 15 27V17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.10536 4.73478 15 5 15H15V5C15 4.73478 15.10536 4.48043 15.29289 4.29289C15.4804 4.10536 15.7348 4 16 4C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V15H27C27.2652 15 27.5196 15.1054 27.7071 15.2929C27.8946 15.4804 28 15.73478 28 16Z"
                fill="#565656"
              />
            </svg>
          </span>
        </div>

        {/* Desktop and Mobile Menu */}
        <nav
          ref={navRef}
          className={`navmenu__desktop ${isMenuOpen ? 'navmenu__desktop--open' : 'navmenu__desktop--closed'}`}
          id="navbar"
        >
          <ul>
            <li data-cursor="hover" onClick={() => handleScroll('sec-top')}>Home</li>
            <li data-cursor="hover" onClick={() => handleScroll('sec-about')}>About</li>
            <li onClick={() => handleScroll('sec-service')}>Service</li>
            <div data-cursor="hover" className="navmenu__logo">
              <img src="./images/icon/logo.svg" alt="Logo" />
              <div className="navmenu__logo-name">
                <div className="navmenu__logo-nickname">
                  <span>SARA</span>
                </div>
                <div className="navmenu__logo-realname">
                  <span>Made by</span>
                  <span>Chakawat.c</span>
                </div>
              </div>
            </div>
            <li onClick={() => handleScroll('sec-experience')}>Experience</li>
            <li onClick={() => handleScroll('showcase')}>Showcase</li>
            <li onClick={() => handleScroll('sec-contact')}>Contact</li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
