

const NavBar = () => {
    return (
        <div className="flex justify-between px-14 bg-gradient-to-r from-[#591BFF] to-[#ab94eb]  w-[1160px] mx-auto rounded-3xl mt-7 relative">
             <div className="w-6 h-3 rounded-br-full rounded-bl-full bg-white absolute top-0 left-[180px]"></div>
            <div className="border-r-2 border-dashed border-white">
                <img  className="my-8 pr-6" src="https://i.ibb.co/n7XGpmk/Event-Host.png" alt="logo"/>
            </div>
            <div className="w-6 h-3 rounded-tr-full rounded-tl-full bg-white absolute bottom-0 left-[180px]"></div>
           
            <div >
                <ul className="flex text-white space-x-12 py-6">
                    <li>Home</li>
                    <li>Events</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
            <div className="w-6 h-3 rounded-br-full rounded-bl-full bg-white absolute top-0 right-[151px]"></div>
                <div className="flex space-x-6  border-l-2 border-dashed border-white">
                    <img className="my-8 pl-6" src="https://i.ibb.co/6thNzsZ/profilepic.png" alt="profile image"/>
                    <img className="my-8 " src="https://i.ibb.co/pJ0PVjs/Group-7.png" alt="shopping cart" />
                </div>
                <div className="w-6 h-3 rounded-tr-full rounded-tl-full bg-white absolute bottom-0 right-[151px]"></div>
            </div>
        </div>
    );
};

export default NavBar;