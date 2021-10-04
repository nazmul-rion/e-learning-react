import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Course from "./Components/Course/Course";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Instractor from "./Components/Instractor/Instractor";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/course">
            <Course></Course>
          </Route>
          <Route path="/instractor-profile">
            <Instractor></Instractor>
          </Route>
          <Route path="/contactUs">
            <ContactUs></ContactUs>
          </Route>
          <Route path="*">
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div >
  );
}

export default App;
