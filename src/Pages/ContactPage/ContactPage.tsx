import { useState } from "react";
import MapUI from "../../Components/MapUI/MapUI";
import arrTabs from "../../data/contacts.json";
import style from "./contactPage.module.scss";

export default function ContactPage() {
  const [activeTab, setActivetab] = useState(0);
  const handleClickTab = (index: number) => {
    setActivetab(index);
  };

  return (
    <div className={style.contact}>
      <div className={style.container}>
        <h1 className={style["contact-title"]}>Контактная информация</h1>
        <div className={style["contact-wrapper"]}>
          <div className={style["contact-tabs"]}>
            {arrTabs.map((item, index) => {
              let isActive = "";
              if (index === activeTab) {
                isActive = "activeTab";
              }
              return (
                <button
                  onClick={() => {
                    handleClickTab(index);
                  }}
                  className={`${style["contact-tab"]} ${
                    isActive && style[isActive]
                  }`}
                  key={item.name}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {arrTabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <div key={item.name}>
                  <div className={style["contact-address"]}>{item.address}</div>
                  <div className={style["contact-map"]}>
                    <MapUI location={item.coordinates} />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
