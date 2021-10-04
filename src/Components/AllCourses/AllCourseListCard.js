import React from 'react'
import Rating from 'react-rating';

const AllCourseListCard = (props) => {
    const { course_name, courseimg, instructor, rating, raters, price, description, total_houre, lecture } = props.course;
    return (
        <div className="col">
            <div class="custom-card bg-white mb-3" >
                <div class="row g-0">
                    <div class="col-md-3">
                        <div className="text-center">
                            <img src={courseimg} class="img-fluid rounded-start p-3" alt="..." />
                        </div>
                    </div>
                    <div class="col-md-9 pe-2">
                        <div class="card-body">
                            <div>
                                <h5 class="card-title">{course_name}</h5>
                                <p class="card-text">{description}</p>
                                <h6>By <span className="highlighted"> {instructor}</span></h6>
                                <Rating
                                    initialRating={rating}
                                    emptySymbol="far fa-star text-warning"
                                    fullSymbol="fas fa-star text-warning"
                                    readonly
                                /> <b>{rating}</b> ({raters})
                                <h5 className="fw-bold">$ <span className="text-danger">{price}</span></h5>
                                <p class="card-text"><small class="text-muted me-3"><i class="fas fa-hourglass-half"></i>{total_houre} total hours</small>
                                    <small class="text-muted">
                                        <i class="fas fa-book"></i>{lecture} Lectures</small></p>
                                <button className="btn btn-info fw-bold">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AllCourseListCard
