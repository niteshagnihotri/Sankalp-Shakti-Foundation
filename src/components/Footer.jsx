import React from "react";
import img from '../images/logo.jpg';
import { Link } from 'react-router-dom';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { IoMdCall } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';

export default function Footer() {

    return (

        <div className="w-100 h-100 bg-gray-800 pb-20 py-8 md:pb-3 md:py-8 text-white font-SourceSans px-5 text-sm">
            <div className="md:w-9/12 md:mx-auto mx-3 sm:mx-5 pt-10 md:flex md:flex-row md:justify-between space-y-3 md:space-y-0">

                <div className="flex flex-col w-fit h-auto sm:w-80 leading-loose">
                    <img src={img} alt="sankalp Shakti Foundation" width={80} loading='lazy' className="bg-white p-0 m-0 lg1:ml-5" />
                    <p className="mt-4">
                        Sankalp Shakti Foundation is a social organization registered in the capital Delhi (All Over India) whose basic objective is to
                        rise above caste, religion, colour, place, language etc. to improve the standard of living of the
                        common people, thereby building a powerful and self-reliant society. The working area
                        of ​​the organization is all over India including Delhi, Noida, Gurugram, Ghaziabad, Hapur, Meerut etc
                    </p>
                </div>

                <div className="flex flex-col space-y-8 lg:px-5 pt-10">
                    <h1 className="text-xl font-bold font-Mont translate-0 md:-translate-x-5">Quick links</h1>
                    <ul className="space-y-6 pl-5 list-disc" >
                        <li><Link onClick={() => { window.scrollTo(0, 0)}} className="cursor-pointer hover:text-green-500 text-lg" to="/">Home</Link></li>
                        <li><Link onClick={() => { window.scrollTo(0, 0)}} className="cursor-pointer hover:text-green-500 text-lg" to="/about">About</Link></li>
                        <li><Link onClick={() => { window.scrollTo(0, 0)}} className="cursor-pointer hover:text-green-500 text-lg" to="/service">Services</Link></li>
                        <li><Link onClick={() => { window.scrollTo(0, 0)}} className="cursor-pointer hover:text-green-500 text-lg" to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col space-y-8 md:flex md:flex-col text-lg py-10">
                    <h1 className='text-xl font-bold font-Mont '>Reach us</h1>

                    <div className='flex items-center'>
                        <HiOutlineOfficeBuilding className='text-xl mr-5 text-green-700' />
                        <h1 className="md:flex items-center ">
                            Address : H-21 karolbagh, Delhi
                        </h1>
                    </div>

                    <div className='flex items-center'>
                        <IoMdCall className='text-xl mr-5 text-green-700' />
                        <h1 className="md:flex items-center ">
                            Call : <span className="cursor-pointer" onClick={() => window.location = 'tel:+919343210457'}>+919343210457 / +919343210457</span>
                        </h1>
                    </div>

                    <div className='flex items-center'>
                        <IoMdMail className='text-xl mr-5 text-green-700' />
                        <h1 className="md:flex items-center ">
                            Email : <span className="cursor-pointer" onClick={() => window.location = 'mailto:bhopaltechnician@gmail.com'}>bhopaltechnician@gmail.com</span>
                        </h1>
                    </div>

                </div>

            </div>
            <div className="md:w-9/12 md:mx-auto px-2 mt-10 text-slate-300 text-center text-sm md:leading-10 leading-6">
                Copyright © Sankalp Shakti Foundation 2022. All right reserved. Designed & Developed by <Link to="//niteshagnihotri.netlify.app/" className="no-underline text-slate-300 font-semibold">Nitesh Agnihotri</Link>
            </div>
        </div>

    );
}
