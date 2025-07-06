import { useState } from "react";
// import {
//   YMaps,
//   Map,
//   Placemark,
//   FullscreenControl,
// } from "@pbe/react-yandex-maps";
import style from "./contactPage.module.scss";

export default function ContactPage() {
  const [activeTab, setActivetab] = useState(0);
  const handleClickTab = (index) => {
    setActivetab(index);
  };
  const arrTabs = [
    {
      name: "Минск",
      address: "г. Минск, ул. Орловская, 59-118",
      coordinates: [53.9304, 27.5384],
    },
    {
      name: "Гродно",
      address: "г. Гродно, ул. Антонова, 14-5",
      coordinates: [53.6747, 23.8417],
    },
    {
      name: "Брест",
      address: "г. Брест, ул. Московская, 247-61",
      coordinates: [52.0963, 23.749],
    },
  ];
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
                <div
                  onClick={() => {
                    handleClickTab(index);
                  }}
                  className={`${style["contact-tab"]} ${
                    isActive && style[isActive]
                  }`}
                  key={item.name}
                >
                  {item.name}
                </div>
              );
            })}
          </div>

          {arrTabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <div key={item.name}>
                  <div className={style["contact-address"]}>{item.address}</div>
                  <div className={style["contact-map"]}>
                    {/* <YMaps
                      query={{ apikey: "6be47d0d-890b-4722-96da-3ef0f9271887" }}
                    >
                      <Map
                        defaultState={{
                          center: item.coordinates,
                          zoom: 17,
                        }}
                      >
                        <Placemark
                          geometry={[53.9022, 27.5498]}
                          properties={{ preset: "islands#redIcon" }}
                        />
                        <FullscreenControl />
                      </Map>
                    </YMaps> */}
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
