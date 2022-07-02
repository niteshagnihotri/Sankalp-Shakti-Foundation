import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));
const Home = lazy(() => import('./Home'));
const AboutPage = lazy(() => import('./AboutPage'));
const ServicesPage = lazy(() => import('./ServicesPage'));
const EventPage = lazy(()=> import('./EventPage'));
const ContactPage = lazy(() => import('./ContactPage'));


export default function Routing(){
    return (
        <>
        <Header/>
          <Suspense fallback={<div className="text-md h-[100vh] flex items-center justify-center font-QuickSand font-bold text-center ">Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/about" element={<AboutPage />} />
              <Route exact path="/services" element={<ServicesPage />} />
              <Route exact path="/events" element={<EventPage />} />
              <Route exact path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
          <Footer/>
        </>
    )
}