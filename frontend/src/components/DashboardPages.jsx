import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPages = () => {
    return (
        <div className='bg-blue-500 w-[290px] h-screen fixed'>

            <div className='flex flex-col justify-center items-center text-3xl p-10'>
                <ul className=' mt-10 text-white font-semibold'>
                    <li className='mt-10'> <i className="fa-solid fa-box"></i> Dashboard</li>

                    <Link to="/student">
                        <li className='mt-10'> <i className="fa-solid fa-user"></i> Student</li>
                    </Link>
                    <Link to="/teacher">
                        <li className='mt-10'> <i className="fa-solid fa-chalkboard-user"></i> Teacher</li>
                    </Link>
                    <Link to="/document">
                        <li className='mt-10'><i className="fa-solid fa-folder-open"></i> Document</li>
                    </Link>
                    <li className='mt-10'><i className="fa-solid fa-right-from-bracket"></i> Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default DashboardPages