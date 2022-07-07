import w1 from '../images/main2.jpg';
import w2 from '../images/work2.jpeg';
import w3 from '../images/work3.jpg';
import w4 from '../images/work4.jpg';
import {motion} from 'framer-motion';

export default function Work() {
    return (

        <div className="py-20 pb-24">
            <div className="md:w-9/12 md:mx-auto m-auto px-6 text-gray-800 font-bold text-justify md:px-12 xl:px-6">
                <div className="mb-12 space-y-5 text-center">
                    <motion.h1 initial={{y: 20, opacity:0}} whileInView={ {y: 0, opacity:1} } transition={{ delay: 0.3 }} className="text-4xl text-slate-800 md:text-4xl pb-3 font-QuickSand font-bold px-10 md:px-0">Our Works</motion.h1>
                </div>
                <div className="space-y-10 mx-5">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <motion.div initial={{y: 10, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{ delay: 0.3, type: "tween", stiffness: 100 }} viewport={{ once: true }} className="p-1 rounded-xl group md:h-56 sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src={w1} alt="sankalp shakti foundation" loading="lazy" 
                                className="h-56 sm:h-full w-full sm:w-5/12 object-cover rounded-lg transition duration-500 group-hover:rounded-xl hover:scale-105" />
                            <div className="sm:w-7/12 pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-semibold text-cyan-900">Clothes Donation Camp</h4>
                                        <p className="text-gray-800 font-bold ">Organized a cloth distribution camps in slums, orphanages and old age houses. We as an organization strongly feel about destitute and welfare for people</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ delay: 0.3, type: "tween", stiffness: 100 }} viewport={{ once: true }} className="p-1 rounded-xl group md:h-56 sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src={w2} alt="sankalp shakti foundation" loading="lazy" 
                                className="h-56 sm:h-full w-full sm:w-5/12 object-fill rounded-lg transition duration-500 group-hover:rounded-xl hover:scale-105" />
                            <div className="sm:w-7/12 pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-semibold text-cyan-900">Republic Day Celebration</h4>
                                        <p className="text-gray-800 font-bold ">Successfully organized 69th Republic Day in Nand Nagri, Delhi with Honourable chief guest as Shri Rajendra Paal Gautam Ji (Ministry of Social Welfare). </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-2">
                        <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ delay: 0.3, type: "tween", stiffness: 100 }} viewport={{ once: true }} className="p-1 rounded-xl group md:h-56 sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src={w3} alt="sankalp shakti foundation" loading="lazy" 
                                className="h-56 sm:h-full w-full sm:w-5/12 object-fill rounded-lg transition duration-500 group-hover:rounded-xl hover:scale-105" />
                            <div className="sm:w-7/12 pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-semibold text-cyan-900">Women Special</h4>
                                        <p className="text-gray-800 font-bold ">Organised a Women Special awareness camp in order to increase awareness of the problems encountered by women in their personal and professional lives</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ delay: 0.3, type: "tween", stiffness: 100 }} viewport={{ once: true }} className="p-1 rounded-xl group md:h-56 sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src={w4} alt="sankalp shakti foundation" loading="lazy" 
                                className="h-56 sm:h-full w-full sm:w-5/12 object-fill rounded-lg transition duration-500 group-hover:rounded-xl hover:scale-105" />
                            <div className="sm:w-7/12 pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-semibold text-cyan-900">Flood Victims Aid </h4>
                                        <p className="text-gray-800 font-bold ">Organized a Flood Victims Aid Campaign on 25/08/2017 supported by Government of Bihar to provide aid support to the Flood Victims.  </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}