import React from 'react';

interface RoleProps {
  text: string;
  image: string;
}

const Role: React.FC<RoleProps> = ({ text, image }) => {
  return (
    <div className="flex flex-col bg-[#F5F7FA] p-2 rounded-md w-28 items-center cursor-pointer border-2 border-transparent hover:border-riseblue-0 mb-2">
        <img src={image} alt="" className='w-8 h-8' />
        <p className='text-center'>{text}</p>

      
    </div>
  );
};

export default Role;
