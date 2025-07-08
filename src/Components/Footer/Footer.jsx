import { Link } from "react-router-dom";
import style from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style["footer-wrapper"]}>
          <div className={style["footer-column"]}>
            <div className={style["footer-inner"]}>
              <div className={style["footer-name"]}>
                <p>Адрес</p>
              </div>
              <div className={style["footer-info"]}>
                <p>г. Минск, ул. Орловская, 59-118</p>
                <p>г. Гродно, ул. Антонова, 14-5</p>
                <p>г. Брест, ул. Московская, 247-61</p>
              </div>
            </div>
          </div>
          <div className={style["footer-column"]}>
            <div className={style["footer-inner"]}>
              <div className={style["footer-name"]}>
                <p>Телефоны</p>
              </div>
              <div className={style["footer-info"]}>
                <a href="tel:+375338884422">+375 29 888-44-22</a>
                <a href="tel:+375299638521">+375 33 888-44-22</a>
              </div>
            </div>
            <div className={style["footer-inner"]}>
              <div className={style["footer-name"]}>
                <p>Email</p>
              </div>
              <div className={style["footer-info"]}>
                <a href="mailto:wildvacation@gmail.com">
                  wildvacation@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className={style["footer-column"]}>
            <div className={style["footer-social"]}>
              <p>Мы в соцсетях</p>
            </div>
            <div className={style["footer-icons"]}>
              <span>
                <Link to="https://www.instagram.com/" target="_blank">
                  <img src="../icons/instagram.svg" alt="instagram" />
                </Link>
              </span>
              <span>
                <Link to="https://vk.com/" target="_blank">
                  <img src="../icons/vk.svg" alt="vk" />
                </Link>
              </span>
              <span>
                <Link to="https://x.com/" target="_blank">
                  <img src="../icons/twitter.svg" alt="twitter" />
                </Link>
              </span>
              <span>
                <Link to="https://www.facebook.com/" target="_blank">
                  <img src="../icons/facebook.svg" alt="facebook" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
