import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Button, ModalRegister } from "@/components/UI";
import Logo from "@/assets/img/vector/logo.svg";
import menus from "@/constant/menus";
import scrollToTop from "@/utils/scrollToTop";
import UiContext from "@/store/ui-context";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const uiCtx = useContext(UiContext);
  const { isShowRegister, toggleRegister, isShowNav, toggleNav } = uiCtx;
  const [scrollYIsless10, setScrollYIsLess10] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY <= 10) {
        setScrollYIsLess10(true);
      } else {
        setScrollYIsLess10(false);
      }
    };
  }, []);

  return (
    <React.Fragment>
      <header>
        <nav className="nav">
          <div
            id="navbar"
            className={
              scrollYIsless10 ? "nav-container" : "nav-container scroll"
            }
            style={{
              paddingTop: scrollYIsless10 ? "4rem" : "2rem",
            }}
          >
            <div className="nav-logo">
              <img
                className="img-fluid logo"
                src={Logo}
                alt=""
                width="100%"
                height="100%"
              />
              <span
                className="logo-text"
                style={{ color: scrollYIsless10 ? "#fff" : "#034034" }}
              >
                HETY CATERING
              </span>
            </div>
            <ul className={`nav-menus ${isShowNav ? "show" : ""}`}>
              <li className="btn-cancel" onClick={toggleNav}>
                <p>&#10006;</p>
              </li>
              {menus.map((menu) => (
                <li key={menu.id}>
                  <NavLink
                    to={menu.path}
                    className={({ isActive }) =>
                      isActive ? "nav-item active" : "nav-item"
                    }
                    onClick={scrollToTop}
                    {...(menu.download
                      ? { download: true, target: "_blank" }
                      : {})}
                  >
                    {menu.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <Button id="btnRegsiter" className="btn-register" isPrimary>
                  <a
                    href="https://api.whatsapp.com/send?phone=6281994733321&text=Tes"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <FaWhatsapp style={{ marginRight: "4px" }} size={15} />
                    Contact Us
                  </a>
                </Button>
              </li>
            </ul>
            <label
              htmlFor="check"
              onClick={toggleNav}
              style={{ top: scrollYIsless10 ? "4.9rem" : "3rem" }}
            >
              <span className="nav-span"></span>
              <span className="nav-span"></span>
              <span className="nav-span"></span>
            </label>
          </div>
        </nav>
      </header>
      {isShowRegister && <ModalRegister toggleRegister={toggleRegister} />}
    </React.Fragment>
  );
};

export default React.memo(Header);
