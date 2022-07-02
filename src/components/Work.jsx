import w1 from '../images/main2.jpg';
import w2 from '../images/work2.jpg';
import w3 from '../images/work3.jpg';
import w4 from '../images/work4.jpg';
import {motion} from 'framer-motion';

export default function Work() {
    return (

        <div className="py-20 pb-24">
            <div className="md:w-9/12 md:mx-auto m-auto px-6 text-gray-800 font-bold md:px-12 xl:px-6">
                <div className="mb-12 space-y-5 text-center">
                    <motion.h1 initial={{y: 20, opacity:0}} whileInView={ {y: 0, opacity:1} } transition={{ delay: 0.3 }} className="text-4xl text-slate-800 md:text-4xl pb-3 font-QuickSand font-bold px-10 md:px-0">Our Works</motion.h1>
                </div>
                <div className="space-y-10 mx-5">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ delay: 0.3, type: "tween", stiffness: 100 }} viewport={{ once: true }} className="p-1 rounded-xl group md:h-56 sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src={w1} alt="sankalp shakti foundation" loading="lazy" 
                                className="h-56 sm:h-full w-full sm:w-5/12 object-cover rounded-lg transition duration-500 group-hover:rounded-xl hover:scale-105" />
                            <div className="sm:w-7/12 pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-semibold text-cyan-900">Clothes Donation Camp</h4>
                                        <p className="text-gray-800 font-bold">We are known for our efficient and reliable AC repair and maintenance services. Our costs are economical, and services are second to none. </p>
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
                                        <p className="text-gray-800 font-bold">Successfully organized 69th Republic Day in Nand Nagri, Delhi with Honourable chief guest as Shri Rajendra Paal Gautam Ji (Ministry of Social Welfare). </p>
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
                                        <p className="text-gray-800 font-bold">We can repair any washing machine of any brand and can troubleshoot a wide range of technical issues. </p>
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
                                        <h4 className="text-xl font-semibold text-cyan-900">Flood Vicitims Aid </h4>
                                        <p className="text-gray-800 font-bold">If you face any problem related to your water purifiers or it is not working at all or it is unable to heat food, then you can call us. </p>
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