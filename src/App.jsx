import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import VideoGrid from "./components/VideoGrid/VideoGrid";

function App() {
  return (
    <div>
      <Sidebar />

      <Header />

      <div className="side:pt-16 side:ml-64 min-h-screen bg-gray-100 pt-19">
        <VideoGrid />
      </div>
    </div>
  );
}

export default App;
