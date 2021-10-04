import React from 'react'
import './Home.css'
import Banner from './Banner'
import LatestCourse from '../Latest-Course/LatestCourse'
const Home = () => {
    return (
        <div>
            <section className="container-fluid bg-custom-gradient">
                <div className="row align-items-center">
                    <Banner></Banner>
                </div>
            </section>
            <section className="container my-5">
                <h2 className="mb-3">Latest Courses</h2>
                <LatestCourse></LatestCourse>
            </section>
        </div>
    )
}

export default Home
