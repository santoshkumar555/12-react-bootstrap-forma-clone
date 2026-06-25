// Option 1 : One-page + hash/scroll navigation

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import AboutUs from "./components/about-us/AboutUs";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import WhyUs from "./components/why-us/WhyUs";
import Testimonials from "./components/testimonials/Testimonials";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/page-not-found/PageNotFound";

const HomePage = () => {
    // We use useLocation to grab the current #hash from the URL
    const { hash } = useLocation();

    // Define the sections that are actually allowed
    const validHashes = [
        "",
        "#home",
        "#about",
        "#services",
        "#portfolio",
        "#whyus",
        "#testimonials",
        "#team",
        "#contact"
    ];

    // If the hash in the URL isn't in our list, show 404
    if (hash && !validHashes.includes(hash)) {
        return <PageNotFound />;
    }

    return (
        <>
            <Header />
            <main>
                <section id="home"> <Home /> </section>
                <section id="about"> <AboutUs /> </section>
                <section id="services"> <Services /> </section>
                <section id="portfolio"> <Portfolio /> </section>
                <section id="whyus"> <WhyUs /> </section>
                <section id="testimonials"> <Testimonials /> </section>
                <section id="team"> <Team /></section>
                <section id="contact"> <Contact /> </section>
            </main>
            <Footer />
        </>
    );
};

function App() {
    return (
        <>
            <Routes>
                {/* Standard route for the main page */}
                <Route path="/" element={<HomePage />} />

                {/* Standard 404 for wrong paths (e.g., /random) */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>

            <Analytics />
            <SpeedInsights />
        </>
    );
}

export default App;

// Option 2 : Multi-page routing (React Router pages)

// import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout/Layout";

// import Home from "./components/home/Home";
// import AboutUs from "./components/about-us/AboutUs";
// import Services from "./components/services/Services";
// import Portfolio from "./components/Portfolio/Portfolio";
// import WhyUs from "./components/WhyUs/WhyUs";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Team from "./components/Team/Team";
// import Contact from "./components/Contact/Contact";
// import PageNotFound from "./components/PageNotFound/PageNotFound";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         {/* Home page */}
//         <Route index element={<Home />} />

//         {/* Real separate pages */}
//         <Route path="home" element={<Home />} />
//         <Route path="about" element={<AboutUs />} />
//         <Route path="services" element={<Services />} />
//         <Route path="portfolio" element={<Portfolio />} />
//         <Route path="whyus" element={<WhyUs />} />
//         <Route path="testimonials" element={<Testimonials />} />
//         <Route path="team" element={<Team />} />
//         <Route path="contact" element={<Contact />} />
//       </Route>

//       {/* 404 page */}
//       <Route path="*" element={<PageNotFound />} />
//     </Routes>
//   );
// }

// export default App;