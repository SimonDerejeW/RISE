import React from 'react'
import HeaderUser from '../components/Userlist/HeaderUser'
import Sidebarreplace from '../components/Userlist/Sidebarreplace'
import UserCard from '../components/Userlist/UserCard'
import man from "../images/man.png"
import man2 from "../images/2.png"
import man3 from "../images/3.png"

const Userslist = () => {
  return (
    <>
        <HeaderUser/>
        <div className=' bg-[#E7E7E7] flex w-full h-screen'>
            <Sidebarreplace/>
            <div className='w-2/5 h-full'>
                <div className='m-2 flex align-middle justify-center w-full h-14 bg-white rounded-2xl'>
                    <input type="search" placeholder='search for article' className='pl-8 bg-[#D1E6FF] m-3 w-3/4 rounded-full' name="" id="" />
                </div>
                <div className='m-2 p-3 bg-white h-full overflow-y-scroll rounded-2xl'>
                    <UserCard src={man} firstname="Dr. Davis Rogers" profession="Medical legal counsel"/>
                    <UserCard src={man2} firstname="Dr. Davis Rogers" profession="Medical legal counsel"/>
                    <UserCard src={man3} firstname="Dr. Davis Rogers" profession="Medical legal counsel"/>
                    <UserCard src={man} firstname="Dr. Davis Rogers" profession="Medical legal counsel"/>
                    <UserCard src={man2} firstname="Dr. Davis Rogers" profession="Medical legal counsel"/>
                    <UserCard src={man3} firstname="Dr. Davis Rogers" profession="Medical legal counsel"/>
                    <UserCard src={man} firstname="Dr. Davis Rogers" profession="Medical legal counsel"/>
                    <UserCard src={man2} firstname="Dr. Davis Rogers" profession="Medical legal counsel"/>
                    <UserCard src={man} firstname="Dr. Davis Rogers" profession="Medical legal counsel"/>
                </div>
            </div>
            <div className='bg-white w-full h-screen rounded-2xl m-2'>

            </div>
            
        </div>
    </>
  )
}

export default Userslist