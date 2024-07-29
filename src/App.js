import Home from "./components/home";
import Header from "./components/header";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import CreateQuery from "./components/createQuery";
import Profile from "./components/profile";
import QueryDetails from "./components/queryDetails";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
        <div style={{height:"50%"}}><Header /></div>
          <Navbar />
          <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/newQuery"  element={<CreateQuery/>}/>
            <Route path="/queries/:queryId"  element={<QueryDetails/>}/>
            <Route path="/profile"  element={<Profile/>}/>
          </Routes>
        </div>
        <div style={{height:"20%"}}>< Footer/> </div>
      </div>
    </Router>
  );
}

export default App;
