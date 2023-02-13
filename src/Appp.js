import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/ReactRouter/Home";
import AboutUs from "./components/ReactRouter/AboutUs";
import Contact from "./components/ReactRouter/Contact";
import Error from "./components/ReactRouter/Error";
import MainHeader from "./components/ReactRouter/ReactRouteComponent/MainHeader";
import Users from "./components/ReactRouter/Param/Users";

const Appp = () => {
  return (
    <>
      {/* this is the new routing in the react two pages are the about and contact */}
      {/* and exeptional page is the third Error page */}

      <Routes>
        {/* here we have done nested routing like in url we go like /about/contacus */}
        {/* yaha per 18th line per navbar render hoga aur 19th liine per home ka content */}
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />}  />
          <Route path="/about" element={<AboutUs />} />
          {/* below is the useParams methos where after / we add a parameter */}
          <Route path="/users/:fname" element={<Users />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default Appp;
