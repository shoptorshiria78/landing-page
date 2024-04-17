import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gradient-to-br from-[#591BFF] to-[#ab94eb]">
            <div className="w-[1160px] mx-auto text-white py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-28 mb-10">
                    <div>
                        <img className="w-[180px] mb-6" src="https://i.ibb.co/n7XGpmk/Event-Host.png" alt="" />
                        <p>IDEA Project, ICT Tower (0th Floor),
                        </p>
                        <p> Plot: E-14X, Agargaon, Dhaka - 1207</p>
                        <p>02222-222222, 01111111111</p>
                    </div>
                    <div>
                        <ul className="space-y-3">
                            <li>Home</li>
                            <li>Events</li>
                            <li>About Us</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-3">
                            <li>Event Dashboard</li>
                            <li>
                                Terms & Condition
                            </li>
                            <li>Privacy & Refund Policy</li>

                        </ul>
                    </div>
                    <div>
                        <p>Follow us</p>
                        <div className="flex space-x-6 mt-6">
                            <FaFacebook className="text-xl" />
                            <FaInstagramSquare className="text-xl" />
                            <FaLinkedin className="text-xl" />
                            <FaYoutube className="text-xl" />
                        </div>

                    </div>
                </div>
                <hr />
                <div className="flex justify-between mt-6">
                    <div className="flex justify-center items-center space-x-2 ">
                        <p>Pay With</p>
                        <img src="https://i.ibb.co/jWN7TWP/image-10bkash.png" alt="" />
                        <img className="w-[60px] h-[25px]" src="https://i.ibb.co/5Fp1Gng/Group-40-1.png" alt="" />
                        <img src="https://i.ibb.co/3fD2sY5/Layer-1-1.png" alt="" />
                    </div>
                    <div>
                        <p>©2023 TickHost & UVTR. All right reserved</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;