import Link from "next/link";
import styles from './Footer.module.css'

const Footer = () => {
    return ( 
        <div>
            <footer className={`container-fluid ${styles.footer}`}>
            
            <section className="row h-100 align-items-center justify-content-center" >
                <div className="col-lg-6 h-100 d-flex justify-content-center">
                    <div className={`d-flex flex-column justify-content-center my-3 py-2 ${styles.width} ${styles.glass}`}>
                    <h1 className="text-center text-light">Mehrad Kahbazi</h1>
                    <p className="text-center d-block text-light">Front-End Developer</p>
                    </div>
                </div>
                <div className={`col-lg-6 h-100 ${styles.myborder} px-5 pt-0 d-flex flex-column justify-content-center`}>
                    <h2 className="text-light">Links</h2>
                    <ul className="p-0 ps-3">
                        <li className={`list-group-item my-3 ${styles.navItem}`}>
                            <Link className={styles.link} href='#'>Portfoli</Link>
                        </li>
                        <li className={`list-group-item my-3 ${styles.navItem}`}>
                            <Link className={styles.link} href='#'>My Experience</Link>
                        </li>
                        <li className={`list-group-item my-3 ${styles.navItem}`}>
                            <Link className={styles.link} href='#'>Achievments</Link>
                        </li>
                        {/* <li className="list-group-item my-3">
                            <Link className="btn btn-outline-dark" href='#'>Contact</Link>
                        </li> */}
                    </ul>
                </div>
                
            </section>
            {/* <section className="row align-items-end">
            <div className="col-lg-12 bg-black p-3">
                </div>
            </section> */}
            
        </footer>
        <small className="d-block text-center text-alight font-weight-lighter p-2" style={{backgroundColor: '#9A9A9C'}}>Copyright© 2024 Mehrad Kahbazi</small>

        </div>
     );
}

 
export default Footer;