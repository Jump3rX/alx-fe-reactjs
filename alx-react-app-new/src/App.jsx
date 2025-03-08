import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import { UserContext } from "./UserContext";
import { useContext } from "react";
function App() {
  const userData = {
    name: "Alice Doe",
    age: 25,
    email: "jane.doe@example.com",
    bio: "Loves hiking and photography",
  };
  return (
    <>
      <Header />
      <MainContent />
      <Counter />
      <UserContext.Provider value={userData}>
        <UserProfile />
      </UserContext.Provider>

      <Footer />
    </>
  );
}

export default App;
