import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/icons/logo.png";
import style from "./header.module.scss";

export default function Header({ setOpenModalCall }) {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const checkActive = ({ isActive }) =>
    isActive ? style["active-link"] : style["menu-link"];
  const handleBurgerOpen = () => {
    if (!burgerIsOpen) {
      setBurgerIsOpen(true);
    }
  };
  const handleBurgerClose = () => {
    if (burgerIsOpen) {
      setBurgerIsOpen(false);
    }
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style["header-wrapper"]}>
          <div className={style["header-left"]}>
            <NavLink to="/" className={style.logo}>
              <img src={logo} alt="logo" />
            </NavLink>
            <div className={style.language}>
              <a className={style["language-switch"]} href="#">
                Eng
              </a>
              <a
                className={`${style["language-switch"]} ${style.active}`}
                href="#"
              >
                Рус
              </a>
            </div>
          </div>
          <div className={style["header-right"]}>
            <nav className={style.nav}>
              <NavLink to="/about" className={checkActive}>
                О нас
              </NavLink>
              <NavLink to="/tours" className={checkActive}>
                Туры
              </NavLink>
              <NavLink to="/blogposts" className={checkActive}>
                Блог
              </NavLink>
              <NavLink to="/contact" className={checkActive}>
                Контакты
              </NavLink>
            </nav>
            <button
              onClick={() => setOpenModalCall(true)}
              className={style.btn}
            >
              Помощь
            </button>
            <div className={style["burger-wrapper"]}>
              <img
                onClick={() => handleBurgerOpen()}
                className={style["burger-open"]}
                src="../icons/menu.svg"
                alt="menu"
              />

              <div
                onClick={() => handleBurgerClose()}
                className={`${
                  burgerIsOpen
                    ? `${style["burger-menu"]} ${style.isOpen}`
                    : `${style["burger-menu"]}`
                }`}
              >
                <img
                  onClick={() => handleBurgerClose()}
                  className={style["burger-close"]}
                  src="../icons/close.svg"
                  alt="close"
                />
                <nav>
                  <NavLink to="/about" className={checkActive}>
                    О нас
                  </NavLink>
                  <NavLink to="/tours" className={checkActive}>
                    Туры
                  </NavLink>
                  <NavLink to="/blogposts" className={checkActive}>
                    Блог
                  </NavLink>
                  <NavLink to="/contact" className={checkActive}>
                    Контакты
                  </NavLink>
                  <button
                    onClick={() => setOpenModalCall(true)}
                    className={style.btn}
                  >
                    Помощь
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
