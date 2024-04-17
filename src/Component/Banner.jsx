

const Banner = () => {
    return (

        <div className="w-[1160px] mx-auto h-[441px] mt-10 bg-opacity-10" style={{ backgroundImage: 'url(https://i.ibb.co/M54hsn8/Rectangle-8.png)' }}>
           
            <div className=" flex h-full ml-28 font-normal text-white justify-start items-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">CMA Fest</h1>
                    <p className="mb-5">Make memories that will last a lifetime. See your favorite artists live at CMA Fest!</p>
                    <div className="flex space-x-3">
                        <button className=" bg-gradient-to-r from-[#7342F9] to-[#8053FA] flex justify-center items-center py-2 px-4 rounded-lg">
                            <img className="mr-3" src="https://i.ibb.co/NtN6bs3/Vector.png" alt="icon" />
                            Get Ticket</button>
                        <button className="py-2 px-4 rounded-lg border-white border-[1px]">Explore All Events</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;