import Link from "next/link";
import styles from './Footer.module.css'

const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <footer className={`container-fluid ${styles.blur}`}>
            
            <section className="row align-items-center justify-content-center" >
                <div className="col-lg-4 d-flex flex-column justify-content-center h-100">
                    <h1 className="text-center">Mehrad Kahbazi</h1>
                    <p className="text-center d-block">Front-End Developer</p>
                </div>
                <div className="col-lg-8 border-start p-5">
                    <h2>Links</h2>
                    <ul className="p-0">
                        <li className="list-group-item my-3">
                            <Link className="btn btn-outline-dark" href='#'>Portfoli</Link>
                        </li>
                        <li className="list-group-item my-3">
                            <Link className="btn btn-outline-dark" href='#'>My Experiende</Link>
                        </li>
                        <li className="list-group-item my-3">
                            <Link className="btn btn-outline-dark" href='#'>Achievments</Link>
                        </li>
                        <li className="list-group-item my-3">
                            <Link className="btn btn-outline-dark" href='#'>Contact</Link>
                        </li>
                    </ul>
                </div>
                
            </section>
            <section className="row align-items-end">
            <div className="col-lg-12 bg-black p-3">
                    <small className="d-block text-center text-light font-weight-lighter">All Rights reserved by Mehrad Kahbazi® 2024</small>
                </div>
            </section>
            
        </footer>
        </div>
     );
}
 
export default Footer;