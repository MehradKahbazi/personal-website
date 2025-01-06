import { useContext } from "react";
import styles from "./CustomModal.module.css";
import AppState from "@/contexts/AppState";
import hands from "@/asstes/images/my-images/IMG_0387.jpg";
import Image from "next/image";
import linkedin from "@/asstes/images/linkedin.svg";
import github from "@/asstes/images/github.svg";
import email from "@/asstes/images/email_b.svg";

const CustomModal = () => {
  const { collapsed, setCollapsed } = useContext(AppState);

  return (
    <div className={collapsed ? styles.collapsed : styles.menu}>
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-6 rounded bg-white position-relative">
            <a
              href="#"
              className="btn-close position-absolute end-0 m-3"
              disabled
              aria-label="Close"
              onClick={() => {
                setCollapsed((prevState) => !prevState);
              }}
            ></a>
            <div className="row">
              <div className="col-lg-6 p-4 ">
                <Image src={hands} className="img-fluid rounded-2" />
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-around pt-4 pb-3">
                <p>
                  Bootstrap “spinners” can be used to show the loading state in
                  your projects. They’re built only with HTML and CSS, meaning
                  you don’t need any JavaScript to create them. You will,
                  however, need some custom JavaScript to toggle their
                  visibility.
                </p>
                <div className="d-flex flex-column justify-content-start">
                <a className={styles.link} href="mailto:mehradhetfield@gmail.com">
                <Image src={email} className="me-2" height={17} width={17} />
                  mehradhetfield@gmail.com
                </a>
                <a
                  className={styles.link}
                  href="https://www.linkedin.com/in/mehrad-kahbazi-089762180/"
                  target="_blank"
                >
                    <Image src={linkedin} className="me-2" height={17} width={17} />
                  Linkedin
                </a>
                <a
                  className={styles.link}
                  href="https://github.com/MehradKahbazi/"
                  target="_blank"
                >
                    <Image src={github} className="me-2" height={17} width={17} />
                  Github
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
