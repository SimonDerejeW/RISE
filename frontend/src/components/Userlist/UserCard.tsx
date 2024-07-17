import React from 'react'
interface Props {
    src: string;
    firstname: string
    profession: string
}

const UserCard = ({src, firstname, profession}: Props) => {
  return (
    <>
        <div className=' hover:bg-[#0373FF] space-x-6 flex align-middle justify-start w-full p-3 h-20 bg-white rounded-2xl'>
            <img className='ml-3 rounded-full' src={src} alt="" />
            <div className=' flex-col'>
                <h1 className=' font-bold'>{firstname}</h1>
                <h2 className=' text-sm'>{profession}</h2>
            </div>
        </div>
    </>
  )
}

export default UserCard