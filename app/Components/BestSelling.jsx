import Card1 from "./Card1"

const BestSelling = () => {
  return (
    <div className="bg-secondary overflow-x-hidden">
        <div>
            <h1 className="text-center max-sm:text-2xl sm:text-4xl py-10">Best Selling Product</h1>
            <div className="text-center">
                <ul className="inline-flex px-2 py-2 rounded-full items-center justify-center gap-4 bg-ter">
                <li className="bg-white rounded-full shadow-lg px-6 py-2">Chair</li>
                <li className="px-1" >Beds</li>
                <li className="px-1" >Sofa</li>
                <li className="px-1" >Lamp</li>
            </ul>
            </div>
        </div>
        <div className="flex justify-center items-center mt-10">
            <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-8 max-md:gap-2">
            <Card1 image="/images/chair.png" name="Sakarias Armchair"/>
            <Card1 image="/images/chair2.png" name="Baltsar Chair"/>
            <Card1 image="/images/chair3.png" name="Anjay Chair"/>
            <Card1 image="/images/chair4.png" name="Nyantuy Chair"/>
        </div>

        </div>
        <div className="flex gap-2 justify-center items-center mt-10 mb-10">
          <p className="text-primary">View All</p>
          <img src="/images/arrow.png" className="h-3" alt="" />
        </div>
        
    </div>
  )
}
export default BestSelling