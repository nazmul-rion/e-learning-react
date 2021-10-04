import React from 'react'
import TeacherList from '../Hooks/TeacherList';
import TeacherCard from '../TeacherCard/TeacherCard';

const Instractor = () => {
    const [teachers] = TeacherList();
    return (
        <div className="bg-custom-gradient">
            <div className="container">
                <h1>Our Instractors</h1>
                <div className="row g-4 row-cols-1">
                    {
                        teachers.map(teacher => <TeacherCard
                            key={teacher.key}
                            teacher={teacher}
                        >
                        </TeacherCard>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Instractor
