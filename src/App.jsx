import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import MandapTheme from './pages/MandapTheme';
import CulturalEvents from './pages/CulturalEvents';
import Committee from './pages/Committee';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

import {
  initialNotice,
  pujoSchedule,
  culturalLineup,
  committeeMembers
} from './data/pujoData';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [noticeText, setNoticeText] = useState(initialNotice);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="flex-1">
        {activePage === 'home' && (
          <Home
            noticeText={noticeText}
            pujoSchedule={pujoSchedule}
            culturalLineup={culturalLineup}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'schedule' && (
          <Schedule
            pujoSchedule={pujoSchedule}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'theme' && (
          <MandapTheme
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'gallery' && (
          <Gallery />
        )}

        {activePage === 'cultural' && (
          <CulturalEvents
            culturalLineup={culturalLineup}
          />
        )}

        {activePage === 'committee' && (
          <Committee
            committeeMembers={committeeMembers}
          />
        )}

        {activePage === 'contact' && (
          <Contact />
        )}
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
