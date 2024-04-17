

const EventCard = ({ item }) => {
    return (
        <div className="w-[373px] bg-[#F1F3FF] py-5 rounded-2xl relative ">
            <img className="px-5" src={item.img} alt="poster image" />
            <div className="w-3 h-6 rounded-tr-full   rounded-br-full bg-white absolute top-[244px] -left-0"></div>
            <hr className="my-5  border-dashed border-[1px] border-[#b49cf5]"></hr>
            <div className="w-3 h-6 rounded-tl-full rounded-bl-full bg-white absolute top-[244px] -right-0  "></div>
            <div className="flex justify-between px-5">
                <div>
                    <div>
                        <p className="px-3 py-1 w-16 text-white rounded-md bg-gradient-to-r text-sm from-[#7342F9] to-[#8053FA]">Music</p>
                    </div>
                    <div className="flex space-x-2 my-3"> <img src="https://i.ibb.co/xGPmxBb/Vectorlocation.png" alt="location" /> <span className="text-xs">Celebrity Convention Hall</span></div>
                    <h1 className="text-[22px] font-semibold">Roufian’s HSC-24 Rag Day</h1>
                </div>
                <div className="w-[82px] h-[95px] text-center bg-white rounded-lg py-2">
                    <p className="text-sm">Apr</p>
                    <p className="text-3xl font-semibold text-[#591BFF]">20</p>
                    <p className="text-sm">10:00 PM</p>
                </div>
            </div>
            <div className="flex space-x-2 px-5">
                <button className="text-white bg-gradient-to-r from-[#7342F9] to-[#8053FA] flex justify-center items-center py-2 px-2 rounded-lg">
                    <img className="mr-3" src="https://i.ibb.co/NtN6bs3/Vector.png" alt="icon" />
                    See Ticket</button>
                <div className="flex justify-center items-center py-2 px-2 rounded-lg bg-white font-medium">
                    <div className="text-[24px] font-semibold text-[#591BFF]">20</div>
                    <div className="text-[10px] ml-1">
                        <p>seat</p>
                        <p>left</p>
                    </div>
                </div>
                <button className="text-[#591BFF]">See More</button>
            </div>

        </div>
    );
};

export default EventCard;