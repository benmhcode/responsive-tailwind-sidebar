import Sidebar from "../Sidebar";
import Main from "../Main";
import Header from "../Header";
import Footer from "../Footer";

function App() {
  return (
    <div>
      <div className="">
        <Header className="sticky" />
        <div className="flex h-screen overflow-hidden">
          {/* <div className=""> */}
          <Sidebar />
          <Main />
          {/* </div> */}
        </div>
        {/* <Footer className="sticky" /> */}
      </div>
    </div>
  );
}

export default App;
