import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="container-fluid bg-highlighted">


            <footer
                className="text-center text-lg-start text-white"

            >

                <section className="text-center p-4">
                    <div>
                        <span>Get connected with us </span>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/nazmulrion1/" target="_blank" rel="noreferrer" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/nazmul-rion/" target="_blank" rel="noreferrer" className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/nazmul-rion/" target="_blank" rel="noreferrer" className="text-white me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">E Learning</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"

                                />
                                <p>
                                    The sooner you get behind in your work, the more time you have to catch up.
                                </p>
                            </div>


                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Courses</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"

                                />
                                <p>
                                    <Link to="/course" className="text-white text-decoration-none">Bootstrap</Link>
                                </p>
                                <p>
                                    <Link to="/course" className="text-white text-decoration-none">Mongo DB</Link>
                                </p>
                                <p>
                                    <Link to="/course" className="text-white text-decoration-none">PHP</Link>
                                </p>
                                <p>
                                    <Link to="/course" className="text-white text-decoration-none">Firebase</Link>
                                </p>
                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"

                                />
                                <p>
                                    <Link to="/" className="text-white text-decoration-none">Your Account</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-white text-decoration-none">Your Purchase</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-white text-decoration-none">Leader Board</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-white text-decoration-none">Help</Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold">Contact Us</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"

                                />
                                <p><i className="fas fa-envelope mr-3"></i> nazmulrion16@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> +8801611269298</p>
                                <p><i className="fas fa-print mr-3"></i> + 21 555 666</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-3">
                    <small> &copy; 2021 Copyright <span className="fw-bold">Nazmul Rion</span></small>
                </div>

            </footer>


        </div>

    )
}

export default Footer
