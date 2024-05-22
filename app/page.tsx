import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar";

export default function Home() {
  return <div className="poppins flex w-full h-screen">
    <Sidebar />
    <Dashboard />
  </div>
}
