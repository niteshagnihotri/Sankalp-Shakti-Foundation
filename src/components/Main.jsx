import React from "react";
import '../App.css';
import 'tw-elements';
import img_url from '../images/mainbg.jpg';
import { motion } from "framer-motion";

export default function Main() {

    return (
        <div className="relative scroll-smooth">
            <div>
                <img src={img_url} alt="" loading="lazy" width={100} height={100} className=" object-cover md:object-fill min-w-full h-[100vh] brightness-50" />
            </div>
            <motion.div initial={{y: 20, opacity:0}} whileInView={ {y: 0, opacity:1} } transition={{ delay: 0.3, type: "tween", stiffness: 100 }} viewport={{ once: true }} className="absolute right-0 left-0 bottom-0 top-[40%] text-center space-y-5 md:space-y-10 my-auto text-white font-bold z-50">
                <h5 className="text-4xl md:text-5xl tracking-widest leading-loose px-2 ">SANKALP SHAKTI FOUNDATION</h5>
                <button onClick={()=>window.scrollBy(0, 700)} className="shadow-sm shadow-orange-600 rounded-3xl cursor-pointer px-6 py-1 text-xl bg-gradient-to-tr from-orange-700 to-yellow-500 hover:from-orange-800 hover:shadow-orange-800 hover:to-yellow-600 ">Join Us</button>
            </motion.div>
        </div>

    );
}