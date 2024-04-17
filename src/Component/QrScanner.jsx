import ScannerCard from "./ScannerCard";

const data2 = [
    {
        id: "1",
        img: "https://i.ibb.co/Yb0JzCZ/click-1-1.png",
        title: "One Click",
        description: "QR verification System"
    }
    ,
    {
        id: "2",
        img: "https://i.ibb.co/ZS2BNsM/click.png",
        title: "One time",
        description: "QR Code"
    }
    ,
    {
        id: "3",
        img: "https://i.ibb.co/2djTJ5s/check-1.png",
        title: "Easy Access",
        description: "lorem ispum access"
    }
    ,
    {
        id: "4",
        img: "https://i.ibb.co/HKy7RXZ/Vector-1.png",
        title: "mail",
        description: "Send bulk personalized mail with attachments"
    }
    ,
]

const QrScanner = () => {
    return (
        <div className="w-[1160px] mx-auto">
            <h1 className="text-4xl font-semibold text-center mt-20 mb-4">Automated QR Scanner</h1>
            <h2 className="text-base text-[#a485f7] text-center  mb-6">Scan & Verify The Attendees Directly By Our QR Scanning <br/> Solution.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {
                    data2.map(item =><ScannerCard key={item.id} item={item}></ScannerCard>)
                }
            </div>

        </div>
    );
};

export default QrScanner;