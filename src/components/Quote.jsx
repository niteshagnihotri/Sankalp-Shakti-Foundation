import React from "react";
import '../App.css';
import { motion } from "framer-motion";

export default function Quote(){
    return (
        <div>
            <div className="Qoute w-100 h-auto bg-slate-600 font-QuickSand font-bold text-3xl">
            <div className="py-4 h-auto lg:w-10/12 mx-auto">
                <div initial={{y: 2, opacity:0}} whileInView={ {y: 0, opacity:1} } transition={{ delay: 0.3, type: "tween", stiffness: 100 }} viewport={{ once: true }}   className="w-10/12 mx-auto bg-gray-100 bg-opacity-50 text-center flex flex-col items-center space-y-10 py-16 my-28 font-Raleway px-8">
                    <motion.h1 className="leading-10" initial={{y: 2, opacity:0}} whileInView={ {y: 0, opacity:1} } transition={{ delay: 0.3, type: "tween", stiffness: 100 }} viewport={{ once: true }}   >
                        Progressive. Professional. Personal.
                    </motion.h1>
                    <h4 className="text-2xl leading-10">Entrust us with your Appliance repair and you will not be dissapointed !</h4>
                    <button onClick={() => window.location = 'tel:+919990495523'} className="text-2xl bg-gradient-to-tr from-orange-500 to-yellow-500 hover:to-yellow-600 hover:shadow-md hover:shadow-yellow-800 text-red-50 px-4 py-1 shadow-lg rounded-lg">Join us</button>
                </div>
            </div>
        </div>
        </div>
    );
}