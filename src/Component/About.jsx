import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
  const name =  useSelector((state) => state.user.name)
  return (
    <div className='pt-[10vh]'>
      {name}
    </div>
  );
}

export default About;
