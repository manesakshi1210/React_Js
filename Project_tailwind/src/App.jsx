import Navbar from "./component/Navbar"
import Hero from "./component/Hero"

export default function App() {
  return (
    // <div className="h-screen flex flex-col items-center justify-center bg-blue-100">
      
    //   <h1 className="text-4xl font-bold text-blue-900">
    //     Hello Tailwind CSS
    //   </h1>

    //   <button className="p-4 mt-4 bg-amber-950 text-white rounded">
    //     Click Me!
    //   </button>

    // </div>

    <>
      <div >
        <Navbar/>
        <Hero/>
      </div>
    </>
  )
}