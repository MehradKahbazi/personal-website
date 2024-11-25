const Footer = () => {
    return ( 
        <footer className="container-fluid bg-secondary" style={{height: '35vh'}}>
            <section className="row h-50">
                sample
            </section>
            <section className="row h-50 align-items-end justify-content-center">
                <div className="col-lg-11 border-top h-100 d-flex flex-column justify-content-center">
                    <h1 className="text-center">Mehrad Kahbazi</h1>
                    <small className="text-light text-center d-block">Front-End Developer</small>
                </div>
            </section>
            <section className="row">
                <div className="col-12 bg-black">
                    <small className="d-block text-center">All Rights reserved by Mehrad Kahbazi® 2024</small>
                </div>
            </section>
        </footer>
     );
}
 
export default Footer;