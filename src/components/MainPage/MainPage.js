import Image from "next/image";
import topImg from "../../asstes/images/head.jpeg";
import sample from "../../asstes/images/sample.jpg";
import styles from './MainPage.module.css';
const MainPage = () => {
  return (
    <>
      <header className="position-relative">
        <Image
          src={topImg}
          alt="header photo"
          quality={100}
          className="img-fluid w-100"
        />
        <div className={`position-absolute ${styles.position} shadow`}>
          <h1 className="text-center mb-5">
          Mehrad Kahbazi
          </h1>
          <div className="my-4">
          <h3>About Me</h3>
            <p className="mb-3">
              Creative and detail-oriented Front-End Developer with over 4 years
              of experience building responsive, user-friendly websites. Skilled
              in modern frameworks like React and Next.js. Solid understanding
              of back-end technologies such as Node.js, NestJs, and RESTful
              APIs, allowing seamless front-end and back-end collaboration.
              Experienced in Agile environments, translating designs into
              high-quality, optimized code while staying up-to-date with
              industry trends and best practices.
            </p>
          </div>
        </div>
      </header>
      {/* <div className="container my-3">
        

        
        <section className="row">
          <div className="col-lg-12">
          <h3 className="border-bottom text-center border-secondary pb-3 my-3">Portfolio</h3>
          </div>
        </section>
        <section className="row">
          <div className="col-lg-6">
            <Image src={sample} className="img-fluid h-100" />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 m-0 p-1">
                <Image src={sample} className="img-fluid" />
                <h6 className="mb-0">sample proj</h6>
                <small>
                  this is a sample project for test
                </small>
              </div>

              <div className="col-lg-6 m-0 p-1">
                <Image src={sample} className="img-fluid" />
                <h6 className="mb-0">sample proj</h6>
                <small>
                  this is a sample project for test
                </small>
              </div>
              <div className="col-lg-6 m-0 p-1">
                <Image src={sample} className="img-fluid" />
                <h6 className="mb-0">sample proj</h6>
                <small>
                  this is a sample project for test
                </small>
              </div>
              <div className="col-lg-6 m-0 p-1">
                <Image src={sample} className="img-fluid" />
                <h6 className="mb-0">sample proj</h6>
                <small>
                  this is a sample project for test
                </small>
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </>
  );
};

export default MainPage;
