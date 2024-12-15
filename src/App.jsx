import { UpdateFollower } from "react-mouse-follower";  // Importing Mouse Follower
import Navbar from "./components/Navbar/Navbar";  // Importing the Navbar component
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services";  
import Banner from "./components/Banner/Banner";  // Importing the Banner component
import Blogs from "./components/Blogs/Blogs";   // Importing the Blogs component
import Footer from "./components/Footer/Footer";   // Importing the Footer component
const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower 
        mouseOptions={{
          backgroundColor: "white",   // Mouse follower background
          zIndex: 999,                // High z-index to stay above content
          followSpeed: 1.5,           // Speed of follower movement
          scale: 1.5,                 // Scale of the follower
          mixBlendMode: "difference", // Style effect on the cursor
        }}
      >
        <Navbar />  {/* Rendering the Navbar */}
      </UpdateFollower>
      <Hero/>
      <Services/>
      <Banner />
      <Blogs />
      <Footer/>
    </main>
  );
};

export default App;
