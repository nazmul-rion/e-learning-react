import React from 'react'

const CourseCard = (props) => {
    const { course_name, courseimg, teacherimg, instructor, rating, raters, price } = props.course;
    return (

        <div class="col">
            <div className="custom-card h-100">
                <img src={courseimg} class="card-img-top p-3" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{course_name}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img className="w-25 rounded-circle me-2" src={teacherimg} alt="" />
                            <h6 className="highlighted">{instructor}</h6>
                        </div>
                        <div>
                            <h6><i className="fas fa-star text-warning d-inline"></i>{rating}({raters})</h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center my-2">
                        <div>
                            <h5>${price}</h5>
                        </div>
                        <div>
                            <button className="btn btn-info fw-bold">Enroll Now</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default CourseCard
