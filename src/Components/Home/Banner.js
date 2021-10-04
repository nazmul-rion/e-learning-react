import React from 'react'
import BannerImg1 from '../../images/banner-1.png'
const Banner = () => {
    return (
        <>
            <div className="col-lg-6 px-lg-5 px-3">
                <h1>
                    <span className="fw-bold highlighted">Bad code</span> isn't bad, its just misunderstood.</h1>
                <p>
                    If you're not failing every now and again, it's a sign you're not doing anything very innovative.</p>
                <form className="d-flex ">
                    <input className="form-control me-2" type="search" placeholder="Search Your Favourite Courses" aria-label="Search" />
                    <button className="btn btn-outline-dark fw-bold" type="submit">Search</button>
                </form>
            </div>
            <div className="col-lg-6 text-center">
                <img className="img-fluid" src={BannerImg1} alt="" />
            </div>
        </>
    )
}

export default Banner
