import React from 'react'
import './Home.css'
import Banner from './Banner'
const Home = () => {
    return (
        <div>
            <section className="container-fluid bg-custom-gradient">
                <div className="row align-items-center">
                    <Banner></Banner>
                </div>
            </section>
        </div>
    )
}

export default Home
