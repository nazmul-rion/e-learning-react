import { useEffect } from "react";
import { useState } from "react"

const CourseLists = () => {
    const [courses, setcourses] = useState([]);
    useEffect(() => {
        fetch('./CourseList.json')
            .then(res => res.json())
            .then(data => setcourses(data));
    }, []);
    return [courses, setcourses];
}

export default CourseLists;