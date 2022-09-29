import Hero from "./Hero";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="h-[100vh] flex flex-col items-center">
        <Hero />
        <Card />
        <Footer />
      </div>
    </div>

  );
}

export default App;
