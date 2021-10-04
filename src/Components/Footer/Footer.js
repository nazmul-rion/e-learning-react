import React from 'react'

const Footer = () => {
    return (
        <div class="container-fluid bg-highlighted">


            <footer
                class="text-center text-lg-start text-white"

            >

                <section class="d-flex justify-content-between p-4">
                    <div class="me-5">
                        <span>Get connected with us </span>
                    </div>
                    <div>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>

                </section>

                <section class="">
                    <div class="container text-center text-md-start mt-5">

                        <div class="row mt-3">

                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold">E Learning</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"

                                />
                                <p>
                                    The sooner you get behind in your work, the more time you have to catch up.
                                </p>
                            </div>


                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold">Courses</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"

                                />
                                <p>
                                    <a href="#" class="text-white text-decoration-none">Bootstrap</a>
                                </p>
                                <p>
                                    <a href="#" class="text-white text-decoration-none">Mongo DB</a>
                                </p>
                                <p>
                                    <a href="#" class="text-white text-decoration-none">PHP</a>
                                </p>
                                <p>
                                    <a href="#" class="text-white text-decoration-none">Firebase</a>
                                </p>
                            </div>



                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold">Useful links</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"

                                />
                                <p>
                                    <a href="#!" class="text-white text-decoration-none">Your Account</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-white text-decoration-none">Your Purchase</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-white text-decoration-none">Leader Board</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-white text-decoration-none">Help</a>
                                </p>
                            </div>
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-bold">Contact Us</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"

                                />
                                <p><i class="fas fa-envelope mr-3"></i> nazmulrion16@gmail.com</p>
                                <p><i class="fas fa-phone mr-3"></i> +8801611269298</p>
                                <p><i class="fas fa-print mr-3"></i> + 21 555 666</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="text-center p-3">
                    <small> &copy; 2021 Copyright <span className="fw-bold">Nazmul Rion</span></small>
                </div>

            </footer>


        </div>

    )
}

export default Footer
