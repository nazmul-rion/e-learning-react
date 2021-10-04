import React from 'react'
import BannerImg from '../../images/banner-2.png'
const ContactUs = () => {
    return (
        <>
            <section className="contact-banner">
                <img src={BannerImg} className="img-fluid w-100" alt="..." />
            </section>
            <section className="container text-center my-5">
                <h1 className="fw-bold">Customer Support</h1>
                <p>If you've any issues while using Rouen please let us know by filling the rouen support form.</p>
            </section>
            <section className="container">
                <div className=" row row-cols-1 row-cols-lg-2">
                    <div className="col">
                        <h2>Having Issue ?</h2>
                        <p>Some of the most frequently asked questions from students are listed below with helpful answers from our Support team. If you need help with something not answered below, check out the Community. It's an active, helpful community of fellow Treehouse students. You can also visit our Knowledge Base, which has answers for many common questions about Treehouse.</p>
                        <p>If you don't find an answer below or on the Treehouse Forum, we'd love the opportunity to help you. You can get in touch with our Support team directly by clicking the button below.</p>
                    </div>
                    <div className="col">

                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">How can we help?</label>
                            <textarea className="form-control" cols="30" rows="10"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mb-3">Submit</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs
