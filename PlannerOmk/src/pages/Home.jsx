import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    triggerOnce: true, // Para que el evento se dispare solo una vez
    threshold: 0.5 // Puedes ajustar este valor según tus necesidades
  });

  // Actualiza el estado cuando el componente está en la vista del usuario
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

      {/* Renderizamos los componentes cuando están cerca de la vista del usuario */}
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
