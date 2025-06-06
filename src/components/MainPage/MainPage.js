import Image from "next/image";
import topImg from "../../asstes/images/my-images/top.jpg";
import styles from "./MainPage.module.css";
import profile from "../../asstes/images/my-images/about.jpg";
import medal from "@/asstes/images/medal.svg";
import linkedin from "@/asstes/images/linkedin.svg";
import github from "@/asstes/images/github.svg";
import html from "@/asstes/images/html_icon.svg";
import css from "@/asstes/images/css_icon.svg";
import js from "@/asstes/images/js_icon.svg";
import bootstrap from "@/asstes/images/bootstrap_icon.svg";
import tailwind from "@/asstes/images/tailwind_icon.svg";
import react from "@/asstes/images/react_icon.svg";
import next from "@/asstes/images/next_icon.svg";
import webpack from "@/asstes/images/webpack_icon.svg";
import turbopack from "@/asstes/images/turbopack_icon.svg";
import pwa from "@/asstes/images/pwa_icon.svg";
import scss from "@/asstes/images/scss_icon.svg";
import typescript from "@/asstes/images/typescript_icon.svg";
import nodejs from "@/asstes/images/nodejs_icon.svg";
import express from "@/asstes/images/express_icon.svg";
import nest from "@/asstes/images/nest_icon.svg";
import typeorm from "@/asstes/images/typeorm_icon.svg";
import prisma from "@/asstes/images/prisma_icon.svg";
import npm from "@/asstes/images/npm_icon.svg";
import pnpm from "@/asstes/images/pnpm_icon.svg";
import yarn from "@/asstes/images/yarn_icon.svg";
import nvm from "@/asstes/images/nvm_icon.svg";
import rest from "@/asstes/images/rest_icon.svg";
import graphql from "@/asstes/images/graphql_icon.svg";
import jwt from "@/asstes/images/jwt_icon.svg";
import sql from "@/asstes/images/sql_icon.svg";
import postgre from "@/asstes/images/postgre_icon.svg";
import mongo from "@/asstes/images/mongodb_icon.svg";
import solid from "@/asstes/images/solid_icon.png";
import oop from "@/asstes/images/oop_icon.svg";
import Link from "next/link";
import { useContext } from "react";
import AppState from "@/contexts/AppState";
import Portal from "../Portal/Portal";
import CustomModal from "../CustomModal/CustomModal";
const MainPage = () => {

  const {collapsed, setCollapsed} = useContext(AppState);
  return (
    <>
      <div className={`container-fluid m-0 p-0 ${styles.background} py-5`}>
        {/* top section start */}
        <div className={`container ${styles.top}`}>
          <section className="row justify-content-center align-items-center">
            <div className="col-lg-6">
              <Image
                src={topImg}
                alt="header photo"
                quality={100}
                className="img-fluid w-100 rounded"
              />
            </div>
            <div className="col-lg-5 d-flex flex-column align-items-center h-100 my-4">
              <h1 className="text-center my-1">Mehrad Kahbazi</h1>
              <h3>Front-End Developer</h3>
              <div className="d-flex justify-content-center align-items-center w-100 gap-3 my-3">
                <a
                  href="#"
                  className={`border border-black border-2 px-3 py-2 ${styles.customBtn}`}
                  onClick={() => {setCollapsed(prevState => !prevState)}}
                >
                  Contact Me
                </a>
                <Link
                  href={'/files/Mehrad-Kahbazi.pdf'}
                  className={`border border-black border-2 px-3 py-2 ${styles.customBtn}`}
                   rel="noopener noreferrer" locale={false} download
                >
                  Download Resume
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center w-50 gap-3 pt-3">
                <a href="https://www.linkedin.com/in/mehrad-kahbazi-089762180/" target="_blank"><Image src={linkedin} height={32} width={32} /></a>
                <a href="https://github.com/MehradKahbazi/" target="_blank"><Image src={github} height={32} width={32} /></a>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* top section end */}
      {!collapsed && <div className="container my-3">
        {/* about section start */}
        <section className={`row align-items-center ${styles.height}`}>
          <div className="col-lg-12 text-center my-5">
            <small className="text-secondary">Get to Know More</small>
            <h2 className={styles.divider}>
              <span>About Me</span>
            </h2>
          </div>
          <div className="col-lg-4">
            <Image src={profile} className="img-fluid rounded"></Image>
          </div>
          <div className="col-lg-8 ">
            <div className="about">
              <p className={`p-5 ${styles.mp}`}>
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
                <div className="card mt-3">
                  <div className="card-body text-center">
                    <Image src={medal} height={32} width={32} />
                    <h3>Experience</h3>
                    <p>+4 Years as a Front-end Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-3">
                <div className="card">
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
        {/* about section end */}

        {/* skills section start */}
        <section className={`row ${styles.height}`}>
          <div className="col-lg-12 text-center mt-5">
            <small className="text-secondary">Here are My</small>
            <h2 className={styles.divider}>
              <span>Skills</span>
            </h2>
          </div>
          <div className="col-lg-12 ">
            <div className="row justify-content-around mb-5">
              <div className="col-lg-5 mt-5 d-flex flex-column justify-content-around">
                <h1 className="text-center">Front-End</h1>
                <div className="row m-1 px-0 py-2 d-flex justify-content-around">
                  <div className="text-center col-3 my-2 p-0 ">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={html}></Image>
                  </div>
                  <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={css}></Image>
                  </div>
                  <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={scss}></Image>
                  </div>
                  <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={js}></Image>
                  </div>
                </div>
                <div className="row m-1 px-0 py-2 d-flex justify-content-around">
                <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={typescript}></Image>
                  </div>
                  <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={react}></Image>
                  </div>
                  <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={next}></Image>
                  </div>
                  <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={bootstrap}></Image>
                  </div>
                </div>
                
                <div className="row m-1 px-2 py-2 d-flex justify-content-around">
                <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={tailwind}></Image>
                  </div>
                  <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={webpack}></Image>
                  </div>
                  <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={turbopack}></Image>
                  </div>
                  <div className="col-3 text-center my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={pwa}></Image>
                  </div>
                </div>
                
                {/* <div className="row m-1 px-2 py-2 d-flex">
                  <div className="col-3 text-center my-2 p-0">
                    <Image width={30} height={30} src={data}></Image>
                  </div>
                  <div className="col-3 text-center my-2 p-0">
                    <Image width={30} height={30} src={pwa}></Image>
                  </div>
                </div> */}

               
              </div>
              <div className="col-lg-5 mt-5">
                <h1 className="text-center">Back-End</h1>
                <div className="row m-1 px-0 py-2 justify-content-around">
                  <div className="text-center col-3 p-0 my-2">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={nodejs}></Image>
                  </div>
                  <div className="text-center col-3 p-0 my-2">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={express}></Image>
                  </div>
                  <div className="text-center col-3 p-0 my-2">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={nest}></Image>
                  </div>
                  <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={rest}></Image>
                  </div>
                </div>
                <div className="row m-1 px-0 py-2 justify-content-around">
                  <div className="text-center col-3 mt-2">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={oop}></Image>
                  </div>
                  <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={typeorm}></Image>
                  </div>
                  <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={prisma}></Image>
                  </div>
                  <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={npm}></Image>
                  </div>
                </div>

                {/* <div className="row m-1 px-0 py-2 d-flex justify-content-around">
                  <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={pnpm}></Image>
                  </div>
                  <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={yarn}></Image>
                  </div>
                  <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={nvm}></Image>
                  </div>
                  <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={rest}></Image>
                  </div>
                </div> */}

                <div className="row m-1 px-0 py-2 d-flex">
                  <div className="text-center col-3 my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={graphql}></Image>
                  </div>
                  <div className="col-3 text-center my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={jwt}></Image>
                  </div>
                  <div className="col-3 text-center my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={sql}></Image>
                  </div>
                  <div className="col-3 text-center my-2 p-0">
                    <Image className="shadow rounded-circle p-1" width={60} height={60} src={postgre}></Image>
                  </div>
                  {/* <div className="col-lg-4 text-center my-2 p-0">
                    <Image width={30} height={30} src={mongo}></Image>
                    <small className="mt-1 d-block">Mongo DB</small>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* skills sectio end */}

        {/* portfolio section start */}
        {/* <section className={`row ${styles.height} my-3`}>
          <div className="col-lg-12 text-center">
            <small className="text-secondary">Explore My</small>
            <h2 className={styles.divider}>
              <span>Portfolio</span>
            </h2>
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
        </section> */}

        {/* portfolio section end */}
      </div>}
      {collapsed && <Portal>
        <CustomModal />
      </Portal>}
    </>
  );
};

export default MainPage;
