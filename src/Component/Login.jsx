import React, { useState } from 'react'; 
import { update } from '../redux/useSlice';
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {   
    const [name, setname] = useState("")
    const [role, setrole] = useState("")
    const [type, settype] = useState("") 


    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user)
    
    // dispatch function onclick of button
    const func = (e)=>{
        e.preventDefault(); 
        dispatch(update({name,role,type})) 
    }

    return (
        <div className='pt-[10vh] h-[100vh] justify-center flex m-auto'>
            <form className="w-[95%] sm:w-[70%] lg:w-[50%] bg-blue-50 flex flex-col justify-center items-center m-auto space-y-3 p-[20px]" action="">
                <label htmlFor="">Enter Your Name</label>
                <input type="text" onChange={(e)=>{setname(e.target.value)}} placeholder="John" className="text-center border-2 border-black w-[80%] p-[10px] rounded-3xl justify-center outline-none"/>
                <label htmlFor="">Enter Your Role </label>
                <input type="text" onChange={(e)=>{setrole(e.target.value)}} placeholder="Front end Dev" className="text-center border-2 border-black w-[80%] p-[10px] rounded-3xl justify-center outline-none "/>
                <label htmlFor="">Enter Job Type </label>
                <input type="text" onChange={(e)=>{settype(e.target.value)}} placeholder="Intern" className="text-center border-2 border-black w-[80%] p-[10px] rounded-3xl justify-center outline-none"/>

                <button onClick={func} className='bg-blue-500 px-[50px] rounded-3xl py-[10px]'>Submit</button>
            </form> 
        </div>
         
    );
}

export default Login;
