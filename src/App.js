import Header from "./components/Header/header";
import About from "./components/About/about";
import Service from "./components/Services/service";
import Project from "./components/Projects/project";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
        <Header/>
        <About/>
        <Service/>
        <Project/>
        <Contact/>
    </div>
  );
}

export default App;
