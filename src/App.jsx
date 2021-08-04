import React, { useState, useEffect } from "react";
import { checkSession } from "./api/auth.api";
import { Footer, Navbar, Sidebar, SidebarMobile } from "./components";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AuthRouteComponent from "./api/authroute";
import "./App.scss";

const Home = lazy(() => import("./pages/Home/Home"));
const Tags = lazy(() => import("./pages/Tags/Tags"));
const TagPlaylists = lazy(() => import("./pages/TagPlaylists/TagPlaylists"));
const Playlists = lazy(() => import("./pages/Playlists/Playlists"));
const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
const About = lazy(() => import("./pages/About/About"));
const Comments = lazy(() => import("./pages/Comments/Comments"));

export const UserContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const user = await checkSession();
      if (!user.message) {
        saveUser(user);
      } else {
        saveUser(false);
      }
    } catch (error) {
      console.log("error get user data (check session)", error);
    }
  };
  const saveUser = (user) => {
    setUser(user);
  };

  const [breakpoint, setBreakpoint] = useState(true);
  const handleWindowResize = () => {
    if (window.innerWidth > 1024) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    if (window.innerWidth > 1024) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Router>
      <UserContext.Provider value={user}>
        <div className="app">
          <Navbar />
          {!breakpoint ? <SidebarMobile /> : null}
          <div className="container">
            {breakpoint ? <Sidebar /> : null}
            <div className="container__main">
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route exact path="/" render={(props) => <Home {...props} user={user} />} />
                  <Route exact path="/tags" render={(props) => <Tags {...props} saveUser={saveUser} />} />
                  <Route path="/tags/:id" render={(props) => <TagPlaylists {...props} saveUser={saveUser} />} />
                  <Route exact path="/playlists" render={(props) => <Playlists {...props} saveUser={saveUser} />} />
                  <AuthRouteComponent exact path="/comments" user={user}>
                    <Comments user={user} />
                  </AuthRouteComponent>
                  <Route exact path="/register" render={(props) => <Register />} />
                  <Route exact path="/login" render={(props) => <Login {...props} saveUser={saveUser} />} />
                  <Route exact path="/about" render={(props) => <About {...props} />} />
                  <Redirect from="*" to="/" />
                </Switch>
              </Suspense>
              <Footer />
            </div>
          </div>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
