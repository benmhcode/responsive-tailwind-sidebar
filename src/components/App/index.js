import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import Main from "../Main";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="flex items-center justify-between">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
