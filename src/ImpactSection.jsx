import React from "react";

const ImpactSection = () => {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: "Poppins", sans-serif;
          background: #fff;
        }

        .impact-section {
          text-align: center;
          padding: 60px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .impact-title {
          font-size: 48px;
          font-weight: 700;
          color: #000000;
          text-align: center;
          margin: 0 auto 40px auto;
        }

        .impact-title span {
          color: #ff2d55;
        }

        .impact-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .impact-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px 30px;
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }

        .impact-card h3 {
          font-size: 20px;
          margin: 0 0 5px;
          font-weight: 500;
          color: #000000;
        }

        .impact-card p {
          font-size: 28px;
          margin: 0;
          font-weight: 700;
          color: #000000;
        }

        .impact-card img {
          width: 110px;
        }

        .pink { background: #ffe5e9; }
        .blue { background: #dceeff; }
        .green { background: #e3ffe9; }
        .peach { background: #ffe8d6; }

        @media (max-width: 768px) {
          .impact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="impact-section">
        <h1 className="impact-title">
          Impact at a <span>Glance</span>
        </h1>

        <div className="impact-grid">

          <div className="impact-card pink">
            <div className="text">
              <h3>Colleges</h3>
              <p>100+</p>
            </div>
            <img src="https://www.aptitudeguruhem.com/static/media/school.534dd7db3daaf4c66eff.png" alt="College" />
          </div>

          <div className="impact-card blue">
            <div className="text">
              <h3>Students</h3>
              <p>1,00,000</p>
            </div>
            <img src="https://www.aptitudeguruhem.com/static/media/people.0b6f76ebbf0b209884e7.png" alt="Students" />
          </div>

          <div className="impact-card green">
            <div className="text">
              <h3>Study Materials</h3>
              <p>1000+</p>
            </div>
            <img src="https://www.aptitudeguruhem.com/static/media/books.d290f0589bd8ed867b77.png" alt="Books" />
          </div>

          <div className="impact-card peach">
            <div className="text">
              <h3>Professional Trainers</h3>
              <p>150</p>
            </div>
            <img src="https://www.aptitudeguruhem.com/static/media/bag.52185bac9246c85ed48f.png" alt="Trainers" />
          </div>

        </div>
      </section>
    </>
  );
};

export default ImpactSection;