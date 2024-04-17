import EventCard from "./EventCard";

const data = [
    {
        id: "1",
        img: "https://i.ibb.co/x78zZXB/Rectangle-16.png"
    },
    {
        id: "2",
        img: "https://i.ibb.co/Jtg2MXW/Rectangle-16-1.png"
    },
    {
        id: "3",
        img: "https://i.ibb.co/wccD0fD/Rectangle-16-2.png"
    },

]

const Events = () => {
    return (
        <div>
            <h1 className="text-center font-semibold text-5xl mt-16">Events</h1>

            <ul className=" flex space-x-2 justify-center my-8">
                <li className="px-3 py-1">All</li>
                <li className="px-3 py-1">For You</li>
                <li className="px-3 py-1">This Day</li>
                <li className="px-3 py-1">This Week</li>
                <li className="px-3 py-1 text-white rounded-lg bg-gradient-to-r from-[#7342F9] to-[#8053FA]">Music</li>
                <li className="px-3 py-1">Union</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1160px] mx-auto">
                {
                    data.map(item => <EventCard key={item.id} item={item}></EventCard>)
                }
            </div>


        </div>
    );
};

export default Events;