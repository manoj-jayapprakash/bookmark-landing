import './App.css';

import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { Download } from './components/Download/Download';
import { FAQ } from './components/FAQ/FAQ';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <Contact />
      {/*
      <Footer /> */}
    </div>
  );
}

export default App;
