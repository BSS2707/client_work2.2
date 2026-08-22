import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CTASection from '../../components/CTASection/CTASection';

const About = () => {
  return (
    <div className="about-page" style={{ padding: '60px 0' }}>
      <div className="container">
        <SectionTitle 
          title="About GrowVora" 
          subtitle="We are a team of passionate digital marketers, designers, and developers dedicated to helping brands grow."
          centered
        />
        
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ fontSize: '18px', marginBottom: '24px' }}>
            We're a tight-knit team of creators, strategists, and developers based in Surat. We got tired of watching traditional agencies deliver nothing but vanity metrics without impacting the bottom line. So we built something different.
          </p>
          <p style={{ fontSize: '18px' }}>
            At GrowVora, we treat your ad spend and brand identity like it's our own. We don't just design pretty graphics or write generic copy—we build comprehensive, data-backed systems that actually drive revenue and sustainable growth for our clients.
          </p>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
};

export default About;
