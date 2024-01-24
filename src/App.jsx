import { Routes ,Route } from 'react-router-dom';
import NavbarWeb from '../components/NavbarWeb.jsx'
import FooterWeb from '../components/FooterWeb.jsx'
import HomePage from './pages/HomePage.jsx';
import KelasPage from './pages/KelasPage.jsx';
import TestimonialPage from './pages/TestimonialPage.jsx';
import FaqPage from './pages/FaqPage.jsx';
import SyarkenPage from './pages/SyarkenPage.jsx';


function App(){
  return(
    <div>
      <NavbarWeb />
        <Routes>
          <Route path="/reactjsx/" Component={HomePage} />
          <Route path="/reactjsx/kelas" Component={KelasPage} />
          <Route path="/reactjsx/testimonial" Component={TestimonialPage} />
          <Route path="/reactjsx/faq" Component={FaqPage} />
          <Route path="/reactjsx/syaratketen" Component={SyarkenPage} />
        </Routes>
        <FooterWeb />
    </div>
    )
}
export default App