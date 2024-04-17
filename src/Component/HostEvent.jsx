import { IoCheckmarkCircle } from "react-icons/io5";

const HostEvent = () => {
    return (
        <div className="flex justify-center items-center bg-gradient-to-r from-[#7342F9] to-[#8053FA] w-[1160px] h-[474px] mx-auto rounded-3xl mt-10">
            <img className="px-20 py-20" src="https://i.ibb.co/MM1rXnT/Group-29.png" alt="event picture" />
            <div className="px-5 relative">
                <h1 className="text-3xl font-medium text-white my-5">Host Your Event Easily & Automatedly With Us</h1>
                <h2 className="text-xl  text-white font-light my-5"> We Provide The Best Event Ticketing & <br/> Management Solutions </h2>
                <ul className="text-xs font-light space-y-3">
                    <li className="text-white flex items-center"><IoCheckmarkCircle className="text-xl mr-2"/> <p>Host Your Event With Easy Steps!</p></li>
                    <li className="text-white flex items-center"><IoCheckmarkCircle className="text-xl mr-2" /> <p>Automated Payment System & Ticket Will Be Sent To Mail.</p></li>
                    <li className="text-white flex items-center"><IoCheckmarkCircle className="text-xl mr-2" /> <p> Access to Registration and Transaction Reports</p></li>
                    <li className="text-white flex items-center"><IoCheckmarkCircle className="text-xl mr-2" /> <p>Send Bulk Personalized Mail With Attachments.</p></li>
                </ul>
                <img className="absolute right-0 -bottom-[86px] rounded-br-3xl" src="https://i.ibb.co/jV0WR6V/Group.png" alt="" />

            </div>
            
        </div>
    );
};

export default HostEvent;