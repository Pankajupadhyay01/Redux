import React, { useState } from 'react';

const Home = () => {
    const [name, setname] = useState("");
    // const cname = (e)=>{
        // }
        const func = (e) => {
            e.preventDefault()
            a=input.target.value
            setname(a);
    }
    return (
        <div className='pt-[10vh]'>
            <form action="">
                <input type="text"/>
                <button type='submit' onClick={func}>submit</button>
            </form>
            {name}
        </div>
    );
}

export default Home;
