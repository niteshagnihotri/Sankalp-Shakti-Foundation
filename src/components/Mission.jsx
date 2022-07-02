import team from '../images/team.jpg';
import history from '../images/history.jpg';
import mission from '../images/mission.jpg';
import {motion} from 'framer-motion';

export default function Mission() {
    return (

        <div className="w-100 flex py-10">
            <div className="w-72 md:w-8/12 mx-auto flex flex-col md:justify-between md:flex-row space-y-12 md:space-y-0 md:space-x-20" >
                
                <motion.div  initial={{ opacity:0}} whileInView={ { opacity:1} } transition={{ delay: 0.3, type: "tween", stiffness: 100 }} viewport={{ once: true }}   className="md:w-1/3 text-center  font-bold shadow-lg hover:shadow-slate-400">
                    <img src={team} alt="OUR TEAM - sankalp skhati foundation" className='w-full md:w-full md:h-56 object-cover mx-auto' />
                    <div className='px-5 py-5 space-y-5' >
                        <h1 className='text-2xl'>OUR TEAM</h1>
                        <p>Our amazing team of regulars and part-time volunteers are committed to helping others. We take our convictions and turn them into action. Think you would be a good fit? Get in touch for more information!</p>
                    </div>
                </motion.div>

                <motion.div  initial={{ opacity:0}} whileInView={ { opacity:1} } transition={{ delay: 0.3, type: "tween", stiffness: 100 }} viewport={{ once: true }}   className="md:w-1/3 text-center  font-bold shadow-lg hover:shadow-slate-400">
                    <img src={history} alt="OUR HISTORY - sankalp skhati foundation" className='w-full md:w-full md:h-56 object-cover mx-auto' />
                    <div className='px-5 py-5 space-y-5' >
                        <h1 className='text-2xl'>OUR HISTORY</h1>
                        <p>Seeing a need for energetic, nonprofit work in this area, we formed our organization to provide sensible solutions. We've consistently grown since then, all thanks to the helping hands of this amazing community!</p>
                    </div>
                </motion.div>

                <motion.div  initial={{ opacity:0}} whileInView={ { opacity:1} } transition={{ delay: 0.3, type: "tween", stiffness: 100 }} viewport={{ once: true }}   className="md:w-1/3 text-center  font-bold shadow-lg hover:shadow-slate-400">
                    <img src={mission} alt="OUR MISSION - sankalp skhati foundation" className='w-full md:w-full md:h-56 object-cover mx-auto' />
                    <div className='px-5 py-5 space-y-5' >
                        <h1 className='text-2xl'>OUR MISSION</h1>
                        <p>We focus on making the maximum positive effort for our community. Our members and volunteers provide the momentum that helps us affect change. Using data driven models, we provide solutions that make a long-lasting difference.</p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}