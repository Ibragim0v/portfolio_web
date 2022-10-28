import {
    About,
    Home,
    Navbar,
    Social,
    Portfolio,
    Skills,
    Contact,
} from "./components";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Portfolio />
            <Skills />
            <Contact />

            <Social />
        </div>
    );
}

export default App;
