import React from 'react'
import AllCourses from '../AllCourses/AllCourses'

const Course = () => {
    return (
        <div className="bg-custom-gradient">

            <section className="container ">
                <div className="row row-cols-1 row-cols-md-2 align-items-center justify-content-around">
                    <div className="col">
                        <h1 className="fw-bold">Courses</h1>
                    </div>
                    <div className="col">
                        <form className="d-flex ">
                            <input className="form-control me-2" type="search" placeholder="Search Your Favourite Courses" aria-label="Search" />
                            <button className="btn btn-outline-dark fw-bold" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <h2 className="mb-3">All Courses</h2>
                <AllCourses></AllCourses>
            </section>
        </div>
    )
}

export default Course
