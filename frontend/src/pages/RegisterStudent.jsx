import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterStudent = () => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [address, setAdress] = useState("");
    const [className, setClassName] = useState("");
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");


    const navigate = useNavigate()
     
    const handleCreateData = () => {
        axios.post("http://localhost:2222/create/student" , {
            "id":id,
            "name":name,
            "address":address,
            "className":className,
            "gender":gender,
            "status":status,
            "date":date
        }).then(() => {
            alert("Thanks You Created New Student");
            navigate("/student")
        })
    }

  return (
        <div  className='flex justify-center items-center h-screen'>
            <form onSubmit={(e) => e.preventDefault()} className='bg-blue-500 w-[600px] h-[500px] px-16 py-8'>
                <input value={id} onChange={(e)=> setId(e.target.value)} className='pl-2 outline-none w-[400px] h-8' type="number" placeholder='Enter  id' /> <br /> <br />
                <input  value={name} onChange={(e)=> setName(e.target.value)} className='pl-2 outline-none w-[400px] h-8' type="text" placeholder='Enter  Name' /> <br /> <br />
                <input value={address} onChange={(e)=> setAdress(e.target.value)} className='pl-2 outline-none w-[400px] h-8' type="text" placeholder='Enter  Address' /> <br /> <br />
                <input  value={className} onChange={(e)=> setClassName(e.target.value)} className='pl-2 outline-none w-[400px] h-8' type="text" placeholder='Enter  ClassName' /> <br /> <br />
                <select  value={gender} onChange={(e)=> setGender(e.target.value)} className='w-[400px] h-8 outline-none'>
                    <option value="">Choose Your Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select> <br /> <br />
                <select  value={status} onChange={(e)=> setStatus(e.target.value)} className='w-[400px] h-8 outline-none'>
                    <option value="">Choose Status</option>
                    <option value="Active">Active</option>
                    <option value="Graduated">Graduated</option>
                </select> <br /> <br />
                <input value={date} onChange={(e) => setDate(e.target.value)} className='pl-2 outline-none w-[400px] h-8' type="text" placeholder='Enter date' /> <br /> <br />
                <button onClick={handleCreateData} type='submit' className='bg-white text-3xl w-[400px] py-2'>Regiter</button>
            </form>
        </div>
    )
}

export default RegisterStudent