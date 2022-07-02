import {motion} from 'framer-motion';

export default function About() {
    return (
        <div className="w-100 font-semibold pb-10">
            <div className="md:w-9/12 md:mx-auto">
                <motion.h1 initial={{y: 10, opacity:0}} whileInView={ {y: 0, opacity:1} } transition={{ delay: 0.3 }} viewport={{ once: true }} className="text-center font-bold text-4xl py-10">About Us</motion.h1>
                <div>
                    <motion.h3 initial={{y: 10, opacity:0}} whileInView={ {y:0, opacity:1} } transition={{ delay: 0.3 }} viewport={{ once: true }} className="leading-loose px-8 tracking-wider text-xl md:text-lg text-justify">
                        <span className="text-orange-500 font-bold font-Karla text-2xl ">Sankalp Shakti Foundation </span>  
                        is a social organization registered in the capital Delhi (All Over India) whose basic objective is to 
                        rise above caste, religion, colour, place, language etc. to improve the standard of living of the 
                        common people, thereby building a powerful and self-reliant society. To be. At present, the 
                        organization's H Office & Community Help Center is located in Nand Nagri, Delhi, the working area 
                        of ​​the organization is all over India including Delhi, Noida, Gurugram, Ghaziabad, Hapur, Meerut etc.
                    </motion.h3>
                </div>
            </div>
        </div>
    );
}