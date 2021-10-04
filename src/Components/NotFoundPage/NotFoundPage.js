import React from 'react'
import './NotFoundPage.css'

import img from '../../images/page404.jpg'
import { Link } from 'react-router-dom'
const NotFoundPage = () => {
    return (
        <div className="not-found-page text-center">
            <div>
                <img className="img-fluid w-75" src={img} alt="" />
            </div>
            <div>
                <Link className="btn btn-primary" to="/">Back To Home</Link>
            </div>
        </div>
    )
}

export default NotFoundPage
