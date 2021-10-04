import { useEffect } from "react";
import { useState } from "react"

const TeacherList = () => {
    const [teachers, setteachers] = useState([]);
    useEffect(() => {
        fetch('./TeacherList.json')
            .then(res => res.json())
            .then(data => setteachers(data));
    }, []);
    return [teachers, setteachers];
}

export default TeacherList;