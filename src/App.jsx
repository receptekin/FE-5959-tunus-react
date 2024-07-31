import React from 'react';
import AppNavbar from './components/Navbar/AppNavbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import './App.css';
import SectionEnd from './components/SectionEnd/SectionEnd';

const App = () => {
  const tunus = {
    baslik: "Tunus'un Kültürel Mirası",
    paragraf: "Tunus, binlerce yıllık tarihi ve zengin kültürel mirasıyla dikkat çeken bir ülkedir. Antik Kartaca uygarlığından Roma İmparatorluğu'na, Osmanlı İmparatorluğu'ndan Fransız sömürge dönemine kadar birçok medeniyete ev sahipliği yapmıştır. Tunus'taki Dougga ve El Djem Amfitiyatrosu gibi tarihi yerler, UNESCO Dünya Mirası Listesi'nde yer almakta ve bu geçmişin izlerini taşımaktadır. Ayrıca, Tunus'un başkenti olan Tunus şehri, İslam mimarisinin en güzel örneklerinden bazılarına sahiptir. Zeytouna Camii ve Dar Ben Abdallah Müzesi, ziyaretçilerin bu zengin kültürel mirası yakından tanımalarını sağlar."
  };

  const tunus2 = {
    baslik: "Tunus'un Doğal Güzellikleri",
    paragraf: "Tunus, sadece tarihi ve kültürel mirasıyla değil, aynı zamanda doğal güzellikleriyle de büyüleyici bir ülkedir. Akdeniz kıyısındaki beyaz kumlu plajları, berrak suları ve sıcak iklimi ile tatilcilerin gözdesidir. Hammamet, Sousse ve Djerba adası, plaj tatili yapmak isteyenler için ideal destinasyonlardır. Ayrıca, Tunus'un iç kesimlerinde yer alan Chott El Jerid tuz gölü ve Sahara Çölü, doğa severler için eşsiz deneyimler sunar. Sahra Çölü'nde yapılan deve safarileri ve yıldızların altında kamp yapmak, Tunus'un sunduğu unutulmaz aktivitelerden sadece birkaçıdır."
  };

  return (
    <>
      <AppNavbar />
      <Hero baslik={tunus.baslik} paragraf={tunus.paragraf} />
      <Section />
      <Hero baslik={tunus2.baslik} paragraf={tunus2.paragraf} />
      <SectionEnd />
      <Footer />
    </>
  );
};

export default App;
