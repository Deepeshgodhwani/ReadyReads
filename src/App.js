import "./public.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import React, { useState} from "react";
import Navbar from "./components/Navbar";
import NewsCategory from "./components/newsCatergory";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWSAPP_API_KEY;
  const [progress, setprogres] = useState(40);
  const [closeApp, setscloseApp] = useState(false);
  const [darkmode, setdarkmode] = useState(false);

  const setProgress = (progress) => {
    setprogres(progress);
  };


  const mode = () => {
    let elem1 = document.getElementById("sun");
    let elem2 = document.getElementById("moon");

    if (!darkmode) {
      setdarkmode(true);

      elem1.style.display = "flex";
      elem2.style.display = "none";
    } else {
      setdarkmode(false);
      elem1.style.display = "none";
      elem2.style.display = "flex";
    }
  };

  return (
    <>
      <Router>
        {closeApp && <Loader darkmode={darkmode} />}
        {closeApp && (
          <LoadingBar className="" color="red" progress={70} />
        )}
        {!closeApp && (
          <div id="body" className="">
            <Navbar className="" mode={mode} darkmode={darkmode} />
            <LoadingBar className="" color="red" progress={progress} />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home
                    key="home"
                    darkmode={darkmode}
                    setProgress={setProgress}
                    apiKey={apiKey}
                    setscloseApp={setscloseApp}
                  />
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <NewsCategory
                    darkmode={darkmode}
                    key="business"
                    apiKey={apiKey}
                    setProgress={setProgress}
                    category="business"
                    setscloseApp={setscloseApp}
                  
                  />
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <NewsCategory
                    darkmode={darkmode}
                    key="entertainment"
                    apiKey={apiKey}
                    setProgress={setProgress}
                    category="entertainment"
                    setscloseApp={setscloseApp}
                  />
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <NewsCategory
                    key="health"
                    darkmode={darkmode}
                    apiKey={apiKey}
                    setProgress={setProgress}
                    category="health"
                    setscloseApp={setscloseApp}
                  />
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <NewsCategory
                    key="science"
                    darkmode={darkmode}
                    apiKey={apiKey}
                    setProgress={setProgress}
                    category="science"
                    setscloseApp={setscloseApp}
                  />
                }
              />
              <Route
                exact
                path="/sports"
                element={
                  <NewsCategory
                    key="sports"
                    darkmode={darkmode}
                    apiKey={apiKey}
                    setProgress={setProgress}
                    category="sports"
                    setscloseApp={setscloseApp}
                  />
                }
              />
              <Route
                exact
                path="/technology"
                element={
                  <NewsCategory
                    key="technology"
                    darkmode={darkmode}
                    apiKey={apiKey}
                    setProgress={setProgress}
                    category="technology"
                    setscloseApp={setscloseApp}
                  />
                }
              />
            </Routes>
            <Footer darkmode={darkmode} />
          </div>
        )}
      </Router>
    </>
  );
};

export default App;
