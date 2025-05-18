import { useContext, useEffect } from "react";
import styles from "./CustomModal.module.css";
import AppState from "@/contexts/AppState";
import hands from "@/asstes/images/my-images/IMG_0387.jpg";
import Image from "next/image";
import linkedin from "@/asstes/images/linkedin.svg";
import github from "@/asstes/images/github.svg";
import email from "@/asstes/images/email_b.svg";

const CustomModal = () => {
  const { collapsed, setCollapsed } = useContext(AppState);

  // useEffect(() => {
  //   if (collapsed) {
  //     document.body.style.overflow = "hidden";
  //   }

  //   return () => (document.body.style.overflow = "unset");
  // }, []);

  return (
    <div className={collapsed ? styles.collapsed : styles.menu}>
    {/* <div class="modal-dialog modal-dialog-scrollable"> */}
      <div className={`container-fluid ${styles.modalDialog}`}>
        <div className={`row justify-content-center rounded bg-white py-3 my-3 overflow-y-auto h-100`}>
          <div className="col-lg-12 d-flex d-lg-none justify-content-end">
            
              <a
                href="#"
                className="btn-close mb-2"
                disabled
                aria-label="Close"
                onClick={() => {
                  setCollapsed((prevState) => !prevState);
                }}
              ></a>
            
          </div>
          <div className="col-lg-7">
            <Image src={hands}  className="img-fluid rounded-2" />
          </div>
          <div className="col-lg-5">
            <div className="row h-100">
              <div className={`col-lg-12 d-none d-lg-block position-relative ${styles.close}`} style={{height:'10%'}}>
              <a
                href="#"
                className="btn-close position-absolute end-0 m-3"
                disabled
                aria-label="Close"
                onClick={() => {
                  setCollapsed((prevState) => !prevState);
                }}
              ></a>
              </div>
              <div className="col-lg-12 d-flex flex-column justify-content-between pt-4 pb-3" style={{height:'90%'}}>
                <div className="row">
                  <div className="col-12">
                    <p>
                  In case of need of consultation or web application services you can contact me via options given below
                </p>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-start">
                  <a
                    className={styles.link}
                    href="mailto:mehradhetfield@gmail.com"
                  >
                    <Image
                      src={email}
                      className="me-2"
                      height={17}
                      width={17}
                    />
                    <small>mehradhetfield@gmail.com</small>
                  </a>
                  <a
                    className={styles.link}
                    href="https://www.linkedin.com/in/mehrad-kahbazi-089762180/"
                    target="_blank"
                  >
                    <Image
                      src={linkedin}
                      className="me-2"
                      height={17}
                      width={17}
                    />
                    <small>Linkedin</small>
                  </a>
                  <a
                    className={styles.link}
                    href="https://github.com/MehradKahbazi/"
                    target="_blank"
                  >
                    <Image
                      src={github}
                      className="me-2"
                      height={17}
                      width={17}
                    />
                    <small>Github</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
