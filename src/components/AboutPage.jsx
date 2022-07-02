
import Mission from "./Mission";
import Work from "./Work";
import Quote from "./Quote";

export default function AboutPage() {
    return (
        <div>
            <div className="w-100 font-semibold" >
                <div className="w-100 bg-gradient-to-br from-yellow-400 via-orange-600 to-pink-700 ">
                    <div className="md:w-8/12 md:mx-auto h-[15vh] flex items-center justify-center md:justify-start">
                        <h1 className="text-3xl text-green-50 ">About</h1>
                    </div>
                </div>
                <div className="md:w-9/12 md:mx-auto py-6 px-6">
                    <h3 className="leading-loose md:px-8 tracking-wider text-xl md:text-lg text-justify">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 text-orange-500 font-bold font-Karla text-2xl ">Sankalp Shakti Foundation </span>
                        is a social organization registered in the capital Delhi (All Over India) whose basic objective is to
                        rise above caste, religion, colour, place, language etc. to improve the standard of living of the
                        common people, thereby building a powerful and self-reliant society. To be. At present, the
                        organization's H Office & Community Help Center is located in Nand Nagri, Delhi, the working area
                        of ​​the organization is all over India including Delhi, Noida, Gurugram, Ghaziabad, Hapur, Meerut etc.
                    </h3>
                </div>
            </div>
        
        <Mission />
        <Work />
        <Quote />
        
        </div>
    )
}