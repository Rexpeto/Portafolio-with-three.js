import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Who from "./components/Who";
import Works from "./components/Works";

const App = () => {
    return (
        <div className="container">
            <Hero />
            <Who />
            <Works />
        </div>
    );
};

export default App;
