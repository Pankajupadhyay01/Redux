import React, { useState } from 'react';

const Login = () => {
    const [role, setrole] = useState("")
    const [type, settype] = useState("")
    const [code, setcode] = useState("")
    
 
    return (
        <div className='pt-[10vh] h-[100vh] justify-center flex m-auto'>
            <form className="w-[95%] sm:w-[70%] lg:w-[50%] bg-blue-50 flex flex-col justify-center items-center m-auto space-y-3 p-[20px]" action="">
                <label htmlFor="">Enter You Job Role</label>
                <input type="text" onChange={(e)=>{setrole(e.target.value)}} placeholder="Front End Devlopment" className="text-center border-2 border-black w-[80%] p-[10px] rounded-3xl justify-center outline-none"/>
                <label htmlFor="">Enter Job Type</label>
                <input type="text" onChange={(e)=>{settype(e.target.value)}} placeholder="Intern" className="text-center border-2 border-black w-[80%] p-[10px] rounded-3xl justify-center outline-none "/>
                <label htmlFor="">Enter Your Team Code </label>
                <input type="text" onChange={(e)=>{setcode(e.target.value)}} placeholder="TB1020" className="text-center border-2 border-black w-[80%] p-[10px] rounded-3xl justify-center outline-none"/>

                <button className='bg-blue-500 px-[50px] rounded-3xl py-[10px]'>Submit</button>
            </form>
        </div>

         
    );
}

export default Login;
