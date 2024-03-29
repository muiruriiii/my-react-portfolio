import Header from "./components/Header/header";
import About from "./components/About/about";
import Service from "./components/Services/service";
import Project from "./components/Projects/project";
import Contact from "./components/Contact/contact";
import Jokes from "./components/Jokes/jokes";

function App() {
  return (
    <div className="App">
        <Header/>
        <About/>
        <Service/>
        <Project/>
        <Jokes/>
        <Contact/>
    </div>
  );
}

export default App;
