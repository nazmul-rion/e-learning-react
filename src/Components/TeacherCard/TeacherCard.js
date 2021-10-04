import React from 'react'
import Rating from 'react-rating';

const TeacherCard = (props) => {
    const { instructor_name, instractor_image, description, total_student, review, rate, course } = props.teacher;
    return (
        <div className="col">
            <div className="custom-card bg-white mb-3" >
                <div className="row g-0">
                    <div className="col-md-3">
                        <div className="text-center">
                            <img src={instractor_image} className="img-fluid rounded-start p-3" alt="..." />
                        </div>
                    </div>
                    <div className="col-md-9 pe-2">
                        <div className="card-body">
                            <div>
                                <h4 className="card-title">{instructor_name}</h4>
                                <p className="card-text">{description}</p>
                                <Rating
                                    initialRating={rate}
                                    emptySymbol="far fa-star text-warning"
                                    fullSymbol="fas fa-star text-warning"
                                    readonly
                                /> <b>{rate}</b> ({review})

                                <p className="card-text">
                                    <small className="text-muted pe-3"><i className="fas fa-user-graduate"></i>Total Students: <span className="text-danger fw-bold">{total_student}</span></small>
                                    <small className="text-muted">
                                        <i className="fas fa-book"></i>Total Course {course}    </small></p>
                                <button className="btn btn-info fw-bold">View more </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherCard
