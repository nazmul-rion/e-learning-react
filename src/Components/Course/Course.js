import React from 'react'
import AllCourses from '../AllCourses/AllCourses'
import Banner from '../Home/Banner'

const Course = () => {
    return (
        <div className="bg-custom-gradient">
            <div className="container row align-items-center justify-content-around">
                <div className="col">
                    <h1 className="fw-bold">Courses</h1>
                </div>
                <div className="col">
                    <form class="d-flex ">
                        <input class="form-control me-2" type="search" placeholder="Search Your Favourite Courses" aria-label="Search" />
                        <button class="btn btn-outline-dark fw-bold" type="submit">Search</button>
                    </form>
                </div>
            </div>

            <section className="container my-5">
                <h2 className="mb-3">All Courses</h2>
                <AllCourses></AllCourses>
            </section>
        </div>
    )
}

export default Course
