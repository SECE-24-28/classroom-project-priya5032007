import styled from "styled-components";

export const OurPromisesStyle = styled.div`
  .promises-container {
    padding: 60px 20px;
    background-color: #ffffff;
  }

  .promises-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    color: #333;
    margin-bottom: 50px;
  }

  .promises-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .promise-card {
    background: #f8f9fa;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }

  .promise-card:hover {
    transform: translateY(-5px);
  }

  .promise-icon {
    font-size: 3rem;
    color: #667eea;
    margin-bottom: 20px;
  }

  .promise-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 15px;
  }

  .promise-description {
    color: #666;
    line-height: 1.6;
  }
`;