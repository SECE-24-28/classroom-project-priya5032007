import styled from "styled-components";

export const SymbolOfExcellenceStyle = styled.div`
  .symbol-container {
    padding: 60px 20px;
    text-align: center;
    background-color: #ffffff;
  }

  .main-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 40px;
    line-height: 1.6;
  }

  .vision-mission-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  .vision, .mission {
    padding: 30px;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

  .vision h2, .mission h2 {
    color: #333;
    margin-bottom: 15px;
  }

  .highlight-banner {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px;
    border-radius: 10px;
    margin: 40px 0;
  }

  .course-title {
    font-size: 2rem;
    color: #333;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    .vision-mission-container {
      grid-template-columns: 1fr;
    }
  }
`;