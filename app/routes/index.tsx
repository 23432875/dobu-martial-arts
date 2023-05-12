import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Navbar from "~/components/navbar";
import karate from "~/assets/jpg/karate1.jpg";



import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => ({
  title: 'Welcome to DoBu Martial Arts',
  description: 'This will become a description of DoBu Martial Arts for search engines',
});

export default function Index() {
  const user = useOptionalUser();
  return (
    <>

    <main className="relative min-h-screen bg-neutral-900 sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={karate}
                alt="Martial Arts Class"
              />
              <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
            </div>
            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="mb-8 text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-purple-500 drop-shadow-md">
                  Dobu Martial Arts
                </span>
              </h1>
              <div className="p-8 pt-4 bg-black bg-opacity-10 backdrop-blur-md lg:max-w-3xl lg:mx-auto">
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl font-bold">
                  Success is a Sum of Small Efforts, Repeated 
                </p>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl font-bold">
                  Day In and Day Out...
                </p>
              </div>

              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <Link
                    to="/notes"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                  >
                    View Notes for {user.email}
                  </Link>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      to="/join"
                      className="flex items-center justify-center rounded-md border border-transparent bg-gray-700 px-4 py-3 text-base font-medium text-purple-300 shadow-sm hover:bg-gray-400 sm:px-8 hover:text-purple-500"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-md bg-purple-700 px-4 py-3 font-medium text-white hover:bg-purple-500"
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-24"> 
        <h2 className="text-center text-4xl text-purple-400">"Create Your Own Reality"</h2>
        </div>

        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap justify-center gap-8">
          

          </div>

          <div className="flex">
            <div className="p-14"> 
            <h1 className="text-purple-300 text-2xl text-center font-bold">Customer Collected Data</h1>

            <p className="text-white text-1xl text-center font-bold"> We may collect and process the following information about you:</p>
            <p className="text-white text-1xl text-center">Information that you provide by filling in forms on our site. </p> 
            <p className="text-white text-1xl text-center">Information provided at the time of registering as a user on our 
            website subscribing to our services or requesting further assistance</p>
            <p className="text-white text-1xl text-center">Information you provide when reporting an issue with our website</p>
            <p className="text-white text-1xl text-center">When you contact us, record of that correspondence</p>
            <p className="text-white text-1xl text-center">
Completed surveys that we use for research purposes;
although you do not have to respond to them.</p>

            </div>

            <div className="p-14"> 
            <h1 className="text-purple-300 text-2xl text-center font-bold">Our Community </h1>
            <p className="text-white text-1xl text-center">Our community focuses on training our students in self defence, by supporting each other</p>
            <p className="text-white text-1xl text-center">and taking the time to teach each students find thier own correct way of practecing our Martial Arts </p>

            </div>

           
          </div>
        
        </div>
      </div>
    </main>
    </>
  );
}
