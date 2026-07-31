import Hero from '../components/Hero';
import BphKjsm from '../components/BphKjsm';
import AboutKjsm from '../components/AboutKjsm';
import WhatIsKjsm from '../components/WhatIsKjsm';
import Documentation from '../components/Documentation';
import KesibukanKjsm from '../components/KesibukanKjsm';
import CtaSection from '../components/CtaSection';

export default function Home() {
  return (
    <>
      <Hero />
      <BphKjsm />
      <AboutKjsm />
      <WhatIsKjsm />
      <Documentation />
      <KesibukanKjsm />
      <CtaSection />
    </>
  );
}
