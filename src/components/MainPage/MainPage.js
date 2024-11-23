import Image from "next/image";
import topImg from "../../asstes/images/head.jpeg";
import sample from "../../asstes/images/sample.jpg";
import styles from "./MainPage.module.css";
import profile from "../../asstes/images/pro.jpg";
import medal from "@/asstes/images/medal.svg";
import linkedin from "@/asstes/images/linkedin.svg";
import github from "@/asstes/images/github.svg";
const MainPage = () => {
  return (
    <>
      

      <div className={`container-fluid m-0 p-0 ${styles.background} py-5`}>
        <div className={`container ${styles.top}`}>
          <section className="row justify-content-center">
            <div className="col-lg-6">
              <Image
                src={topImg}
                alt="header photo"
                quality={100}
                className="img-fluid w-100"
              />
            </div>
            <div className="col-lg-5 d-flex flex-column align-items-center h-100 my-4">
              <h1 className="text-center my-1">Mehrad Kahbazi</h1>
              <h3>Front-End Developer</h3>
              <div className="d-flex justify-content-center align-items-center w-100 gap-3 my-3">
                <a href="#" className={`border border-black border-2 px-3 py-2 ${styles.customBtn}`}>Contact Me</a>
                <a href="#" className={`border border-black border-2 px-3 py-2 ${styles.customBtn}`}>Download Resume</a>
              </div>
              <div className="d-flex justify-content-center align-items-center w-50 gap-3">
                <Image src={linkedin} height={32} width={32} />
                <Image src={github} height={32} width={32} />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="container my-3">
        <section className={`row align-items-center ${styles.height}`}>
          <div className="col-lg-12 text-center">
            <small className="text-secondary">Get to Know More</small>
            <h2 className={styles.divider}><span>About Me</span></h2>
          </div>
          <div className="col-lg-4">
            <Image src={profile} className="img-fluid rounded"></Image>
          </div>
          <div className="col-lg-8 ">
            
            <div className="about">
              <p className="p-5">
                Creative and detail-oriented Front-End Developer with over 4
                years of experience building responsive, user-friendly websites.
                Skilled in modern frameworks like React and Next.js. Solid
                understanding of back-end technologies such as Node.js, NestJs,
                and RESTful APIs, allowing seamless front-end and back-end
                collaboration. Experienced in Agile environments, translating
                designs into high-quality, optimized code while staying
                up-to-date with industry trends and best practices.
              </p>
            </div>
            <div className="row d-flex justify-content-around h-100 align-items-start">
              <div className="col-lg-6">
              <div className="card px-5">
                <div className="card-body text-center">
                  <Image src={medal} height={32} width={32} />
                  <h3>Experience</h3>
                  <p>+4 Years as a Front-end Developer</p>
                </div>
              </div>
              </div>
              <div className="col-lg-6">
              <div className="card px-5">
                <div className="card-body text-center">
                  <Image src={medal} height={32} width={32} />
                  <h3>Education</h3>
                  <p>BS of Software Engineering</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`row ${styles.height} my-3`}>
          <div className="col-lg-12 text-center">
            <small className="text-secondary">Explore My</small>
            <h2 className={styles.divider}><span>Portfolio</span></h2>
          </div>
          <div className="col-lg-12 my-5">
            <div className="row">
              <div className="col-lg-6">
                <Image src={sample} className="img-fluid h-100" />
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6 m-0 p-1">
                    <Image src={sample} className="img-fluid" />
                    <h6 className="mb-0">sample proj</h6>
                    <small>this is a sample project for test</small>
                  </div>

                  <div className="col-lg-6 m-0 p-1">
                    <Image src={sample} className="img-fluid" />
                    <h6 className="mb-0">sample proj</h6>
                    <small>this is a sample project for test</small>
                  </div>
                  <div className="col-lg-6 m-0 p-1">
                    <Image src={sample} className="img-fluid" />
                    <h6 className="mb-0">sample proj</h6>
                    <small>this is a sample project for test</small>
                  </div>
                  <div className="col-lg-6 m-0 p-1">
                    <Image src={sample} className="img-fluid" />
                    <h6 className="mb-0">sample proj</h6>
                    <small>this is a sample project for test</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainPage;
