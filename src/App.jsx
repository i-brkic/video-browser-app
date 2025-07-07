import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import VideoGrid from "./components/VideoGrid/VideoGrid";

function App() {
  const [querry, setQuerry] = useState("");

  return (
    <div>
      <Sidebar />

      <Header querry={querry} setQuerry={setQuerry} />

      <div className="side:pt-16 side:ml-64 min-h-screen bg-gray-100 pt-19">
        <VideoGrid querry={querry} />
      </div>
    </div>
  );
}

export default App;
