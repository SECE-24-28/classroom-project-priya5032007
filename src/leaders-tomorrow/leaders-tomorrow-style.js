import styled from "styled-components";

export const LeadersTomorrowStyle = styled.div`
  .leaders-container {
    padding: 60px 20px;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }

  .leaders-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .leaders-subtitle {
    font-size: 1.2rem;
    margin-bottom: 40px;
    opacity: 0.9;
  }

  .cta-button {
    background: white;
    color: #667eea;
    padding: 15px 30px;
    border: none;
    border-radius: 25px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;