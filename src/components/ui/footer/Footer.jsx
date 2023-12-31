import React from "react";
import styles from "./footer.module.css";
import {
  instagram_icon,
  logo,
  tiktok_icon,
  youtube_icon,
  zalo_icon,
  facebook_icon,
  footer_bg,
  inputFooterIcon,

} from "../../../assets/images";

const Footer = () => {
  const handleChangeLocation = (href) => {
    window.location.href = href;
  };

  return (
    <footer
      className={styles.footer}
      style={{ backgroundImage: `url(${footer_bg})` }}
    >
      <div className={styles.footer_wrap + " md_content flex md:flex-col"}>
        <div className={styles.row}>
          <div className={`${styles.col} ${styles.big_col}`}>
            <img src={logo} alt="" />
            <p className="md:text-xl font-bold">
              Offshore Energy Installation JSC
            </p>
          </div>
          <div className="flex gap-x-10">
            <div className={styles.col}>
              <ul className="flex flex-col gap-y-2 md:text-base font-semibold uppercase cursor-pointer">
                <li onClick={() => handleChangeLocation("#")}>About</li>
                <li onClick={() => handleChangeLocation("#")}>Projects</li>
                <li onClick={() => handleChangeLocation("#")}>
                  Clients & partners
                </li>
                <li onClick={() => handleChangeLocation("#")}>
                  News and event
                </li>
                <li onClick={() => handleChangeLocation("#")}>
                  sustainability
                </li>
                <li onClick={() => handleChangeLocation("#")}>
                  download profile company
                </li>
              </ul>
            </div>
            <div className={styles.col}>
              <ul className="flex flex-col gap-y-2 md:text-base font-semibold uppercase cursor-pointer ">
                <li onClick={() => handleChangeLocation("#")}>Careers</li>
                <li onClick={() => handleChangeLocation("#")}>Contact</li>
                <li onClick={() => handleChangeLocation("#")}>Blog</li>
                <li onClick={() => handleChangeLocation("#")}>FAQ</li>
                <li onClick={() => handleChangeLocation("#")}>Disclaimer</li>
                <li onClick={() => handleChangeLocation("#")}>
                  privacy policy
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.col} ${styles.footer_contact} flex flex-col gap-y-2`}>
            <h3
              className={
                styles.footer_h3 +
                " md:text-base font-bold uppercase text-white cursor-pointer"
              }
            >
              Sign up for email to receive the latest information
            </h3>
            <p className="md: text-sm font-normal cursor-pointer">
              Lorem ipsum dolor sit amet consectetur. Aliquam sed blandit
              rhoncus id dictum.{" "}
            </p>
            <div
              className={styles.input_field + " relative"}
              style={{ marginBlock: "10px 20px" }}
            >
              <input
                type="text"
                placeholder="Your email"
                className="md: text-sm font-normal"
              />
              <img
                src={inputFooterIcon}
                alt=""
                className="absolute"
                style={{ top: 0, right: 0 }}
              />
            </div>
            <div className={styles.social + " flex md:items-center gap-x-4"}>
              <div>
                <img src={facebook_icon} alt="" />
              </div>
              <div>
                <img src={youtube_icon} alt="" />
              </div>
              <div>
                <img src={zalo_icon} alt="" />
              </div>
              <div>
                <img src={instagram_icon} alt="" />
              </div>
              <div>
                <img src={tiktok_icon} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div
            className={`${styles.col} ${styles.big_col} uppercase md:text-sm font-normal cursor-pointer`}
          >
            Address
          </div>
          <div
            className={`${styles.col} ${styles.no_mw} md:tex-base font-normal cursor-pointer`}
          >
            Đông Anh - Hà Nội
          </div>
        </div>

        <div className={styles.row}>
          <div
            className={`${styles.col} ${styles.big_col} uppercase md:text-sm font-normal cursor-pointer`}
          >
            Contact
          </div>
          <div className={styles.col + " md:tex-base font-normal cursor-pointer"}>
          0363987583{" "}
          </div>
          <div className={styles.col + " md:tex-base font-normal cursor-pointer"}>
           daitrang91098@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
