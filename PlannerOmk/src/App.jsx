import { PrimeReactProvider } from 'primereact/api';
import { lazy, Suspense } from 'react';
import Home from './pages/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TermsOfService = lazy(() => import('./pages/TermsOfService.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const Blog = lazy(() => import('./pages/Blog.jsx'));
const ElevateProductivity = lazy(() => import('./pages/ElevateProductivity.jsx'));
const CommingSoon = lazy(() => import('./pages/CommingSoon.jsx'));
const SingIn = lazy(() => import('./pages/SingIn.jsx'));
const SingUp = lazy(() => import('./pages/SingUp.jsx'));
const DashNote = lazy(() => import('./pages/protected/DashNote.jsx'));
const CreateNote = lazy(() => import('./pages/protected/CreateNote.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx')); 
const ProtectedView = lazy(()=> import('./components/ProtectedView.jsx'))

function App() {
  const isTrue = useSelector((state)=>state.auth.value)

  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/elevate-your-productivity-with-omkplanner" element={<ElevateProductivity />} />
            <Route path="/blog/comming-soon" element={<CommingSoon />} />
            <Route path="/singin" element={<SingIn />} />
            <Route path="/singup" element={<SingUp />} />
            <Route element={<ProtectedView logged={isTrue}/>}>
              <Route path="/dash-note" element={<DashNote />} />
            </Route>
            <Route element={<ProtectedView logged={isTrue}/>}>
              <Route path="/create-note" element={<CreateNote />} />
            </Route>
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </Suspense>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
