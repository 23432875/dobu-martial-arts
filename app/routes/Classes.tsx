import karateTimes from "~/dobu-images/karate-time.png"
import WhiteBelt from "~/dobu-images/whitebelt.jpg"
import YellowBelt from "~/dobu-images/yellowbelt.jpg"
import OrangeBelt from "~/dobu-images/orangebelt.jpg"
import GreenBelt from "~/dobu-images/greenbelt.png"
import BlueBelt from "~/dobu-images/bluebelt.jpg"
import PurpleBelt from "~/dobu-images/purplebelt.jpg"
import BrownBelt from "~/dobu-images/brownbelt.jpg"
import BlackBelt from "~/dobu-images/blackbelt.jpg"

export default function Classes() {
    return (
        <div className="bg-neutral-900">
            <main className="p-8">
            <h1 className="text-purple-600 text-3xl text-center font-bold mb-12 underline">
                Karate Classes
            </h1>

            <div className="p-4">
                <h1 className="text-white text-2xl text-center font-bold">Karate Times</h1>
                <img src={karateTimes} alt="Class times" className="w-96 h-auto mx-auto"/>
            </div>

            <h1 className="text-3xl text-purple-400"> Belts:</h1>

            <div className="flex">
                <div className="p-9">
                    <p className="text-purple-600 underline">White Belt:</p>
                    <img src={WhiteBelt} alt="White Belt" className="w-[611px] h-[161px]"/>
                    <p className="text-white">the white belt automaticly</p>
                </div>
                <div className="p-9">
                    <p className="text-purple-600 underline">Yellow Belt:</p>
                    <img src={YellowBelt} alt="Yellow Belt" className="w-[611px] h-[161px]"/>
                    <p className="text-white">the grading is every 6 months</p>
                </div>
                <div className="p-9">
                    <p className="text-purple-600 underline">Orange Belt:</p>
                    <img src={OrangeBelt} alt="Orange Belt" className="w-[611px] h-[161px]"/>
                    <p className="text-white">the grading is every 6 months</p>
                </div>
            </div>

            <div className="flex">
            <div className="p-9">
                    <p className="text-purple-600 underline">Green Belt:</p>
                    <img src={GreenBelt} alt="Green Belt" className="w-[611px] h-[161px]"/>
                    <p className="text-white">the grading is every 6 months</p>
                </div>
                <div className="p-9">
                    <p className="text-purple-600 underline">Blue Belt:</p>
                    <img src={BlueBelt} alt="Blue Belt" className="w-[611px] h-[161px]"/>
                    <p className="text-white">the grading is every 6 months</p>
                </div>
                <div className="p-9">
                    <p className="text-purple-600 underline">Purple Belt:</p>
                    <img src={PurpleBelt} alt="Purple Belt" className="w-[611px] h-[161px]"/>
                    <p className="text-white">the grading is every 6 months</p>
                </div>
            </div>
            
            <div className="flex max-w-5xl mx-auto">
                <div className="p-9">
                    <p className="text-purple-600 underline">Brown Belt:</p>
                    <img src={BrownBelt} alt="Brown Belt"/>
                    <p className="text-white">the grading is every 6 months and 3 belts</p>
                </div>
                <div className="p-9">
                    <p className="text-purple-600 underline">Black Belt:</p>
                    <img src={BlackBelt} alt="Black Belt"/>
                    <p className="text-white">need to get 10 Dans</p>
                </div>
            </div>

            </main>
        </div>
    )
}