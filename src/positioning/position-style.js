import styled from "styled-components";

export const PositionStyle = styled.div`
  .position-container {
    padding: 60px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
  }

  .position-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .position-subtitle {
    font-size: 1.2rem;
    margin-bottom: 40px;
    opacity: 0.9;
  }

  .contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 800px;
    margin: 0 auto;
  }

  .contact-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
  }

  .contact-icon {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .contact-text {
    font-size: 1.1rem;
  }
`;