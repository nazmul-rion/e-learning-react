import React from 'react'
import DevIMG from '../../images/CategoriesIMG/development.png'
import CourseCard from '../CourseCard/CourseCard'
import CourseLists from '../Hooks/CourseLists'
const LatestCourse = () => {
    const [courses] = CourseLists();
    return (
        <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-4">
            {
                courses.slice(0, 4).map(course => <CourseCard
                    key={course.key}
                    course={course}
                >
                </CourseCard>)
            }
        </div>
    )
}

export default LatestCourse
