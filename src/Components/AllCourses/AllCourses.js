import React from 'react'
import CourseLists from '../Hooks/CourseLists';
import AllCourseListCard from './AllCourseListCard';

const AllCourses = () => {
    const [courses] = CourseLists();
    return (
        <div className="row g-4 row-cols-1">
            {
                courses.map(course => <AllCourseListCard
                    key={course.key}
                    course={course}
                >
                </AllCourseListCard>)
            }
        </div>
    )
}

export default AllCourses
