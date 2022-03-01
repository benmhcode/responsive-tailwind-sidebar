import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="flex items-center justify-center py-2">
        <Sidebar />
        App
      </div>
      <Footer />
    </div>
  );
}

export default App;
