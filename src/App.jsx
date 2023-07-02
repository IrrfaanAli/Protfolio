import Aboutme from "./component/Aboutme";
import Contract from "./component/Contract";
import Edu from "./component/Edu";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Skill from "./component/Skill";
import Work from "./component/Work";
import Navbar from "./component/navbar";

const App = () => {
  return (
    <div >
      <Navbar></Navbar>
      <Hero></Hero>
      <Skill></Skill>
       <Aboutme></Aboutme>
      <Edu></Edu>
      <Work></Work>
      <Contract></Contract>
      <Footer></Footer>
    </div>
  );
 };
 
 export default App;