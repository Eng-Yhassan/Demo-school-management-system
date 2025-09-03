import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Document = () => {
  const [data, setData] = useState([]);

  const handleReadData = () => {
    axios.get("http://localhost:2222/read/document").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    handleReadData();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:2222/delete/document/${id}`).then(() => {
      alert("succes");
      handleReadData();
    })
  }

  return (
    <div className='ml-[300px]  pt-2'>
      <Link to="/AddDocument">
        <button className='bg-blue-500  text-white py-4 px-4 text-2xl rounded-lg my-6 '>Add New Document</button>
      </Link>
      <div className='flex justify-center items-center gap-8'>
        {data.map((item, index) => (
          <div key={index} className='bg-gray-600 w-52 h-48 py-2 px-2 relative'>
            <img
              className='w-52 h-44 rounded-lg'
              src={`http://localhost:2222/allDocuments/${item.document}`}
              alt="document"
            />
            <i onClick={(e) => handleDelete(item._id)} className='fa-solid fa-trash text-red-500 absolute top-3 text-3xl right-2  '></i>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Document
