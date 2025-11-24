import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home';
import { Enquiry } from './components/pages/Enquiry';
import { AcademicPrograms } from './components/pages/AcademicPrograms';
import { Careers } from './components/pages/Careers';
import { Faculty } from './components/pages/Faculty';
import { Placements } from './components/pages/Placements';
import { Events } from './components/pages/Events';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/academic-programs" element={<AcademicPrograms />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
