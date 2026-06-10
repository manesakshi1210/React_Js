

export default function Navbar() {
  return (
    <div>
       <nav className="flex bg-blue-400 items-center justify-between px-6 py-4">
             <h1> Logo </h1>
             <div className="flex justify-between gap-6">
               <a href="#" className="hover:text-white hover:bg-sky-600/75">Home</a>
               <a href="#" className="hover:text-white hover:bg-sky-600/75">About</a>
               <a href="#" className="hover:text-white hover:bg-sky-600/75">Contact Us</a>
             </div>
       </nav>
    </div>
  )
}
