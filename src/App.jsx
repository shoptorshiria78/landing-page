import Banner from "./Component/Banner"
import Events from "./Component/Events"
import HostEvent from "./Component/HostEvent"
import QrScanner from "./Component/QrScanner"
import Ticketing from "./Component/Ticketing"
import Footer from "./Shared/Footer"
import NavBar from "./Shared/NavBar"



function App() {


  return (
    <>
      {/* navbar section */}
      <NavBar></NavBar>
      {/* Banner */}
      <Banner></Banner>
      {/* Events */}
      <Events></Events>
      {/* Host Event */}
      <HostEvent></HostEvent>
      {/* QR Code */}
      <QrScanner></QrScanner>
      {/* ticketing */}
      <Ticketing></Ticketing>
      {/* footer */}
      <Footer></Footer>

    </>
  )
}

export default App
