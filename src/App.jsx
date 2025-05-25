import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import VideoGrid from "./components/VideoGrid/VideoGrid";

function App() {
  return (
    <div>
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex flex-1 flex-col">
          <Header />
          <VideoGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
