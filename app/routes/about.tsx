import AboutUs from "~/dobu-images/karate-punch.jpg"
export default function About() {

    return (
        <>
        <div className="bg-neutral-900 ">

            
        
        <div className="p-4">
            <h1 className="text-3xl text-white font-bold">
                About Us:</h1>
            <img src={AboutUs} alt="Class times" className="w-50 h-auto"/>
        </div>
        <div>
        <p className="text-white capitalize p-4 font-bold"> We are a martials Dojo that focuses on a variety of martial arts:</p>
        <p className="text-white capitalize p-2">-Karate</p>
        <p className="text-white capitalize p-2">-Jujitsu</p>
        <p className="text-white capitalize p-2">-Judo </p>
        <p className="text-white capitalize p-2">-Kick-Boxing</p>
        <p className="text-white capitalize p-2">-Boxing</p>
        </div>
     

<a href=" https://youtu.be/8wEWu5LHKSY">

        <p className="text-blue-600 p-4 underline">our exercises</p>
</a>


        <p className="text-white p-2">we prioritise on teaching our students how to defend them selves and how to only use our techniques in self defence</p>
        

        <h1 className="text-white p-4"> Contact us:</h1>
       
        </div>
        </>
    )
}