
import Header from "./Components/Header";
import Body from "./Components/Body.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Body />
      </main>
      <Footer />
    </div>

  );
};

export default App;
