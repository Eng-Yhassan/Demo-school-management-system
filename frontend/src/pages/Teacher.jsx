import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

const Teacher = () => {

    const [data, setData] = useState([]);

    const handleReadData = () => {
        axios.get("http://localhost:2222/read/teacher").then((res) => {
            setData(res.data);
        });
    };

    useEffect(() => {
        handleReadData()
    }, []);

    const handleDelte = (id) => {
        axios.delete(`http://localhost:2222/delete/teacher/${id}`).then(()=>{
            alert("success")
            handleReadData();
        })

    }

    return (
        <div className='ml-[300px] pt-2'>
            <Link to="/RegisterTeacher">
                <button className='bg-blue-500  text-white py-4 px-4 text-2xl rounded-lg my-6 '>Register New Teacher</button>
            </Link>
            <table>
                <thead>
                    <tr className='bg-blue-500 text-white font-bold '>
                        <td className='px-4 py-4 text-[20px]'>Id</td>
                        <td className='px-4 py-4 text-[20px]'>Name</td>
                        <td className='px-4 py-4 text-[20px]'>Address</td>
                        <td className='px-4 py-4 text-[20px]'>Email</td>
                        <td className='px-4 py-4 text-[20px]'>Gender</td>
                        <td className='px-4 py-4 text-[20px]'>Status</td>
                        <td className='px-4 py-4 text-[20px]'>Date</td>
                        <td className='px-4 py-4 text-[20px]'>Action</td>

                    </tr>
                </thead>

                {
                    data.map((item, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <td className='px-4 py-4 text-[20px]'>{item.id}</td>
                                    <td className='px-4 py-4 text-[20px]'>{item.name}</td>
                                    <td className='px-4 py-4 text-[20px]'>{item.address}</td>
                                    <td className='px-4 py-4 text-[20px]'>{item.email}</td>
                                    <td className='px-4 py-4 text-[20px]'>{item.gender}</td>
                                    <td className='px-4 py-4 text-[20px]'>{item.salary}</td>
                                    <td className='px-4 py-4 text-[20px]'>{item.date}</td>
                                    <td className='px-4 py-4 text-[20px]'>
                                        <div className='space-x-4'>
                                            <Link to={`/updateTeacher/${item._id}`}>
                                                <i className='fa-solid fa-edit text-green-500'></i>
                                            </Link>
                                            <i onClick={() => handleDelte(item._id)} className='fa-solid fa-trash text-red-500'></i>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }

            </table>
        </div>
    )
}

export default Teacher