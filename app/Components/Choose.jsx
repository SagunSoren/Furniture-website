const Choose = () => {
  return (
    <div className="py-10 px-10 md:px-20 flex flex-col md:flex-row gap-4">
        <h1 className="text-4xl w-full flex items-center ">Why Choose Us</h1>
        <div className="flex flex-col gap-4 max-md:gap-0">
            <h2 className="font-bold">Luxury facilities</h2>
            <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
            <div className="flex h-4 gap-2 items-center">
                <p className="text-primary">More info</p>
                <img src="/images/arrow.png" alt="" />
            </div>
        </div>
        <div className="flex flex-col gap-4 max-md:gap-0">
            <h2 className="font-bold">Affordable Price</h2>
            <p>You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are oly here.</p>
            <div className="flex h-4 gap-2 items-center">
                <p className="text-primary">More info</p>
                <img src="/images/arrow.png" alt="" />
            </div>
        </div>
        <div className="flex flex-col gap-4 max-md:gap-0">
            <h2 className="font-bold">Many Choices</h2>
            <p>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
            <div className="flex h-4 gap-2 items-center">
                <p className="text-primary">More info</p>
                <img src="/images/arrow.png" alt="" />
            </div>
        </div>
       
    </div>
  )
}
export default Choose