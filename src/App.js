// import logo from "./logo.svg";
import "./App.css";
// import "./componet/Navbar.js";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer";



function App() {
 
  return (
    <>
      {/* <Navbar title ="Practice" about="About  Us" /> */}
     <Navbar/>
     <TextForm />
     
     <Footer title = "React project  reserved ©  2025 by reactmade"/>
    </>
  );
}

export default App;
