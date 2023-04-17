import logo from "./logo.svg";
import "./scss/App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Branding from "./components/Branding";
import Custome from "./components/Custome";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Companies></Companies>
      <Branding></Branding>
      <Custome></Custome>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
