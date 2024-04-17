

const ScannerCard = ({ item }) => {
    return (
        <div className="bg-[#F1F3FF] rounded-3xl w-[275px] p-6 border-[#c5c9f5] border-[1px]">
            <div className="w-[60px] h-[60px] rounded-full bg-white">
                <img className="p-4"  src={item.img} alt="" />
            </div>
            <h1 className="text-2xl font-bold my-2">{item.title}</h1>
            <h2 className="text-sm font-light">{item.description}</h2>

        </div>
    );
};

export default ScannerCard;