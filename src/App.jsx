import React from "react";

function App() {
  return (
    <>
      <div style={{ padding: '50px', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
        <h1>Rectangle Box Section</h1>
        <p>This is the Rectangle Box component content.</p>
      </div>

      <div style={{ padding: '50px', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <h1>Impact at a <span style={{ color: '#ff2d55' }}>Glance</span></h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxWidth: '800px', margin: '20px auto' }}>
          <div style={{ padding: '20px', backgroundColor: '#ffe5e9', borderRadius: '10px' }}>
            <h3>Colleges</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>100+</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#dceeff', borderRadius: '10px' }}>
            <h3>Students</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>1,00,000</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#e3ffe9', borderRadius: '10px' }}>
            <h3>Study Materials</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>1000+</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#ffe8d6', borderRadius: '10px' }}>
            <h3>Professional Trainers</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>150</p>
          </div>
        </div>
      </div>

      <div style={{ padding: '50px', backgroundColor: '#fff2e6', textAlign: 'center' }}>
        <h1>Our Promise</h1>
        <p>We promise to deliver quality education and training to all our students.</p>
      </div>

      <div style={{ padding: '50px', backgroundColor: '#e8f4fd', textAlign: 'center' }}>
        <h1>Contact Section</h1>
        <p>Get in touch with us for more information.</p>
      </div>
    </>
  );
}

export default App;