import Card from "./Card"
import HeroPage from "./HeroPage"

export default function Hero() {
  return (
    
    <div className="bg-blue-100 flex flex-col items-center py-10 ">
      <HeroPage/>
      <h2 className=" font-bold mb-8 text-blue-900">Our Products</h2>
    <Card/>
    </div>
  )
}
