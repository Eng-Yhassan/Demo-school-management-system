import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterTeacher = () => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [address, setAdress] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [salary, setSalary] = useState("");
    const [date, setDate] = useState("");


    const navigate = useNavigate()
     
    const handleCreateData = () => {
        axios.post("http://localhost:2222/create/teacher" , {
            "id":id,
            "name":name,
            "address":address,
            "email":email,
            "gender":gender,
            "salary":salary,
            "date":date
        }).then(() => {
            alert("Thanks You Created New Teacher");
            navigate("/teacher")
        })
    }

  return (
        <div  className='flex justify-center items-center h-screen'>
            <form onSubmit={(e) => e.preventDefault()} className='bg-blue-500 w-[600px] h-[500px] px-16 py-8'>
                <input value={id} onChange={(e)=> setId(e.target.value)} className='pl-2 outline-none w-[400px] h-8' type="number" placeholder='Enter  id' /> <br /> <br />
                <input  value={name} onChange={(e)=> setName(e.target.value)} className='pl-2 outline-none w-[400px] h-8' type="text" placeholder='Enter  Name' /> <br /> <br />
                <input value={address} onChange={(e)=> setAdress(e.target.value)} className='pl-2 outline-none w-[400px] h-8' type="text" placeholder='Enter  Address' /> <br /> <br />
                <input  value={email} onChange={(e)=> setEmail(e.target.value)} className='pl-2 outline-none w-[400px] h-8' type="text" placeholder='Enter  Email' /> <br /> <br />
                <select  value={gender} onChange={(e)=> setGender(e.target.value)} className='w-[400px] h-8 outline-none'>
                    <option value="">Choose Your Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select> <br /> <br />
                <input value={salary} onChange={(e)=> setSalary(e.target.value)} type='number' className='w-[400px] h-8 outline-none' placeholder='Enter Salary' /> 
                    <br /> <br />
                <input value={date} onChange={(e) => setDate(e.target.value)} className='pl-2 outline-none w-[400px] h-8' type="text" placeholder='Enter date' /> <br /> <br />
                <button onClick={handleCreateData} type='submit' className='bg-white text-3xl w-[400px] py-2'>Regiter</button>
            </form>
        </div>
    )
}

export default RegisterTeacher