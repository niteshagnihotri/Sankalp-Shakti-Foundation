
import Mission from "./Mission";
import Work from "./Work";

export default function ServicesPage() {
    return (
        <div>
            <div className="w-100 ">
                <div className="w-100 bg-gradient-to-br from-yellow-400 via-orange-600 to-pink-700">
                    <div className="md:w-8/12 md:mx-auto h-[15vh] flex items-center justify-center md:justify-start">
                        <h1 className="text-3xl text-green-50">Services</h1>
                    </div>
                </div>
                <Work/>
                <div className="mb-12 space-y-5 text-center">
                    <h1 className="text-4xl text-slate-800 md:text-4xl pb-3 font-QuickSand font-bold px-10 md:px-0">Our Mission</h1>
                </div>
                <Mission/>
            </div>
        
        </div>
    )
}