import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import SignIn from "./Pages/SignIn/SignIn";
import Profile from "./Pages/Profile/Profile";
import RouteGuard from "./Components/Shared/RouteGuard";
import CardDetails from "./Pages/CardDetails/CardDetails";
import Favorites from "./Pages/Favorites/Favorites";
import MyCards from "./Pages/MyCards/MyCards";
import CreateCard from "./Pages/CreateCard/CreateCard";
import Register from "./Pages/Register/Register";
import About from "./Pages/About/About";
import EditCard from "./Pages/EditCard/EditCard";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/card/:id" element={<CardDetails />} />
        <Route path="/signup" element={<Register />} />

        <Route
          path="/profile"
          element={
            <RouteGuard>
              <Profile />
            </RouteGuard>
          }
        />
        <Route
          path="/favorites"
          element={
            <RouteGuard>
              <Favorites />
            </RouteGuard>
          }
        />
        <Route
          path="/my-cards"
          element={
            <RouteGuard bizOnly>
              <MyCards />
            </RouteGuard>
          }
        />


        <Route
          path="/edit-card/:id"
          element={
            <RouteGuard>
              <EditCard />
            </RouteGuard>
          } />

        <Route
          path="create-card"
          element={
            <RouteGuard bizOnly>
              <CreateCard />
            </RouteGuard>
          }
        />
      </Routes>
      <div className="sticky bottom-0">
        <Footer />
      </div>
    </>
  );
}

export default App;

