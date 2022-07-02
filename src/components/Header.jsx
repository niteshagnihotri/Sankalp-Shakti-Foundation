import React, { useState, useEffect } from 'react';
import logo from '../images/logo.jpg';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';

export default function Header() {
    const [scroll, setScroll] = useState(false);
    const [showNav, setshowNav] = useState(false);
    const [navstyle, setNavStyle] = useState(false);


    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 700);
      });
    }, []); 
    
  var url = useLocation();

  useEffect(() => {
    let pathName = url.pathname.toString();
    if (pathName === "/") {
      setNavStyle(false)
    }
    else {
      setNavStyle(true)
    }
  }, [url.pathname]);

    return (

        <div className={
            ((scroll || navstyle) ? "sticky w-100 top-0 bg-slate-50 text-black px-3 md:py-2" :  
            "absolute top-0 bottom-0 p-3")+ " w-full drop-shadow-lg shadow-green-400 z-50 "
        }>
            
            <div className="w-100">
                <div className="md:w-9/12  md:mx-auto md:flex space-y-4 md:space-y-0 items-center align-middle  py-2 md:py-0 pb-3 md:pb-0">
                    <div className="w-full  md:flex items-center justify-between ">
                        <div className="flex items-center justify-between ">
                            <Link to="/" onClick={()=>window.scrollTo(0,0)}><img className="w-20 p-0 m-0 lg1:ml-5 cursor-pointer" src={logo} alt="sankalp shakti foundation" /></Link>
                            {
                                showNav ?
                                    <GrClose onClick={() => { setshowNav(!showNav) }} className={(scroll || navstyle ? "text-black" : "text-white")+ ' md:hidden block w-10 h-auto p-2 mr-3 cursor-pointer'} />
                                    :
                                    <HiOutlineMenuAlt3 onClick={() => { setshowNav(!showNav) }} className={(scroll || navstyle ? "text-black" : "text-white")+ '  md:hidden block w-10 h-auto p-2 mr-3 cursor-pointer'} />
                            }
                        </div>
                        <div className={'px-5 space-y-3 font-Karla'}>
                            <h3 className={(scroll || navstyle ? "text-black font-semibold" : "text-white")+ ' hidden md:block  text-right cursor-pointer hover:underline text-sm'} onClick={() => window.location = 'tel:+919990495523'}>Call Now : +919990495523, +919990495523</h3>
                            <ul className={(showNav ? "visible" : "hidden") + "  md:static md:flex md:items-center md:space-x-10 space-y-5 md:space-y-0 text-center md:text-left text-[1em] transition-all"}>
                                <li><Link onClick={() => { window.scrollTo(0, 0); setshowNav(!showNav) }} to="/" className={(scroll || navstyle ? "text-slate-700 font-semibold hover:text-orange-500" : "text-white hover:underline ")+ ' cursor-pointer '}>Home</Link></li>
                                <li><Link onClick={() => { window.scrollTo(0, 0); setshowNav(!showNav) }} to="/about" className={(scroll || navstyle ? "text-slate-700 font-semibold hover:text-orange-500" : "text-white hover:underline ")+ ' cursor-pointer '}>About</Link></li>
                                <li><Link onClick={() => { window.scrollTo(0, 0); setshowNav(!showNav) }} to="/services" className={(scroll || navstyle ? "text-slate-700 font-semibold hover:text-orange-500" : "text-white hover:underline ")+ ' cursor-pointer '}>Services</Link></li>
                                <li><Link onClick={() => { window.scrollTo(0, 0); setshowNav(!showNav) }} to="/events" className={(scroll || navstyle ? "text-slate-700 font-semibold hover:text-orange-500" : "text-white hover:underline ")+ ' cursor-pointer '}>Events</Link></li>
                                <li><Link onClick={() => { window.scrollTo(0, 0); setshowNav(!showNav) }} to="/contact" className={(scroll || navstyle ? "text-slate-700 font-semibold hover:text-orange-500" : "text-white hover:underline ")+ ' cursor-pointer '}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}