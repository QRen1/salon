import Navbar from "./scenes/nav";
import LandingPage from "./scenes/pages/LandingPage.tsx";
import Appointment from "../src/component/appointment.tsx";

function App() {
  return (
    <div className="app h-[500000px]">
      <Navbar />
      <LandingPage />
      {/* <Appointment /> */}
    </div>
  );
}

export default App;
