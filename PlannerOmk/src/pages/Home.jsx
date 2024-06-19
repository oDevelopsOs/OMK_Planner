import React, { useState } from 'react';
import {  Route, Routes } from 'react-router-dom';
import Header from "../components/Header";
import Main from "../components/Main";
import Image from "../components/Image";
import Assitant from "../components/Assitant";
import Coments from "../components/Coments";
import CentralComponent from "../components/CentralComponent";
import { useInView } from 'react-intersection-observer';
import Question from '../components/Question';
import Ready from '../components/Ready';
import Footer from '../components/Footer';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5 
  });

  React.useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  
  return (
    <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/blog" element={<Main />} />
          <Route exact path="/singin" element={<Main />} />
          <Route exact path="/singup" element={<Main />} />
          <Route exact path="/create-note" element={<Main />} />
        </Routes>

        <Image />
        <Assitant />
        <Coments />
        <div ref={ref}>
          {isVisible && <CentralComponent />}
        </div>
        <Question/>
        <Ready/>
        <Footer/>
    </>
  );
}
