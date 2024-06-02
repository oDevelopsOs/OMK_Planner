import { lazy, Suspense } from 'react';
import Home from './pages/Home.jsx';
// Elimina esta línea porque estás cargando dinámicamente TermsOfService
// import TermsOfService from './pages/TermsOfService.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const TermsOfService = lazy(() => import('./pages/TermsOfService.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const Blog = lazy(() => import('./pages/Blog.jsx'));
const ElevateProductivity = lazy(() => import('./pages/ElevateProductivity.jsx'));
const CommingSoon = lazy(() => import('./pages/CommingSoon.jsx'));
const SingIn = lazy(()=>import('./pages/SingIn.jsx'))
const SingUp = lazy(()=>import('./pages/SingUp.jsx'))

const NotFound = lazy(() => import('./pages/NotFound.jsx')); // Página 404

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />


          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/blog" element={<Blog/> } />
          <Route path="/blog/elevate-your-productivity-with-omkplanner" element={<ElevateProductivity/> } />
          <Route path="/blog/comming-soon" element={<CommingSoon/> } />

          <Route path="/singin" element={<SingIn/> } />
          <Route path="/singup" element={<SingUp/> } />



          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
