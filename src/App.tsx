/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Heart, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import EventsPage from './components/EventsPage';
import GalleryPage from './components/GalleryPage';
import CommitteePage from './components/CommitteePage';
import MembersPage from './components/MembersPage';
import ContactPage from './components/ContactPage';
import DonationPage from './components/DonationPage';
import GenericPage from './components/GenericPage';
import MissionVisionPage from './components/MissionVisionPage';
import MessagePage from './components/MessagePage';
import NewsPage from './components/NewsPage';
import GetInvolvedPage from './components/GetInvolvedPage';
import VolunteersPage from './components/VolunteersPage';
import MembershipPage from './components/MembershipPage';
import ScholarshipPage from './components/ScholarshipPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans selection:bg-saffron-200">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/history" element={<GenericPage title="Our History" />} />
            <Route path="/about/mission" element={<MissionVisionPage />} />
            <Route path="/about/message" element={<MessagePage />} />
            <Route path="/committee" element={<CommitteePage />} />
            <Route path="/members" element={<MembersPage />} />

            {/* Events / News */}
            <Route path="/news-events" element={<EventsPage />} />
            <Route path="/news" element={<NewsPage />} />

            {/* Gallery */}
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/gallery/photo" element={<GalleryPage />} />
            <Route path="/gallery/video" element={<GalleryPage defaultCategory="video" />} />
            <Route path="/gallery/honors" element={<GalleryPage defaultCategory="honors" />} />
            <Route path="/gallery/publication" element={<GalleryPage defaultCategory="publication" />} />

            {/* Get Involved */}
            <Route path="/get-involved" element={<GetInvolvedPage />} />
            <Route path="/get-involved/volunteers" element={<VolunteersPage />} />
            <Route path="/get-involved/membership" element={<MembershipPage />} />
            <Route path="/get-involved/scholarship" element={<ScholarshipPage />} />
            <Route path="/get-involved/youth" element={<GenericPage title="Youth Activities" />} />
            <Route path="/get-involved/social" element={<GenericPage title="Social Services" />} />

            {/* Contact */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Donate */}
            <Route path="/donate" element={<DonationPage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating Action Bubbles */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
          <Link 
            to="/contact" 
            className="bg-white text-saffron-600 p-4 rounded-full shadow-lg hover:bg-saffron-50 transition-colors border border-saffron-100 flex items-center justify-center cursor-pointer group"
          >
            <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
          </Link>
          <Link 
            to="/donate" 
            className="bg-saffron-600 text-white p-4 rounded-full shadow-lg hover:bg-saffron-700 transition-colors flex items-center justify-center cursor-pointer group"
          >
            <Heart size={28} className="group-hover:scale-110 transition-transform" />
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
}
