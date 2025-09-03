import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddDocument = () => {

    const [document,setDocument] = useState("");

    const formData = new FormData();
    const navigate = useNavigate()

    formData.append("newDoc",document);

    const handleCreateData = () => {
        axios.post("http://localhost:2222/create/document", formData).then(() => {
            alert("Success");
            navigate("/document")
        })
    }

  return (
    <div className='ml-[300px]  pt-2'>
        <form onSubmit={(e) => e.preventDefault()} className='bg-blue-500 w-[300px] h-[200px] p-10'>
            <input onChange={(e) => setDocument(e.target.files[0])} type="file"  /> <br /> <br />
            <button onClick={handleCreateData} className='bg-white px-12 py-2 text-2xl text-blue-500'>send</button>
        </form>
    </div>
  )
}

export default AddDocument