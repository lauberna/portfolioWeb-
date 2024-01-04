import Welcome from "./sections/Welcome";
import Profile from "./sections/Profile";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Welcome />
      <Profile />
      <Footer/>
    </>
  );
}

export default App;
